import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const raw = readFileSync(join(root, "scripts", "dataset.json"), "utf8").replace(/^\uFEFF/, "");
const rows = JSON.parse(raw);

const CLUSTERS = [
  "Core / Head Term",
  "Local Intent (Near Me)",
  "Employment Type",
  "Geo: State-Level",
  "Geo: City-Level",
  "Employer-Branded",
];

function parseOutline(value) {
  const items = [];
  const segments = String(value).split(" | ");
  for (const segment of segments) {
    const trimmed = segment.trim();
    let level = trimmed.startsWith("H3:") ? "h3" : "h2";
    let text = trimmed.replace(/^H3:\s*/, "").replace(/^H2:\s*/, "").trim();
    if (!text) continue;
    items.push({ level, text });
  }
  return items;
}

const pages = rows.map((row) => {
  const volume = Number(row.Volume) || 0;
  const cluster = CLUSTERS.includes(row.Cluster) ? row.Cluster : "Employment Type";
  return {
    keyword: String(row.Keyword),
    volume,
    cluster,
    subcluster: String(row.Subcluster ?? ""),
    slug: String(row["URL Slug"]).replace(/^\/+/, ""),
    pageTitle: String(row["Page Title"]),
    metaDescription: String(row["Meta Description"]),
    h1: String(row.H1),
    outline: parseOutline(row["H2/H3 Outline"]),
    intro: String(row["Intro Paragraph"]),
    difficulty: Number(row.difficulty) || 0,
    cpc: Number(row.cpc) || 0,
    primaryIntent: String(row.primary_intent ?? ""),
    isLocal: Boolean(row.is_local),
    isBranded: Boolean(row.is_branded),
    primaryEntityType: String(row.primary_entity_type ?? ""),
    priorityScore: Number(row.priority_score) || 0,
  };
});

const slugs = new Map();
for (const page of pages) {
  if (slugs.has(page.slug)) {
    slugs.get(page.slug).push(page.keyword);
  } else {
    slugs.set(page.slug, [page.keyword]);
  }
}
const duplicates = [...slugs.entries()].filter(([, v]) => v.length > 1);

const clusterCounts = {};
for (const page of pages) {
  clusterCounts[page.cluster] = (clusterCounts[page.cluster] || 0) + 1;
}

const volumeTotal = pages.reduce((sum, page) => sum + page.volume, 0);

const noOutlineH2 = pages.filter((page) => !page.outline.some((item) => item.level === "h2"));
const noFaq = pages.filter((page) => !page.outline.some((item) => item.level === "h2" && item.text === "Frequently Asked Questions"));

const header = `export type KeywordCluster = ${CLUSTERS.map((c) => JSON.stringify(c)).join(" | ")};`;
const type = `
export interface OutlineItem {
  level: "h2" | "h3";
  text: string;
}

export interface KeywordPage {
  keyword: string;
  volume: number;
  cluster: KeywordCluster;
  subcluster: string;
  slug: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  outline: OutlineItem[];
  intro: string;
  difficulty: number;
  cpc: number;
  primaryIntent: string;
  isLocal: boolean;
  isBranded: boolean;
  primaryEntityType: string;
  priorityScore: number;
}
`;

const body = `export const keywords: KeywordPage[] = ${JSON.stringify(pages, null, 2)};`;
const total = `export const keywordsTotalVolume = ${volumeTotal};`;

const outDir = join(root, "src", "data");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "keywords.ts"), `${header}\n${type}\n${body}\n${total}\n`, "utf8");

console.log(`pages: ${pages.length}`);
console.log(`clusters: ${JSON.stringify(clusterCounts)}`);
console.log(`volume total: ${volumeTotal}`);
console.log(`slug duplicates: ${duplicates.length}`);
console.log(`pages missing FAQ heading: ${noFaq.length}`);
console.log(`pages missing any h2: ${noOutlineH2.length}`);
