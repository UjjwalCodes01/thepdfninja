'use client';
import { useState } from 'react';
import Link from 'next/link';
import ToolIcon from './components/ToolIcon';

const TOOLS = [
  { slug: 'merge', label: 'Merge PDF', desc: 'Combine multiple PDFs into one file instantly.', icon: '⊕', cat: 'Organize', badge: ' Instant' },
  { slug: 'split', label: 'Split PDF', desc: 'Extract pages or split a PDF into multiple files.', icon: '⊗', cat: 'Organize', badge: ' Instant' },
  { slug: 'organize', label: 'Organize PDF', desc: 'Reorder, delete, and rearrange pages with ease.', icon: '⊞', cat: 'Organize', badge: ' Instant' },
  { slug: 'compress', label: 'Compress PDF', desc: 'Reduce PDF file size without losing quality.', icon: '↘', cat: 'Optimize', badge: ' Instant' },
  { slug: 'repair', label: 'Repair PDF', desc: 'Fix damaged or corrupted PDF files.', icon: '⚙', cat: 'Optimize', badge: ' Instant' },
  { slug: 'pdf-to-pdfa', label: 'PDF to PDF/A', desc: 'Convert to ISO-compliant archival format.', icon: '◈', cat: 'Optimize', badge: ' Async' },
  { slug: 'pdf-to-word', label: 'PDF to Word', desc: 'Convert PDF to editable DOC/DOCX documents.', icon: '⇒', cat: 'Convert', badge: ' Async' },
  { slug: 'word-to-pdf', label: 'Word to PDF', desc: 'Turn Word documents into professional PDFs.', icon: '⇐', cat: 'Convert', badge: ' Async' },
  { slug: 'pdf-to-ppt', label: 'PDF to PowerPoint', desc: 'Convert PDF pages into editable PPT slides.', icon: '⇒', cat: 'Convert', badge: ' Async' },
  { slug: 'ppt-to-pdf', label: 'PowerPoint to PDF', desc: 'Save presentations as shareable PDF files.', icon: '⇐', cat: 'Convert', badge: ' Async' },
  { slug: 'pdf-to-excel', label: 'PDF to Excel', desc: 'Extract tables from PDF into Excel spreadsheets.', icon: '⇒', cat: 'Convert', badge: ' Async' },
  { slug: 'excel-to-pdf', label: 'Excel to PDF', desc: 'Convert spreadsheets into professional PDFs.', icon: '⇐', cat: 'Convert', badge: ' Async' },
  { slug: 'pdf-to-jpg', label: 'PDF to JPG', desc: 'Convert each PDF page to a high-quality image.', icon: '⊡', cat: 'Convert', badge: ' Instant' },
  { slug: 'jpg-to-pdf', label: 'JPG to PDF', desc: 'Turn one or more images into a PDF document.', icon: '⊟', cat: 'Convert', badge: ' Instant' },
  { slug: 'html-to-pdf', label: 'HTML to PDF', desc: 'Convert any webpage or HTML file into a PDF.', icon: '⊙', cat: 'Convert', badge: ' Instant' },
  { slug: 'watermark', label: 'Watermark PDF', desc: 'Add text or image watermarks to your PDF.', icon: '◎', cat: 'Edit', badge: ' Instant' },
  { slug: 'rotate', label: 'Rotate PDF', desc: 'Rotate pages 90°, 180° or 270° in your PDF.', icon: '↻', cat: 'Edit', badge: ' Instant' },
  { slug: 'crop', label: 'Crop PDF', desc: 'Remove unwanted margins or crop specific areas.', icon: '⊡', cat: 'Edit', badge: ' Instant' },
  { slug: 'page-numbers', label: 'Page Numbers', desc: 'Add page numbers with custom placement and style.', icon: '⊕', cat: 'Edit', badge: ' Instant' },
  { slug: 'protect', label: 'Protect PDF', desc: 'Password-protect your PDF with AES encryption.', icon: '🔒', cat: 'Security', badge: ' Instant' },
  { slug: 'unlock', label: 'Unlock PDF', desc: 'Remove password protection from your PDF.', icon: '🔓', cat: 'Security', badge: '⚡Instant' },
  { slug: 'scan-to-pdf', label: 'Scan to PDF', desc: 'Convert scanned images into searchable PDFs.', icon: '📷', cat: 'Security', badge: ' Async' },
  { slug: 'ocr', label: 'OCR PDF', desc: 'Extract text from scanned documents using AI.', icon: '👁', cat: 'Security', badge: ' AI' },
];

