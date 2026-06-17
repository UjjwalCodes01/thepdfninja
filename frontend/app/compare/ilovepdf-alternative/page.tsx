import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Free iLovePDF Alternative 2025 — No Limits, No Account | ThePDFNinja',
  description: 'Looking for a free iLovePDF alternative with no daily limits? ThePDFNinja offers all 56 PDF tools 100% free — merge, compress, convert, OCR — no account, no watermarks.',
  alternates: { canonical: 'https://thepdfninja.com/compare/ilovepdf-alternative' },
  openGraph: {
    url: 'https://thepdfninja.com/compare/ilovepdf-alternative',
    title: 'Best Free iLovePDF Alternative 2025 — ThePDFNinja',
    description: 'ThePDFNinja vs iLovePDF: unlimited free PDF tools, no account required, no watermarks. The best free iLovePDF alternative available.',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'ThePDFNinja — Free iLovePDF Alternative' }],
  },
};

const COMPARE_ROWS = [
  { feature: 'Price', them: 'Freemium — paid tiers required for full access', us: '100% Free Forever' },
  { feature: 'Daily task limit', them: 'Strict limits (2–5 per day free)', us: 'Unlimited — no limits ever' },
  { feature: 'Account required', them: 'Yes — email required for many tools', us: 'Never — zero signup' },
  { feature: 'Watermarks on output', them: 'Added on free plan for some tools', us: 'Never — zero watermarks' },
  { feature: 'File auto-deletion', them: 'Up to 24 hours', us: 'Within 1 hour' },
  { feature: 'Max file size (any tier)', them: 'Up to 4GB (on Premium plans)', us: 'Strict 100MB limit per file' },
  { feature: 'Offline support', them: 'Desktop & Mobile apps available', us: 'No — Web-only (requires internet)' },
  { feature: 'Cloud integrations', them: 'Direct Google Drive & Dropbox sync', us: 'No — Manual upload/download only' },
  { feature: 'OCR / AI tools', them: 'Available (some paid)', us: '100% free — AWS Textract AI' },
  { feature: 'PDF to Word', them: 'Available', us: '100% free — LibreOffice engine' },
  { feature: 'Total free tools', them: '25 (many restricted)', us: '65 (all completely free)' },
  { feature: 'Open source backend', them: 'Proprietary', us: 'Ghostscript + LibreOffice' },
];

const TOOLS = [
  { slug: 'merge', label: 'Merge PDF' },
  { slug: 'compress', label: 'Compress PDF' },
  { slug: 'pdf-to-word', label: 'PDF to Word' },
  { slug: 'split', label: 'Split PDF' },
  { slug: 'pdf-to-jpg', label: 'PDF to JPG' },
  { slug: 'ocr', label: 'OCR PDF' },
];

