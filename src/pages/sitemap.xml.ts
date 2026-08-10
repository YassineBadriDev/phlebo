import type { APIRoute } from "astro";
import { keywords } from "../data/keywords";
import { allJobs, slugForJob } from "../lib/jobs";
import { SITE_URL } from "../config";

const staticPaths = [
  "/",
  "/phlebotomist-jobs-by-type",
  "/phlebotomist-jobs-by-state",
  "/phlebotomist-jobs-by-city",
  "/phlebotomist-jobs-by-employer",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export const GET: APIRoute = () => {
  const seen = new Set<string>();
  const urls: string[] = [];
  for (const p of staticPaths) {
    if (!seen.has(p)) {
      seen.add(p);
      urls.push(p);
    }
  }
  for (const k of keywords) {
    const noindex = (k.cluster === "Geo: State-Level" || k.cluster === "Geo: City-Level") && k.volume <= 20;
    if (noindex) continue;
    const p = `/${k.slug}`;
    if (!seen.has(p)) {
      seen.add(p);
      urls.push(p);
    }
  }
  for (const job of allJobs()) {
    const p = `/jobs/${slugForJob(job)}`;
    if (!seen.has(p)) {
      seen.add(p);
      urls.push(p);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${SITE_URL}${u}</loc>\n  </url>`).join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
