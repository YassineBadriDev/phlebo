import { chromium } from "playwright-core";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

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
const QUERY = "phlebotomist";
const LOCATION = "United States";
const TARGET_SLUG = "phlebotomist-jobs";

const argMax = process.argv.find((a) => a.startsWith("--max="))?.slice(6) ?? process.argv[2];
const MAX_JOBS = Math.max(2, Math.min(parseInt(argMax ?? "40", 10) || 40, 80));

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

function toParagraphs(text) {
  return (text || "")
    .split(/\n+/)
    .map((l) => clean(l))
    .filter((l) => l.length > 1)
    .slice(0, 48);
}

function htmlToParagraphs(html) {
  const text = (html || "")
    .replace(/<(br|\/p|\/li|\/h[1-6]|\/ul|\/ol|\/div|hr)[^>]*>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");
  return toParagraphs(text);
}

function detectPay(text) {
  const m = (text || "").match(/\$\s?[\d,]+(?:\s*[-]\s*\$\s?[\d,]+)?(?:\s*(?:\/|per)\s*(hour|hr|year|yr|month|week))/i);
  return m ? clean(m[0]) : "";
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

function fallbackDescription(job) {
  const paragraphs = [
    `${job.title} - ${job.employer}`,
    `We found this phlebotomist opening listed on Indeed${job.location ? ` in ${job.location}` : ""} and gathered the key details for you.`,
    `The posting is managed by ${job.employer}. To submit an application you will need to open the original listing on Indeed.`,
    "Phlebotomist roles typically involve collecting blood samples, confirming patient identity, labeling and transporting specimens, and keeping collection areas stocked and clean.",
    "Most employers ask for a high school diploma or equivalent plus a phlebotomy certification where required by state law. See the original listing for the exact requirements and application instructions for this opening.",
  ];
  return paragraphs;
}

async function open(page, url, waitMs = 4000) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(waitMs);
}

async function pageText(page) {
  try {
    return await page.locator("body").textContent({ timeout: 5000 }).catch(() => "");
  } catch {
    return "";
  }
}

async function isBlocked(page, body) {
  const title = await page.title().catch(() => "");
  return (
    /captcha|unusual traffic|robot|just a moment/i.test(title) ||
    body.includes("unusual traffic") ||
    body.includes("verify you are human") ||
    body.includes("Just a moment")
  );
}

async function scrapeIndeed(page, alreadyLoaded) {
  const jobs = [];
  const seen = new Set();
  const starts = [0, 10, 20, 30];
  const fetchRows = async () => {
    await page
      .waitForSelector('[data-jk], .resultContent, .tapItem, .slider_container, .job_seen_beacon', { timeout: 10000 })
      .catch(() => {});
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
  };
  for (let idx = 0; idx < starts.length && jobs.length < MAX_JOBS; idx++) {
    const start = starts[idx];
    const url = `https://www.indeed.com/jobs?q=${encodeURIComponent(QUERY)}&l=${encodeURIComponent(LOCATION)}&start=${start}`;
    console.error(`  indeed page start=${start}`);
    if (idx === 0 && alreadyLoaded) {
      await page.waitForTimeout(3000);
    } else {
      await open(page, url);
      await page.waitForTimeout(6000);
    }
    let rows = await fetchRows();
    console.error(`  indeed rows=${rows.length}`);
    if (rows.length === 0) {
      await page.waitForTimeout(5000);
      rows = await fetchRows();
      console.error(`  indeed refetch rows=${rows.length}`);
    }
    for (const row of rows) {
      if (jobs.length >= MAX_JOBS) break;
      if (!row.title || !isRelevant(row.title) || (!row.jk && !row.href)) continue;
      const finalUrl = row.jk
        ? `https://www.indeed.com/viewjob?jk=${row.jk}`
        : new URL(row.href, "https://www.indeed.com").href;
      const key = `${row.title}|${row.company}|${row.location}`;
      if (seen.has(key)) continue;
      seen.add(key);
      jobs.push({
        title: row.title,
        employer: row.company,
        location: row.location,
        type: detectType(`${row.title} ${row.pay}`),
        pay: row.pay,
        posted: row.posted,
        source: "Indeed",
        url: finalUrl,
      });
    }
  }
  return jobs;
}

async function scrapeLinkedIn(page, alreadyLoaded) {
  const jobs = [];
  const seen = new Set();
  const starts = [0, 25];
  for (let idx = 0; idx < starts.length && jobs.length < MAX_JOBS; idx++) {
    const start = starts[idx];
    console.error(`  linkedin page start=${start}`);
    if (idx === 0 && alreadyLoaded) {
      await page.waitForTimeout(2000);
    } else {
      await open(page, `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(QUERY)}&location=${encodeURIComponent(LOCATION)}&start=${start}`);
      await page.waitForTimeout(6000);
    }
    await page.waitForSelector("div.job-search-card", { timeout: 8000 }).catch(() => {});
    const rows = await page
      .locator("div.job-search-card")
      .evaluateAll((els) =>
        els.map((el) => {
          const text = (sel) => el.querySelector(sel)?.textContent?.replace(/\s+/g, " ").trim() ?? "";
          const href = el.querySelector('a[href*="/jobs/view/"]')?.getAttribute("href") ?? "";
          return {
            title: text("h3"),
            company: text("h4"),
            location: text('[class*="location"]'),
            posted: text("time"),
            href,
          };
        })
      )
      .catch(() => []);
    for (const row of rows) {
      if (jobs.length >= MAX_JOBS) break;
      if (!row.title || !isRelevant(row.title) || !row.href) continue;
      const url = row.href.startsWith("http") ? row.href : new URL(row.href, "https://www.linkedin.com").href;
      const key = `${row.title}|${row.company}|${row.location}`;
      if (seen.has(key)) continue;
      seen.add(key);
      jobs.push({
        title: row.title,
        employer: row.company,
        location: row.location,
        type: detectType(row.title),
        pay: "",
        posted: row.posted,
        source: "LinkedIn",
        url,
      });
    }
  }
  return jobs;
}

async function enrichLinkedIn(page, job) {
  const id = job.url.match(/\/(?:view)\/(?:[^\/]+-)?(\d+)(?:\?|$)/)?.[1];
  if (!id) return job;
  job.url = `https://www.linkedin.com/jobs/view/${id}`;
  await open(page, job.url, 5000);
  const descHtml = await page.locator(".show-more-less-html__markup").first().innerHTML().catch(() => "");
  const descText = clean((descHtml || "").replace(/<[^>]+>/g, " "));
  const subline = await page.locator(".top-card-layout__second-subline").first().innerText().catch(() => "");
  const posted = await page.locator("span[class*='posted-time-ago']").first().innerText().catch(() => "");
  const logo = await page.locator('img[src*="company-logo"]').first().getAttribute("src").catch(() => "");
  const blob = `${job.title} ${subline} ${descText}`;
  if (descHtml) job.description = htmlToParagraphs(descHtml);
  if (!job.pay) job.pay = detectPay(blob);
  if (!job.type) job.type = detectType(blob);
  if (posted && !job.posted) job.posted = clean(posted);
  if (logo) job.logo = logo;
  return job;
}

async function waitNotBlocked(page, timeoutMs = 150000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const t = await page.title().catch(() => "");
    if (!/just a moment|additional verification/i.test(t)) return true;
    await page.waitForTimeout(4000);
  }
  return false;
}

