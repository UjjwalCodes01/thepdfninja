import { Metadata } from 'next';
import Link from 'next/link';

// ─── Shared Compare Page Component ───────────────────────────────────────────
// Used by: smallpdf-alternative, pdf24-alternative, adobe-alternative pages

export interface ComparePageProps {
  metadata: Metadata;
  competitor: string;                  // "Smallpdf"
  slug: string;                        // "smallpdf-alternative"
  headline: string;                    // displayed H1 (after "The Best Free")
  hook: string;                        // one sentence pain-point
  statsBar: { stat: string; label: string }[];
  compareRows: { feature: string; them: string; us: string }[];
  whySwitchItems: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  tools: { slug: string; label: string }[];
  faqSchema: object[];
}

export default function ComparePage({
  competitor,
  slug,
  headline,
  hook,
  statsBar,
  compareRows,
  whySwitchItems,
  faqs,
  ctaHeadline,
  tools,
  faqSchema,
}: ComparePageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org', '@type': 'WebPage',
          name: `Best Free ${competitor} Alternative — ThePDFNinja`,
          url: `https://thepdfninja.com/compare/${slug}`,
          datePublished: '2025-01-01', dateModified: '2026-06-01',
          breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepdfninja.com' },
            { '@type': 'ListItem', position: 2, name: `${competitor} Alternative`, item: `https://thepdfninja.com/compare/${slug}` },
          ]},
        },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema },
      ]) }} />

      {/* Hero */}
      <section style={{ background: 'var(--orange-light)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>{competitor} Alternative · 2025</p>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            The Best Free <span style={{ color: 'var(--orange)' }}>{headline}</span>
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 24px' }}>{hook}</p>
          <div className="anim-fade-up anim-delay-1" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 18px', maxWidth: '640px', margin: '0 auto 28px', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div><strong>Transparency Disclosure:</strong> This comparison is created and maintained by the creators of <strong>ThePDFNinja</strong>.</div>
            <div style={{ lineHeight: 1.4 }}>We designed our service to address common limits and paywalls. While we strive to maintain accurate competitor specs, we recommend visiting each provider's official site to evaluate their current tiers and terms yourself.</div>
          </div>
          <div className="anim-fade-up anim-delay-2" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools" className="btn btn-primary btn-lg">Try ThePDFNinja Free →</Link>
            <Link href={`/tools/${tools[0].slug}`} className="btn btn-outline btn-lg">{tools[0].label}</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'var(--orange)', padding: '22px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {statsBar.map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '6px 28px', borderRight: i < statsBar.length - 1 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>{s.stat}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>{competitor} vs ThePDFNinja</h2>
            <p style={{ color: 'var(--text-muted)' }}>Feature-by-feature, side by side.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: 'var(--text-muted)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>{competitor} (Free)</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: 'white', background: 'var(--orange)', borderBottom: '2px solid var(--orange)' }}>ThePDFNinja ⭐</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(({ feature, them, us }, i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? 'white' : 'var(--bg)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>{feature}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{them}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 700, color: '#16A34A', borderBottom: '1px solid var(--border)', background: 'rgba(245,98,45,0.04)' }}>{us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Why users switch from {competitor}</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {whySwitchItems.map(({ title, body }) => (
              <div key={title} style={{ background: 'white', padding: '28px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text)' }}>✓ {title}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.92rem' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Frequently Asked Questions</h2>
          {faqs.map(({ q, a }) => (
            <details key={q} style={{ borderBottom: '1px solid var(--border)' }}>
              <summary style={{ fontWeight: 600, fontSize: '0.95rem', padding: '18px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <span>{q}</span><span style={{ color: 'var(--orange)', fontSize: '1.2rem' }}>+</span>
              </summary>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, paddingBottom: '18px' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '16px' }}>{ctaHeadline}</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '32px' }}>No account. No limits. No watermarks. All 56 PDF tools, completely free.</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {tools.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`} style={{ background: 'white', color: 'var(--orange)', fontWeight: 700, fontSize: '0.88rem', padding: '11px 20px', borderRadius: '8px', textDecoration: 'none' }}>
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
