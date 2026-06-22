import { notFound } from 'next/navigation';
import { TOOLS } from '../../lib/toolConfig';
import ToolPageClient from '../[tool]/ToolPageClient';
import ToolIcon from '../../components/ToolIcon';
import AdUnit from '../../components/AdUnit';

export const dynamicParams = false;

const VALID_SIZES = ['100kb', '200kb', '500kb', '1mb', '2mb'];

export function generateStaticParams() {
  return VALID_SIZES.map(size => ({ size }));
}

export async function generateMetadata({ params }: { params: Promise<{ size: string }> }) {
  const resolvedParams = await params;
  if (!VALID_SIZES.includes(resolvedParams.size)) return { title: 'Not Found' };
  
  const sizeUpper = resolvedParams.size.toUpperCase();
  return {
    title: `Compress PDF to ${sizeUpper} Free Online | No Signup | ThePDFNinja`,
    description: `Free online tool to compress PDF to exactly ${sizeUpper}. Best for Indian government forms, UPSC, NEET, and bank applications. No signup, no watermark.`,
    alternates: {
      canonical: `https://www.thepdfninja.com/tools/compress-pdf-to-${resolvedParams.size}`
    },
    openGraph: {
      url: `https://www.thepdfninja.com/tools/compress-pdf-to-${resolvedParams.size}`,
      title: `Compress PDF to ${sizeUpper} Free Online | No Signup | ThePDFNinja`,
      description: `Free online tool to compress PDF to exactly ${sizeUpper}. Best for Indian government forms, UPSC, NEET, and bank applications. No signup, no watermark.`,
      images: [
        {
          url: `https://www.thepdfninja.com${TOOLS['compress'].ninjaImage}`,
          width: 1200,
          height: 630,
          alt: `Free Compress PDF to ${sizeUpper} Online \u2013 ThePDFNinja`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://www.thepdfninja.com${TOOLS['compress'].ninjaImage}`],
    },
  };
}

export default async function CompressTargetPage({ params }: { params: Promise<{ size: string }> }) {
  const resolvedParams = await params;
  if (!VALID_SIZES.includes(resolvedParams.size)) notFound();

  const t = TOOLS['compress'];
  const sizeUpper = resolvedParams.size.toUpperCase();

  return (
    <>
      {/* ── TOOL HEADER ── */}
      <section style={{ background: 'var(--orange-light)', padding: '64px 0 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="anim-fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'white', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--orange)', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ transform: 'scale(0.5)', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-8px' }}>
                <ToolIcon tool="compress" size={48} />
              </div>
              Optimize
            </div>
          </div>
          <h1 className="anim-fade-up anim-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Free Compress PDF to {sizeUpper} Online
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Instantly shrink your PDF file size to {sizeUpper} or less while maintaining high visual quality. Perfect for strict government forms, UPSC, NEET, and university applications.
          </p>
        </div>
      </section>

      {/* ── WORKSPACE ── */}
      <section style={{ padding: '64px 0', background: 'var(--bg)', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="anim-fade-up anim-delay-2" style={{ marginBottom: '32px' }}>
            <AdUnit slot="top-leaderboard" type="leaderboard" />
          </div>

          <div className="anim-fade-up anim-delay-3" style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
             <ToolPageClient config={t} toolSlug="compress" />
          </div>

          <div className="anim-fade-up anim-delay-4" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
            {[
              "100% Free", "No signup required", "No email required", 
              "Works in browser — no install", "Files deleted in 1 hour", 
              "256-bit SSL encrypted", "Works on Mac, Windows, iPhone, Android", 
              "No watermark", "Unlimited conversions"
            ].map((trust, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <span style={{ fontSize: '1rem', color: '#16A34A' }}>✓</span> {trust}
              </div>
            ))}
          </div>

          <div className="anim-fade-up anim-delay-5" style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
            <AdUnit slot="bottom-rectangle" type="rectangle" />
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT & HOW-TO ── */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How to compress PDF to {sizeUpper} online free</h2>
            <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }}>
              <div style={{ display: 'flex', gap: '16px', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>1</div>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '6px', fontSize: '1rem' }}>Step 1</h3>
                  <p style={{ margin: 0 }}>Upload your PDF file using the dropzone above.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>2</div>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '6px', fontSize: '1rem' }}>Step 2</h3>
                  <p style={{ margin: 0 }}>Select a heavy compression level if needed to ensure the file drops below {sizeUpper}.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>3</div>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '6px', fontSize: '1rem' }}>Step 3</h3>
                  <p style={{ margin: 0 }}>Download your optimized PDF, instantly ready for your application submission.</p>
                </div>
              </div>
            </div>

            {/* ── FAQs ── */}
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '48px' }}>
              {[
                { q: `Will I lose quality when compressing to ${sizeUpper}?`, a: `Our advanced compression algorithms are designed to maintain maximum readability and image quality while drastically reducing the file size to meet the ${sizeUpper} limit.` },
                { q: `Is this tool free?`, a: `Yes, compressing your PDF to ${sizeUpper} is 100% free. No account or email is required.` },
                { q: `Do you store my files?`, a: `No. All files uploaded to ThePDFNinja are strictly confidential and are automatically and permanently deleted from our servers after 1 hour.` },
                { q: `Can I use this for Indian government forms?`, a: `Yes! This tool is specifically optimized to help users hit the strict ${sizeUpper} limit required by UPSC, NEET, SSC, and various banking portals.` }
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '1.1rem' }}>{faq.q}</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: `Compress PDF to ${sizeUpper}`,
              description: `Free online tool to compress PDF to ${sizeUpper}. No signup, no watermark.`,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'All',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: `Will I lose quality when compressing to ${sizeUpper}?`, acceptedAnswer: { '@type': 'Answer', text: `Our advanced compression algorithms are designed to maintain maximum readability and image quality while drastically reducing the file size to meet the ${sizeUpper} limit.` } },
                { '@type': 'Question', name: `Is this tool free?`, acceptedAnswer: { '@type': 'Answer', text: `Yes, compressing your PDF to ${sizeUpper} is 100% free. No account or email is required.` } },
                { '@type': 'Question', name: `Do you store my files?`, acceptedAnswer: { '@type': 'Answer', text: `No. All files uploaded to ThePDFNinja are strictly confidential and are automatically and permanently deleted from our servers after 1 hour.` } },
                { '@type': 'Question', name: `Can I use this for Indian government forms?`, acceptedAnswer: { '@type': 'Answer', text: `Yes! This tool is specifically optimized to help users hit the strict ${sizeUpper} limit required by UPSC, NEET, SSC, and various banking portals.` } }
              ]
            }
          ])
        }}
      />
    </>
  );
}
