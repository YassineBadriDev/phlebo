import type { KeywordPage } from "../data/keywords";
import { makePageTitle } from "./title";

export interface ValidationIssue {
  slug: string;
  field: string;
  message: string;
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function checkTitle(title: string): boolean {
  return title.length <= 60;
}

export function checkMeta(meta: string): boolean {
  return meta.length <= 155;
}

export function checkSlug(slug: string): boolean {
  return SLUG_RE.test(slug);
}

export function pageIssues(page: KeywordPage): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const title = makePageTitle(page.pageTitle);
  if (title.length > 60) {
    issues.push({ slug: page.slug, field: "title", message: `title ${title.length} chars: "${title}"` });
  }
  if (page.metaDescription.length > 155) {
    issues.push({ slug: page.slug, field: "meta", message: `meta ${page.metaDescription.length} chars` });
  }
  if (!checkSlug(page.slug)) {
    issues.push({ slug: page.slug, field: "slug", message: `invalid slug: "${page.slug}"` });
  }
  if (!page.h1.trim()) {
    issues.push({ slug: page.slug, field: "h1", message: "empty H1" });
  }
  if (!page.intro.trim()) {
    issues.push({ slug: page.slug, field: "intro", message: "empty intro" });
  }
  if (page.outline.length < 3) {
    issues.push({ slug: page.slug, field: "outline", message: "outline too thin" });
  }
  return issues;
}

export function validateDataset(pages: KeywordPage[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const seen = new Set<string>();
  for (const page of pages) {
    if (seen.has(page.slug)) {
      issues.push({ slug: page.slug, field: "slug", message: "duplicate slug" });
    }
    seen.add(page.slug);
    issues.push(...pageIssues(page));
  }
  return issues;
}
