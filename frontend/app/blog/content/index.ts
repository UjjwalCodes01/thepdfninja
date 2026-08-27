import type { BlogArticle } from './types';
import { problemsArticles } from './problems';
import { indiaArticles } from './india';
import { formatsArticles } from './formats';
import { comparisonsArticles } from './comparisons';
import { personasArticles } from './personas';
import { troubleshootingArticles } from './troubleshooting';

export type { BlogArticle, Block } from './types';

/** Every article, including ones dated in the future. */
export const ALL_ARTICLES: BlogArticle[] = [
  ...problemsArticles,
  ...indiaArticles,
  ...formatsArticles,
  ...comparisonsArticles,
  ...personasArticles,
  ...troubleshootingArticles,
];

/**
 * An article whose `date` is in the future is scheduled, not live: it is kept
 * out of the index, the sitemap and related-reads, and its page carries
 * noindex until the date passes. This staggers publication so a large content
 * set does not land on search engines as a single dump.
 *
 * Evaluated per render. The blog index, sitemap and article pages all
 * revalidate, so a post goes live on its date with no redeploy.
 */
export function isPublished(a: BlogArticle, now = new Date()): boolean {
  return new Date(a.date) <= now;
}

/** Live articles only — what the index and sitemap should show. */
export const ARTICLES: BlogArticle[] = ALL_ARTICLES.filter(a => isPublished(a));

const BY_SLUG = new Map(ALL_ARTICLES.map(a => [a.slug, a]));

export function getArticle(slug: string): BlogArticle | undefined {
  return BY_SLUG.get(slug);
}

/** Every keyword this content set targets — used by scripts/keyword_report.py. */
export function allKeywords(): string[] {
  return [...new Set(ALL_ARTICLES.flatMap(a => a.keywords))].sort();
}

/** Scheduled but not yet live. */
export function upcomingArticles(): BlogArticle[] {
  return ALL_ARTICLES.filter(a => !isPublished(a)).sort((a, b) => a.date.localeCompare(b.date));
}
