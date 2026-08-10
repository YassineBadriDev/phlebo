import areas from "./areas.json";

export interface AreaRef {
  code: string;
  title: string;
  type: "national" | "state" | "metro";
}

export const STATE_FIPS: Record<string, string> = areas.stateFips;
export const CITY_CBSA: Record<string, string> = areas.cityCbsa;
export const CBSA_TITLES: Record<string, string> = areas.cbsaTitles;

export const nationalArea: AreaRef = { code: "us", title: "United States", type: "national" };

export function stateArea(state: string): AreaRef | undefined {
  const fips = STATE_FIPS[state];
  if (!fips) return undefined;
  return { code: `st:${state}`, title: state, type: "state" };
}

export function metroArea(cbsaCode: string): AreaRef | undefined {
  const title = CBSA_TITLES[cbsaCode];
  if (!title) return undefined;
  return { code: `cbsa:${cbsaCode}`, title, type: "metro" };
}
