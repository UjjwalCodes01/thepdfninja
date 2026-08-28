import Link from 'next/link';
import PostThumb from '../components/PostThumb';
import { BLOG_POSTS, ALL_BLOG_POSTS } from './posts';
import AdSense from '../components/AdSense';

interface ArticleShellProps {
  slug: string;
  children: React.ReactNode;
  /** Scheduled articles carry noindex, so they must not load ads. */
  showAds?: boolean;
}

// Shared chrome for blog articles: breadcrumb hero, prose container, author line,
// a soft CTA, "related reads", and Article + Breadcrumb JSON-LD. Keeps every post
// consistent and lets each page file be almost pure written content.
export default function ArticleShell({ slug, children, showAds = true }: ArticleShellProps) {
  // ALL_BLOG_POSTS so scheduled articles still render with full chrome.
  const post = ALL_BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <>{children}</>;

  // Related reads must only ever link to live posts.
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);
  const url = `https://www.thepdfninja.com/blog/${slug}`;

  return (
    <>
      {showAds && <AdSense />}

      {/* ── HERO ── */}
      <section style={{ background: 'var(--orange-light)', padding: '52px 0 36px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
            {' / '}
            <span style={{ color: 'var(--text-secondary)' }}>{post.category}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--orange)', background: 'white', padding: '4px 12px', borderRadius: '100px' }}>{post.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{post.dateLabel} · {post.readMinutes} min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* ── BODY ── */}
      <article style={{ padding: '48px 0 64px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="prose">
            {children}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '48px', background: 'var(--orange-light)', border: '1px solid rgba(245,98,45,0.2)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', margin: '0 0 8px' }}>Try it free — no signup</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '0 0 18px' }}>
              Every ThePDFNinja tool is free, watermark-free, and deletes your files within an hour.
            </p>
            <Link href="/tools" className="btn btn-primary" style={{ padding: '12px 28px' }}>Explore all PDF tools →</Link>
          </div>
        </div>
      </article>

      {/* ── RELATED ── */}
      <section style={{ padding: '56px 0 72px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '32px' }}>Related reads</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                <PostThumb size={34} height={56} width={56} radius={10} style={{ marginBottom: '12px' }} />
                <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--orange)' }}>{p.category}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', margin: '6px 0 0', lineHeight: 1.3 }}>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              url,
              datePublished: post.date,
              dateModified: post.date,
              author: { '@type': 'Organization', name: 'ThePDFNinja' },
              publisher: {
                '@type': 'Organization',
                name: 'ThePDFNinja',
                logo: { '@type': 'ImageObject', url: 'https://www.thepdfninja.com/og-image.png' },
              },
              mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thepdfninja.com' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.thepdfninja.com/blog' },
                { '@type': 'ListItem', position: 3, name: post.title, item: url },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
