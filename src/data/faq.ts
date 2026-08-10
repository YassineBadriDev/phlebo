import type { KeywordPage } from "./keywords";
import { cityLocations } from "./locations";
import { employerForPage } from "./employers";
import { STATE_ABBR } from "./locations";

export interface FaqItem {
  q: string;
  a: string;
}

const CORE_FAQ: FaqItem[] = [  {
    q: "How long does it take to become a phlebotomist?",
    a: "Most phlebotomy training programs take four to eight months to complete, and many can be finished in a single semester. A typical program covers venipuncture, specimen handling, safety, and certification exam preparation.",
  },
  {
    q: "Do phlebotomists need certification to get hired?",
    a: "Many employers prefer or require a phlebotomy certification such as the CPT offered by the NHA or ASCP. Some states also require a license or registration before you can work as a phlebotomist.",
  },
  {
    q: "What does a phlebotomist earn?",
    a: "According to Bureau of Labor Statistics data for the occupation group that includes phlebotomists, the median hourly wage is about $20, with the middle half of earners between roughly $16 and $25 an hour depending on region and experience.",
  },
  {
    q: "Is phlebotomy a good entry point into healthcare?",
    a: "Yes. It requires less schooling than most clinical roles, provides direct patient contact, and can lead to roles such as medical assistant, lab technician, or nurse with additional training.",
  },
];

const NEAR_ME_FAQ: FaqItem[] = [
  {
    q: "How do I search for phlebotomist jobs near me?",
    a: "Use a location-based search with your city or ZIP code, then filter by distance, shift type, and pay. Hospital, clinic, and lab openings are usually the most common nearby.",
  },
  {
    q: "What shifts are common for phlebotomists near me?",
    a: "Phlebotomy roles include daytime, evening, overnight, weekend, and per diem shifts. Hospitals staff around the clock, while outpatient labs mostly run daytime hours.",
  },
  {
    q: "Do nearby employers require experience?",
    a: "Many lab and clinic employers hire entry-level phlebotomists who have completed a program and hold certification, then provide on-the-job training. Others prefer six months to a year of experience.",
  },
  {
    q: "How far should I expand my search?",
    a: "Expanding by 15 to 25 miles typically captures most metro-area openings. Larger metro regions often have dozens of live postings within a short commute.",
  },
];

const EMPLOYMENT_TYPE_BASE_FAQ: FaqItem[] = [
  {
    q: "What does this type of phlebotomy job involve?",
    a: "The day-to-day work focuses on drawing blood, handling specimens, and documenting patient information, with the schedule and location varying by assignment type.",
  },
  {
    q: "How does pay compare to standard full-time roles?",
    a: "Pay depends on the assignment type. Travel and contract roles usually pay higher hourly rates to cover housing and travel, while per diem roles pay a premium per shift without benefits.",
  },
  {
    q: "Who is a good fit for this kind of phlebotomist job?",
    a: "Candidates who adapt quickly, stay flexible with locations or schedules, and hold current phlebotomy certification tend to do best in these roles.",
  },
];

const TRAVEL_FAQ: FaqItem[] = [
  {
    q: "How long do travel phlebotomist assignments last?",
    a: "Most travel assignments run 8 to 13 weeks and can be extended. Assignments are typically arranged by staffing agencies that place you in hospitals or labs with urgent need.",
  },
  {
    q: "Does travel phlebotomy pay more?",
    a: "Travel roles usually offer higher hourly pay plus stipends for housing, meals, and travel, which can push total compensation well above local staff rates.",
  },
  {
    q: "What do I need to qualify for travel phlebotomist jobs?",
    a: "Most agencies require current certification, at least one year of phlebotomy experience, and willingness to relocate on short notice.",
  },
];

