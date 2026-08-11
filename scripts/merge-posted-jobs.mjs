import { readFileSync, writeFileSync } from "node:fs";

const JOBS_FILE = "src/data/jobs.json";
const POSTED_URL = process.env.POSTED_JOBS_URL || "https://phlebo.pages.dev/api/posted-jobs";

const jobs = JSON.parse(readFileSync(JOBS_FILE, "utf8"));
const bySlug = jobs.bySlug || {};
const HEAD_SLUG = "phlebotomist-jobs";

const norm = (s) => (s || "").toLowerCase().replace(/\s+/g, " ").trim();

function existingKeys() {
  const urls = new Set();
  const exact = new Set();
  for (const list of Object.values(bySlug)) {
    for (const j of list) {
      if (j.url) urls.add(norm(j.url));
      exact.add(`${norm(j.title)}|${norm(j.employer)}|${norm(j.location)}`);
    }
  }
  return { urls, exact };
}

function buildSlug(job) {
  const base = `${job.employer}-${job.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
  const id = (job.id || `${job.postedAt || Date.now()}-${Math.random().toString(36).slice(2, 8)}`)
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 12);
  return `${base}-${id}`;
}

const { urls, exact } = existingKeys();
let added = 0;

try {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  const res = await fetch(POSTED_URL, { signal: controller.signal });
  clearTimeout(timer);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const payload = await res.json();
  const posted = Array.isArray(payload.jobs) ? payload.jobs : [];

  for (const job of posted) {
    if (!job.title || !job.employer || !job.location || !job.url) continue;
    const key = `${norm(job.title)}|${norm(job.employer)}|${norm(job.location)}`;
    if (urls.has(norm(job.url)) || exact.has(key)) continue;

    const row = {
      slug: buildSlug(job),
      title: job.title,
      employer: job.employer,
      location: job.location,
      type: job.type || "Full-Time",
      pay: job.pay || "",
      posted: "Just posted",
      source: "posted",
      url: job.url,
      description: Array.isArray(job.description) ? job.description : [],
    };

    bySlug[HEAD_SLUG] = [row, ...(bySlug[HEAD_SLUG] || [])];
    urls.add(norm(row.url));
    exact.add(key);
    added++;
  }

  if (added > 0) {
    jobs.updatedAt = new Date().toISOString().slice(0, 10);
    writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2) + "\n");
  }
  console.log(`posted jobs merge: fetched=${posted.length} added=${added}`);
} catch (e) {
  console.warn(`posted jobs merge skipped (${e.message}); site stays as-is`);
}
