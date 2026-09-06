import type { Metadata } from 'next';
import AdSense from '../components/AdSense';
import PostThumb from '../components/PostThumb';
import Link from 'next/link';
import StarRating from '../components/StarRating';
import ReviewForm from '../components/ReviewForm';
import { TOOLS } from '../lib/toolConfig';
import {
  getReviews,
  formatReviewDate,
  reviewDateISO,
  MIN_REVIEWS_FOR_RATING,
} from '../lib/reviews';

export const metadata: Metadata = {
  title: 'Customer Reviews — What People Say About ThePDFNinja',
  description:
    'Real reviews from people who use ThePDFNinja. Read what students, accountants, and businesses say about our free PDF tools — then leave your own.',
  alternates: { canonical: 'https://www.thepdfninja.com/reviews' },
  openGraph: {
    url: 'https://www.thepdfninja.com/reviews',
    title: 'Customer Reviews — ThePDFNinja',
    description: 'Real, unedited reviews from people who use our free PDF tools.',
  },
};

// Approvals should surface without a redeploy.
export const revalidate = 300;

export default async function ReviewsPage() {
  const { reviews, aggregate } = await getReviews();
  const showRating = aggregate.count >= MIN_REVIEWS_FOR_RATING;

  return (
    <>
      {/* No ads until there is something to read. An empty state plus a form is
          exactly the "screen without publisher-content" the Inventory value
          policy prohibits, and it is the same reason 404s carry no ads. */}
      {reviews.length > 0 && <AdSense />}
      {/* Individual reviews, attached to the SoftwareApplication declared in
          layout.tsx via @id so the entity is not duplicated. Emitted only once
          there are enough genuine reviews to be meaningful. */}
      {showRating && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              reviews.slice(0, 30).map(r => ({
                '@context': 'https://schema.org',
                '@type': 'Review',
                itemReviewed: {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://www.thepdfninja.com/#software',
                  name: 'ThePDFNinja',
                },
                author: { '@type': 'Person', name: r.name },
                datePublished: reviewDateISO(r.created_at),
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: r.rating,
                  bestRating: 5,
                  worstRating: 1,
                },
                ...(r.title ? { name: r.title } : {}),
                reviewBody: r.body,
              }))
            ),
          }}
        />
      )}

      {/* ── HEADER ── */}
      <section style={{ background: '#f3f0ec', padding: '72px 0 64px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h1 className="anim-fade-up" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4.5vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '16px' }}>
            What our users say
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: showRating ? '32px' : '0' }}>
            Every review here was written by someone who actually used the tools.
            We publish them unedited — including the critical ones.
          </p>

          {showRating && (
            <div className="anim-fade-up anim-delay-2" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '16px 26px', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1 }}>
                {aggregate.average.toFixed(1)}
              </span>
              <span style={{ width: '1px', alignSelf: 'stretch', background: 'var(--border)' }} />
              <span style={{ textAlign: 'left' }}>
                <StarRating rating={aggregate.average} size={20} label={`Average rating ${aggregate.average} out of 5`} />
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                  from {aggregate.count} {aggregate.count === 1 ? 'review' : 'reviews'}
                </span>
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: '64px 0 80px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1060px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Reviews column */}
            <div>
              {showRating && <RatingBreakdown distribution={aggregate.distribution} total={aggregate.count} />}

              {reviews.length === 0 ? (
                <div style={{ background: 'var(--bg)', border: '1px dashed var(--border)', borderRadius: 'var(--radius-lg)', padding: '48px 28px', textAlign: 'center' }}>
                  <PostThumb size={28} width={52} height={52} radius={12} style={{ margin: '0 auto 12px' }} />
                  <h2 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '8px' }}>No reviews published yet</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>
                    Be the first. If you have used any of our tools, your review will help
                    the next person decide whether to trust us with their documents.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <h2 style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
                    {aggregate.count} {aggregate.count === 1 ? 'review' : 'reviews'}
                  </h2>
                  {reviews.map(r => <ReviewCard key={r.id} review={r} />)}
                </div>
              )}
            </div>

            {/* Form column */}
            <div id="write" style={{ position: 'sticky', top: 'calc(var(--header-h) + 24px)' }}>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RatingBreakdown({ distribution, total }: { distribution: Record<string, number>; total: number }) {
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '22px 24px', marginBottom: '28px' }}>
      {[5, 4, 3, 2, 1].map(star => {
        const n = distribution[String(star)] ?? 0;
        const pct = total ? Math.round((n / total) * 100) : 0;
        return (
          <div key={star} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: star === 1 ? 0 : '9px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', width: '46px', flexShrink: 0, fontWeight: 600 }}>
              {star} star
            </span>
            <div style={{ flex: 1, height: '8px', background: 'var(--border-light)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: 'var(--orange)', borderRadius: '4px' }} />
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', width: '28px', textAlign: 'right', flexShrink: 0 }}>
              {n}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Awaited<ReturnType<typeof getReviews>>['reviews'][number] }) {
  const tool = review.tool ? TOOLS[review.tool] : undefined;

  return (
    <article style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
        <StarRating rating={review.rating} size={16} label={`${review.rating} out of 5 stars`} />
        <time dateTime={reviewDateISO(review.created_at)} style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {formatReviewDate(review.created_at)}
        </time>
      </div>

      {review.title && (
        <h3 style={{ fontWeight: 700, fontSize: '1.02rem', marginBottom: '8px', letterSpacing: '-0.01em', color: 'var(--text)' }}>
          {review.title}
        </h3>
      )}

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>
        {review.body}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border-light)', flexWrap: 'wrap' }}>
        <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', flexShrink: 0 }} aria-hidden="true">
          {review.name.trim().charAt(0).toUpperCase()}
        </span>
        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)' }}>
          {review.name}
        </span>
        {review.role && (
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>· {review.role}</span>
        )}
        {tool && (
          <Link
            href={`/tools/${tool.slug}`}
            style={{ marginLeft: 'auto', fontSize: '0.78rem', fontWeight: 600, color: 'var(--orange)', background: 'var(--orange-light)', padding: '4px 10px', borderRadius: '999px', textDecoration: 'none' }}
          >
            {tool.label}
          </Link>
        )}
      </div>
    </article>
  );
}