async function enrichIndeed(page, job) {
  await open(page, job.url, 5000);
  if (stealthReady) {
    const cleared = await waitNotBlocked(page);
    if (!cleared) {
      job.description = fallbackDescription(job);
      return job;
    }
    await page.waitForTimeout(3000);
    const logo = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll("img")].map((i) => i.getAttribute("src") || i.src || "").filter((s) => s.startsWith("http"));
      const square = imgs.find((s) => /_squarelogo/.test(s));
      if (square) return square;
      const cloudfront = imgs.find((s) => /d2q79iu7y748jz\.cloudfront\.net/.test(s));
      return cloudfront || "";
    });
    const desc = await page.locator("#jobDescriptionText, [data-testid='jobDescriptionText'], #vj-detail-description").first().innerText().catch(() => "");
    const posted = await page.locator('[data-testid="jobsearch-ViewJobPostingDate"]').first().textContent().catch(() => "");
    if (desc) job.description = toParagraphs(desc);
    else job.description = fallbackDescription(job);
    if (logo) job.logo = logo;
    if (posted && !job.posted) job.posted = clean(posted.replace(/^posted\s*/i, ""));
    return job;
  }
  const title = await page.title().catch(() => "");
  const body = await pageText(page);
  if (isBlocked(page, body) || !title) {
    job.description = fallbackDescription(job);
    return job;
  }
  const desc = await page.locator("#jobDescriptionText, [data-testid='jobDescriptionText']").first().textContent().catch(() => "");
  const summary = await page
    .locator('[data-testid="jobsearch-JobInfoHeader-companySummary"]')
    .first()
    .textContent()
    .catch(() => "");
  const posted = await page.locator('[data-testid="jobsearch-ViewJobPostingDate"]').first().textContent().catch(() => "");
  const logo = await page.locator('[data-testid="company-logo"], img[data-lit-sprite*="company_logo"], .jobsearch-CompanyAvatarImage').first().getAttribute("src").catch(() => "");
  if (desc) job.description = toParagraphs(desc);
  else job.description = fallbackDescription(job);
  const blob = `${job.title} ${summary || ""} ${desc || ""}`;
  if (!job.pay) job.pay = detectPay(blob);
  if (!job.type) job.type = detectType(blob);
  if (posted && !job.posted) job.posted = clean(posted.replace(/^posted\s*/i, ""));
  if (logo) job.logo = logo;
  return job;
}

