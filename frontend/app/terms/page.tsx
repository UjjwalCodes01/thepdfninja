import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ThePDFNinja',
  description: 'Terms and conditions for using ThePDFNinja free online PDF tools.',
};

export default function TermsPage() {
  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Terms of Service
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Please read these terms carefully before using our tools.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="prose">
            <p><em>Last Updated: June 2026</em></p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>ThePDFNinja</strong> ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              ThePDFNinja provides a suite of online tools for manipulating Portable Document Format (PDF) files, including but not limited to merging, splitting, compressing, and converting files. The Service is provided "as is" and is free of charge.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>By using the Service, you agree that:</p>
            <ul>
              <li>You have the legal right to upload and modify the documents you submit to the Service.</li>
              <li>You will not use the Service to process illegal, copyrighted (without permission), or malicious content.</li>
              <li>You will not attempt to hack, disrupt, or overload our servers (e.g., via automated scripts, bots, or DDoS attacks).</li>
              <li>You will not use the Service for any illegal purpose.</li>
            </ul>
            <p>We reserve the right to block IP addresses that violate these rules or abuse our infrastructure.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an "as is" and "as available" basis. ThePDFNinja makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p>
              While we strive for 100% accuracy in our file conversions and manipulations, we do not guarantee that the processed files will be completely free of errors or perfectly formatted. You should always review processed documents before using them in critical applications.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall ThePDFNinja or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ThePDFNinja's website, even if ThePDFNinja or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>6. File Storage and Deletion</h2>
            <p>
              As outlined in our Privacy Policy, we do not permanently store your files. All uploaded files and processed output files are automatically deleted within 1 hour. We are not responsible for the loss of any data or files uploaded to the Service. You are solely responsible for keeping backups of your original documents.
            </p>

            <h2>7. Revisions and Errata</h2>
            <p>
              The materials appearing on ThePDFNinja's website could include technical, typographical, or photographic errors. ThePDFNinja does not warrant that any of the materials on its website are accurate, complete, or current. ThePDFNinja may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>8. Contact</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us via our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