const PART_TIME_FAQ: FaqItem[] = [
  {
    q: "Are phlebotomist jobs part time common?",
    a: "Yes. Clinics, labs, and blood donation centers regularly staff part-time phlebotomists for morning and afternoon coverage.",
  },
  {
    q: "Do part-time phlebotomists get benefits?",
    a: "Benefits vary. Some employers offer prorated benefits for regular part-time roles, while per diem and casual roles typically do not include benefits.",
  },
  {
    q: "Can I work part time while in school?",
    a: "Many phlebotomy students work part time at labs or clinics that offer flexible scheduling around class hours.",
  },
];

const ENTRY_LEVEL_FAQ: FaqItem[] = [
  {
    q: "Can I get a phlebotomist job with no experience?",
    a: "Yes. Many labs and clinics hire new graduates who completed a phlebotomy program and hold certification, then provide on-the-job training.",
  },
  {
    q: "What training do I need before applying?",
    a: "A state-approved phlebotomy course that includes supervised clinical draws, plus passing a certification exam, covers most employer requirements.",
  },
  {
    q: "How fast can I move from entry level to full time?",
    a: "With steady experience and a good draw record, many entry-level phlebotomists move into full-time or specialty roles within six to twelve months.",
  },
];

const PRN_FAQ: FaqItem[] = [
  {
    q: "What does PRN mean in phlebotomy?",
    a: "PRN is short for a Latin term meaning as needed. PRN phlebotomists fill shifts when the department is short, working irregular hours at a higher per-shift rate.",
  },
  {
    q: "Do PRN phlebotomists get paid more?",
    a: "PRN roles typically pay a higher hourly rate than staff roles because they do not include guaranteed hours or benefits.",
  },
  {
    q: "Is PRN work good for a second job?",
    a: "Yes. PRN schedules are flexible by nature, which makes them a common fit for phlebotomists who already work elsewhere.",
  },
];

const CONTRACT_FAQ: FaqItem[] = [
  {
    q: "How do contract phlebotomist jobs differ from staff roles?",
    a: "Contract phlebotomists are hired for a set term, usually through an agency, rather than as permanent employees. The contract defines the hours, duration, and pay rate.",
  },
  {
    q: "Are contract phlebotomist jobs paid more?",
    a: "Contract rates are often higher than staff rates because the role is temporary and typically does not include benefits or guaranteed renewal.",
  },
  {
    q: "Can a contract role become permanent?",
    a: "Some facilities convert strong contract phlebotomists to permanent staff when positions open, though it is never guaranteed.",
  },
];

const OVERNIGHT_FAQ: FaqItem[] = [
  {
    q: "What are overnight phlebotomist shifts like?",
    a: "Overnight phlebotomists work in hospitals and 24-hour labs drawing blood, often for early morning rounds and emergency collection orders.",
  },
  {
    q: "Do overnight phlebotomist jobs pay more?",
    a: "Many hospitals add a shift differential for overnight hours, which can raise the effective hourly rate above daytime roles.",
  },
  {
    q: "Who works overnight phlebotomy shifts?",
    a: "Phlebotomists who prefer fewer daytime hours, students, and those seeking higher differential pay commonly fill overnight and weekend shifts.",
  },
];

const HOSPITAL_FAQ: FaqItem[] = [
  {
    q: "What is it like to work as a hospital phlebotomist?",
    a: "Hospital phlebotomists move between departments drawing patients, processing specimens, and covering busy emergency and inpatient volumes.",
  },
  {
    q: "Do hospitals require experience?",
    a: "Hospitals often prefer some experience, but many hire new graduates for training roles because inpatient volume is constant.",
  },
  {
    q: "Are hospital phlebotomist jobs full time?",
    a: "Hospitals offer full-time, part-time, and per diem phlebotomy roles across all shifts, so coverage varies by department.",
  },
];

