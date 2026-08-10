import { chromium } from "playwright-core";
import { readFileSync, writeFileSync } from "node:fs";

let chrome = chromium;
let stealthReady = false;
try {
  const pkg = await import("playwright-extra");
  const stealth = (await import("puppeteer-extra-plugin-stealth")).default;
  chrome = pkg.chromium;
  chrome.use(stealth());
  stealthReady = true;
} catch {
  chrome = chromium;
}

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

const INVENTORY = JSON.parse(readFileSync("scripts/_inventory.json", "utf8"));
const JOBS_FILE = "src/data/jobs.json";
const jobs = JSON.parse(readFileSync(JOBS_FILE, "utf8"));
const bySlug = jobs.bySlug || {};

const locTs = readFileSync("src/data/locations.ts", "utf8");
const CITYLOCS = {};
{
  const re = /^\s*(.+?): c\("([^"]+)", "([^"]+)", "([^"]+)"/gm;
  let m;
  while ((m = re.exec(locTs))) CITYLOCS[m[1]] = { city: m[2], state: m[3], abbr: m[4] };
}

function employerFor(p) {
  const s = p.slug;
  if (s.includes("labcorp")) return { q: "labcorp", re: /labcorp/i };
  if (s.includes("american-red-cross")) return { q: "american red cross", re: /red cross/i };
  if (s.includes("kaiser"))
    return {
      q: "kaiser permanente",
      re: /kaiser/i,
      titleRe: /phleb|donor|blood|venipuncture|specimen|laboratory assistant|lab assistant|lab technician/i,
    };
  if (s.includes("quest")) return { q: "quest diagnostics", re: /quest/i };
  return null;
}