const CATS = ['All', 'Organize', 'Optimize', 'Convert', 'Edit', 'Security'];

const CAT_ICONS: Record<string, string> = {
  Organize: '', Optimize: '', Convert: '', Edit: '', Security: '',
};



const HOW = [
  { step: '1', title: 'Upload your file', desc: 'Drop your PDF or document into our secure uploader. Files are transferred via SSL encryption.', icon: '⬆' },
  { step: '2', title: 'Process instantly', desc: 'Our servers process your file in seconds. Configure any options like quality, page range, or password.', icon: '⚙' },
  { step: '3', title: 'Download & done', desc: 'Download your result immediately. Files are automatically deleted from our servers after 24 hours.', icon: '⬇' },
];

const WHY = [
  { title: '100% Free Forever', desc: 'Every tool on ThePDFNinja is completely free. No hidden fees, no premium tiers, no surprises.', icon: '' },
  { title: 'Bank-Grade Security', desc: 'All file transfers use 256-bit SSL encryption. Your documents are processed in isolated environments.', icon: '' },
  { title: 'Auto-Delete in 24h', desc: 'We never store your files. Every uploaded file is permanently deleted from our servers within 24 hours.', icon: '' },
  { title: 'No Account Needed', desc: 'Start converting immediately — no sign-up, no email, no tracking. Just upload and go.', icon: '' },
  { title: 'Works Everywhere', desc: 'ThePDFNinja works on any device — desktop, tablet, or mobile. No software to install, ever.', icon: '' },
  { title: 'Powered by AWS', desc: 'Built on Amazon Web Services infrastructure for blazing-fast processing and 99.9% uptime reliability.', icon: '' },
];

