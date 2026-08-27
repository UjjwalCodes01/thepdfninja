// Customer reviews, served by the /v1/reviews Lambda.
//
// Only reviews a human has approved are ever returned by that endpoint, so
// anything reaching this file is safe to render.

export interface Review {
  id: string;
  rating: number;
  name: string;
  role: string;
  tool: string;
  title: string;
  body: string;
  created_at: number;
}

export interface ReviewAggregate {
  count: number;
  average: number;
  distribution: Record<string, number>;
}

export interface ReviewsPayload {
  reviews: Review[];
  aggregate: ReviewAggregate;
}

export const EMPTY_REVIEWS: ReviewsPayload = {
  reviews: [],
  aggregate: { count: 0, average: 0, distribution: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 } },
};

// Below this many reviews an average is noise, and rating markup on a
// near-empty sample reads as manipulation to Google. No stars until there
// are enough real ones to mean something.
export const MIN_REVIEWS_FOR_RATING = 3;

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.thepdfninja.com';

/**
 * Never throws. The reviews API being slow or down must not take the page
 * with it — the section just renders empty.
 */
export async function getReviews(): Promise<ReviewsPayload> {
  try {
    const res = await fetch(`${API_URL}/v1/reviews`, {
      next: { revalidate: 300 }, // 5 min — approvals show up without a redeploy
    });
    if (!res.ok) return EMPTY_REVIEWS;

    const data = await res.json();
    if (!Array.isArray(data?.reviews)) return EMPTY_REVIEWS;

    return {
      reviews: data.reviews,
      aggregate: data.aggregate ?? EMPTY_REVIEWS.aggregate,
    };
  } catch {
    return EMPTY_REVIEWS;
  }
}

export function formatReviewDate(epochSeconds: number): string {
  return new Date(epochSeconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** ISO date (YYYY-MM-DD) for schema.org datePublished. */
export function reviewDateISO(epochSeconds: number): string {
  return new Date(epochSeconds * 1000).toISOString().split('T')[0];
}
