// Blog articles are stored as data and rendered by app/blog/[slug]/page.tsx.
//
// The nine original posts remain hand-written page.tsx files — Next.js static
// routes take precedence over the dynamic one, so they keep rendering exactly
// as before. Everything added from here on lives here instead, because a
// hundred near-identical page components would be unmaintainable.

/** A block of article body content. */
export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string }
  | { table: { headers: string[]; rows: string[][] } }
  | { faq: { q: string; a: string }[] };

export interface BlogArticle {
  slug: string;
  title: string;
  /** Shown on the /blog index card. */
  excerpt: string;
  /** <title> — may differ from the H1 to fit search result width. */
  metaTitle: string;
  metaDescription: string;
  date: string;       // ISO
  dateLabel: string;  // human
  readMinutes: number;
  category: string;
  emoji: string;
  /** Terms this article targets. Used for the keyword coverage report,
   *  not stuffed into a meta tag — Google ignores those. */
  keywords: string[];
  blocks: Block[];
}

/**
 * Inline markup supported inside any string above:
 *   [label](/path)   → internal link
 *   **bold**         → <strong>
 * Kept deliberately small; it is rendered into real React nodes rather than
 * injected as HTML.
 */
