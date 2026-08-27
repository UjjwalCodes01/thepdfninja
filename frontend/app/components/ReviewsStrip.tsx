'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import StarRating from './StarRating';
import { API_URL, MIN_REVIEWS_FOR_RATING, type ReviewsPayload } from '../lib/reviews';

// Homepage trust strip.
//
// The homepage is a client component, so this fetches on mount rather than on
// the server. That is fine here: the indexable, schema-marked copy of this
// content lives on /reviews, which is server-rendered. This is a trust signal
// for people, not for crawlers.
export default function ReviewsStrip() {
  const [data, setData] = useState<ReviewsPayload | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/v1/reviews`)
      .then(r => (r.ok ? r.json() : null))
      .then(d => {
        if (!cancelled && d && Array.isArray(d.reviews)) setData(d);
      })
      .catch(() => { /* section just stays hidden */ });
    return () => { cancelled = true; };
  }, []);

  // Nothing to brag about yet — render nothing rather than an empty shell.
  if (!data || data.aggregate.count < MIN_REVIEWS_FOR_RATING) return null;

  const { reviews, aggregate } = data;
  const featured = reviews.slice(0, 3);

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p className="section-label">Reviews</p>
          <h2 className="section-title">Trusted by people who needed it to just work</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
            <StarRating rating={aggregate.average} size={20} label={`Average rating ${aggregate.average} out of 5`} />
            <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {aggregate.average.toFixed(1)} out of 5
            </span>
            <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              · {aggregate.count} {aggregate.count === 1 ? 'review' : 'reviews'}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {featured.map(r => (
            <figure key={r.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <StarRating rating={r.rating} size={15} label={`${r.rating} out of 5 stars`} />
              {r.title && (
                <h3 style={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.01em', margin: 0 }}>{r.title}</h3>
              )}
              <blockquote style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {r.body.length > 220 ? `${r.body.slice(0, 220).trimEnd()}…` : r.body}
              </blockquote>
              <figcaption style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.78rem', flexShrink: 0 }} aria-hidden="true">
                  {r.name.trim().charAt(0).toUpperCase()}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{r.name}</span>
                {r.role && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>· {r.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reviews" className="btn btn-outline">Read all {aggregate.count} reviews</Link>
          <Link href="/reviews#write" className="btn btn-primary">Write a review</Link>
        </div>
      </div>
    </section>
  );
}
