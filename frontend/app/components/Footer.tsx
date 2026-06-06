'use client';
import Link from 'next/link';
import Logo from './Logo';

const toolLinks = [
  { slug: 'merge', label: 'Merge PDF' },
  { slug: 'split', label: 'Split PDF' },
  { slug: 'compress', label: 'Compress PDF' },
  { slug: 'rotate', label: 'Rotate PDF' },
  { slug: 'organize', label: 'Organize PDF' },
  { slug: 'watermark', label: 'Watermark PDF' },
  { slug: 'crop', label: 'Crop PDF' },
  { slug: 'page-numbers', label: 'Page Numbers' },
];
const convertLinks = [
  { slug: 'pdf-to-word', label: 'PDF to Word' },
  { slug: 'word-to-pdf', label: 'Word to PDF' },
  { slug: 'pdf-to-excel', label: 'PDF to Excel' },
  { slug: 'excel-to-pdf', label: 'Excel to PDF' },
  { slug: 'pdf-to-ppt', label: 'PDF to PowerPoint' },
  { slug: 'ppt-to-pdf', label: 'PowerPoint to PDF' },
  { slug: 'pdf-to-jpg', label: 'PDF to JPG' },
  { slug: 'jpg-to-pdf', label: 'JPG to PDF' },
  { slug: 'html-to-pdf', label: 'HTML to PDF' },
];
const securityLinks = [
  { slug: 'protect', label: 'Protect PDF' },
  { slug: 'unlock', label: 'Unlock PDF' },
  { slug: 'ocr', label: 'OCR PDF' },
  { slug: 'scan-to-pdf', label: 'Scan to PDF' },
  { slug: 'repair', label: 'Repair PDF' },
  { slug: 'pdf-to-pdfa', label: 'PDF to PDF/A' },
];
const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

function FooterCol({ title, links, tool }: { title: string; links: { slug?: string; href?: string; label: string }[]; tool?: boolean }) {
  return (
    <div>
      <p style={{ fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#111827', marginBottom: '14px' }}>
        {title}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {links.map(l => (
          <li key={l.label}>
            <Link
              href={tool ? `/tools/${l.slug}` : (l.href || '#')}
              style={{ fontSize: '0.875rem', color: '#6B7280', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5622D')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'white', borderTop: '1px solid #E5E7EB' }}>
      {/* CTA band */}
      <div style={{ background: '#F5622D', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Your PDF toolkit, completely free.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem' }}>
              No account needed. Files auto-deleted in 24 hours. 100% secure.
            </p>
          </div>
          <Link href="/tools" style={{
            background: 'white', color: '#F5622D',
            fontWeight: 700, fontSize: '0.95rem',
            padding: '12px 28px', borderRadius: '8px',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; }}
          >
            Explore All Tools →
          </Link>
        </div>
      </div>

      {/* Links grid */}
      <div className="container" style={{ padding: '56px 24px 40px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(160px, 220px) repeat(3, 1fr) minmax(130px, 160px)', gap: '32px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo size={26} />
            </div>
            <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.65, marginBottom: '18px' }}>
              Fast, free, and secure online PDF tools for everyone. No software installation required.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { label: ' SSL', bg: '#EEF3FF', color: '#1B4DBF' },
                { label: ' Fast', bg: '#FFF0EB', color: '#F5622D' },
                { label: ' 24h', bg: '#F0FDF4', color: '#16A34A' },
              ].map(b => (
                <span key={b.label} style={{ fontSize: '0.68rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', background: b.bg, color: b.color }}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <FooterCol title="PDF Tools" links={toolLinks} tool />
          <FooterCol title="Convert PDF" links={convertLinks} tool />
          <FooterCol title="Security" links={securityLinks} tool />
          <FooterCol title="Company" links={companyLinks} />
        </div>

        {/* SEO Keywords Block */}
        <div style={{ padding: '24px 0', borderTop: '1px solid #E5E7EB', marginBottom: '24px' }}>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>
            <strong>ThePDFNinja</strong> is your go-to <a href="/tools/pdf-to-word" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to Word</a> and <a href="/tools/word-to-pdf" style={{ color: 'inherit', textDecoration: 'none' }}>Word to PDF</a> converter. Whether you need to <a href="/tools/merge" style={{ color: 'inherit', textDecoration: 'none' }}>merge PDF</a>, <a href="/tools/split" style={{ color: 'inherit', textDecoration: 'none' }}>split PDF</a>, or <a href="/tools/compress" style={{ color: 'inherit', textDecoration: 'none' }}>compress PDF</a>, our free PDF editor online makes it simple. Easily convert <a href="/tools/pdf-to-jpg" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to JPG</a>, <a href="/tools/jpg-to-pdf" style={{ color: 'inherit', textDecoration: 'none' }}>JPG to PDF</a>, <a href="/tools/png-to-pdf" style={{ color: 'inherit', textDecoration: 'none' }}>PNG to PDF</a>, <a href="/tools/pdf-to-excel" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to Excel</a>, <a href="/tools/excel-to-pdf" style={{ color: 'inherit', textDecoration: 'none' }}>Excel to PDF</a>, <a href="/tools/pdf-to-ppt" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to PPT</a>, and <a href="/tools/ppt-to-pdf" style={{ color: 'inherit', textDecoration: 'none' }}>PPT to PDF</a>. Need advanced features? Use our tool to <a href="/tools/ocr" style={{ color: 'inherit', textDecoration: 'none' }}>OCR PDF</a>, convert <a href="/tools/pdf-to-text" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to Text</a>, <a href="/tools/rotate" style={{ color: 'inherit', textDecoration: 'none' }}>rotate PDF</a>, <a href="/tools/unlock" style={{ color: 'inherit', textDecoration: 'none' }}>unlock PDF</a>, <a href="/tools/protect" style={{ color: 'inherit', textDecoration: 'none' }}>protect PDF</a> (password protect PDF), or validate <a href="/tools/pdf-to-pdfa" style={{ color: 'inherit', textDecoration: 'none' }}>PDF to PDF/A</a>. No software required — the ultimate free PDF converter for all devices.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '0.82rem', color: '#9CA3AF' }}>
            © {new Date().getFullYear()} ThePDFNinja. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {companyLinks.map(l => (
              <Link key={l.label} href={l.href} style={{ fontSize: '0.82rem', color: '#9CA3AF', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F5622D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