const MOBILE_FAQ: FaqItem[] = [
  {
    q: "What does a mobile phlebotomist do?",
    a: "Mobile phlebotomists travel to patients at home, at work, or in assisted living facilities to collect blood samples, then deliver them to the ordering lab.",
  },
  {
    q: "Do I need a car for mobile phlebotomy?",
    a: "Yes. Mobile phlebotomy jobs almost always require a reliable vehicle, a valid license, and insurance since you travel between collection sites.",
  },
  {
    q: "How is mobile phlebotomy pay structured?",
    a: "Mobile roles may pay per visit, per shift, or hourly, and pay often includes mileage reimbursement for travel between patients.",
  },
];

const CERTIFICATION_FAQ: FaqItem[] = [
  {
    q: "What certification do phlebotomist jobs require?",
    a: "Most roles prefer a certification such as the Certified Phlebotomy Technician credential from the NHA or ASCP, and some states require it by law.",
  },
  {
    q: "Can I work before I am certified?",
    a: "Some employers offer trainee roles while you complete certification, but most paid phlebotomy positions expect certification at hire.",
  },
  {
    q: "How do I renew my phlebotomy certification?",
    a: "Certification bodies typically require continuing education credits every two years, and some employers cover the renewal cost.",
  },
];

const CAREER_FAQ: FaqItem[] = [
  {
    q: "What careers can a phlebotomist move into?",
    a: "Common paths include medical assistant, laboratory technician, patient care technician, and nursing, all of which build on phlebotomy skills.",
  },
  {
    q: "How long is a phlebotomy career?",
    a: "Phlebotomy can be a long-term career or a stepping stone, and many techs stay in the field for a decade or more with advancement into lead and supervisor roles.",
  },
  {
    q: "Does phlebotomy experience count toward other healthcare jobs?",
    a: "Yes. Patient interaction, specimen handling, and lab safety experience transfer directly to many clinical and laboratory positions.",
  },
];

const WEEKEND_FAQ: FaqItem[] = [
  {
    q: "Are weekend phlebotomist jobs available?",
    a: "Yes. Hospitals and labs run weekend collection schedules, and many offer weekend-only phlebotomy roles for coverage.",
  },
  {
    q: "Do weekend phlebotomy shifts pay extra?",
    a: "Many employers add a weekend shift differential, so weekend phlebotomists often earn more per hour than weekday staff.",
  },
  {
    q: "Can I work weekends only?",
    a: "Some facilities hire weekend-only phlebotomists, often as a regular part-time or PRN arrangement.",
  },
];

const AGENCY_FAQ: FaqItem[] = [
  {
    q: "What is an agency phlebotomist?",
    a: "An agency phlebotomist is placed by a staffing agency into short-term or long-term assignments at hospitals and labs, rather than hired directly.",
  },
  {
    q: "How fast can I get assignments through an agency?",
    a: "Experienced, certified phlebotomists can often start assignments within days to a few weeks depending on local demand.",
  },
  {
    q: "Do agencies pay for phlebotomy assignments?",
    a: "Agencies set the pay rate for each assignment, and rates are usually competitive because they compete with direct-hire roles.",
  },
];

const SALARY_FAQ: FaqItem[] = [
  {
    q: "How much do phlebotomists actually make?",
    a: "Regional BLS data for the occupation group that includes phlebotomists shows a median around $20 per hour, with higher pay in metro areas and hospital settings.",
  },
  {
    q: "Do phlebotomists earn more with experience?",
    a: "Yes. Pay scales up with years of experience, shift differentials, and specialty settings such as hospitals and travel assignments.",
  },
  {
    q: "How does location affect phlebotomy pay?",
    a: "Cost of living and demand drive regional differences, so the same role can pay several dollars more per hour in large metro areas.",
  },
];

