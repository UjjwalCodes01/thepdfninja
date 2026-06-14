import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About ThePDFNinja — Free PDF Tools Built by Anaya Digital',
  description: 'Learn about ThePDFNinja, built by Anaya Digital Marketing Agency. Our mission: free, fast, and private PDF tools for everyone. 56 tools, no signup, no watermarks.',
  alternates: {
    canonical: 'https://thepdfninja.com/about',
  },
  openGraph: {
    url: 'https://thepdfninja.com/about',
    title: 'About ThePDFNinja — Free PDF Tools Built by Anaya Digital',
    description: 'ThePDFNinja provides 56 free online PDF tools with no account required. Built and maintained by Anaya Digital Marketing Agency.',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630, alt: 'ThePDFNinja — About Us' }],
  },
};

const POPULAR_TOOLS = [
  { slug: 'merge', label: 'Merge PDF' },
  { slug: 'pdf-to-word', label: 'PDF to Word' },
  { slug: 'compress', label: 'Compress PDF' },
  { slug: 'pdf-to-jpg', label: 'PDF to JPG' },
  { slug: 'split', label: 'Split PDF' },
  { slug: 'ocr', label: 'OCR PDF' },
];

export default function AboutPage() {
  return (
    <>
      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ThePDFNinja',
            url: 'https://thepdfninja.com',
            logo: 'https://thepdfninja.com/og-image.png',
            description: 'ThePDFNinja provides 56 free online PDF tools including merge, split, compress, convert PDF to Word, Excel, JPG, and more. Built by Anaya Digital.',
            foundingDate: '2025',
            founder: {
              '@type': 'Organization',
              name: 'Anaya Digital',
              url: 'https://digitalanaya.com',
            },
            knowsAbout: [
              'PDF editing',
              'PDF conversion',
              'document management',
              'file compression',
              'OCR text extraction',
              'online productivity tools',
            ],
            sameAs: [
              'https://twitter.com/thepdfninja',
              'https://facebook.com/thepdfninja',
            ],
          }),
        }}
      />

      <section style={{ background: 'var(--orange-light)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '20px', letterSpacing: '-0.04em' }}>
            About ThePDFNinja
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            We believe that working with PDFs should be free, fast, and completely secure for everyone — no account required, no exceptions.
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section style={{ background: 'var(--orange)', padding: '20px 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { stat: '56', label: 'Free PDF Tools' },
              { stat: '2025', label: 'Founded' },
              { stat: '100MB', label: 'Max File Size' },
              { stat: '1 hr', label: 'File Auto-Delete' },
              { stat: '0', label: 'Watermarks' },
              { stat: '0', label: 'Accounts Needed' },
            ].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '8px 28px', borderRight: i < 5 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>{s.stat}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">

            {/* Who we are */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '48px', padding: '32px', background: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '12px', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>🥷</div>
              <div>
                <h2 style={{ marginTop: 0, marginBottom: '8px' }}>Built by Anaya Digital</h2>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                  ThePDFNinja was created and is maintained by <strong><a href="https://digitalanaya.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>Anaya Digital Marketing Agency</a></strong>, a web development and digital marketing studio. We launched ThePDFNinja in 2025 to solve a problem we faced ourselves: every quality PDF tool online either requires an account, adds watermarks, or limits you to a handful of free uses per day.
                </p>
              </div>
            </div>

            <h2>Our Mission</h2>
            <p>
              At <strong>ThePDFNinja</strong>, our mission is simple: provide the highest-quality PDF tools to users worldwide, entirely for free. We saw an internet filled with expensive software, hidden subscription fees, and tools that force you to create accounts just to merge two pages together. We built a better alternative.
            </p>
            <p>
              Whether you are a student submitting an assignment, a business professional finalizing a contract, or just someone trying to organize personal documents, our tools are designed to save you time and frustration — with zero barriers to access.
            </p>

            <blockquote style={{ margin: '32px 0', padding: '24px 32px', background: 'var(--orange-light)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--radius) var(--radius) 0' }}>
              <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1.6 }}>
                &ldquo;PDF (Portable Document Format) is the universal language of documents on the internet. Yet editing and manipulating them has remained surprisingly difficult without expensive software. We&rsquo;re changing that.&rdquo;
              </p>
            </blockquote>

            <h2>Why We Built This</h2>
            <p>
              PDF is the universal language of documents on the internet. Yet editing and manipulating them has remained surprisingly difficult without expensive proprietary software. ThePDFNinja democratizes document management.
            </p>
            <p>
              By leveraging modern web technologies — including a <strong>Next.js</strong> frontend, <strong>AWS Lambda</strong> serverless processing, and <strong>Ghostscript / LibreOffice</strong> on the backend — we offer 56 premium-grade PDF tools directly in your browser. No installation, no account, no friction.
            </p>

            <h2>What We Offer</h2>
            <p>ThePDFNinja covers the full spectrum of PDF tasks:</p>
            <ul>
              <li><strong>Organize:</strong> Merge, split, organize, and crop PDF pages</li>
              <li><strong>Optimize:</strong> Compress PDFs by up to 70%, repair corrupted files, convert to PDF/A archival format</li>
              <li><strong>Convert:</strong> PDF to Word, Excel, PowerPoint, JPG — and back again. HTML to PDF included.</li>
              <li><strong>Edit:</strong> Add watermarks, rotate pages, add page numbers</li>
              <li><strong>Security:</strong> Password-protect PDFs, unlock them, and extract text with AI-powered OCR</li>
            </ul>

            <h2>Our Commitment to Privacy</h2>
            <p>
              We know that the documents you upload contain sensitive, personal, and confidential information. That&rsquo;s why privacy isn&rsquo;t just a feature for us — it&rsquo;s our foundational principle.
            </p>
            <ul>
              <li><strong>Zero Logging:</strong> We do not look at, analyze, or mine data from your documents.</li>
              <li><strong>End-to-End Encryption:</strong> All file transfers use AES-256-bit SSL encryption.</li>
              <li><strong>Automatic Deletion:</strong> Every file you upload, and every file we generate, is permanently and irreversibly deleted from our servers within 1 hour of processing.</li>
              <li><strong>No Account Required:</strong> We never collect your email address, phone number, or any personal identifying information.</li>
            </ul>

            <h2>Always Free — Here&rsquo;s How</h2>
            <p>
              You might wonder how we can offer 56 complex tools for free. ThePDFNinja is supported by minimal, non-intrusive advertising (Google AdSense) and efficient serverless infrastructure on AWS. This allows us to keep the core service 100% free forever, with no watermarks, no file limits, and no required accounts.
            </p>

            <h2>Technology Stack</h2>
            <ul>
              <li><strong>Frontend:</strong> Next.js (App Router), TypeScript, deployed on AWS</li>
              <li><strong>Backend:</strong> Python AWS Lambda functions with Ghostscript, LibreOffice, and AWS Textract for OCR</li>
              <li><strong>Security:</strong> HTTPS/SSL, isolated processing environments, no persistent storage</li>
              <li><strong>Performance:</strong> Server-side rendering, edge caching, sub-second response times</li>
            </ul>

          </div>

          {/* Popular Tools Internal Linking */}
          <div style={{ marginTop: '64px', padding: '40px', background: 'var(--bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px', marginTop: 0 }}>Our Most Popular Tools</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>Used by thousands of people every day. No signup, no limits.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
              {POPULAR_TOOLS.map(t => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="about-tool-link"
                >
                  {t.label} →
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <Link href="/tools" className="btn btn-primary btn-lg">
                View All 56 Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
