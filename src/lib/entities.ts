import type { KeywordPage } from "../data/keywords";
import { SITE_NAME, SITE_URL, SITE_AUTHOR, CONTACT_EMAIL, OCCUPATION_WIKIDATA, CLUSTER_HUBS, CLUSTER_LABELS } from "../config";
import { getFaq, type FaqItem } from "../data/faq";
import { cityLocations } from "../data/locations";
import { employerForPage } from "../data/employers";
import { salaryForPage } from "./salary";

type Json = Record<string, unknown>;

export function occupationSchema(page: KeywordPage, salary: ReturnType<typeof salaryForPage>): Json {
  const schema: Json = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: "Phlebotomist",
    description: page.intro,
    occupationCategory: "31-9097.00 Phlebotomists",
    sameAs: [`https://www.wikidata.org/wiki/${OCCUPATION_WIKIDATA}`],
  };
  if (salary.annualMedian != null) {
    schema.estimatedSalary = {
      "@type": "MonetaryAmount",
      name: "Median annual wage",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        value: salary.annualMedian,
        unitText: "USD",
      },
    };
  }
  return schema;
}

export function placeSchema(page: KeywordPage): Json {
  const loc = page.cluster === "Geo: City-Level" ? cityLocations[page.subcluster] : undefined;
  if (loc) {
    return {
      "@context": "https://schema.org",
      "@type": "Place",
      name: loc.city,
      description: page.intro,
      containedInPlace: { "@type": "State", name: loc.state },
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: page.subcluster,
    description: page.intro,
    containedInPlace: { "@type": "Country", name: "United States" },
  };
}

export function organizationSchema(page: KeywordPage): Json {
  const employer = employerForPage(page.slug);
  const name = employer ? employer.name : SITE_NAME;
  const sameAs = employer ? [`https://www.wikidata.org/wiki/${employer.wikidataId}`] : [];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    sameAs,
    description: `Independent guide to ${name} phlebotomist jobs, including openings and pay data.`,
    disambiguatingDescription: `${SITE_NAME} is an independent job guide and is not affiliated with, endorsed by, or sponsored by ${name}.`,
  };
}

const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
  "Travel/Traveling": "TEMPORARY",
  "Part-Time": "PART_TIME",
  "PRN / Per Diem": "PER_DIEM",
  "Entry-Level / Training": "OTHER",
  "Contract": "CONTRACTOR",
  "Agency": "CONTRACTOR",
  "Overnight": "OTHER",
  "Weekend": "OTHER",
};

export function jobPostingSchema(page: KeywordPage): Json {
  const employmentType = EMPLOYMENT_TYPE_MAP[page.subcluster];
  if (!employmentType) return {};
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Phlebotomist",
    employmentType,
    occupationalCategory: "31-9097.00 Phlebotomists",
    description: `Representative profile of ${page.subcluster.toLowerCase()} phlebotomist jobs, used for informational purposes.`,
  };
}

export function breadcrumbSchema(page: KeywordPage): Json {
  const hub = CLUSTER_HUBS[page.cluster];
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
  ];
  if (hub !== `/${page.slug}`) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: CLUSTER_LABELS[page.cluster],
      item: `${SITE_URL}${hub}`,
    });
  }
  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: page.h1,
    item: `${SITE_URL}/${page.slug}`,
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function faqSchema(items: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function personSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR,
    email: CONTACT_EMAIL,
    jobTitle: "Editor",
    worksFor: { "@type": "Organization", name: SITE_NAME },
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Independent guide to phlebotomist jobs across the United States.",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function siteOrganizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/favicon-192.png`,
  };
}

export function pageSchemas(page: KeywordPage): Json[] {
  const schemas: Json[] = [faqSchema(getFaq(page)), personSchema(), breadcrumbSchema(page)];
  if (page.cluster === "Core / Head Term") {
    schemas.push(occupationSchema(page, salaryForPage(page)));
  } else if (page.cluster === "Geo: City-Level" || page.cluster === "Geo: State-Level") {
    schemas.push(placeSchema(page));
  } else if (page.cluster === "Employer-Branded") {
    schemas.push(organizationSchema(page));
  } else if (page.cluster === "Employment Type") {
    const job = jobPostingSchema(page);
    if (job.employmentType) schemas.push(job);
  }
  return schemas;
}
