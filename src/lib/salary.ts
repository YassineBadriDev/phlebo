import type { KeywordPage } from "../data/keywords";
import { cityLocations } from "../data/locations";
import {
  CITY_CBSA,
  stateArea,
  metroArea,
  nationalArea,
  type AreaRef,
} from "../data/areas";
import { salaryRecords, salaryYear, type SalaryRecord } from "../data/salary";

export interface SalaryView {
  area: AreaRef;
  year: number;
  employment: number | null;
  hourlyMedian: number | null;
  annualMedian: number | null;
}

function pick(rec: SalaryRecord | undefined): Omit<SalaryView, "area" | "year"> {
  return {
    employment: rec ? rec.employment : null,
    hourlyMedian: rec ? rec.hourlyMedian : null,
    annualMedian: rec ? rec.annualMedian : null,
  };
}

function withArea(area: AreaRef, rec: SalaryRecord | undefined): SalaryView {
  return { area, year: salaryYear, ...pick(rec) };
}

export function salaryForPage(page: KeywordPage): SalaryView {
  if (page.cluster === "Geo: City-Level") {
    const loc = cityLocations[page.subcluster];
    if (loc) {
      const cbsa = CITY_CBSA[loc.city];
      if (cbsa) {
        const metro = metroArea(cbsa);
        const rec = metro ? salaryRecords[metro.code] : undefined;
        if (metro && rec) return withArea(metro, rec);
      }
      const state = stateArea(loc.state);
      const stateRec = state ? salaryRecords[state.code] : undefined;
      if (state && stateRec) return withArea(state, stateRec);
    }
  } else if (page.cluster === "Geo: State-Level") {
    const state = stateArea(page.subcluster);
    const stateRec = state ? salaryRecords[state.code] : undefined;
    if (state && stateRec) return withArea(state, stateRec);
  }
  return withArea(nationalArea, salaryRecords.us);
}