export default function IlovepdfAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Best Free iLovePDF Alternative — ThePDFNinja',
              description: 'ThePDFNinja is the best free iLovePDF alternative with no daily limits, no account required, and no watermarks on any of its 65 PDF tools.',
              url: 'https://thepdfninja.com/compare/ilovepdf-alternative',
              datePublished: '2025-01-01',
              dateModified: '2026-06-01',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepdfninja.com' },
                  { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://thepdfninja.com/compare' },
                  { '@type': 'ListItem', position: 3, name: 'iLovePDF Alternative', item: 'https://thepdfninja.com/compare/ilovepdf-alternative' },
                ],
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'Is ThePDFNinja a good free alternative to iLovePDF?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. ThePDFNinja offers all 65 PDF tools completely free with no daily limits, no account creation, and no watermarks — making it a superior free alternative to iLovePDF for most users.' } },
                { '@type': 'Question', name: 'What is the main difference between iLovePDF and ThePDFNinja?', acceptedAnswer: { '@type': 'Answer', text: 'iLovePDF uses a freemium model with daily task limits and requires account creation for advanced tools. ThePDFNinja is 100% free, unlimited, and never requires an account for any tool.' } },
                { '@type': 'Question', name: 'Does ThePDFNinja add watermarks like some iLovePDF alternatives?', acceptedAnswer: { '@type': 'Answer', text: 'No. ThePDFNinja never adds watermarks to your files. All 65 tools are completely free and watermark-free — no upgrade required.' } },
              ],
            },
          ]),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'var(--orange-light)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>
            iLovePDF Alternative · 2025
          </p>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            The Best Free <span style={{ color: 'var(--orange)' }}>iLovePDF Alternative</span><br />with No Limits
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 24px' }}>
            iLovePDF restricts free users to a handful of tasks per day and requires account creation for advanced tools. <strong>ThePDFNinja gives you all 65 PDF tools for free — unlimited, no account, no watermarks.</strong>
          </p>
          <div className="anim-fade-up anim-delay-1" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '12px 18px', maxWidth: '640px', margin: '0 auto 28px', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div><strong>Transparency Disclosure:</strong> This comparison is created and maintained by the creators of <strong>ThePDFNinja</strong>.</div>
            <div style={{ lineHeight: 1.4 }}>We designed our service to address common limits and paywalls. While we strive to maintain accurate competitor specs, we recommend visiting each provider's official site to evaluate their current tiers and terms yourself.</div>
          </div>
          <div className="anim-fade-up anim-delay-2" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools" className="btn btn-primary btn-lg">Try ThePDFNinja Free →</Link>
            <Link href="/tools/merge" className="btn btn-outline btn-lg">Merge PDF</Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: 'var(--orange)', padding: '22px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { stat: '65', label: 'Free Tools' },
              { stat: '0', label: 'Daily Limits' },
              { stat: '0', label: 'Account Required' },
              { stat: '0', label: 'Watermarks' },
              { stat: '100MB', label: 'Max File Size' },
              { stat: '1 hr', label: 'Auto-Delete' },
            ].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '6px 28px', borderRight: i < 5 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
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
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '12px' }}>Head-to-head comparison</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>iLovePDF vs ThePDFNinja</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Every feature you care about, side by side.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--text)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>Feature</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: 'var(--text-muted)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>iLovePDF (Free)</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center', fontWeight: 700, color: 'white', background: 'var(--orange)', borderBottom: '2px solid var(--orange)' }}>ThePDFNinja ⭐</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(({ feature, them, us }, i) => (
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
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>Why switch from iLovePDF?</h2>
          </div>
          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              { title: 'No daily limits — ever', body: "iLovePDF's free plan caps you at a handful of tasks per day. ThePDFNinja has no usage limits whatsoever. Process 100 PDFs today, 1000 tomorrow — it's the same: free and unlimited." },
              { title: 'Zero account creation', body: "iLovePDF requires you to create an account and verify your email to unlock certain tools. ThePDFNinja never asks for your email, name, or any personal information. Just upload and go." },
              { title: 'No watermarks on any file', body: "Some iLovePDF free-plan outputs include watermarks or branding. ThePDFNinja never adds watermarks, logos, or any markings to your documents — on any tool, for any user." },
              { title: 'Faster file deletion', body: "ThePDFNinja automatically and permanently deletes your files within 1 hour of processing — faster than most competitors. Your sensitive documents don't linger on our servers." },
              { title: 'Powered by trusted open-source tools', body: "Our backend uses Ghostscript and LibreOffice — the same engines trusted by enterprises worldwide — plus AWS Textract for AI-powered OCR. Enterprise-grade processing, completely free." },
            ].map(({ title, body }) => (
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
          {[
            { q: 'Is ThePDFNinja a good free alternative to iLovePDF?', a: 'Yes. ThePDFNinja offers all 65 PDF tools completely free with no daily limits, no account creation, and no watermarks — making it the best free alternative to iLovePDF for the vast majority of users.' },
            { q: 'What is the main difference between iLovePDF and ThePDFNinja?', a: 'iLovePDF uses a freemium model with daily task limits and requires account creation for advanced tools. ThePDFNinja is 100% free, unlimited, and never requires an account for any tool.' },
            { q: 'Does ThePDFNinja add watermarks?', a: 'No. ThePDFNinja never adds watermarks to your files. All 65 tools are completely free and watermark-free — no upgrade required.' },
            { q: 'Can ThePDFNinja do everything iLovePDF can?', a: 'ThePDFNinja covers all the most popular PDF tasks: merge, split, compress, convert to/from Word/Excel/PPT/JPG, rotate, watermark, protect, unlock, OCR, and more — all 100% free with no limits.' },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: '1px solid var(--border)' }}>
              <summary style={{ fontWeight: 600, fontSize: '0.95rem', padding: '18px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                <span>{q}</span>
                <span style={{ color: 'var(--orange)', fontSize: '1.2rem' }}>+</span>
              </summary>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, paddingBottom: '18px' }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--orange)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '16px' }}>Try the best iLovePDF alternative now</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '32px' }}>No account. No limits. No watermarks. All 65 PDF tools, completely free.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {TOOLS.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`} style={{ background: 'white', color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem', padding: '12px 22px', borderRadius: '8px', textDecoration: 'none' }}>
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
