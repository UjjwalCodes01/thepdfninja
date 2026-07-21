// ── Search-indexing policy ──────────────────────────────────────────────
// All tool pages carry unique, tool-specific content (intro, use-cases,
// comparison, FAQs, why-use AND a distinct security paragraph — the last of
// which was previously shared boilerplate and has since been rewritten per
// tool). With the duplicate content removed, every tool page is indexable.
//
// The NOINDEX_TOOLS set below is the lever: add a slug here to pull a page out
// of Google's index (it stays fully usable to visitors) without touching the
// page itself. It is intentionally empty — all tools are currently indexed.

export const NOINDEX_TOOLS = new Set<string>([
  // (empty) — every tool page is currently indexed.
]);

export function isToolIndexed(slug: string): boolean {
  return !NOINDEX_TOOLS.has(slug);
}
