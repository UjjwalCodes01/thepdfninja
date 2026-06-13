import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Free Online PDF Tools 2025 — No Account, No Limits | ThePDFNinja',
  description: 'The 10 best free online PDF tools in 2025. Reviewed and compared: ThePDFNinja, iLovePDF, Smallpdf, PDF24, and more. Find the best free PDF editor with no account required.',
  alternates: { canonical: 'https://thepdfninja.com/blog/best-free-pdf-tools' },
  openGraph: {
    url: 'https://thepdfninja.com/blog/best-free-pdf-tools',
    title: 'Best Free Online PDF Tools 2025 — Reviewed & Compared',
    description: 'The definitive 2025 guide to the best free PDF tools — no account, no limits. Compare ThePDFNinja, Smallpdf, iLovePDF, PDF24, and Adobe.',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'Best Free PDF Tools 2025' }],
  },
};

const TOOLS_REVIEWED = [
  {
    rank: 1,
    name: 'ThePDFNinja',
    url: '/',
    badge: '🏆 Best Overall',
    badgeColor: '#16A34A',
    verdict: 'Best free PDF toolkit — no limits, no account',
    score: '9.8/10',
    free: '100% Free',
    limit: 'None',
    account: 'Never',
    tools: '23',
    pros: ['All 23 tools completely free', 'No daily limits whatsoever', 'No account or email required', 'Zero watermarks on any output', '100MB file size limit', 'Files deleted in 1 hour', 'AWS-powered processing'],
    cons: ['Smaller brand name vs incumbents'],
    summary: 'ThePDFNinja is the most generous free PDF platform available. Every tool — from basic merge/split to AI OCR — is genuinely free with zero restrictions. No account, no watermarks, no daily caps. Built on AWS infrastructure with sub-10-second processing for most tasks.',
    cta: { label: 'Try ThePDFNinja Free', href: '/tools' },
  },
  {
    rank: 2,
    name: 'PDF24',
    url: 'https://pdf24.org',
    badge: '✅ Runner-up',
    badgeColor: '#2563EB',
    verdict: 'Good free option, cluttered interface',
    score: '8.2/10',
    free: 'Free (ad-supported)',
    limit: 'None',
    account: 'Not required',
    tools: '25+',
    pros: ['Many tools available', 'No account needed', 'Desktop app available'],
    cons: ['Cluttered, dated interface', 'Heavy ads', 'Inconsistent file limits', 'Slower processing'],
    summary: 'PDF24 is a solid free option with a large tool set. However, its interface is cluttered and ad-heavy, and processing speeds lag behind modern cloud-native alternatives.',
    cta: null,
  },
  {
    rank: 3,
    name: 'iLovePDF',
    url: 'https://ilovepdf.com',
    badge: '⚠️ Freemium',
    badgeColor: '#D97706',
    verdict: 'Freemium — limits unless you pay',
    score: '7.5/10',
    free: 'Limited (paid tiers)',
    limit: '2–5/day',
    account: 'Required for some tools',
    tools: '25 (restricted)',
    pros: ['Good UI design', 'Large tool catalog', 'Mobile app available'],
    cons: ['Daily task limits on free plan', 'Account required for advanced tools', 'Watermarks on some free outputs', 'Paid subscription needed for full access'],
    summary: 'iLovePDF has a polished interface but the free plan is significantly restricted with daily limits and account requirements. Worth paying for, but not genuinely free.',
    cta: null,
  },
  {
    rank: 4,
    name: 'Smallpdf',
    url: 'https://smallpdf.com',
    badge: '⚠️ Freemium',
    badgeColor: '#D97706',
    verdict: 'Only 2 free tasks per day',
    score: '6.8/10',
    free: '2 tasks/day only',
    limit: '2/day',
    account: 'Required',
    tools: '21 (many paywalled)',
    pros: ['Clean design', 'Strong mobile experience', 'E-signature tool'],
    cons: ['Only 2 free tasks per day', 'Account mandatory', '5MB file cap on some tools free', 'OCR requires Pro plan ($9/mo)'],
    summary: "Smallpdf has beautiful design but the 2-task daily limit makes it impractical for most free users. OCR — a key feature — is Pro-only. The free plan is essentially a trial.",
    cta: null,
  },
  {
    rank: 5,
    name: 'Adobe Acrobat Online',
    url: 'https://acrobat.adobe.com',
    badge: '💼 Premium Brand',
    badgeColor: '#7C3AED',
    verdict: 'Trusted brand, heavy restrictions for free',
    score: '6.0/10',
    free: 'Very limited',
    limit: 'Strict',
    account: 'Required (Adobe ID)',
    tools: 'Few (free)',
    pros: ['Most trusted PDF brand', 'Excellent quality', 'Deep Microsoft Office integration'],
    cons: ['Adobe ID required', 'Very few free tools', 'Most features require Acrobat Pro subscription ($19.99/mo)', 'No bulk processing free'],
    summary: "Adobe Acrobat is the gold standard in PDF technology, but the free online tools are heavily restricted. Expect the free tier to push you toward a $19.99/month subscription.",
    cta: null,
  },
];

