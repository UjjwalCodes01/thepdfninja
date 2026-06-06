import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ThePDFNinja',
  description: 'Learn about ThePDFNinja, our mission to make PDF editing free and accessible, and how we keep your documents secure.',
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '80px 0 60px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '20px', letterSpacing: '-0.04em' }}>
            About ThePDFNinja
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            We believe that working with PDFs should be free, fast, and completely secure for everyone.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <h2>Our Mission</h2>
            <p>
              At <strong>ThePDFNinja</strong>, our mission is simple: provide the highest-quality PDF tools to users worldwide, entirely for free. We saw an internet filled with expensive software, hidden subscription fees, and tools that force you to create accounts just to merge two pages together. We decided to build a better alternative.
            </p>
            <p>
              Whether you are a student submitting an assignment, a business professional finalizing a contract, or just someone trying to organize personal documents, our tools are designed to save you time and frustration.
            </p>

            <h2>Why We Built This</h2>
            <p>
              PDF (Portable Document Format) is the universal language of documents on the internet. Yet, editing and manipulating them has remained surprisingly difficult without expensive proprietary software.
            </p>
            <p>
              We built ThePDFNinja to democratize document management. By leveraging modern web technologies and secure cloud infrastructure, we are able to offer 23 premium-grade PDF tools — from simple merging and splitting to complex OCR and format conversions — directly in your web browser.
            </p>

            <h2>Our Commitment to Privacy</h2>
            <p>
              We know that the documents you upload contain sensitive, personal, and confidential information. That's why privacy isn't just a feature for us; it's our foundational principle.
            </p>
            <ul>
              <li><strong>Zero Logging:</strong> We do not look at, analyze, or mine data from your documents.</li>
              <li><strong>End-to-End Encryption:</strong> All file transfers use AES-256 bit SSL encryption.</li>
              <li><strong>Automatic Deletion:</strong> Every file you upload, and every file we generate, is permanently and irreversibly deleted from our servers within 24 hours.</li>
            </ul>

            <h2>Always Free</h2>
            <p>
              You might wonder how we can offer 23 complex tools for free. ThePDFNinja is supported by minimal, non-intrusive advertising and efficient server management. This allows us to keep the core service 100% free forever, with no watermarks, no file limits, and no required accounts.
            </p>

            <div style={{ marginTop: '64px', padding: '40px', background: 'var(--bg)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Ready to start?</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Try our most popular tool today, no signup required.</p>
              <a href="/tools/merge" className="btn btn-primary btn-lg">Merge PDFs Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
