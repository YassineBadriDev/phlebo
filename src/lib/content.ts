import type { KeywordPage } from "../data/keywords";
import { cityLocations } from "../data/locations";
import { employerForPage } from "../data/employers";
import type { SalaryView } from "./salary";

function cityName(page: KeywordPage): string {
  const loc = page.cluster === "Geo: City-Level" ? cityLocations[page.subcluster] : undefined;
  return loc ? loc.city : page.subcluster;
}

function stateName(page: KeywordPage): string {
  const loc = page.cluster === "Geo: City-Level" ? cityLocations[page.subcluster] : undefined;
  if (loc) return loc.state;
  if (page.cluster === "Geo: State-Level") return page.subcluster;
  return "";
}

function employerName(page: KeywordPage): string {
  const e = employerForPage(page.slug);
  return e ? e.name : "";
}

function wagePhrase(s: SalaryView): string {
  if (s.annualMedian != null && s.hourlyMedian != null) {
    return `Phlebotomists in ${s.area.title} earn a median wage of about $${Math.round(s.hourlyMedian).toLocaleString("en-US")} per hour and $${s.annualMedian.toLocaleString("en-US")} per year`;
  }
  return `Phlebotomist pay varies by location, employer, and experience`;
}

export function sectionBody(heading: string, page: KeywordPage, salary: SalaryView): string {
  const h = heading.toLowerCase();
  const city = cityName(page);
  const state = stateName(page);
  const employer = employerName(page);

  if (h.startsWith("what does a phlebotomist do") || h === "what phlebotomists do") {
    return "Phlebotomists draw blood for tests, transfusions, research, and blood donations. They verify patient identity, label and process specimens, answer questions to help patients relax, and keep their work area clean and stocked. Most work in hospitals, medical and diagnostic laboratories, clinics, and blood donation centers.";
  }

  if (
    h.startsWith("salary and job outlook") ||
    h.startsWith("average phlebotomist salary") ||
    h.startsWith("phlebotomist pay in") ||
    h.startsWith("typical pay and benefits") ||
    h.startsWith("pay and schedule expectations") ||
    h.startsWith("what to expect: pay and shifts")
  ) {
    return `${wagePhrase(salary)}, based on May ${salary.year} data from the Bureau of Labor Statistics. Pay moves up with experience, shift differentials, and setting: hospital, laboratory, and travel roles usually pay more than entry-level or outpatient positions. Most phlebotomists work full time, and hospital and lab roles often include nights, weekends, and holidays.`;
  }

  if (h.startsWith("certification requirements") || h === "certification needed" || h === "requirements and certification") {
    const st = state
      ? `In ${state}, `
      : "";
    return `${st}most employers expect a phlebotomy certification such as the CPT from the NHA or ASCP. A state-approved training program that includes supervised clinical draws plus a passing exam covers most requirements, and some states add licensing or registration on top of certification.`;
  }

  if (h.startsWith("how to find openings") || h.startsWith("how to search openings") || h.startsWith("how to get hired")) {
    const place = page.cluster === "Geo: City-Level" ? ` in ${city}` : "";
    const employerBit = employer ? ` at ${employer}` : "";
    return `To find phlebotomist jobs${place}${employerBit}, check hospital and lab career pages, use location-based job search, and filter by shift and pay. Applying with a current certification, a clean background, and a resume that highlights your draw count and patient experience makes your application stand out.`;
  }

  if (h.startsWith("top cities hiring") || h.startsWith("nearby cities hiring")) {
    const area = state || "your area";
    return `Hiring in ${area} is concentrated in the largest metro areas, where hospitals, lab networks, and blood donation centers post the most phlebotomist openings. The related pages below list local pay and opening information for nearby cities.`;
  }

  if (h.startsWith("what it's like to work as a")) {
    const name = employer || "this employer";
    return `Phlebotomists at ${name} typically work in labs, clinics, and hospital facilities drawing and processing blood samples at a steady pace. ${name} postings usually require certification and include patient service and specimen handling duties, with shifts across daytime and evening hours.`;
  }

  if (h.includes("vs full-time positions") || h.startsWith("what ") && h.endsWith(" involve")) {
    const subject = page.subcluster;
    const cityBit = page.cluster === "Geo: City-Level" ? ` in ${city}` : "";
    const employerBit = employer ? `, ${employer}` : "";
    return `${subject} phlebotomist jobs${cityBit}${employerBit ? ` ${employerBit}` : ""} work on a different schedule or hiring model than standard full-time roles. They generally pay a higher hourly rate to account for flexibility, and they suit candidates who can adapt quickly to changing locations or shifts.`;
  }

  if (h.startsWith("what to expect")) {
    return `${wagePhrase(salary)}. Expect to draw blood, label and process specimens, and rotate between stations, with most employers offering a mix of full-time, part-time, and per diem schedules.`;
  }

  if (h === "application requirements") {
    const e = employer ? ` ${employer}` : "";
    return `Most${e} phlebotomist applications ask for current certification, a high school diploma or equivalent, and a resume showing any clinical or patient-facing experience. Some employers run a background check and a skills assessment before scheduling an interview.`;
  }

  if (h.startsWith("where phlebotomists work")) {
    return "Phlebotomists work in hospitals, medical and diagnostic laboratories, doctor's offices, outpatient care centers, and blood donation facilities. About a third of phlebotomists are employed by hospitals, and another third work in medical and diagnostic laboratories.";
  }

  if (h.startsWith("typical shift schedules") || h.startsWith("full-time vs part-time")) {
    return "Phlebotomy shifts cover daytime, evening, overnight, weekend, and per diem schedules. Hospitals staff around the clock, while outpatient labs and clinics mostly run daytime hours, and part-time and PRN roles are common.";
  }

  if (h.startsWith("frequently asked questions")) {
    return "Quick answers to the questions phlebotomists ask most, based on hiring data and BLS occupational information.";
  }

  return `This page covers ${page.keyword} with current pay data, hiring requirements, and the best ways to find matching phlebotomist openings.`;
}
