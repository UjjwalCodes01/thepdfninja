'use client';
import { useState, useEffect, useRef } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ComplaintWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [pulse, setPulse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Detect mobile/tablet
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Pulse the button after 5s to draw attention
  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on outside click (desktop only — mobile has a close button)
  useEffect(() => {
    if (!isOpen || isMobile) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, isMobile]);

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
    }, 350);
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

  // ─── Mobile: bottom-sheet styles ───────────────────────────────────────────
  const mobileModalStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    width: '100%',
    background: 'white',
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
    maxHeight: '92dvh',
    display: 'flex',
    flexDirection: 'column',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: 'opacity 0.32s ease, transform 0.32s cubic-bezier(0.32,0.72,0,1)',
  };

  // ─── Desktop: floating card styles ─────────────────────────────────────────
  const desktopModalStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '24px',
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
  };

  return (
    <>
      {/* ── Floating Trigger Button ── */}
      <button
        id="complaint-widget-trigger"
        aria-label="Report a complaint or issue"
        onClick={() => setIsOpen(true)}
        className="cw-fab"
      >
        {/* Flag Icon */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3v18M4 3h10l-2 4.5L14 12H4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Tooltip — desktop only */}
        <span className="widget-tooltip">Report an Issue</span>
      </button>

      {/* ── Backdrop ── */}
      <div
        className="cw-backdrop"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
        onClick={isMobile ? handleClose : undefined}
      />

      {/* ── Modal ── */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="complaint-modal-title"
        style={isMobile ? mobileModalStyle : desktopModalStyle}
      >
        {/* Mobile drag handle */}
        {isMobile && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 0' }}>
            <div style={{ width: '40px', height: '4px', background: '#D1D5DB', borderRadius: '100px' }} />
          </div>
        )}

        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #F5622D 0%, #d94f22 100%)',
          padding: isMobile ? '16px 20px 14px' : '20px 24px 18px',
          position: 'relative',
          flexShrink: 0,
          marginTop: isMobile ? '6px' : 0,
          borderRadius: isMobile ? '16px 16px 0 0' : 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3px' }}>
            <span style={{ fontSize: '1.2rem' }}>🚨</span>
            <h2
              id="complaint-modal-title"
              style={{ color: 'white', fontWeight: 800, fontSize: isMobile ? '1rem' : '1.05rem', letterSpacing: '-0.02em', margin: 0 }}
            >
              Report an Issue
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.78rem', margin: 0 }}>
            We&apos;ll look into it and get back to you.
          </p>
          <button
            onClick={handleClose}
            aria-label="Close complaint form"
            className="cw-close-btn"
          >
            ✕
          </button>
        </div>

        {/* Body — scrollable */}
        <div style={{
          padding: isMobile ? '20px 16px 24px' : '22px 24px 24px',
          overflowY: 'auto',
          flex: 1,
          WebkitOverflowScrolling: 'touch',
        }}>
          {formState === 'success' ? (
            <div style={{ textAlign: 'center', padding: '28px 0' }}>
              <div style={{ fontSize: '3.2rem', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Complaint Received!
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '28px' }}>
                Thank you for reaching out. Our team will review your complaint and respond within 24–48 hours.
              </p>
              <button
                onClick={handleClose}
                className="cw-btn-primary"
                style={{ padding: '12px 32px' }}
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Name + Email row on tablet+ */}
              <div className="cw-row">
                <div className="cw-field">
                  <label htmlFor="complaint-name" style={labelStyle}>
                    Your Name <span style={{ color: '#F5622D' }}>*</span>
                  </label>
                  <input
                    id="complaint-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    disabled={formState === 'submitting'}
                    className="cw-input"
                  />
                </div>
                <div className="cw-field">
                  <label htmlFor="complaint-email" style={labelStyle}>
                    Email <span style={{ color: '#F5622D' }}>*</span>
                  </label>
                  <input
                    id="complaint-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    disabled={formState === 'submitting'}
                    className="cw-input"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="complaint-subject" style={labelStyle}>
                  Subject <span style={{ color: '#F5622D' }}>*</span>
                </label>
                <select
                  id="complaint-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  disabled={formState === 'submitting'}
                  className="cw-input cw-select"
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
                  className="cw-input cw-textarea"
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
                className="cw-btn-primary cw-submit"
                style={{
                  opacity: formState === 'submitting' ? 0.75 : 1,
                  cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                }}
              >
                {formState === 'submitting' ? (
                  <>
                    <span className="cw-spinner" />
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

      {/* ── Styles ── */}
      <style>{`
        /* FAB button */
        .cw-fab {
          position: fixed;
          bottom: 24px;
          right: 20px;
          z-index: 9998;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #F5622D 0%, #d94f22 100%);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(245,98,45,0.40), 0 2px 8px rgba(0,0,0,0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: ${pulse ? 'widget-pulse 2.5s ease-in-out 3' : 'none'};
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .cw-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 32px rgba(245,98,45,0.50), 0 4px 12px rgba(0,0,0,0.15);
        }
        .cw-fab:active { transform: scale(0.96); }

        /* Tooltip — hidden on touch devices */
        .widget-tooltip {
          position: absolute;
          right: 62px;
          background: #111827;
          color: white;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .cw-fab:hover .widget-tooltip { opacity: 1; }
        @media (hover: none) { .widget-tooltip { display: none; } }

        /* Backdrop */
        .cw-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(17,24,39,0.5);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 9999;
          transition: opacity 0.25s ease;
        }

        /* Close button */
        .cw-close-btn {
          position: absolute;
          top: 12px;
          right: 14px;
          background: rgba(255,255,255,0.22);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.9rem;
          font-weight: 700;
          transition: background 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .cw-close-btn:hover { background: rgba(255,255,255,0.38); }

        /* Input base */
        .cw-input {
          width: 100%;
          min-height: 44px;
          padding: 10px 13px;
          border: 1.5px solid #E5E7EB;
          border-radius: 8px;
          font-family: inherit;
          font-size: 16px; /* prevents iOS zoom */
          color: #111827;
          background: white;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          box-sizing: border-box;
        }
        .cw-input:focus {
          border-color: #F5622D;
          box-shadow: 0 0 0 3px rgba(245,98,45,0.12);
        }
        .cw-input:disabled { opacity: 0.6; cursor: not-allowed; }
        .cw-input::placeholder { color: #9CA3AF; }

        /* Select arrow */
        .cw-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 13px center;
          padding-right: 38px;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }

        /* Textarea */
        .cw-textarea {
          resize: vertical;
          min-height: 90px;
          line-height: 1.55;
        }

        /* Name + Email side-by-side on tablet+ */
        .cw-row {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cw-field { flex: 1; }
        @media (min-width: 480px) {
          .cw-row { flex-direction: row; gap: 12px; }
        }

        /* Submit button */
        .cw-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #F5622D;
          color: white;
          border: none;
          border-radius: 8px;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .cw-btn-primary:hover:not(:disabled) { background: #d94f22; }
        .cw-btn-primary:active:not(:disabled) { transform: scale(0.98); }

        .cw-submit {
          width: 100%;
          padding: 13px;
          margin-top: 2px;
          min-height: 48px; /* touch target */
        }

        /* Spinner */
        .cw-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: cw-spin 0.7s linear infinite;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Mobile: smaller FAB, bottom sheet position */
        @media (max-width: 480px) {
          .cw-fab {
            width: 48px;
            height: 48px;
            bottom: 20px;
            right: 16px;
          }
        }

        /* Keyframes */
        @keyframes widget-pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(245,98,45,0.40), 0 2px 8px rgba(0,0,0,0.12); }
          50% { box-shadow: 0 6px 24px rgba(245,98,45,0.40), 0 0 0 10px rgba(245,98,45,0.15), 0 2px 8px rgba(0,0,0,0.12); }
        }
        @keyframes cw-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  color: '#374151',
  marginBottom: '5px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};
