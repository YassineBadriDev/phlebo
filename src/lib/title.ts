import { SITE_NAME } from "../config";

const MIDDLE_SEGMENT = /\s*\|\s*(Guide & Openings|Hiring & How to Apply|Openings Near You|Pay & Requirements)\s*/;
const TRAILING_BRAND = /\s*\|\s*Phlebotomist Jobs\s*$/;
const HAS_BRAND = /phlebotomist/i;

export function makePageTitle(pageTitle: string): string {
  let t = pageTitle.replace("[SiteName]", SITE_NAME).trim();
  if (t.length <= 60) return t;
  t = t.replace(MIDDLE_SEGMENT, " ");
  t = t.replace(/\s{2,}/g, " ").trim();
  if (t.length <= 60) return t;
  if (HAS_BRAND.test(t)) {
    t = t.replace(TRAILING_BRAND, "").trim();
  }
  if (t.length <= 60) return t;
  return truncateAtWord(t, 60);
}

function truncateAtWord(s: string, max: number): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max + 1).lastIndexOf(" ");
  if (cut <= 0) return s.slice(0, max).replace(/[\s,;:|-]+$/, "");
  return s.slice(0, cut).replace(/[\s,;:|-]+$/, "");
}
