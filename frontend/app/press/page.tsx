import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Press & Media Kit — ThePDFNinja',
  description: 'Press resources for ThePDFNinja: brand assets, company description, key facts, and contact information for journalists and content creators covering free PDF tools.',
  alternates: { canonical: 'https://thepdfninja.com/press' },
  openGraph: {
    url: 'https://thepdfninja.com/press',
    title: 'Press & Media Kit — ThePDFNinja',
    description: 'Brand assets, boilerplate copy, and contact for journalists covering ThePDFNinja — 65 free online PDF tools by Anaya Digital.',
  },
};

const KEY_FACTS = [
  { label: 'Founded', value: '2025' },
  { label: 'Built by', value: 'Anaya Digital Marketing Agency' },
  { label: 'Headquarters', value: 'India' },
  { label: 'Total tools', value: '65 free PDF tools' },
  { label: 'Price', value: '100% Free — no paid tiers' },
  { label: 'Account required', value: 'Never' },
  { label: 'Watermarks added', value: 'Never' },
  { label: 'Max file size', value: '100MB per file' },
  { label: 'File retention', value: 'Auto-deleted within 1 hour' },
  { label: 'Infrastructure', value: 'AWS Lambda + Next.js' },
  { label: 'Encryption', value: '256-bit AES SSL' },
  { label: 'Website', value: 'thepdfninja.com' },
];

const BOILERPLATE_SHORT = `ThePDFNinja is a free online PDF toolkit that offers 65 tools — including merge, split, compress, convert, OCR, and more — completely free, with no account required and no watermarks. Built by Anaya Digital, it runs on AWS infrastructure and permanently deletes all files within one hour.`;

const BOILERPLATE_LONG = `ThePDFNinja (thepdfninja.com) is a free online PDF platform offering 65 professional-grade tools including PDF merging, splitting, compression, format conversion (Word, Excel, PowerPoint, JPG), AI-powered OCR, password protection, and more. Unlike competitors such as Smallpdf and iLovePDF, ThePDFNinja imposes no daily usage limits, requires no account creation, and adds no watermarks to any output — for any user. ThePDFNinja was founded in 2025 by Anaya Digital Marketing Agency and is built on AWS Lambda serverless infrastructure with a Next.js frontend. All uploaded files are processed in isolated environments and permanently deleted within one hour.`;

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'ThePDFNinja Press & Media Kit',
        url: 'https://thepdfninja.com/press',
        description: 'Press resources for ThePDFNinja including brand assets, company facts, boilerplate copy, and media contact.',
        datePublished: '2025-01-01',
        dateModified: '2026-06-01',
        about: { '@type': 'Organization', name: 'ThePDFNinja', url: 'https://thepdfninja.com' },
      }) }} />

      {/* Hero */}
      <section style={{ background: 'var(--orange-light)', padding: '72px 0 52px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.04em' }}>
            Press &amp; Media Kit
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
            Resources for journalists, bloggers, and content creators covering ThePDFNinja or the free online PDF tools space.
          </p>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'grid', gap: '48px' }}>

            {/* Key Facts */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>📋 Key Facts</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {KEY_FACTS.map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '12px', padding: '16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.88rem', minWidth: '140px', flexShrink: 0 }}>{label}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Boilerplate */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>📝 Boilerplate Copy</h2>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Short (1 sentence)</p>
                <div style={{ background: 'var(--bg)', padding: '20px 24px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {BOILERPLATE_SHORT}
                </div>
              </div>

              <div>
                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Long (full paragraph)</p>
                <div style={{ background: 'var(--bg)', padding: '20px 24px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {BOILERPLATE_LONG}
                </div>
              </div>
            </div>

            {/* Brand assets */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>🎨 Brand Assets</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>Use these assets in articles, roundups, and reviews about ThePDFNinja.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  { label: 'Primary Color', value: '#F5622D (Orange)' },
                  { label: 'Background', value: '#FFFFFF (White)' },
                  { label: 'Text Color', value: '#111827 (Charcoal)' },
                  { label: 'Logo Style', value: 'Wordmark — ThePDFNinja' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ padding: '16px 20px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.82rem', marginBottom: '4px' }}>{label}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{value}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '20px', padding: '20px 24px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>OG / Social Preview Image</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                  Available at: <code style={{ background: 'var(--border)', padding: '2px 6px', borderRadius: '4px' }}>https://thepdfninja.com/og-image.png</code> (1200×630px)
                </p>
              </div>
            </div>

            {/* Coverage guidelines */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>📌 Coverage Guidelines</h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {[
                  { icon: '✅', text: 'Feel free to screenshot, review, and include ThePDFNinja in "best PDF tools" roundups' },
                  { icon: '✅', text: 'Link to thepdfninja.com — all tools are live and fully functional' },
                  { icon: '✅', text: 'The comparison table and key facts above are accurate and up-to-date as of June 2026' },
                  { icon: '✅', text: 'We welcome tutorials, YouTube walkthroughs, and how-to articles about any of our 65 tools' },
                  { icon: '❌', text: "Please don't claim ThePDFNinja charges any fees — it is and always will be 100% free" },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: '12px', padding: '14px 20px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ flexShrink: 0 }}>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{ padding: '36px', background: 'var(--orange-light)', borderRadius: 'var(--radius)', border: '1px solid rgba(245,98,45,0.2)' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>📬 Media Contact</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                For review access, interview requests, or questions about ThePDFNinja, contact us through <strong>Anaya Digital</strong>:
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://digitalanaya.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Anaya Digital →
                </a>
                <Link href="/about" className="btn btn-outline">
                  About ThePDFNinja
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
