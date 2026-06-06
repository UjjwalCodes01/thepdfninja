import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'iLovePDF Alternative | Free PDF Tools without Limits | ThePDFNinja',
  description: 'Looking for a free iLovePDF or Smallpdf alternative? ThePDFNinja offers unlimited, 100% free PDF merging, compressing, and converting without accounts or limits.',
  alternates: {
    canonical: 'https://thepdfninja.com/compare/ilovepdf-alternative'
  }
};

export default function ComparePage() {
  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            The Best Free <span style={{ color: 'var(--orange)' }}>iLovePDF Alternative</span>
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 40px' }}>
            Tired of daily limits, mandatory account signups, and paid subscriptions just to merge or compress a PDF? Switch to ThePDFNinja for unlimited, genuinely free PDF tools.
          </p>
          <div className="anim-fade-up anim-delay-2">
            <Link href="/" className="btn btn-primary btn-lg">
              Explore All Free Tools
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Smallpdf vs iLovePDF vs ThePDFNinja</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg)', borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '20px', fontSize: '1.1rem' }}>Feature</th>
                  <th style={{ padding: '20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>iLovePDF / Smallpdf</th>
                  <th style={{ padding: '20px', fontSize: '1.1rem', color: 'var(--orange)' }}>ThePDFNinja</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px', fontWeight: 600 }}>Pricing</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>Freemium (Paid tiers)</td>
                  <td style={{ padding: '20px', color: '#16A34A', fontWeight: 700 }}>100% Free Forever</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px', fontWeight: 600 }}>Daily Usage Limits</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>Strict limits per day</td>
                  <td style={{ padding: '20px', color: '#16A34A', fontWeight: 700 }}>Unlimited Usage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px', fontWeight: 600 }}>Account Required</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>Yes, for advanced tools</td>
                  <td style={{ padding: '20px', color: '#16A34A', fontWeight: 700 }}>Never</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '20px', fontWeight: 600 }}>Data Retention</td>
                  <td style={{ padding: '20px', color: 'var(--text-muted)' }}>Up to 24 hours</td>
                  <td style={{ padding: '20px', color: '#16A34A', fontWeight: 700 }}>Deleted in 1 Hour</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '24px', fontSize: '2rem' }}>Ready to process your PDFs?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>Join millions of users who have already switched to the fastest free PDF platform on the web.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/merge" className="btn btn-primary btn-lg">Merge PDF</Link>
            <Link href="/tools/compress" className="btn btn-outline btn-lg">Compress PDF</Link>
            <Link href="/tools/pdf-to-word" className="btn btn-outline btn-lg">PDF to Word</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'iLovePDF Alternative',
            description: 'The best free alternative to iLovePDF and Smallpdf.',
            mainEntity: {
              '@type': 'Table',
              about: 'Comparison of PDF tool providers'
            }
          })
        }}
      />
    </>
  );
}
