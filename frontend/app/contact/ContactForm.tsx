'use client';
import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const SUBJECTS = [
  'General question',
  'Tool not working',
  'File conversion issue',
  'Privacy concern',
  'Feature request',
  'Business / press enquiry',
  'Other',
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setFormState('error');
      } else {
        setFormState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
        <h2 style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--text)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
          Message sent!
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '28px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
          Thanks for reaching out. Our team reads every message and will get back to you at the email you provided within 24&ndash;48 hours.
        </p>
        <button onClick={() => setFormState('idle')} className="btn btn-outline" style={{ padding: '11px 28px' }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Your Name <span style={{ color: 'var(--orange)' }}>*</span></label>
          <input
            id="contact-name" name="name" type="text" required
            autoComplete="name" placeholder="John Doe"
            value={form.name} onChange={handleChange}
            disabled={formState === 'submitting'}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email Address <span style={{ color: 'var(--orange)' }}>*</span></label>
          <input
            id="contact-email" name="email" type="email" required
            autoComplete="email" placeholder="john@example.com"
            value={form.email} onChange={handleChange}
            disabled={formState === 'submitting'}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" style={labelStyle}>Subject <span style={{ color: 'var(--orange)' }}>*</span></label>
        <select
          id="contact-subject" name="subject" required
          value={form.subject} onChange={handleChange}
          disabled={formState === 'submitting'}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="">Select a subject&hellip;</option>
          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message <span style={{ color: 'var(--orange)' }}>*</span></label>
        <textarea
          id="contact-message" name="message" required rows={6}
          placeholder="How can we help? Please share as much detail as you can."
          value={form.message} onChange={handleChange}
          disabled={formState === 'submitting'}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', lineHeight: 1.55 }}
        />
      </div>

      {formState === 'error' && errorMsg && (
        <div style={{ background: '#FFF0F0', border: '1px solid #FECACA', borderRadius: '8px', padding: '11px 14px', color: '#DC2626', fontSize: '0.88rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⚠️</span> {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="btn btn-primary"
        style={{ padding: '14px', justifyContent: 'center', width: '100%', opacity: formState === 'submitting' ? 0.75 : 1, cursor: formState === 'submitting' ? 'not-allowed' : 'pointer' }}
      >
        {formState === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
        We&apos;ll only use your email to reply to this enquiry. See our{' '}
        <a href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Privacy Policy</a>.
      </p>
    </form>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.74rem',
  fontWeight: 700,
  color: 'var(--text-secondary)',
  marginBottom: '7px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '46px',
  padding: '11px 14px',
  border: '1.5px solid var(--border)',
  borderRadius: '8px',
  fontFamily: 'inherit',
  fontSize: '16px',
  color: 'var(--text)',
  background: 'white',
  outline: 'none',
  boxSizing: 'border-box',
};
