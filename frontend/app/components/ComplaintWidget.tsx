'use client';
import { useState, useEffect, useRef } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ComplaintWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [pulse, setPulse] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Pulse the button after 5s to draw attention
  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (formState === 'success') {
        setForm({ name: '', email: '', subject: '', message: '' });
        setFormState('idle');
      }
      setErrorMsg('');
    }, 300);
  };

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
        setErrorMsg(data.error || 'Something went wrong.');
        setFormState('error');
      } else {
        setFormState('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setFormState('error');
    }
  };

  const subjects = [
    'Tool not working',
    'File conversion issue',
    'Account / billing problem',
    'Privacy concern',
    'Feature request',
    'Other',
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        id="complaint-widget-trigger"
        aria-label="Report a complaint or issue"
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9998,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, #F5622D 0%, #d94f22 100%)',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(245,98,45,0.40), 0 2px 8px rgba(0,0,0,0.12)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          animation: pulse ? 'widget-pulse 2.5s ease-in-out 3' : 'none',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.12)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(245,98,45,0.50), 0 4px 12px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(245,98,45,0.40), 0 2px 8px rgba(0,0,0,0.12)';
        }}
      >
        {/* Complaint / Flag Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3v18M4 3h10l-2 4.5L14 12H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Tooltip */}
        <span style={{
          position: 'absolute',
          right: '68px',
          background: '#111827',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 600,
          padding: '5px 10px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.2s',
        }} className="widget-tooltip">
          Report an Issue
        </span>
      </button>

      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(17,24,39,0.45)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="complaint-modal-title"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 10000,
          width: 'min(420px, calc(100vw - 32px))',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)',
          overflow: 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.28s cubic-bezier(0.34,1.56,0.64,1), transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #F5622D 0%, #d94f22 100%)',
          padding: '20px 24px 18px',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <span style={{ fontSize: '1.3rem' }}>🚨</span>
            <h2 id="complaint-modal-title" style={{ color: 'white', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', margin: 0 }}>
              Report an Issue
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.8rem', margin: 0 }}>
            We&apos;ll look into it and get back to you.
          </p>
          <button
            onClick={handleClose}
            aria-label="Close complaint form"
            style={{
              position: 'absolute',
              top: '14px',
              right: '16px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700,
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
          {formState === 'success' ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Complaint Received!
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Thank you for reaching out. Our team will review your complaint and respond within 24–48 hours.
              </p>
              <button
                onClick={handleClose}
                style={{
                  background: '#F5622D',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d94f22')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F5622D')}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Name */}
              <div>
                <label htmlFor="complaint-name" style={labelStyle}>Your Name <span style={{ color: '#F5622D' }}>*</span></label>
                <input
                  id="complaint-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#F5622D')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="complaint-email" style={labelStyle}>Email Address <span style={{ color: '#F5622D' }}>*</span></label>
                <input
                  id="complaint-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = '#F5622D')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="complaint-subject" style={labelStyle}>Subject <span style={{ color: '#F5622D' }}>*</span></label>
                <select
                  id="complaint-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  style={{ ...inputStyle, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px', appearance: 'none', cursor: 'pointer' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#F5622D')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
                >
                  <option value="">Select a subject…</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="complaint-message" style={labelStyle}>
                  Describe your issue <span style={{ color: '#F5622D' }}>*</span>
                </label>
                <textarea
                  id="complaint-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Please describe the problem in as much detail as possible…"
                  value={form.message}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '96px', fontFamily: 'inherit' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#F5622D')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
                />
              </div>

              {/* Error */}
              {formState === 'error' && errorMsg && (
                <div style={{
                  background: '#FFF0F0',
                  border: '1px solid #FECACA',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#DC2626',
                  fontSize: '0.83rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span>⚠️</span> {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                id="complaint-submit-btn"
                disabled={formState === 'submitting'}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: formState === 'submitting' ? '#f9855a' : '#F5622D',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.15s, transform 0.15s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '2px',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { if (formState !== 'submitting') (e.currentTarget as HTMLButtonElement).style.background = '#d94f22'; }}
                onMouseLeave={e => { if (formState !== 'submitting') (e.currentTarget as HTMLButtonElement).style.background = '#F5622D'; }}
              >
                {formState === 'submitting' ? (
                  <>
                    <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.75s linear infinite', display: 'inline-block' }} />
                    Sending…
                  </>
                ) : (
                  <>
                    <span>📨</span> Submit Complaint
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes widget-pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(245,98,45,0.40), 0 2px 8px rgba(0,0,0,0.12); }
          50% { box-shadow: 0 6px 24px rgba(245,98,45,0.40), 0 0 0 10px rgba(245,98,45,0.15), 0 2px 8px rgba(0,0,0,0.12); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        #complaint-widget-trigger:hover .widget-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 700,
  color: '#374151',
  marginBottom: '5px',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  border: '1.5px solid #E5E7EB',
  borderRadius: '8px',
  fontFamily: 'inherit',
  fontSize: '0.875rem',
  color: '#111827',
  background: 'white',
  outline: 'none',
  transition: 'border-color 0.15s',
};
