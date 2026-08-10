export interface JobRow {
  slug?: string;
  title: string;
  employer: string;
  location: string;
  type?: string;
  pay?: string;
  posted?: string;
  source?: string;
  url: string;
  logo?: string;
  description?: string[];
}

export interface JobsFile {
  updatedAt: string | null;
  bySlug: Record<string, JobRow[]>;
}

import jobsData from "../data/jobs.json";

const jobsFile = jobsData as unknown as JobsFile;

export function jobsForSlug(slug: string): JobRow[] {
  return jobsFile.bySlug[slug] ?? [];
}

export function allJobs(): JobRow[] {
  const seen = new Set<string>();
  const out: JobRow[] = [];
  for (const job of Object.values(jobsFile.bySlug).flat()) {
    const slug = slugForJob(job);
    if (seen.has(slug)) continue;
    seen.add(slug);
    out.push(job);
  }
  return out;
}

export function slugForJob(job: JobRow): string {
  if (job.slug) return job.slug;
  const base = `${job.employer}-${job.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
  const id = (job.url.match(/jk=([a-f0-9]+)/i)?.[1] ?? job.url.match(/\/(?:view)\/(?:[^\/]+-)?(\d+)(?:\?|$)/)?.[1] ?? "job").slice(0, 12);
  return `${base}-${id}`;
}

export function jobBySlug(slug: string): JobRow | undefined {
  return allJobs().find((j) => slugForJob(j) === slug);
}
