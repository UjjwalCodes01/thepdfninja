import { Metadata } from 'next';
import Link from 'next/link';
import PostThumb from '../components/PostThumb';
import { BLOG_POSTS } from './posts';

export const metadata: Metadata = {
  title: 'PDF Guides & Tutorials | ThePDFNinja Blog',
  description: 'Practical, no-fluff guides on working with PDFs — compressing files for government forms, converting to Word without breaking formatting, PDF/A archiving, security, and more.',
  alternates: { canonical: 'https://www.thepdfninja.com/blog' },
  openGraph: {
    url: 'https://www.thepdfninja.com/blog',
    title: 'PDF Guides & Tutorials | ThePDFNinja Blog',
    description: 'Practical, no-fluff guides on compressing, converting, securing and archiving PDF files.',
    images: [{ url: 'https://www.thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'ThePDFNinja Blog' }],
  },
};

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--orange-light)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            PDF Guides &amp; Tutorials
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Clear, practical answers to the PDF problems people actually run into &mdash; written by the team that builds the tools.
          </p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section style={{ padding: '56px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>

          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="anim-fade-up" style={{ display: 'block', textDecoration: 'none', color: 'inherit', marginBottom: '40px' }}>
            <article style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', display: 'grid', gridTemplateColumns: '160px 1fr' }} className="blog-featured">
              <PostThumb size={76} />
              <div style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--orange)', background: 'var(--orange-light)', padding: '3px 10px', borderRadius: '100px' }}>{featured.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{featured.dateLabel} · {featured.readMinutes} min read</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', margin: '0 0 10px', lineHeight: 1.25 }}>{featured.title}</h2>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{featured.excerpt}</p>
              </div>
            </article>
          </Link>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="anim-fade-up" style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.15s, box-shadow 0.15s' }} className="blog-card">
                  <PostThumb size={54} height={110} />
                  <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--orange)' }}>{post.category}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>· {post.readMinutes} min</span>
                    </div>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--text)', margin: '0 0 8px', lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 14px', flex: 1 }}>{post.excerpt}</p>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--orange)' }}>Read guide →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'ThePDFNinja Blog',
            url: 'https://www.thepdfninja.com/blog',
            description: 'Practical guides and tutorials on working with PDF files.',
            blogPost: posts.map(p => ({
              '@type': 'BlogPosting',
              headline: p.title,
              url: `https://www.thepdfninja.com/blog/${p.slug}`,
              datePublished: p.date,
              description: p.excerpt,
            })),
          }),
        }}
      />

      <style>{`
        @media (max-width: 640px) {
          .blog-featured { grid-template-columns: 1fr !important; }
          .blog-featured > div:first-child { height: 120px; }
        }
        .blog-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
      `}</style>
    </>
  );
}
