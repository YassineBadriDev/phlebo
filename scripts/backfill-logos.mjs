import { chromium } from "playwright-core";
import { readFileSync, writeFileSync, existsSync } from "node:fs";

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

const args = process.argv.slice(2);
const argVal = (name, def) => {
  const a = args.find((x) => x.startsWith(`--${name}=`));
  return a ? a.split("=").slice(1).join("=") : def;
};
const PARALLEL = Math.max(1, Math.min(parseInt(argVal("par", "4"), 10), 8));
const retryEmpties = args.includes("--retry-empties");
const limit = parseInt(argVal("limit", "0"), 10);

const JOBS_FILE = "src/data/jobs.json";
const DONE_FILE = "scripts/.logo-done.json";
const jobs = JSON.parse(readFileSync(JOBS_FILE, "utf8"));
const done = new Set(existsSync(DONE_FILE) ? JSON.parse(readFileSync(DONE_FILE, "utf8")) : []);
if (args.includes("--reset")) done.clear();

const rows = Object.values(jobs.bySlug).flat();
const byKey = new Map();
for (const j of rows) {
  const k = `${j.title}|${j.employer}|${j.url}`;
  if (!byKey.has(k)) byKey.set(k, j);
}

const empLogo = new Map();
for (const j of rows) if (j.logo) {
  const e = (j.employer || "").trim().toLowerCase();
  if (e && !empLogo.has(e)) empLogo.set(e, j.logo);
}

let propagated = 0;
for (const j of rows) {
  if (j.logo) continue;
  const e = (j.employer || "").trim().toLowerCase();
  const src = empLogo.get(e);
  if (src) {
    j.logo = src;
    propagated++;
  }
}
if (propagated) writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2) + "\n");
console.log(`propagated ${propagated} logos from employer pool`);

function clean(s) {
  return (s || "").replace(/[\u00A0\u2000-\u200A]/g, " ").replace(/\s+/g, " ").trim();
}

async function waitNotBlocked(page, timeoutMs = 90000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const t = await page.title().catch(() => "");
    if (!/just a moment|additional verification/i.test(t)) return true;
    await page.waitForTimeout(4000);
  }
  return false;
}

async function extractLogo(page) {
  const logo = await page
    .evaluate(() => {
      const imgs = [...document.querySelectorAll("img, div[data-delayed-url], div[data-src]")]
        .map((i) => i.getAttribute("src") || i.src || i.getAttribute("data-delayed-url") || i.getAttribute("data-src") || "")
        .filter((s) => s.startsWith("http"));
      const square = imgs.find((s) => /_squarelogo/.test(s));
      if (square) return square;
      const cloudfront = imgs.find((s) => /d2q79iu7y748jz\.cloudfront\.net/.test(s));
      if (cloudfront) return cloudfront;
      const li = imgs.find((s) => /company-logo/.test(s));
      if (li) return li;
      const fav = document.querySelector(
        '[data-testid="company-logo"] img, .jobsearch-CompanyAvatarImage, img[data-lit-sprite*="company_logo"]'
      );
      const src = fav?.getAttribute("src") || fav?.src || "";
      return src.startsWith("http") ? src : "";
    })
    .catch(() => "");
  return logo;
}

async function fetchLogo(page, url) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(5500);
  let logo = await extractLogo(page);
  if (!logo && stealthReady) {
    const cleared = await waitNotBlocked(page);
    if (cleared) {
      await page.waitForTimeout(3000);
      logo = await extractLogo(page);
    }
  }
  if (!logo) await page.waitForTimeout(3000);
  return logo;
}

const keys = [...byKey.keys()].filter((k) => !byKey.get(k).logo);
const pending = retryEmpties ? keys.filter((k) => done.has(k)) : keys.filter((k) => !done.has(k));
const list = pending
  .map((k) => ({ key: k, job: byKey.get(k) }))
  .filter((t) => retryEmpties || true)
  .filter((t) => {
    const e = (t.job.employer || "").trim().toLowerCase();
    return !empLogo.has(e);
  });
const targets = limit > 0 ? list.slice(0, limit) : list;
console.log(`jobs missing logo: ${keys.length}, pending (not done): ${pending.length}, employer-mapped: ${keys.length - pending.length + (list.length)} ... targets: ${targets.length}`);
console.log(`employer pool size: ${empLogo.size}; those covered by pool will be filled without visiting.`);

async function run() {
  const browser = await chrome.launch({ headless: process.env.HEADLESS ? true : !stealthReady });
  const context = await browser.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, locale: "en-US" });
  const pages = [];
  for (let i = 0; i < PARALLEL; i++) pages.push(await context.newPage());

  let idx = 0;
  let saved = 0;
  const save = () => {
    writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2) + "\n");
    writeFileSync(DONE_FILE, JSON.stringify([...done]));
    saved++;
  };
  save();

  async function worker(pi) {
    while (idx < targets.length) {
      const t = targets[idx++];
      const { key, job } = t;
      let logo = "";
      try {
        logo = await fetchLogo(pages[pi], job.url);
      } catch (e) {
        logo = "";
      }
      if (logo) {
        for (const j of rows) {
          const k = `${j.title}|${j.employer}|${j.url}`;
          if (k === key) j.logo = logo;
        }
        const e = (job.employer || "").trim().toLowerCase();
        if (e && !empLogo.has(e)) empLogo.set(e, logo);
        console.log(`  [${idx}/${targets.length}] logo ${job.source || "?"} ${(job.title || "").slice(0, 40)} ... y`);
      } else {
        console.log(`  [${idx}/${targets.length}] logo ${job.source || "?"} ${(job.title || "").slice(0, 40)} ... none`);
      }
      done.add(key);
      if (idx % 15 === 0) save();
      await pages[pi].waitForTimeout(800);
    }
  }

  await Promise.all(pages.map((_, i) => worker(i)));
  save();
  await browser.close();
  const nowWith = Object.values(jobs.bySlug).flat().filter((j) => j.logo).length;
  console.log(`DONE saved=${saved} jobs now with logo: ${nowWith}`);
}
await run();