const browser = await chrome.launch({
  headless: !stealthReady,
  executablePath: stealthReady ? undefined : undefined,
});
const context = await browser.newContext({ userAgent: UA, viewport: { width: 1366, height: 900 }, locale: "en-US" });

const results = { Indeed: [], LinkedIn: [] };
const report = [];

const indeedPage = await context.newPage();
await open(indeedPage, `https://www.indeed.com/jobs?q=${encodeURIComponent(QUERY)}&l=${encodeURIComponent(LOCATION)}`);
const indeedBody = await pageText(indeedPage);
if (await isBlocked(indeedPage, indeedBody)) {
  report.push("Indeed: blocked by anti-bot");
} else {
  results.Indeed = await scrapeIndeed(indeedPage, true);
  report.push(`Indeed: ${results.Indeed.length} jobs`);
}
await indeedPage.close();

const liPage = await context.newPage();
await open(liPage, `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(QUERY)}&location=${encodeURIComponent(LOCATION)}`);
const liBody = await pageText(liPage);
if (await isBlocked(liPage, liBody)) {
  report.push("LinkedIn: blocked by anti-bot");
} else {
  results.LinkedIn = await scrapeLinkedIn(liPage, true);
  report.push(`LinkedIn: ${results.LinkedIn.length} jobs`);
}
await liPage.close();

const all = [];
const sources = [results.Indeed, results.LinkedIn];
const longest = Math.max(...sources.map((s) => s.length));
for (let i = 0; i < longest; i++) {
  for (const src of sources) {
    if (src[i]) all.push(src[i]);
  }
}
for (const r of report) console.log(r);

if (all.length === 0) {
  console.error("SCRAPE FAILED - no jobs retrieved");
  process.exit(1);
}

const liPage2 = await context.newPage();
const liPageCount = all.filter((j) => j.source === "LinkedIn").length;
console.log(`enriching ${all.length} jobs (${liPageCount} LinkedIn detail pages)`);
for (let i = 0; i < all.length; i++) {
  const job = all[i];
  process.stdout.write(`  [${i + 1}/${all.length}] ${job.source} ${job.title.slice(0, 40)} ... `);
  try {
    if (job.source === "LinkedIn") {
      await enrichLinkedIn(liPage2, job);
    } else {
      await enrichIndeed(liPage2, job);
    }
    process.stdout.write(`desc=${job.description ? job.description.length : 0} logo=${job.logo ? "y" : "n"}\n`);
  } catch (e) {
    process.stdout.write(`error ${e.message}\n`);
    job.description = fallbackDescription(job);
  }
}
await liPage2.close();
await browser.close();

const EMPLOYER_DOMAINS = {
  "bioreference health": "bioreference.com",
  "texas tech univ health sciences ctr": "ttuhsc.edu",
  "university health": "universityhealth.com",
  "mchc health centers": "mchcinc.org",
  "docs health": "docshealth.com",
  "cedars-sinai": "cedars-sinai.edu",
  "baystate health": "baystatehealth.org",
};

function faviconFor(job) {
  const key = clean(job.employer).toLowerCase();
  const domain = EMPLOYER_DOMAINS[key];
  return domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : "";
}

for (const job of all) {
  if (!job.description) job.description = fallbackDescription(job);
  job.slug = buildSlug(job);
  if (!job.pay) job.pay = "";
  if (!job.type) job.type = "";
  if (!job.logo) job.logo = faviconFor(job);
}

const data = {
  updatedAt: new Date().toISOString().slice(0, 10),
  bySlug: {
    [TARGET_SLUG]: all,
  },
};
const out = join(process.cwd(), "src", "data", "jobs.json");
writeFileSync(out, JSON.stringify(data, null, 2) + "\n");
const withDesc = all.filter((j) => j.description && j.description.length > 2 && j.source === "LinkedIn").length;
console.log(`wrote ${out} with ${all.length} jobs (${withDesc} LinkedIn with scraped descriptions)`);