export default function HomePage() {
  const [cat, setCat] = useState('All');

  const filtered = TOOLS.filter(t =>
    (cat === 'All' || t.cat === cat)
  );

  return (
    <>
      {/* SEO schema — FAQPage only (Organization & SoftwareApp moved to layout.tsx) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              datePublished: '2025-01-01',
              dateModified: '2026-06-01',
              mainEntity: [
                { '@type': 'Question', name: 'Is ThePDFNinja really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely. All 23 PDF tools are free to use with no usage limits, no watermarks, and no account required. We are funded independently and committed to keeping this service free forever.' } },
                { '@type': 'Question', name: 'Is my data safe when I upload files?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. All file uploads are encrypted using 256-bit SSL/TLS. Files are processed in isolated server environments and automatically deleted from our servers within 24 hours. We never share or sell your data.' } },
                { '@type': 'Question', name: 'What is the maximum file size?', acceptedAnswer: { '@type': 'Answer', text: 'You can upload files up to 100MB per file. For most documents, this is more than enough. If your file exceeds this, try compressing it first using our free Compress PDF tool.' } },
                { '@type': 'Question', name: 'Do I need to install any software?', acceptedAnswer: { '@type': 'Answer', text: 'No. ThePDFNinja works entirely in your browser. There is nothing to download or install. It works on Windows, Mac, Linux, Android, and iOS.' } },
                { '@type': 'Question', name: 'How long does processing take?', acceptedAnswer: { '@type': 'Answer', text: 'Most tools process files instantly in under 5 seconds. More complex operations like OCR, Word/Excel conversions, or large file compression may take 15-60 seconds.' } },
                { '@type': 'Question', name: 'How does ThePDFNinja compare to ilovepdf or smallpdf?', acceptedAnswer: { '@type': 'Answer', text: 'Unlike ilovepdf and smallpdf, ThePDFNinja is 100% free with no daily limits and no forced account creation. We offer 23 tools with no watermarks added and no file size restrictions on most tools up to 100MB.' } },
              ]
            }
          )
        }}
      />

      {/* ── HERO ── */}
      <section style={{ background: 'white', paddingTop: '72px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle bg */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'radial-gradient(ellipse 70% 60% at 60% -10%, rgba(245,98,45,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', maxWidth: '840px', textAlign: 'center' }}>
          {/* Badge Removed */}
          <h1 className="anim-fade-up anim-delay-1" style={{ fontWeight: 900, fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text)', marginBottom: '20px' }}>
            The Ultimate Free Online <br />
            <span style={{ color: 'var(--orange)' }}>PDF Converter & PDF Editor</span>
          </h1>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '640px', margin: '0 auto 36px' }}>
            Merge PDF, split PDF, compress PDF, and convert PDF to Word, JPG, Excel, and PPT online. ThePDFNinja handles everything without software installations, subscriptions, or watermarks.
          </p>
          <p className="anim-fade-up anim-delay-2" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--orange)', marginBottom: '12px', letterSpacing: '0.03em' }}>
            23 tools &middot; 100% Free &middot; No signup &middot; No watermark &middot; Files deleted in 24h
          </p>
          <div className="anim-fade-up anim-delay-3" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '52px' }}>
            <Link href="#tools" className="btn btn-primary btn-lg">
              Explore All PDF Tools
            </Link>
            <Link href="/tools/pdf-to-word" className="btn btn-outline btn-lg">
              Convert PDF to Word
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS CALLOUT ── */}
      <section style={{ background: 'var(--orange)', padding: '28px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { stat: '23', label: 'Free PDF Tools' },
              { stat: '100MB', label: 'Max File Size' },
              { stat: '1 hr', label: 'Auto-Delete Guarantee' },
              { stat: '0', label: 'Watermarks Added' },
              { stat: '0', label: 'Accounts Required' },
              { stat: '256-bit', label: 'AES SSL Encryption' },
            ].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '8px 32px', borderRight: i < 5 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>{s.stat}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS GRID ── */}
      <section id="tools" style={{ background: 'var(--bg)', padding: '72px 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="section-label">23 Free PDF Tools</p>
            <h2 className="section-title">Choose Your PDF Tool</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every tool you need to work with PDF files — free, fast, and secure. No downloads required.
            </p>
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
            {CATS.map(c => (
              <button key={c} className={`cat-pill${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>
                {CAT_ICONS[c] && <span>{CAT_ICONS[c]}</span>} {c}
              </button>
            ))}
          </div>



          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '16px' }}>
            {filtered.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`} className="tool-card">
                <span className="tool-card-arrow">→</span>
                <div style={{ marginBottom: '16px' }}>
                  <ToolIcon tool={t.slug} size={56} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '6px', letterSpacing: '-0.01em' }}>{t.label}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>{t.desc}</p>
                <span className={`badge ${t.badge.includes('AI') ? 'badge-blue' : t.badge.includes('Async') ? 'badge-gray' : 'badge-green'}`} style={{ fontSize: '0.7rem' }}>
                  {t.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">Simple 3-step process</p>
            <h2 className="section-title">How ThePDFNinja Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Process any PDF file in under 60 seconds. No software to install, no account to create.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {HOW.map((h, i) => (
              <div key={h.step} style={{ textAlign: 'center', padding: '32px 24px', background: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--orange-light)', border: '2px solid var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 900, fontSize: '1.2rem', color: 'var(--orange)' }}>
                  {h.step}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '8px' }}>{h.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">Why ThePDFNinja</p>
            <h2 className="section-title">Built for Privacy, Speed & Reliability</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Trusted by thousands of users who need fast, private PDF processing without signing up.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {WHY.map(w => (
              <div key={w.title} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', transition: 'box-shadow 0.18s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-md)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{w.icon}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '6px' }}>{w.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="section-label">How we compare</p>
            <h2 className="section-title">ThePDFNinja vs. the Alternatives</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              The only major free PDF toolkit with zero account requirements and no daily limits.
            </p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, color: 'var(--text)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>Feature</th>
                  <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 700, color: 'white', background: 'var(--orange)', borderBottom: '2px solid var(--orange)' }}>ThePDFNinja ⭐</th>
                  <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 700, color: 'var(--text)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>ilovepdf</th>
                  <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 700, color: 'var(--text)', borderBottom: '2px solid var(--border)', background: 'var(--bg)' }}>smallpdf</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '100% Free', 'Free (limited)', 'Free (2 tasks/day)'],
                  ['Account required', '✅ Never', '⚠️ For some tools', '⚠️ After limit'],
                  ['Watermarks added', '✅ None', '✅ None', '❌ On free plan'],
                  ['Daily usage limit', '✅ Unlimited', '❌ Limited', '❌ 2 per day'],
                  ['Max file size', '✅ 100MB', '⚠️ 100MB', '⚠️ 5MB free'],
                  ['File auto-delete', '✅ Within 1 hour', '✅ Within 1 hour', '⚠️ 1 hour'],
                  ['AI / OCR tool', '✅ Included free', '✅ Included', '⚠️ Pro only'],
                ].map(([feature, us, ilove, small], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? 'white' : 'var(--bg)' }}>
                    <td style={{ padding: '12px 20px', color: 'var(--text)', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>{feature}</td>
                    <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text)', fontWeight: 600, borderBottom: '1px solid var(--border)', background: 'rgba(245,98,45,0.05)' }}>{us}</td>
                    <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{ilove}</td>
                    <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{small}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote style={{ margin: '40px 0 0', padding: '24px 32px', background: 'var(--orange-light)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--radius) var(--radius) 0' }}>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.6 }}>
              &ldquo;ThePDFNinja is the only major PDF toolkit that is 100% free, unlimited, and requires zero account creation &mdash; for all 23 tools.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="section-label">Common questions</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          {[
            { q: 'Is ThePDFNinja really free?', a: 'Yes, completely. All 23 PDF tools are free to use with no usage limits, no watermarks, and no account required. We are funded independently and committed to keeping this service free forever.' },
            { q: 'Is my data safe when I upload files?', a: 'Absolutely. All file uploads are encrypted using 256-bit SSL/TLS. Files are processed in isolated server environments and automatically deleted from our servers within 24 hours. We never share, sell, or access your data.' },
            { q: 'What is the maximum file size?', a: 'You can upload files up to 100MB per file. For most documents, this is more than enough. If your file exceeds this limit, try compressing it first using our free Compress PDF tool.' },
            { q: 'Do I need to install any software?', a: 'No. ThePDFNinja works entirely in your browser. There is nothing to download or install. It works on Windows, Mac, Linux, Android, and iOS — any device with a modern browser.' },
            { q: 'How long does processing take?', a: 'Most tools process files instantly in under 5 seconds. More complex operations like OCR, Word/Excel conversions, or large file compression may take 15–60 seconds.' },
            { q: 'How does ThePDFNinja compare to ilovepdf and smallpdf?', a: 'Unlike ilovepdf and smallpdf, ThePDFNinja is 100% free with no daily limits, no account required, and no watermarks — for all 23 tools. Competitors restrict free users to 2 tasks per day or add watermarks on free plans.' },
          ].map((faq, i) => (
            <details key={i} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0' }}>
              <summary style={{
                fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', padding: '18px 0',
                cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{faq.q}</span>
                <span style={{ color: 'var(--orange)', fontSize: '1.2rem', lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75, paddingBottom: '18px' }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
