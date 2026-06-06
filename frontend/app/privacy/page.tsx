import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ThePDFNinja',
  description: 'Our privacy policy explains how we protect your documents. We use 256-bit encryption and auto-delete all files within 24 hours.',
};

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Privacy Policy
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Your documents are your business. Our business is keeping them safe.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <p><em>Last Updated: June 2026</em></p>

            <p>
              At <strong>ThePDFNinja</strong> ("we", "us", "our"), your privacy is our highest priority. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and PDF tools.
            </p>

            <h2>1. Document Security & File Handling</h2>
            <p>The most important thing you need to know about how we handle your files is this: <strong>We do not keep them.</strong></p>
            <ul>
              <li><strong>Temporary Storage:</strong> When you upload a file to ThePDFNinja, it is temporarily stored on our secure cloud servers solely for the purpose of processing your requested task (e.g., merging, compressing).</li>
              <li><strong>Automatic Deletion:</strong> All uploaded files and processed output files are permanently and automatically deleted from our servers within exactly 24 hours of upload.</li>
              <li><strong>No Data Mining:</strong> We do not open, read, analyze, or extract data from the contents of your documents.</li>
              <li><strong>Encryption:</strong> All data transfers between your browser and our servers are encrypted using modern TLS (Transport Layer Security) with AES-256 bit encryption.</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>Because our service does not require an account, the information we collect is strictly limited to what is necessary to run the service:</p>
            <ul>
              <li><strong>Log Data:</strong> Like most websites, our servers automatically record basic log data, including your IP address, browser type, operating system, and the dates/times of your visits. This is used for security monitoring and abuse prevention.</li>
              <li><strong>Usage Analytics:</strong> We use privacy-focused, anonymized analytics to understand which tools are popular and how the website performs. This data cannot be tied back to you or your documents.</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              We use minimal cookies necessary for the functioning of the website (such as remembering your language preference or whether you have dismissed a notification banner). We do not use invasive tracking cookies.
            </p>

            <h2>4. Third-Party Service Providers</h2>
            <p>
              We utilize Amazon Web Services (AWS) to host our application and process files. AWS maintains industry-leading security and compliance standards. Your files are processed in isolated, secure environments within AWS.
            </p>

            <h2>5. No Sale of Personal Data</h2>
            <p>
              We do not sell, rent, or trade any personal information. We do not sell your documents or any data derived from them.
            </p>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of significant changes by posting the new policy on this page.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us via our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
