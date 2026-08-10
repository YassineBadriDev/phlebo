import { keywords, type KeywordCluster, type KeywordPage } from "../data/keywords";
import { cityLocations, STATE_ABBR } from "../data/locations";

const REGION: Record<string, string> = {
  CT: "NE", ME: "NE", MA: "NE", NH: "NE", NJ: "NE", NY: "NE", PA: "NE", RI: "NE", VT: "NE",
  IL: "MW", IN: "MW", IA: "MW", KS: "MW", MI: "MW", MN: "MW", MO: "MW", NE: "MW", ND: "MW", OH: "MW", SD: "MW", WI: "MW",
  AL: "S", AR: "S", DE: "S", DC: "S", FL: "S", GA: "S", KY: "S", LA: "S", MD: "S", MS: "S", NC: "S", OK: "S", SC: "S", TN: "S", TX: "S", VA: "S", WV: "S",
  AK: "W", AZ: "W", CA: "W", CO: "W", HI: "W", ID: "W", MT: "W", NV: "W", NM: "W", OR: "W", UT: "W", WA: "W", WY: "W",
};

export interface RelatedLink {
  slug: string;
  title: string;
  cluster: KeywordCluster;
}

function tokenize(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
  );
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

function rank(pool: KeywordPage[], tokens: Set<string>): KeywordPage[] {
  return [...pool]
    .map((k) => ({ k, score: jaccard(tokens, tokenize(k.keyword)) }))
    .sort((x, y) => y.score - x.score || y.k.volume - x.k.volume)
    .map((x) => x.k);
}

function toLinks(pages: KeywordPage[]): RelatedLink[] {
  return pages.map((p) => ({ slug: p.slug, title: p.h1, cluster: p.cluster }));
}

function typeSpokes(page: KeywordPage, tokens: Set<string>, count: number): KeywordPage[] {
  const pool = keywords.filter((k) => k.slug !== page.slug && k.cluster === "Employment Type");
  return rank(pool, tokens).slice(0, count);
}

export function relatedLinks(page: KeywordPage, count = 6): RelatedLink[] {
  const tokens = tokenize(page.keyword);
  const others = keywords.filter((k) => k.slug !== page.slug);

  if (page.cluster === "Geo: City-Level") {
    const loc = cityLocations[page.subcluster];
    const sameState = loc
      ? others.filter((k) => k.cluster === "Geo: City-Level" && cityLocations[k.subcluster]?.state === loc.state)
      : [];
    const picks = rank(sameState, tokens).slice(0, 5);
    let list: KeywordPage[] = picks;
    if (picks.length < 4) {
      const filler = rank(
        others.filter((k) => k.cluster === "Geo: City-Level" && !list.includes(k)),
        tokens
      ).slice(0, 4 - picks.length);
      list = [...picks, ...filler];
    }
    const spokes = typeSpokes(page, tokens, 2).filter((s) => !list.includes(s)).slice(0, 2);
    return toLinks([...list, ...spokes].slice(0, count));
  }

  if (page.cluster === "Geo: State-Level") {
    const abbr = STATE_ABBR[page.subcluster];
    const region = abbr ? REGION[abbr] : undefined;
    const pool = region
      ? others.filter((k) => k.cluster === "Geo: State-Level" && REGION[STATE_ABBR[k.subcluster] ?? ""] === region)
      : others.filter((k) => k.cluster === "Geo: State-Level");
    return toLinks(rank(pool, tokens).slice(0, count));
  }

  if (page.cluster === "Employment Type") {
    return toLinks(rank(others.filter((k) => k.cluster === "Employment Type"), tokens).slice(0, count));
  }

  if (page.cluster === "Employer-Branded") {
    return toLinks(rank(others.filter((k) => k.cluster === "Employer-Branded"), tokens).slice(0, count));
  }

  return toLinks(rank(others, tokens).slice(0, count));
}