export default function BestFreePdfToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Best Free Online PDF Tools 2025 — No Account, No Limits',
          description: 'The definitive 2025 guide to the best free PDF tools online. Reviewed and compared: ThePDFNinja, iLovePDF, Smallpdf, PDF24, and Adobe Acrobat.',
          url: 'https://thepdfninja.com/blog/best-free-pdf-tools',
          datePublished: '2025-06-01',
          dateModified: '2026-06-13',
          author: { '@type': 'Organization', name: 'ThePDFNinja', url: 'https://thepdfninja.com' },
          publisher: { '@type': 'Organization', name: 'ThePDFNinja', logo: { '@type': 'ImageObject', url: 'https://thepdfninja.com/og-image.png' } },
          image: 'https://thepdfninja.com/og-image.png',
          mainEntityOfPage: 'https://thepdfninja.com/blog/best-free-pdf-tools',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Best Free Online PDF Tools 2025',
          description: 'The top 5 free PDF tools online, reviewed and ranked.',
          numberOfItems: TOOLS_REVIEWED.length,
          itemListElement: TOOLS_REVIEWED.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: t.name,
            description: t.summary,
            url: t.url.startsWith('/') ? `https://thepdfninja.com${t.url}` : t.url,
          })),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is the best free PDF tool in 2025?', acceptedAnswer: { '@type': 'Answer', text: 'ThePDFNinja is the best free PDF tool in 2025. It offers 23 tools completely free with no daily limits, no account required, and no watermarks — outperforming competitors like Smallpdf (2 tasks/day limit) and iLovePDF (account required).' } },
            { '@type': 'Question', name: 'Which free PDF tool has no daily limit?', acceptedAnswer: { '@type': 'Answer', text: 'ThePDFNinja and PDF24 both have no daily task limits. However, ThePDFNinja offers a faster, modern cloud-native interface while PDF24 is ad-heavy and slower.' } },
            { '@type': 'Question', name: 'Can I use PDF tools online without creating an account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ThePDFNinja and PDF24 both work without creating an account. ThePDFNinja is recommended as it never requires an account for any of its 23 tools.' } },
            { '@type': 'Question', name: 'What is the best free alternative to Adobe Acrobat?', acceptedAnswer: { '@type': 'Answer', text: 'ThePDFNinja is the best free alternative to Adobe Acrobat for online PDF tasks. It covers the most common operations (merge, split, compress, convert, OCR) for free with no account, versus Adobe\'s $19.99/month Acrobat Pro subscription.' } },
          ],
        },
      ]) }} />

      {/* Hero */}
      <section style={{ background: 'var(--orange-light)', padding: '72px 0 52px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>Reviewed · June 2025 · Updated June 2026</p>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Best Free Online PDF Tools 2025 —<br />
            <span style={{ color: 'var(--orange)' }}>No Account, No Daily Limits</span>
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
            We tested 5 of the most popular free PDF tools online so you don&rsquo;t have to. Here&rsquo;s our honest, side-by-side ranking for 2025.
          </p>
        </div>
      </section>

      {/* Quick verdict table */}
      <section style={{ padding: '64px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>Quick Comparison</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px' }}>All major free PDF tools, ranked by generosity for free users.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg)' }}>
                  {['Rank', 'Tool', 'Score', 'Daily Limit', 'Account', 'Watermarks', 'Free Tools'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: h === 'Rank' || h === 'Score' ? 'center' : 'left', fontWeight: 700, borderBottom: '2px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TOOLS_REVIEWED.map((t, i) => (
                  <tr key={t.name} style={{ background: i % 2 === 0 ? 'white' : 'var(--bg)' }}>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 800, color: i === 0 ? 'var(--orange)' : 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>#{t.rank}</td>
                    <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text)' }}>{t.name}</span>{' '}
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '100px', background: t.badgeColor + '18', color: t.badgeColor }}>{t.badge}</span>
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 700, color: i === 0 ? '#16A34A' : 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{t.score}</td>
                    <td style={{ padding: '12px 16px', color: t.limit === 'None' ? '#16A34A' : '#D97706', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>{t.limit}</td>
                    <td style={{ padding: '12px 16px', color: t.account === 'Never' || t.account === 'Not required' ? '#16A34A' : '#D97706', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>{t.account}</td>
                    <td style={{ padding: '12px 16px', color: i === 0 ? '#16A34A' : '#D97706', fontWeight: 600, borderBottom: '1px solid var(--border)' }}>{i === 0 ? '✅ Never' : i === 1 ? '✅ None' : '⚠️ Some'}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{t.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individual reviews */}
      <section style={{ padding: '32px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>In-Depth Reviews</h2>
          <div style={{ display: 'grid', gap: '32px' }}>
            {TOOLS_REVIEWED.map((t, i) => (
              <div key={t.name} id={`review-${t.name.toLowerCase().replace(/\s/g, '-')}`} style={{ background: 'white', borderRadius: 'var(--radius)', border: i === 0 ? '2px solid var(--orange)' : '1px solid var(--border)', overflow: 'hidden' }}>
                <div style={{ padding: '8px 20px', background: i === 0 ? 'var(--orange)' : 'var(--bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: i === 0 ? 'white' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>#{t.rank} — {t.badge}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 800, color: i === 0 ? 'white' : '#16A34A' }}>{t.score}</span>
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px', color: 'var(--text)' }}>{t.name}</h3>
                      <p style={{ color: 'var(--orange)', fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{t.verdict}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {[
                        { label: 'Free', value: t.free },
                        { label: 'Limit', value: t.limit },
                      ].map(b => (
                        <div key={b.label} style={{ textAlign: 'center', padding: '8px 14px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{b.label}</div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>{b.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.93rem', marginBottom: '20px' }}>{t.summary}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>✓ Pros</p>
                      {t.pros.map(p => <p key={p} style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', margin: '0 0 4px', lineHeight: 1.5 }}>• {p}</p>)}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>✗ Cons</p>
                      {t.cons.map(c => <p key={c} style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', margin: '0 0 4px', lineHeight: 1.5 }}>• {c}</p>)}
                    </div>
                  </div>
                  {t.cta && (
                    <Link href={t.cta.href} className="btn btn-primary">{t.cta.label} →</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>Frequently Asked Questions</h2>
          {[
            { q: 'What is the best free PDF tool in 2025?', a: "ThePDFNinja is the best free PDF tool in 2025. It offers 23 tools completely free with no daily limits, no account required, and no watermarks — outperforming competitors like Smallpdf (2 tasks/day limit) and iLovePDF (account required for some tools)." },
            { q: 'Which free PDF tool has no daily limit?', a: "ThePDFNinja and PDF24 both have no daily task limits. ThePDFNinja is recommended over PDF24 for its faster, modern cloud-native interface and consistent 100MB file limits across all tools." },
            { q: 'Can I use PDF tools online without creating an account?', a: "Yes. ThePDFNinja never requires an account for any of its 23 tools. PDF24 also works without an account, though its interface is more cluttered. Smallpdf and iLovePDF require accounts for some features." },
            { q: 'What is the best free alternative to Adobe Acrobat?', a: "ThePDFNinja is the best free alternative to Adobe Acrobat for online PDF tasks — covering merge, split, compress, convert, and OCR for free, vs. Adobe's $19.99/month Acrobat Pro." },
            { q: 'Is there a free PDF to Word converter with no watermarks?', a: "Yes. ThePDFNinja's PDF to Word converter is completely free, produces full-quality DOCX files, and never adds any watermarks — no account required." },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: '1px solid var(--border)' }}>
              <summary style={{ fontWeight: 600, fontSize: '0.95rem', padding: '18px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <span>{q}</span><span style={{ color: 'var(--orange)', fontSize: '1.2rem' }}>+</span>
              </summary>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, paddingBottom: '18px' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '16px' }}>Ready to try the #1 free PDF toolkit?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '32px' }}>ThePDFNinja — 23 tools, no account, no limits, no watermarks.</p>
          <Link href="/tools" className="btn btn-lg" style={{ background: 'white', color: 'var(--orange)', fontWeight: 800 }}>
            Explore All 23 Tools →
          </Link>
        </div>
      </section>
    </>
  );
}
