import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | ThePDFNinja',
  description: 'Get in touch with the ThePDFNinja team. Questions, feedback, privacy requests, or press enquiries — send us a message and we\'ll reply within 24–48 hours.',
  alternates: { canonical: 'https://www.thepdfninja.com/contact' },
  openGraph: {
    url: 'https://www.thepdfninja.com/contact',
    title: 'Contact Us | ThePDFNinja',
    description: 'Reach the ThePDFNinja team with questions, feedback, or privacy requests. We reply within 24–48 hours.',
  },
};

const REASONS = [
  { title: 'Support & bug reports', desc: 'A tool acting up or a conversion not coming out right? Tell us what happened and we\'ll fix it.' },
  { title: 'Privacy requests', desc: 'Questions about how we handle your files, or a data request under our Privacy Policy.' },
  { title: 'Feedback & feature ideas', desc: 'Want a new tool or an improvement? We build a lot of what our users ask for.' },
  { title: 'Press & business', desc: 'Media, partnership, or business enquiries are welcome — we\'ll route you to the right person.' },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: 'var(--orange-light)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Contact Us
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Have a question, found a bug, or want to send feedback? We&apos;d love to hear from you. Fill out the form below and a real person will reply within 24&ndash;48 hours.
          </p>
        </div>
      </section>

      {/* ── BODY ── */}
      <section style={{ padding: '64px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '40px', alignItems: 'start' }} className="contact-grid">
            {/* Form */}
            <div className="anim-fade-up anim-delay-2">
              <ContactForm />
            </div>

            {/* Reasons / info sidebar */}
            <aside className="anim-fade-up anim-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  What can we help with?
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {REASONS.map(r => (
                    <div key={r.title} style={{ display: 'flex', gap: '12px' }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)', margin: '0 0 3px' }}>{r.title}</p>
                        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <p style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)', margin: '0 0 8px' }}>Response time</p>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  We typically respond within <strong>24&ndash;48 hours</strong>, Monday to Friday. For account-free tools there&apos;s
                  nothing to log in to &mdash; just describe your issue and the email you used so we can reply.
                </p>
              </div>

              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '20px' }}>
                <p style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text)', margin: '0 0 8px' }}>Company</p>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  ThePDFNinja is built and operated by{' '}
                  <a href="https://digitalanaya.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Anaya Digital</a>.
                  You can also learn more <Link href="/about" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>about us</Link> or read our{' '}
                  <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
