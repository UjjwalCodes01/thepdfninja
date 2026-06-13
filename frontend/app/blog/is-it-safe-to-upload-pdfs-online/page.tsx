import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is It Safe to Upload PDFs Online? | ThePDFNinja Security Review',
  description: 'A deep dive into PDF security. Discover what happens to your files when you upload them to ThePDFNinja. Read about our 256-bit AES encryption and 1-hour deletion policy.',
  alternates: {
    canonical: 'https://thepdfninja.com/blog/is-it-safe-to-upload-pdfs-online',
  },
  openGraph: {
    title: 'Is It Safe to Upload PDFs Online? | ThePDFNinja Security',
    description: 'A deep dive into PDF security. Discover what happens to your files when you upload them.',
    url: 'https://thepdfninja.com/blog/is-it-safe-to-upload-pdfs-online',
    images: [{ url: 'https://thepdfninja.com/og-image.png', width: 1200, height: 630 }],
  }
};

export default function IsItSafePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Is It Safe to Upload PDFs Online? A Complete Security Review',
              description: 'A deep dive into PDF security. Discover what happens to your files when you upload them to ThePDFNinja, including our 256-bit AES encryption and 1-hour deletion policy.',
              image: 'https://thepdfninja.com/og-image.png',
              author: {
                '@type': 'Organization',
                name: 'ThePDFNinja Security Team',
                url: 'https://thepdfninja.com/about'
              },
              publisher: {
                '@type': 'Organization',
                name: 'ThePDFNinja',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://thepdfninja.com/og-image.png'
                }
              },
              datePublished: new Date().toISOString().split('T')[0],
              dateModified: new Date().toISOString().split('T')[0],
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://thepdfninja.com/blog/is-it-safe-to-upload-pdfs-online'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is it safe to upload PDFs online?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, if you use a reputable service like ThePDFNinja. We use 256-bit AES SSL encryption to secure the transfer, process files in isolated cloud containers, and permanently delete your files within 1 hour of processing.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What happens to my uploaded files?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Once uploaded to ThePDFNinja, your files are processed entirely by automated AWS servers without human interaction. After processing, a strict deletion protocol permanently purges your original and processed files from our servers within 1 hour.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Are my passwords stored when I encrypt or unlock a PDF?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. ThePDFNinja operates on a zero-knowledge basis for passwords. We do not log, store, or transmit any passwords you use to protect or unlock your documents.'
                  }
                }
              ]
            }
          ])
        }}
      />

      <div style={{ background: '#f3f0ec', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px', fontSize: '0.9rem', fontWeight: 600 }}>
            <Link href="/blog" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-muted)' }}>Security</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '20px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Is It Safe to Upload PDFs Online?
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            A complete transparency report on how ThePDFNinja handles your sensitive documents, encryption standards, and our strict 1-hour deletion policy.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--text)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
              N
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>ThePDFNinja Security Team</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Updated: June 2026 • 5 min read</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px', padding: '60px 20px', background: 'white' }}>
        <div className="prose" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)' }}>
          <p>
            It is a question every professional should ask before using a cloud-based service: <strong>"Is it safe to upload my PDFs online?"</strong>
          </p>
          <p>
            Whether you are merging confidential legal contracts, converting sensitive financial spreadsheets to PDF, or trying to unlock a password-protected tax return, your documents contain highly private data. Sending that data to an unknown server can be daunting.
          </p>
          <p>
            At ThePDFNinja, we believe that world-class document processing shouldn't require you to sacrifice your digital privacy. This page serves as a complete, transparent review of our security infrastructure, so you know exactly what happens to your files from the moment you click "Upload."
          </p>

          <h2 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem', fontWeight: 800 }}>1. The Transfer: 256-bit AES SSL Encryption</h2>
          <p>
            The moment you select a file on your computer and upload it to ThePDFNinja, the connection is secured using <strong>256-bit Advanced Encryption Standard (AES) SSL/TLS</strong>.
          </p>
          <p>
            This is the exact same cryptographic standard utilized by international banks, government agencies, and the military. It ensures that while your file is traveling through the internet to our servers, it is completely unreadable to anyone trying to intercept it. Man-in-the-middle attacks or network sniffing are mathematically impossible against this level of encryption.
          </p>

          <h2 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem', fontWeight: 800 }}>2. The Processing: Isolated AWS Cloud Infrastructure</h2>
          <p>
            We do not run our services on cheap, shared hosting platforms. ThePDFNinja's entire infrastructure is built on <strong>Amazon Web Services (AWS)</strong>, specifically utilizing their highly secure, compliant data centers.
          </p>
          <p>
            When your file arrives, it is processed in an isolated, sandboxed container. This means:
          </p>
          <ul>
            <li><strong>Zero Human Interaction:</strong> The processing (whether merging, splitting, compressing, or converting) is 100% automated by our algorithms. No human technician, employee, or third-party contractor ever views your files.</li>
            <li><strong>No AI Training:</strong> Unlike some modern cloud tools, we strictly opt out of using your private documents to train artificial intelligence or machine learning models. Your intellectual property remains yours.</li>
            <li><strong>Zero-Knowledge Passwords:</strong> If you use our <Link href="/tools/protect" style={{ color: 'var(--orange)' }}>Protect PDF</Link> or <Link href="/tools/unlock" style={{ color: 'var(--orange)' }}>Unlock PDF</Link> tools, the password you enter is held in active memory just long enough to process the file, and then it is instantly forgotten. We never log, store, or save your passwords.</li>
          </ul>

          <div style={{ background: '#FFF0EB', borderLeft: '4px solid var(--orange)', padding: '24px', margin: '40px 0', borderRadius: '0 8px 8px 0' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.2rem', color: 'var(--orange)', fontWeight: 800 }}>Our Privacy Promise</h3>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
              We are a software tool, not a data broker. We do not read, analyze, share, or sell the contents of your documents. You do not need to create an account or provide an email address to use our service, ensuring you remain completely anonymous.
            </p>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem', fontWeight: 800 }}>3. The Deletion: Strict 1-Hour Auto-Purge Protocol</h2>
          <p>
            This is arguably the most critical aspect of our security framework. Even with world-class encryption, the safest file is one that no longer exists on a server.
          </p>
          <p>
            Competitors like DropFile or RaptorPDF often keep your files for 24 hours, or even days if you create an account. <strong>ThePDFNinja operates on a strict 1-hour deletion protocol.</strong>
          </p>
          <p>
            Exactly 60 minutes after your file is processed, our automated cron jobs trigger a hard deletion. Both the original file you uploaded and the processed file you generated are permanently and irretrievably purged from the AWS servers. We do not keep backups of user files. If you forget to download your converted PDF and 61 minutes pass, you will have to upload and convert it again.
          </p>

          <h2 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem', fontWeight: 800 }}>Conclusion: Is ThePDFNinja Safe?</h2>
          <p>
            <strong>Yes.</strong> By combining military-grade transit encryption, isolated AWS processing, zero-knowledge anonymity, and an aggressive 1-hour deletion policy, ThePDFNinja is widely considered one of the most secure online PDF utilities available today.
          </p>
          <p>
            You can process your most sensitive legal documents, personal IDs, and corporate financial data with absolute peace of mind.
          </p>

          <div style={{ marginTop: '60px', padding: '40px', background: 'var(--bg)', borderRadius: '16px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Ready to securely edit your PDFs?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Choose from our 23 free, fully encrypted tools.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link href="/tools" style={{ background: 'var(--orange)', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
                View All Tools
              </Link>
              <Link href="/tools/merge" style={{ background: 'white', color: 'var(--text)', border: '1px solid var(--border)', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                Merge PDF Securely
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
