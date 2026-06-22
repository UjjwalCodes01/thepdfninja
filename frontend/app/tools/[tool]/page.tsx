import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TOOLS } from '../../lib/toolConfig';
import ToolPageClient from './ToolPageClient';
import ToolIcon from '../../components/ToolIcon';
import { getToolContent } from '../../lib/toolContent';

// We want dynamic params so the layout handles the non-existent slugs with our custom 404
export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(TOOLS).map(tool => ({ tool }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }) {
  const resolvedParams = await params;
  const t = TOOLS[resolvedParams.tool];
  if (!t) return { title: 'Tool Not Found' };
  
  return {
    title: `${t.label} Free Online \u2013 No Signup | ThePDFNinja`,
    description: `Free online ${t.label.toLowerCase()}. ${t.description} No signup, no watermark, no email required. Files deleted automatically after 1 hour. Works on Windows, Mac, iPhone, Android.`,
    alternates: {
      canonical: `https://www.thepdfninja.com/tools/${resolvedParams.tool}`
    },
    openGraph: {
      url: `https://www.thepdfninja.com/tools/${resolvedParams.tool}`,
      title: `${t.label} Free Online \u2013 No Signup | ThePDFNinja`,
      description: `Free online ${t.label.toLowerCase()}. ${t.description} No signup, no watermark.`,
      images: [
        {
          url: `https://www.thepdfninja.com${t.ninjaImage}`,
          width: 1200,
          height: 630,
          alt: `Free ${t.label} Online \u2013 ThePDFNinja`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`https://www.thepdfninja.com${t.ninjaImage}`],
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const resolvedParams = await params;
  const t = TOOLS[resolvedParams.tool];
  if (!t) notFound();

  const seoContent = await getToolContent(resolvedParams.tool);

  return (
    <>
      {/* ── WORKSPACE (Top) ── */}
      <section style={{ background: '#f3f0ec', padding: '80px 0 100px', borderBottom: '1px solid var(--border)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#333333', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Free {t.label} Online
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.3rem', color: '#444444', marginBottom: '48px' }}>
            {t.description}
          </p>

          {/* Client wrapper handles state and drag-drop */}
          <div className="anim-fade-up anim-delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
             <ToolPageClient config={t} toolSlug={resolvedParams.tool} />
          </div>

          {/* Secure / Trust Signals */}
          <div className="anim-fade-up anim-delay-2" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
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
        </div>
      </section>

      {/* ── TOOL HEADER / TITLE (Below Workspace) ── */}
      {/* Moved to top */}

      {/* ── SEO CONTENT & HOW-TO ── */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How to use this tool</h2>
            <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }}>
              {t.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--orange-light)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ marginTop: 0, marginBottom: '6px', fontSize: '1rem' }}>Step {i + 1}</h3>
                    <p style={{ margin: 0 }}>{tip}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── FAQs ── */}
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'grid', gap: '16px', marginBottom: '48px' }}>
              {(seoContent?.faqs || [
                { q: `Is this tool free?`, a: `Yes, ThePDFNinja's ${t.label} tool is 100% free to use. There are no hidden fees, subscriptions, or credit cards required.` },
                { q: `How do I use this tool?`, a: `Simply upload your document using the box above, configure any necessary options, and our servers will instantly process your file for free.` },
                { q: `Do you store my files?`, a: `No. All files uploaded to ThePDFNinja are strictly confidential and are automatically and permanently deleted from our servers within 1 hour.` },
                { q: `Does this work on Mac, iPhone, and Android?`, a: `Yes, as a web-based tool, it works flawlessly across all operating systems and devices, including Mac, Windows, iOS (iPhone/iPad), Android, and Linux.` },
                { q: `Will there be a watermark on my file?`, a: `Absolutely not. We never add watermarks to your documents.` },
              ]).map((faq, i) => (
                <div key={i} style={{ background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '1.1rem' }}>{faq.q}</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              ))}
            </div>

            {seoContent && (
              <div style={{ display: 'grid', gap: '48px', marginTop: '24px', marginBottom: '48px' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>The Ultimate Free {t.label} Tool</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {seoContent.introParagraphs.map((p, i) => (
                      <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{p}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Common Use Cases</h2>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {seoContent.useCases.map((uc, i) => (
                      <div key={i} style={{ background: 'var(--bg)', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>{uc.title}</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{uc.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>{seoContent.comparison.title}</h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px' }}>{seoContent.comparison.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {seoContent.comparison.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', gap: '12px' }}>
                        <span style={{ color: 'var(--orange)', fontWeight: 800, fontSize: '1.2rem' }}>✓</span>
                        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {seoContent.comparisonTable && (
                  <div style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>How We Compare</h2>
                    <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'white' }}>
                      <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ background: 'var(--bg)', borderBottom: '2px solid var(--border)' }}>
                            <th style={{ padding: '16px', fontWeight: 700, width: '40%' }}>{seoContent.comparisonTable.headers[0] || 'Feature'}</th>
                            <th style={{ padding: '16px', fontWeight: 700, width: '30%' }}>{seoContent.comparisonTable.headers[1] || 'ThePDFNinja'}</th>
                            <th style={{ padding: '16px', fontWeight: 700, width: '30%' }}>{seoContent.comparisonTable.headers[2] || 'Competitors'}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {seoContent.comparisonTable.rows.map((row, i) => (
                            <tr key={i} style={{ borderBottom: i === seoContent.comparisonTable!.rows.length - 1 ? 'none' : '1px solid var(--border)' }}>
                              <td style={{ padding: '16px', fontWeight: 600, color: 'var(--text)' }}>{row.feature}</td>
                              <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ color: 'var(--green)', fontSize: '1.1rem' }}>✓</span>
                                  <span>{row.us}</span>
                                </div>
                              </td>
                              <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ color: 'var(--orange)', fontSize: '1.1rem' }}>⚠</span>
                                  <span>{row.them}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>Enterprise-Grade Security</h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{seoContent.security}</p>
                </div>
              </div>
            )}

            <div style={{ marginTop: '48px' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Why choose ThePDFNinja?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {(seoContent?.whyUse || [
                  `ThePDFNinja provides the fastest, most reliable way to process your files online. Unlike other tools that force you to create accounts, pay subscription fees, or deal with heavy watermarks, our tool is completely free and accessible directly from your browser.`,
                  `We prioritize your privacy above all else. Every document uploaded to our platform is processed in an isolated environment using AES-256 SSL encryption. Once your task is complete, the original and processed files are permanently deleted from our servers within 1 hour. We guarantee that your data is never read, analyzed, or shared with third parties.`,
                  `Whether you are working from a desktop PC, a Mac, or a mobile device, you can easily use our suite of tools anywhere, anytime, without installing any software.`
                ]).map((p, i) => (
                  <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── RELATED TOOLS ── */}
      {t.relatedSlugs && t.relatedSlugs.length > 0 && (
        <section style={{ padding: '60px 0', background: 'var(--bg)' }}>
          <div className="container" style={{ maxWidth: '960px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Related PDF Tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {t.relatedSlugs.map(slug => {
                const rt = TOOLS[slug];
                if (!rt) return null;
                return (
                  <Link key={slug} href={`/tools/${slug}`} style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} className="related-tool-card">
                    <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{rt.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: 600 }}>{rt.label}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{rt.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: `Free ${t.label} Online`,
              description: `Free online ${t.label.toLowerCase()}. No signup, no watermark. ${t.description}`,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'All',
              datePublished: '2025-01-01',
              dateModified: '2026-06-01',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: `How to use our free ${t.label} tool`,
              description: `Step-by-step guide to ${t.label.toLowerCase()} using ThePDFNinja. Free, no signup required.`,
              datePublished: '2025-01-01',
              step: t.tips.map((tip: string, i: number) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: `Step ${i + 1}`,
                text: tip,
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thepdfninja.com' },
                { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.thepdfninja.com/tools' },
                { '@type': 'ListItem', position: 3, name: t.label, item: `https://www.thepdfninja.com/tools/${resolvedParams.tool}` }
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              datePublished: '2025-01-01',
              mainEntity: (seoContent?.faqs || [
                { q: `Is this tool free?`, a: `Yes, ThePDFNinja's ${t.label} tool is 100% free to use. There are no hidden fees, subscriptions, or credit cards required.` },
                { q: `How do I use this tool?`, a: `Simply upload your document using the box above, configure any necessary options, and our servers will instantly process your file for free.` },
                { q: `Do you store my files?`, a: `No. All files uploaded to ThePDFNinja are strictly confidential and are automatically and permanently deleted from our servers within 1 hour.` },
                { q: `Does this work on Mac, iPhone, and Android?`, a: `Yes, as a web-based tool, it works flawlessly across all operating systems and devices, including Mac, Windows, iOS (iPhone/iPad), Android, and Linux.` },
                { q: `Will there be a watermark on my file?`, a: `Absolutely not. We never add watermarks to your documents.` },
              ]).map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a
                }
              }))
            }
          ])
        }}
      />
    </>
  );
}
