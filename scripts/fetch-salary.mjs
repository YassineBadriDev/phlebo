import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const areasPath = path.join(projectRoot, "src", "data", "areas.json");
const outPath = path.join(projectRoot, "src", "data", "salary.ts");

const API = "https://api.bls.gov/publicAPI/v2/timeseries/data/";
const OCC = "319097";
const DATATYPES = {
  employment: "01",
  hourlyMedian: "08",
  annualMedian: "13",
};
const BATCH = 25;
const RETRIES = 3;

const areas = JSON.parse(fs.readFileSync(areasPath, "utf8"));

function buildSeriesId(areaType, areaCode, datatype) {
  return `OEU${areaType}${areaCode}000000${OCC}${datatype}`;
}

function buildAreaList() {
  const list = [];
  list.push({ key: "us", title: "United States", type: "N", areaCode: "0000000" });
  for (const [name, fips] of Object.entries(areas.stateFips)) {
    list.push({ key: `st:${name}`, title: name, type: "S", areaCode: `${fips}00000` });
  }
  const seen = new Set();
  for (const code of Object.values(areas.cityCbsa)) {
    if (seen.has(code)) continue;
    seen.add(code);
    list.push({
      key: `cbsa:${code}`,
      title: areas.cbsaTitles[code] ?? code,
      type: "M",
      areaCode: code.padStart(7, "0"),
    });
  }
  return list;
}

async function post(seriesIds) {
  const body = JSON.stringify({
    seriesid: seriesIds,
    startyear: "2023",
    endyear: "2026",
  });
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.status !== "REQUEST_SUCCEEDED") {
        const msg = Array.isArray(json.message) ? json.message.join("; ") : String(json.message ?? "unknown");
        throw new Error(`BLS API: ${msg}`);
      }
      return json;
    } catch (err) {
      if (attempt === RETRIES) throw err;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

function latestValue(data) {
  let year = 0;
  let value = null;
  for (const row of data) {
    const y = Number(row.year);
    const v = row.value === "" || row.value == null ? null : Number(row.value);
    if (y > year && v != null && !Number.isNaN(v)) {
      year = y;
      value = v;
    }
  }
  return { value, year };
}

async function main() {
  const areaList = buildAreaList();
  const seriesMap = new Map();
  for (const area of areaList) {
    for (const [field, code] of Object.entries(DATATYPES)) {
      seriesMap.set(buildSeriesId(area.type, area.areaCode, code), { area, field });
    }
  }
  const allIds = [...seriesMap.keys()];
  const results = new Map();

  try {
    for (let i = 0; i < allIds.length; i += BATCH) {
      const batch = allIds.slice(i, i + BATCH);
      const json = await post(batch);
      for (const series of json.Results.series) {
        const { value, year } = latestValue(series.data);
        const meta = seriesMap.get(series.seriesID);
        if (meta && value != null) results.set(`${meta.area.key}:${meta.field}`, { value, year });
      }
    }
  } catch (err) {
    const existing = fs.existsSync(outPath);
    if (existing) {
      console.warn(`[fetch-salary] BLS API unavailable (${err.message}); keeping existing salary.ts`);
      process.exit(0);
    }
    console.error(`[fetch-salary] BLS API unavailable (${err.message}) and no existing salary.ts`);
    process.exit(1);
  }

  const usAnnual = results.get("us:annualMedian");
  if (!usAnnual || usAnnual.value == null || usAnnual.value < 20000 || usAnnual.value > 100000) {
    console.error("[fetch-salary] national annual median missing or out of range; aborting without overwrite");
    process.exit(1);
  }

  const salaryYear = usAnnual.year;

  const records = {};
  for (const area of areaList) {
    const annual = results.get(`${area.key}:annualMedian`);
    const hourly = results.get(`${area.key}:hourlyMedian`);
    const employment = results.get(`${area.key}:employment`);
    if (!annual && !hourly && !employment) continue;
    records[area.key] = {
      employment: employment ? employment.value : null,
      hourlyMedian: hourly ? hourly.value : null,
      annualMedian: annual ? annual.value : null,
    };
  }

  const lines = [];
  lines.push("export interface SalaryRecord {");
  lines.push("  employment: number | null;");
  lines.push("  hourlyMedian: number | null;");
  lines.push("  annualMedian: number | null;");
  lines.push("}");
  lines.push("");
  lines.push("export const salaryYear = " + salaryYear + ";");
  lines.push("");
  lines.push("export const salaryRecords: Record<string, SalaryRecord> = {");
  const keys = Object.keys(records).sort();
  for (const key of keys) {
    const r = records[key];
    lines.push(`  "${key}": { employment: ${r.employment ?? "null"}, hourlyMedian: ${r.hourly ?? "null"}, annualMedian: ${r.annual ?? "null"} },`);
  }
  lines.push("};");
  lines.push("");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`[fetch-salary] wrote ${outPath}: ${keys.length} areas (year 2025)`);
}

main().catch((err) => {
  console.error(`[fetch-salary] fatal: ${err.message}`);
  process.exit(1);
});
