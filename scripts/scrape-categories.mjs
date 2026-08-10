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

// ---------- data loading ----------
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
      q: "kaiser permanente phlebotomist",
      re: /kaiser/i,
      titleRe: /phleb|donor|blood|venipuncture|specimen|laboratory assistant|lab assistant|lab technician/i,
    };
  if (s.includes("quest")) return { q: "quest diagnostics phlebotomist", re: /quest/i };
  return null;
}

function profileFor(p) {
  const k = p.keyword.toLowerCase();
  if (p.cluster === "Geo: State-Level") return { q: "phlebotomist", l: p.subcluster, fallback: p.subcluster };
  if (p.cluster === "Geo: City-Level") {
    const loc = CITYLOCS[p.subcluster];
    const l = loc ? `${loc.city}, ${loc.abbr}` : p.subcluster;
    return { q: "phlebotomist", l, fallback: loc ? loc.city : p.subcluster };
  }
  const emp = employerFor(p);
  if (emp) {
    const profile = { q: emp.q, l: "United States", filter: emp.re };
    if (emp.titleRe) profile.titleRe = emp.titleRe;
    return profile;
  }
  if (p.cluster === "Employment Type") {
    const k = p.keyword.toLowerCase();
    const typeRe =
      /per diem|\bprn\b/.test(k) ? /per diem|\bprn\b/i :
      /part[\s-]?time/.test(k) ? /part[\s-]?time/i :
      /weekend/.test(k) ? /weekend/i :
      /\bcontract\b/.test(k) ? /\bcontract\b|\btemporary\b/i :
      /travel|traveling|travelling/.test(k) ? /travel|\bper diem\b/i :
      /entry[\s-]?level|no experience|trainee|training/.test(k) ? /entry[\s-]?level|no experience|trainee|training|junior|apprentice/i :
      /certified/.test(k) ? /certified|technician|phlebotomy tech/i :
      /hospital/.test(k) ? /hospital|clinic|medical center|health system/i :
      /overnight/.test(k) ? /overnight|night/i :
      /agency/.test(k) ? /agency|staffing|temporary service/i :
      /obgyn/.test(k) ? /obgyn|women['\u2019s]?s?/i :
      /mobile/.test(k) ? /mobile/i :
      /like/.test(k) ? null :
      null;
    const generic = p.subcluster === "Career / Salary Info" || /near me|no experience|new|hiring/.test(k);
    return {
      q: p.keyword,
      l: "United States",
      typeRe,
      retry: typeRe ? "phlebotomist" : generic ? "phlebotomist" : null,
    };
  }
  if (p.cluster === "Local Intent (Near Me)") return { q: "phlebotomist", l: "United States" };
  if (p.cluster === "Core / Head Term") {
    const st = k.match(/\b(AL|AK|AZ|AR|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b/i);
    if (st) {
      const city = k
        .replace(/^phlebotomist jobs?\s*(in|for|at)?\s*/i, "")
        .replace(/\s+[a-z]{2}$/i, "")
        .trim();
      return { q: "phlebotomist", l: city ? `${city}, ${st[1]}` : st[1], fallback: st[1] };
    }
    return { q: p.keyword, l: "United States" };
  }
  return { q: p.keyword, l: "United States" };
}

// ---------- args ----------
const args = process.argv.slice(2);
const argVal = (name, def) => {
  const a = args.find((x) => x.startsWith(`--${name}=`));
  return a ? a.split("=").slice(1).join("=") : def;
};
const clustersArg = argVal("clusters", "all");
const slugsArg = argVal("slugs", "");
const maxJobs = parseInt(argVal("max", "10"), 10);
const dry = args.includes("--dry");
const refresh = args.includes("--refresh");
const limitArg = parseInt(argVal("limit", "0"), 10);
const delayArg = parseInt(argVal("delay", "1500"), 10);

const wantClusters = clustersArg === "all" ? null : clustersArg.split("|");
const wantSlugs = slugsArg ? slugsArg.split(",") : null;

let targets = refresh ? INVENTORY : INVENTORY.filter((p) => !bySlug[p.slug]);
if (wantClusters) targets = targets.filter((p) => wantClusters.includes(p.cluster));
if (wantSlugs) targets = targets.filter((p) => wantSlugs.includes(p.slug));
targets.sort((a, b) => b.volume - a.volume);
if (limitArg > 0) targets = targets.slice(0, limitArg);

// ---------- helpers ----------
function clean(text) {
  return (text || "")
    .replace(/\u2014|\u2013/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u00A0\u2000-\u200A]/g, " ")
    .replace(/[\u2600-\u27BF\uFE0F\u{1F000}-\u{1FAFF}]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}
function slugify(s) {
  return clean(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}
function shortId(url) {
  const m = url.match(/jk=([a-f0-9]+)/i);
  if (m) return m[1].slice(0, 12);
  const li = url.match(/\/(?:view)\/(?:[^\/]+-)?(\d+)(?:\?|$)/);
  if (li) return li[1].slice(0, 12);
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

async function open(page, url, waitMs = 4000) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(waitMs);
}

async function parseRows(page) {
  const cards = await page
    .locator(".resultContent")
    .evaluateAll((els) => {
      const badge = ["New", "Sponsored", "Promoted", "Featured", "Hybrid", "Remote", "Work From Home", "Urgently hiring", "Top Company"];
      const isLoc = (line) =>
        /\b(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b/.test(line) ||
        /remote|work from home/i.test(line) ||
        /,\s*[A-Z]{2}\b/.test(line) ||
        /\d{5}/.test(line);
      const benefit = /license|insurance|schedule|dental|vision|401|paid|bonus|sign|relocation|shift|medical|benefits|overtime/i;
      return els.map((el) => {
        const text = (sel) => el.querySelector(sel)?.textContent?.replace(/\s+/g, " ").trim() ?? "";
        const a = el.querySelector("a[data-jk]");
        const jk = a?.getAttribute("data-jk") ?? "";
        const title = text("h3.jobTitle, h2.jobTitle");
        let company = text('[data-testid="company-name"], .companyName');
        let location = text('[data-testid="text-location"], .companyLocation');
        const pay = text('[data-testid="attribute_snippet_testid"], [class*="salary"], .salary-snippet');
        const posted = text('[data-testid="job-date"], .date');
        if (!company || !location) {
          const lines = (el.innerText || "")
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
          let i = 0;
          while (i < lines.length) {
            const l = lines[i];
            if (l === title || badge.includes(l) || /^often replies in/i.test(l)) i++;
            else break;
          }
          if (!company && lines[i] && !isLoc(lines[i]) && !benefit.test(lines[i])) company = lines[i];
          for (const l of lines) {
            if (l === company || l === title || badge.includes(l)) continue;
            if (isLoc(l)) {
              location = l;
              break;
            }
          }
        }
        return { title, company, location, pay, posted, jk, href: a ? a.getAttribute("href") : null };
      });
    })
    .catch(() => []);
  if (cards.length > 0) return cards;
  return page
    .locator("a[data-jk]")
    .evaluateAll((anchors) => {
      const badge = ["New", "Sponsored", "Promoted", "Featured", "Hybrid", "Remote", "Work From Home", "Urgently hiring", "Top Company"];
      const isLoc = (line) =>
        /\b(AK|AL|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)\b/.test(line) ||
        /remote|work from home/i.test(line) ||
        /,\s*[A-Z]{2}\b/.test(line) ||
        /\d{5}/.test(line);
      const benefit = /license|insurance|schedule|dental|vision|401|paid|bonus|sign|relocation|shift|medical|benefits|overtime/i;
      const parse = (el) => {
        const text = (sel) => el.querySelector(sel)?.textContent?.replace(/\s+/g, " ").trim() ?? "";
        const a = el.querySelector("a[data-jk]");
        const jk = a?.getAttribute("data-jk") ?? "";
        const title = text("h3.jobTitle, h2.jobTitle");
        let company = text('[data-testid="company-name"], .companyName');
        let location = text('[data-testid="text-location"], .companyLocation');
        const pay = text('[data-testid="attribute_snippet_testid"], [class*="salary"], .salary-snippet');
        const posted = text('[data-testid="job-date"], .date');
        if (!company || !location) {
          const lines = (el.innerText || "")
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
          let i = 0;
          while (i < lines.length) {
            const l = lines[i];
            if (l === title || badge.includes(l) || /^often replies in/i.test(l)) i++;
            else break;
          }
          if (!company && lines[i] && !isLoc(lines[i]) && !benefit.test(lines[i])) company = lines[i];
          for (const l of lines) {
            if (l === company || l === title || badge.includes(l)) continue;
            if (isLoc(l)) {
              location = l;
              break;
            }
          }
        }
        return { title, company, location, pay, posted, jk, href: a ? a.getAttribute("href") : null };
      };
      return anchors
        .map((a) => {
          const card =
            a.closest(".resultContent, .tapItem, .job_seen_beacon, .slider_container") ??
            a.closest("[data-jk]") ??
            a.parentElement;
          return parse(card ?? a);
        })
        .filter((r) => r.title);
    })
    .catch(() => []);
}

async function scrapeCategory(page, profile, max) {
  const out = [];
  const seen = new Set();
  const attempts = [{ q: profile.q, l: profile.l, useTypeRe: false }];
  if (profile.retry) attempts.push({ q: profile.retry, l: profile.l, useTypeRe: true });
  for (const attempt of attempts) {
    if (out.length >= max) break;
    const starts = [0, 10, 20];
    for (const start of starts) {
      if (out.length >= max) break;
      const url = `https://www.indeed.com/jobs?q=${encodeURIComponent(attempt.q)}&l=${encodeURIComponent(attempt.l)}&start=${start}`;
      await open(page, url);
      await page.waitForTimeout(4500);
      let rows = await parseRows(page);
      if (rows.length === 0) {
        await page.waitForTimeout(4000);
        rows = await parseRows(page);
      }
      if (rows.length === 0) {
        console.error("  ! no result cards (blocked or zero)");
        break;
      }
      for (const r of rows) {
        if (out.length >= max) break;
        if (!r.title || (!r.jk && !r.href)) continue;
        const relevant = profile.titleRe ? profile.titleRe.test(r.title) : isRelevant(r.title);
        if (!relevant) continue;
        if (attempt.useTypeRe && profile.typeRe && !profile.typeRe.test(`${r.title} ${r.pay}`)) continue;
        if (profile.filter && !profile.filter.test(r.company || "")) continue;
        const key = `${r.title}|${r.company}|${r.location}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const finalUrl = r.jk
          ? `https://www.indeed.com/viewjob?jk=${r.jk}`
          : new URL(r.href, "https://www.indeed.com").href;
        const job = {
          title: r.title,
          employer: r.company || "",
          location: r.location || "",
          type: detectType(`${r.title} ${r.pay}`),
          pay: r.pay || "",
          posted: r.posted || "",
          source: "Indeed",
          url: finalUrl,
        };
        job.slug = buildSlug(job);
        out.push(job);
      }
    }
  }
  return out;
}

function fallbackFromExisting(_slug, profile, max) {
  const out = [];
  const seen = new Set();
  for (const list of Object.values(bySlug)) {
    for (const j of list) {
      const hay = `${j.location || ""} ${j.employer || ""}`;
      const hit =
        (profile.fallback && hay.toLowerCase().includes(profile.fallback.toLowerCase())) ||
        (profile.filter && profile.filter.test(j.employer || "")) ||
        (profile.typeRe && profile.typeRe.test(`${j.title} ${j.type} ${j.location} ${j.pay}`));
      if (!hit) continue;
      const key = `${j.title}|${j.employer}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({ ...j });
      if (out.length >= max) return out;
    }
  }
  return out;
}

console.log(`targets: ${targets.length} (max jobs/category: ${maxJobs})`);
if (dry) {
  for (const t of targets.slice(0, 60)) {
    const p = profileFor(t);
    console.log(`  ${t.slug} -> q="${p.q}" l="${p.l}"${p.filter ? " filter=" + p.filter : ""}${p.fallback ? " fb=" + p.fallback : ""}`);
  }
  process.exit(0);
}

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
  process.stdout.write(`[${i + 1}/${targets.length}] ${t.slug} (q="${profile.q}" l="${profile.l}") ... `);
  let rows;
  try {
    rows = await scrapeCategory(page, profile, maxJobs);
  } catch (e) {
    console.log(`error: ${e.message} -- relaunching browser and retrying`);
    try {
      await browser.close().catch(() => {});
      ({ browser, context, page } = await launch());
      rows = await scrapeCategory(page, profile, maxJobs);
    } catch (e2) {
      console.log(`retry failed: ${e2.message}`);
      summary.failed++;
      continue;
    }
  }
  if (rows.length === 0) {
    rows = fallbackFromExisting(t.slug, profile, maxJobs);
    if (rows.length) console.log(`fallback: ${rows.length} existing`);
  }
  if (rows.length === 0) {
    console.log("zero");
    summary.zero++;
    continue;
  }
  const existing = bySlug[t.slug] || [];
  let merged;
  if (refresh) {
    const freshKeys = new Set(rows.map((j) => `${j.title}|${j.employer}|${j.url}`));
    merged = [...rows];
    const seenKey = new Set(merged.map((j) => `${j.title}|${j.employer}|${j.url}`));
    for (const e of existing) {
      const key = `${e.title}|${e.employer}|${e.url}`;
      if (e.source === "Indeed" && !freshKeys.has(key)) continue;
      if (seenKey.has(key)) continue;
      seenKey.add(key);
      merged.push(e);
    }
  } else {
    merged = [...existing];
    const seenKey = new Set(existing.map((j) => `${j.title}|${j.employer}|${j.url}`));
    for (const j of rows) {
      const key = `${j.title}|${j.employer}|${j.url}`;
      if (seenKey.has(key)) continue;
      seenKey.add(key);
      merged.push(j);
    }
  }
  bySlug[t.slug] = merged;
  jobs.updatedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2) + "\n");
  summary.filled++;
  console.log(`${rows.length} jobs (total ${merged.length})`);
  await page.waitForTimeout(delayArg);
}

await browser.close();
console.log(`DONE filled=${summary.filled} zero=${summary.zero} failed=${summary.failed}`);
console.log(`total slugs with jobs: ${Object.keys(bySlug).length}`);
