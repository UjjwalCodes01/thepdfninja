import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ThePDFNinja',
  description: 'Our privacy policy explains how we protect your documents. We use 256-bit encryption and auto-delete all files within 1 hour.',
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
              <li><strong>Automatic Deletion:</strong> All uploaded files and processed output files are permanently and automatically deleted from our servers within exactly 1 hour of upload.</li>
              <li><strong>No Data Mining:</strong> We do not open, read, analyze, or extract data from the contents of your documents.</li>
              <li><strong>Encryption:</strong> All data transfers between your browser and our servers are encrypted using modern TLS (Transport Layer Security) with AES-256 bit encryption.</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>Because our service does not require an account, the information we collect is strictly limited to what is necessary to run the service:</p>
            <ul>
              <li><strong>Log Data:</strong> Like most websites, our servers automatically record basic log data, including your IP address, browser type, operating system, and the dates/times of your visits. This is used for security monitoring and abuse prevention.</li>
              <li><strong>Usage Analytics:</strong> We use privacy-focused, anonymized analytics to understand which tools are popular and how the website performs. This data cannot be tied back to you or your documents.</li>
            </ul>

            <h2>3. Cookies & Advertising</h2>
            <p>
              We use Google AdSense and other third-party advertising partners to serve ads on this site. Google's publisher policies require us to disclose the following details regarding how data is collected and processed for advertising:
            </p>
            <ul>
              <li><strong>Ad Serving & Data Collection:</strong> We use Google AdSense to serve ads on this site. Google's policies require that we disclose to users that third parties may be placing and reading cookies on your users' browsers, or using web beacons or IP addresses to collect information as a result of ad serving on your website. Google and other third-party vendors may use cookies to serve ads based on your prior visits to this and other websites.</li>
              <li><strong>Google's Ad Cookies:</strong> Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to our site and/or other sites on the internet.</li>
              <li><strong>Opting Out:</strong> You can learn more or opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>Google's Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>www.aboutads.info</a>.</li>
              <li><strong>How Google Uses Data:</strong> For a detailed overview of how Google uses information from sites or apps that use their services, please read the official Google Partner privacy document at <a href="https://google.com/policies/privacy/partners" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>google.com/policies/privacy/partners</a>.</li>
            </ul>

            <h2>4. Third-Party Service Providers & Analytics</h2>
            <p>
              We utilize third-party services to operate, analyze, and optimize our website:
            </p>
            <ul>
              <li><strong>Hosting & Processing:</strong> We utilize Amazon Web Services (AWS) to host our application and process files. AWS maintains industry-leading security and compliance standards. Your files are processed in isolated, secure environments within AWS.</li>
              <li><strong>User Behavior Analytics:</strong> We partner with Microsoft Clarity to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replays to improve and optimize our user experience. User interaction data is captured using first- and third-party cookies and other tracking technologies. For more details on Microsoft’s data collection practices, please review the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>Microsoft Privacy Statement</a>.</li>
            </ul>

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
