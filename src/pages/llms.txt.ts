import type { APIRoute } from "astro";
import { keywords } from "../data/keywords";
import { SITE_URL } from "../config";

export const GET: APIRoute = () => {
  const top = keywords
    .filter((k) => k.cluster === "Geo: State-Level" || k.cluster === "Geo: City-Level")
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 20)
    .map((k) => `- [${k.h1}](${SITE_URL}/${k.slug}): ${k.metaDescription}`);
  const body = `# Phlebotomist Jobs

> Independent guide to phlebotomist jobs across the United States, with pay
> data by state and city, hiring requirements, and employer information.

Important URLs:
- [Home](${SITE_URL}/): Phlebotomist job openings, pay, and hiring guides.
- [Phlebotomist Jobs](${SITE_URL}/phlebotomist-jobs): Core guide to the occupation, pay, and how to get hired.
- [By State](${SITE_URL}/phlebotomist-jobs-by-state): Phlebotomist jobs by state.
- [By City](${SITE_URL}/phlebotomist-jobs-by-city): Phlebotomist jobs by city.
- [By Type](${SITE_URL}/phlebotomist-jobs-by-type): Phlebotomist jobs by employment type.
- [By Employer](${SITE_URL}/phlebotomist-jobs-by-employer): Phlebotomist jobs at major employers.
- [Jobs Near Me](${SITE_URL}/phlebotomist-jobs-near-me): Local phlebotomist job openings.

Top pages:
${top.join("\n")}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