function employmentTypeFaq(subcluster: string): FaqItem[] {
  if (/travel|traveling|travelling/i.test(subcluster)) return TRAVEL_FAQ;
  if (/part[- ]time/i.test(subcluster)) return PART_TIME_FAQ;
  if (/entry|training|trainee|no experience/i.test(subcluster)) return ENTRY_LEVEL_FAQ;
  if (/prn|per diem/i.test(subcluster)) return PRN_FAQ;
  if (/contract|agency/i.test(subcluster)) return subcluster.includes("Agency") ? AGENCY_FAQ : CONTRACT_FAQ;
  if (/overnight|weekend/i.test(subcluster)) return subcluster.includes("Weekend") ? WEEKEND_FAQ : OVERNIGHT_FAQ;
  if (/hospital|clinic/i.test(subcluster)) return HOSPITAL_FAQ;
  if (/mobile/i.test(subcluster)) return MOBILE_FAQ;
  if (/certification/i.test(subcluster)) return CERTIFICATION_FAQ;
  if (/career|salary/i.test(subcluster)) return subcluster.includes("Salary") ? SALARY_FAQ : CAREER_FAQ;
  return EMPLOYMENT_TYPE_BASE_FAQ;
}

export const NATIONAL_FAQ: FaqItem[] = CORE_FAQ;

export function getFaq(page: KeywordPage): FaqItem[] {
  switch (page.cluster) {
    case "Core / Head Term":
      return CORE_FAQ;
    case "Local Intent (Near Me)":
      return NEAR_ME_FAQ;
    case "Employment Type":
      return employmentTypeFaq(page.subcluster);
    case "Geo: City-Level": {
      const loc = cityLocations[page.subcluster];
      const city = loc ? loc.city : page.subcluster;
      const state = loc ? loc.state : "";
      return [
        {
          q: `How much do phlebotomists make in ${city}?`,
          a: `Pay in ${city} varies with employer type and experience. The salary table on this page shows typical ranges for ${city} using regional BLS data, and most ${city} phlebotomists earn within the ranges listed.`,
        },
        {
          q: `Who are the main employers of phlebotomists in ${city}?`,
          a: `Hospitals, lab networks, clinics, and blood donation centers are the largest local employers in ${city}, and many post open phlebotomist roles through their own career pages and job boards.`,
        },
        {
          q: `Do I need certification to work in ${city}?`,
          a: `Certification requirements follow state rules. Most ${state} employers require a current phlebotomy certification, and some add local onboarding requirements.`,
        },
        {
          q: `What shifts are available in ${city}?`,
          a: `Openings in ${city} cover daytime, evening, weekend, and per diem schedules, with hospitals offering the most around-the-clock coverage.`,
        },
      ];
    }
    case "Geo: State-Level": {
      const stateAbbr = STATE_ABBR[page.subcluster] ?? page.subcluster;
      return [
        {
          q: `Do I need a state license to be a phlebotomist in ${stateAbbr}?`,
          a: `Regulation varies by state. Some states license phlebotomists directly, while others rely on national certification and employer requirements.`,
        },
        {
          q: `How much do phlebotomists make in ${stateAbbr}?`,
          a: `The salary table on this page shows typical figures for ${stateAbbr} using regional BLS data, with metro areas usually paying more than rural areas.`,
        },
        {
          q: `Which cities in ${stateAbbr} hire the most phlebotomists?`,
          a: `The largest metro areas in ${stateAbbr} typically have the most postings. This page lists the top hiring cities with live opening counts.`,
        },
      ];
    }
    case "Employer-Branded": {
      const employer = employerForPage(page.slug);
      const name = employer ? employer.name : "this employer";
      return [
        {
          q: `How do I apply for a phlebotomist job at ${name}?`,
          a: `${name} posts open roles on its official careers site, and this independent guide lists the ${name} phlebotomist openings we have identified along with the application steps.`,
        },
        {
          q: `What does ${name} pay phlebotomists?`,
          a: `Pay at ${name} varies by location and shift, and posted ranges are shown on this page when available from public job listings.`,
        },
        {
          q: `Does ${name} require certification?`,
          a: `${name} phlebotomist roles typically require current phlebotomy certification, with training paths available for some entry positions.`,
        },
      ];
    }
    default:
      return CORE_FAQ;
  }
}
