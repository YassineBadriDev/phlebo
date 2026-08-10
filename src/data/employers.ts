export interface EmployerEntity {
  key: string;
  name: string;
  wikidataId: string;
}

export const employers: EmployerEntity[] = [
  { key: "labcorp", name: "LabCorp", wikidataId: "Q6466630" },
  { key: "american-red-cross", name: "American Red Cross", wikidataId: "Q470110" },
  { key: "kaiser", name: "Kaiser Permanente", wikidataId: "Q1721601" },
  { key: "quest", name: "Quest Diagnostics", wikidataId: "Q7271456" },
];

export function employerForPage(slug: string): EmployerEntity | undefined {
  if (slug.includes("labcorp")) return employers.find((e) => e.key === "labcorp");
  if (slug.includes("american-red-cross")) return employers.find((e) => e.key === "american-red-cross");
  if (slug.includes("kaiser")) return employers.find((e) => e.key === "kaiser");
  if (slug.includes("quest")) return employers.find((e) => e.key === "quest");
  return undefined;
}