function profileFor(p) {
  const k = p.keyword.toLowerCase();
  if (p.cluster === "Geo: State-Level") return { q: "phlebotomist", l: p.subcluster };
  if (p.cluster === "Geo: City-Level") {
    const loc = CITYLOCS[p.subcluster];
    const l = loc ? `${loc.city}, ${loc.abbr}` : p.subcluster;
    return { q: "phlebotomist", l };
  }
  const emp = employerFor(p);
  if (emp) return { q: emp.q, l: "United States", filter: emp.re, titleRe: emp.titleRe };
  if (p.cluster === "Employment Type") return { q: p.keyword, l: "United States" };
  if (p.cluster === "Local Intent (Near Me)") return { q: "phlebotomist", l: "United States" };
  if (p.cluster === "Core / Head Term") {
    const st = k.match(/\b(AL|AK|AZ|AR|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b/i);
    if (st) {
      const city = k.replace(/^phlebotomist jobs?\s*(in|for|at)?\s*/i, "").replace(/\s+[a-z]{2}$/i, "").trim();
      return { q: "phlebotomist", l: city ? `${city}, ${st[1]}` : st[1] };
    }
    return { q: p.keyword, l: "United States" };
  }
  return { q: p.keyword, l: "United States" };
}

const args = process.argv.slice(2);
const argVal = (name, def) => {
  const a = args.find((x) => x.startsWith(`--${name}=`));
  return a ? a.split("=").slice(1).join("=") : def;
};
const clustersArg = argVal("clusters", "all");
const slugsArg = argVal("slugs", "");
const maxJobs = parseInt(argVal("max", "6"), 10);
const limitArg = parseInt(argVal("limit", "0"), 10);
const delayArg = parseInt(argVal("delay", "1200"), 10);
const refresh = args.includes("--refresh");
const wantClusters = clustersArg === "all" ? null : clustersArg.split("|");
const wantSlugs = slugsArg ? slugsArg.split(",") : null;

let targets = refresh ? INVENTORY : INVENTORY.filter((p) => !(bySlug[p.slug] || []).some((j) => j.source === "LinkedIn"));
if (wantClusters) targets = targets.filter((p) => wantClusters.includes(p.cluster));
if (wantSlugs) targets = targets.filter((p) => wantSlugs.includes(p.slug));
targets.sort((a, b) => b.volume - a.volume);
if (limitArg > 0) targets = targets.slice(0, limitArg);

function clean(text) {
  return (text || "")
    .replace(/[\u00A0\u2000-\u200A]/g, " ")
    .replace(/[\u2600-\u27BF\uFE0F\u{1F000}-\u{1FAFF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}
function slugify(s) {
  return clean(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
}
function shortId(url) {
  const m = url.match(/\/jobs\/view\/(?:[^\/]+-)?(\d+)/);
  if (m) return m[1].slice(0, 12);
  const i = url.match(/jk=([a-f0-9]+)/i);
  if (i) return i[1].slice(0, 12);
  let h = 0;
  for (const c of url) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h).toString(36).slice(0, 10);
}
function buildSlug(job) {
  return `${slugify(job.employer) || "job"}-${slugify(job.title) || "listing"}-${shortId(job.url)}`;
}
function isRelevant(title) {
  return /phleb|donor|blood|venipuncture|specimen/i.test(title || "");
}
function detectType(text) {
  const t = clean(text).toLowerCase();
  if (/per diem|\bprn\b/.test(t)) return "PRN / Per Diem";
  if (/part[\s-]?time/.test(t)) return "Part-Time";
  if (/full[\s-]?time/.test(t)) return "Full-Time";
  if (/\bcontract\b|\btemporary\b/.test(t)) return "Contract";
  return "";
}

async function open(page, url, waitMs = 5000) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(waitMs);
}

async function parseLinkedIn(page) {
  await page.waitForSelector("div.job-search-card, li.job-card-container, #authwall", { timeout: 10000 }).catch(() => {});
  const url = page.url();
  const authwall = await page.locator("#authwall").count().catch(() => 0);
  if (authwall > 0 || /authwall|signup|sign-in/i.test(url) && url.includes("/jobs/") === false) return { blocked: true, rows: [] };
  const rows = await page
    .locator("div.job-search-card")
    .evaluateAll((els) =>
      els.map((el) => {
        const text = (sel) => el.querySelector(sel)?.textContent?.replace(/\s+/g, " ").trim() ?? "";
        const href = el.querySelector('a[href*="/jobs/view/"]')?.getAttribute("href") ?? "";
        return {
          title: text("h3.base-search-card__title, h3"),
          company: text("h4.base-search-card__subtitle, h4"),
          location: text(".job-search-card__location, [class*='location']"),
          posted: text("time"),
          href,
        };
      })
    )
    .catch(() => []);
  return { blocked: false, rows };
}

async function scrapeLinkedIn(page, profile, max) {
  const out = [];
  const seen = new Set();
  for (const start of [0]) {
    if (out.length >= max) break;
    const url = `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(profile.q)}&location=${encodeURIComponent(profile.l)}&start=${start}`;
    await open(page, url);
    const { blocked, rows } = await parseLinkedIn(page);
    if (blocked) {
      console.error("  ! linkedin authwall/blocked");
      break;
    }
    let res = rows;
    if (res.length === 0) {
      await page.waitForTimeout(4000);
      const r2 = await parseLinkedIn(page);
      if (r2.blocked || r2.rows.length === 0) {
        console.error("  ! linkedin no rows");
        break;
      }
      res = r2.rows;
    }
    for (const r of res) {
      if (out.length >= max) break;
      if (!r.title || !r.href) continue;
      const relevant = profile.titleRe ? profile.titleRe.test(r.title) : isRelevant(r.title);
      if (!relevant) continue;
      if (profile.filter && !profile.filter.test(r.company || "")) continue;
      const key = `${r.title}|${r.company}|${r.location}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const finalUrl = r.href.startsWith("http") ? r.href.split("?")[0] : `https://www.linkedin.com${r.href.split("?")[0]}`;
      const job = {
        title: r.title,
        employer: r.company || "",
        location: r.location || "",
        type: detectType(r.title),
        pay: "",
        posted: r.posted || "",
        source: "LinkedIn",
        url: finalUrl,
      };
      job.slug = buildSlug(job);
      out.push(job);
    }
  }
  return out;
}

console.log(`targets: ${targets.length} (max jobs/category: ${maxJobs})`);

async function launch() {
  const b = await chrome.launch({ headless: !stealthReady });
  const c = await b.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, locale: "en-US" });
  const p = await c.newPage();
  return { browser: b, context: c, page: p };
}

let { browser, context, page } = await launch();
const summary = { filled: 0, zero: 0, failed: 0 };
for (let i = 0; i < targets.length; i++) {
  const t = targets[i];
  const profile = profileFor(t);
  process.stdout.write(`[${i + 1}/${targets.length}] ${t.slug} (li q="${profile.q}" l="${profile.l}") ... `);
  let rows;
  try {
    rows = await scrapeLinkedIn(page, profile, maxJobs);
  } catch (e) {
    console.log(`error: ${e.message} -- relaunching browser and retrying`);
    try {
      await browser.close().catch(() => {});
      ({ browser, context, page } = await launch());
      rows = await scrapeLinkedIn(page, profile, maxJobs);
    } catch (e2) {
      console.log(`retry failed: ${e2.message}`);
      summary.failed++;
      continue;
    }
  }
  if (rows.length === 0) {
    console.log("zero");
    summary.zero++;
    continue;
  }
  const existing = bySlug[t.slug] || [];
  let merged;
  let added;
  if (refresh) {
    const freshKeys = new Set(rows.map((j) => `${j.title}|${j.employer}|${j.url}`));
    merged = [...rows];
    const seenKey = new Set(merged.map((j) => `${j.title}|${j.employer}|${j.url}`));
    added = 0;
    for (const e of existing) {
      const key = `${e.title}|${e.employer}|${e.url}`;
      if (e.source === "LinkedIn" && !freshKeys.has(key)) continue;
      if (seenKey.has(key)) continue;
      seenKey.add(key);
      merged.push(e);
      added++;
    }
  } else {
    merged = [...existing];
    const seenKey = new Set(existing.map((j) => `${j.title}|${j.employer}|${j.url}`));
    added = 0;
    for (const j of rows) {
      const key = `${j.title}|${j.employer}|${j.url}`;
      const cross = `${j.title}|${j.employer}|${j.location}`;
      const dup = [...existing].some((x) => x.source === "LinkedIn" && `${x.title}|${x.employer}|${x.location}` === cross);
      if (seenKey.has(key) || dup) continue;
      seenKey.add(key);
      merged.push(j);
      added++;
    }
  }
  bySlug[t.slug] = merged;
  if (added === 0) {
    console.log("all dupes");
    summary.zero++;
    continue;
  }
  jobs.updatedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2) + "\n");
  summary.filled++;
  console.log(`+${added} linkedin (total ${merged.length})`);
  await page.waitForTimeout(delayArg);
}
await browser.close();
console.log(`DONE filled=${summary.filled} zero=${summary.zero} failed=${summary.failed}`);
