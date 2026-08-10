import type { KeywordCluster } from "./data/keywords";

export const SITE_URL = "https://phlebotomistjobs.org";
export const SITE_NAME = "Phlebotomist Jobs";
export const SITE_AUTHOR = "Phlebotomist Jobs Team";
export const CONTACT_EMAIL = "contact@phlebotomistjobs.org";
export const LEGAL_ADDRESS = "[Address]";
export const SITE_TAGLINE = "Phlebotomist job openings, pay data, and hiring guides.";

export const OCCUPATION_WIKIDATA = "Q1454754";

export const CLUSTER_HUBS: Record<KeywordCluster, string> = {
  "Core / Head Term": "/phlebotomist-jobs",
  "Local Intent (Near Me)": "/phlebotomist-jobs-near-me",
  "Employment Type": "/phlebotomist-jobs-by-type",
  "Geo: State-Level": "/phlebotomist-jobs-by-state",
  "Geo: City-Level": "/phlebotomist-jobs-by-city",
  "Employer-Branded": "/phlebotomist-jobs-by-employer",
};

export const CLUSTER_LABELS: Record<KeywordCluster, string> = {
  "Core / Head Term": "Phlebotomist Jobs",
  "Local Intent (Near Me)": "Phlebotomist Jobs Near Me",
  "Employment Type": "Phlebotomist Jobs by Type",
  "Geo: State-Level": "Phlebotomist Jobs by State",
  "Geo: City-Level": "Phlebotomist Jobs by City",
  "Employer-Branded": "Phlebotomist Jobs by Employer",
};

export const CLUSTER_DESCRIPTIONS: Record<KeywordCluster, string> = {
  "Core / Head Term": "Guides to the phlebotomist role, pay, certification, and how to get hired.",
  "Local Intent (Near Me)": "Local phlebotomist job openings and how to find them in your area.",
  "Employment Type": "Phlebotomist jobs by schedule and hiring model, from travel to per diem.",
  "Geo: State-Level": "Phlebotomist jobs and pay by state, with live opening counts.",
  "Geo: City-Level": "Phlebotomist jobs and pay by city, with local hiring breakdowns.",
  "Employer-Branded": "Phlebotomist openings at major lab and healthcare employers.",
};
