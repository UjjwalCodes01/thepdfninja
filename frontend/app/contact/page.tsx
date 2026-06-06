import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ThePDFNinja',
  description: 'Get in touch with the ThePDFNinja team for support, business inquiries, or feedback.',
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            Contact Us
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Have a question, feedback, or need support? We're here to help.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="card anim-fade-up anim-delay-2" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', color: 'var(--text)' }}>Send us a message</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Your Name</label>
                <input type="text" className="input" placeholder="John Doe" required />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Email Address</label>
                <input type="email" className="input" placeholder="john@example.com" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Subject</label>
                <select className="input" required>
                  <option value="">Select a topic...</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback / Suggestion</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>Message</label>
                <textarea className="input" rows={6} placeholder="How can we help you?" required style={{ resize: 'vertical' }}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '8px' }}>
                Send Message
              </button>
            </form>

            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                You can also reach us directly at:<br/>
                <a href="mailto:support@thepdfninja.com" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '8px' }}>support@thepdfninja.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
