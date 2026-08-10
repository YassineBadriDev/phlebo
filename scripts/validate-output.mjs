import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const raw = readFileSync(join(process.cwd(), "scripts", "dataset.json"), "utf8");
const keywords = JSON.parse(raw.replace(/^\uFEFF/, "")).map((r) => ({
  slug: r["URL Slug"].replace(/^\//, ""),
  cluster: r.Cluster,
  subcluster: r.Subcluster,
  volume: r.Volume,
  h1: r.H1 ?? r.Keyword,
}));
const SITE_URL = "https://phlebotomistjobs.org";

const dist = join(process.cwd(), "dist");
const errors = [];
const warn = [];

const htmlFiles = readdirSync(dist).filter((f) => f.endsWith(".html"));
const pages = new Set(htmlFiles);

for (const k of keywords) {
  const expected = `${k.slug}.html`;
  if (!pages.has(expected)) {
    errors.push(`missing page: ${expected}`);
  }
}
for (const extra of ["index.html", "phlebotomist-jobs-by-type.html", "phlebotomist-jobs-by-state.html", "phlebotomist-jobs-by-city.html", "phlebotomist-jobs-by-employer.html", "contact.html", "privacy-policy.html", "terms-of-service.html"]) {
  if (!pages.has(extra)) errors.push(`missing page: ${extra}`);
}

const expectedNoindex = new Set(
  keywords
    .filter((k) => (k.cluster === "Geo: State-Level" || k.cluster === "Geo: City-Level") && k.volume <= 20)
    .map((k) => `${k.slug}.html`)
);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

for (const f of htmlFiles) {
  const html = readFileSync(join(dist, f), "utf8");
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? "");
  const meta = decode(html.match(/<meta name="description" content="([\s\S]*?)"\s*\/?>/)?.[1] ?? "");
  const robots = html.match(/<meta name="robots" content="([\s\S]*?)"\s*\/?>/)?.[1] ?? "";
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.test(html);
  const canonical = html.match(/<link rel="canonical" href="([\s\S]*?)"\s*\/?>/)?.[1] ?? "";

  if (!h1) errors.push(`${f}: missing H1`);
  if (!canonical) errors.push(`${f}: missing canonical`);
  else if (!canonical.startsWith(SITE_URL)) errors.push(`${f}: canonical wrong: ${canonical}`);

  if (title.length > 60) errors.push(`${f}: title ${title.length} chars (>60)`);
  if (title.length === 0) errors.push(`${f}: empty title`);

  if (meta.length > 155) errors.push(`${f}: meta ${meta.length} chars (>155)`);
  if (meta.length === 0) errors.push(`${f}: empty meta`);

  const isNoindex = robots.startsWith("noindex");
  const shouldNoindex = expectedNoindex.has(f);
  if (isNoindex !== shouldNoindex) {
    errors.push(`${f}: robots="${robots}" but expected ${shouldNoindex ? "noindex" : "index"}`);
  }

  const isKeyword = pages.has(f) && !["index.html", "phlebotomist-jobs-by-type.html", "phlebotomist-jobs-by-state.html", "phlebotomist-jobs-by-city.html", "phlebotomist-jobs-by-employer.html", "contact.html", "privacy-policy.html", "terms-of-service.html"].includes(f);
  if (isKeyword && !html.includes("application/ld+json")) {
    errors.push(`${f}: missing JSON-LD`);
  }
}

const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const sitemapLocs = new Set([...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map((m) => m[1]));
const base = SITE_URL;
for (const k of keywords) {
  const url = `${base}/${k.slug}`;
  const inSitemap = sitemapLocs.has(url);
  if (expectedNoindex.has(`${k.slug}.html`)) {
    if (inSitemap) errors.push(`sitemap includes noindex: ${url}`);
  } else if (!inSitemap) {
    errors.push(`sitemap missing: ${url}`);
  }
}
for (const extra of ["/", "/phlebotomist-jobs-by-type", "/phlebotomist-jobs-by-state", "/phlebotomist-jobs-by-city", "/phlebotomist-jobs-by-employer", "/contact", "/privacy-policy", "/terms-of-service"]) {
  if (!sitemapLocs.has(`${base}${extra}`)) errors.push(`sitemap missing: ${base}${extra}`);
}

if (!statSync(join(dist, "robots.txt")).isFile()) errors.push("missing robots.txt");
if (!statSync(join(dist, "llms.txt")).isFile()) errors.push("missing llms.txt");

if (errors.length) {
  console.log(`VALIDATION FAILED (${errors.length} errors, ${warn.length} warnings)`);
  for (const e of errors) console.log("  ERROR " + e);
  for (const w of warn) console.log("  WARN  " + w);
  process.exit(1);
}
console.log(`validation: OK (${htmlFiles.length} html, ${sitemapLocs.size} sitemap urls)`);
