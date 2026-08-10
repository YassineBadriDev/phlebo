import { readFileSync, writeFileSync } from "node:fs";

const t = readFileSync("src/data/keywords.ts", "utf8");
const re =
  /"keyword":\s*"([^"]+)"[\s\S]*?"volume":\s*(\d+)[\s\S]*?"cluster":\s*"([^"]+)"[\s\S]*?"subcluster":\s*"([^"]+)"[\s\S]*?"slug":\s*"([^"]+)"[\s\S]*?"h1":\s*"([^"]+)"/g;
let m;
const out = [];
while ((m = re.exec(t))) {
  out.push({
    keyword: m[1],
    volume: +m[2],
    cluster: m[3],
    subcluster: m[4],
    slug: m[5],
    h1: m[6],
  });
}
console.log("total pages:", out.length);
const by = {};
for (const p of out) by[p.cluster] = (by[p.cluster] || 0) + 1;
console.log(by);
const jobs = JSON.parse(readFileSync("src/data/jobs.json", "utf8"));
for (const c in by) {
  const has = out.filter((p) => p.cluster === c && jobs.bySlug[p.slug]);
  console.log(c, "->", has.length, "with jobs");
}
console.log("slugs w/o jobs:", out.filter((p) => !jobs.bySlug[p.slug]).length);
writeFileSync("scripts/_inventory.json", JSON.stringify(out, null, 2));
