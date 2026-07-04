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

  // Pulse button after 5s to draw attention
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
      {/* ── FAB Trigger Button ── */}
      <button
        id="complaint-widget-trigger"
        aria-label="Report a complaint or issue"
        onClick={() => setIsOpen(true)}
        className="cw-fab"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3v18M4 3h10l-2 4.5L14 12H4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="cw-tooltip">Report an Issue</span>
      </button>

      {/* ── Backdrop ── */}
      <div
        className="cw-backdrop"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        aria-hidden="true"
      />

      {/* ── Floating Modal (all screen sizes) ── */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="complaint-modal-title"
        className="cw-modal"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Header */}
        <div className="cw-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '3px' }}>
            <span style={{ fontSize: '1.15rem' }}>🚨</span>
            <h2 id="complaint-modal-title" className="cw-header-title">Report an Issue</h2>
          </div>
          <p className="cw-header-sub">We&apos;ll look into it and get back to you.</p>
          <button onClick={handleClose} aria-label="Close" className="cw-close">✕</button>
        </div>

        {/* Body */}
        <div className="cw-body">
          {formState === 'success' ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '14px' }}>✅</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                Complaint Received!
              </h3>
              <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '22px' }}>
                Our team will review and respond within 24–48 hours.
              </p>
              <button onClick={handleClose} className="cw-btn-primary" style={{ padding: '11px 28px' }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label htmlFor="complaint-name" style={labelStyle}>Your Name <span style={{ color: '#F5622D' }}>*</span></label>
                <input
                  id="complaint-name" name="name" type="text" required
                  autoComplete="name" placeholder="John Doe"
                  value={form.name} onChange={handleChange}
                  disabled={formState === 'submitting'}
                  className="cw-input"
                />
              </div>
              <div>
                <label htmlFor="complaint-email" style={labelStyle}>Email Address <span style={{ color: '#F5622D' }}>*</span></label>
                <input
                  id="complaint-email" name="email" type="email" required
                  autoComplete="email" placeholder="john@example.com"
                  value={form.email} onChange={handleChange}
                  disabled={formState === 'submitting'}
                  className="cw-input"
                />
              </div>
              <div>
                <label htmlFor="complaint-subject" style={labelStyle}>Subject <span style={{ color: '#F5622D' }}>*</span></label>
                <select
                  id="complaint-subject" name="subject" required
                  value={form.subject} onChange={handleChange}
                  disabled={formState === 'submitting'}
                  className="cw-input cw-select"
                >
                  <option value="">Select a subject…</option>
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="complaint-message" style={labelStyle}>
                  Describe your issue <span style={{ color: '#F5622D' }}>*</span>
                </label>
                <textarea
                  id="complaint-message" name="message" required rows={4}
                  placeholder="Please describe the problem in as much detail as possible…"
                  value={form.message} onChange={handleChange}
                  disabled={formState === 'submitting'}
                  className="cw-input cw-textarea"
                />
              </div>

              {formState === 'error' && errorMsg && (
                <div className="cw-error">
                  <span>⚠️</span> {errorMsg}
                </div>
              )}

              <button
                type="submit" id="complaint-submit-btn"
                disabled={formState === 'submitting'}
                className="cw-btn-primary cw-submit"
                style={{ opacity: formState === 'submitting' ? 0.75 : 1, cursor: formState === 'submitting' ? 'not-allowed' : 'pointer' }}
              >
                {formState === 'submitting' ? (
                  <><span className="cw-spinner" /> Sending…</>
                ) : (
                  <><span>📨</span> Submit Complaint</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        /* FAB */
        .cw-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
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
          box-shadow: 0 6px 24px rgba(245,98,45,0.42), 0 2px 8px rgba(0,0,0,0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: ${pulse ? 'cw-pulse 2.5s ease-in-out 3' : 'none'};
          -webkit-tap-highlight-color: transparent;
        }
        .cw-fab:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(245,98,45,0.52), 0 4px 12px rgba(0,0,0,0.15); }
        .cw-fab:active { transform: scale(0.95); }

        /* Tooltip */
        .cw-tooltip {
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
          transition: opacity 0.18s;
        }
        .cw-fab:hover .cw-tooltip { opacity: 1; }
        @media (hover: none) { .cw-tooltip { display: none; } }

        /* Backdrop */
        .cw-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(17,24,39,0.4);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          z-index: 9999;
          transition: opacity 0.22s ease;
        }

        /* Modal — floats above FAB on all sizes */
        .cw-modal {
          position: fixed;
          bottom: 84px;
          right: 16px;
          left: 16px;
          z-index: 10000;
          max-width: 400px;
          margin-left: auto;
          max-height: calc(100dvh - 104px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.16), 0 8px 24px rgba(0,0,0,0.10);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: opacity 0.26s cubic-bezier(0.34,1.56,0.64,1), transform 0.26s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* Header */
        .cw-header {
          background: linear-gradient(135deg, #F5622D 0%, #d94f22 100%);
          padding: 18px 20px 15px;
          position: relative;
          flex-shrink: 0;
        }
        .cw-header-title {
          color: white;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .cw-header-sub {
          color: rgba(255,255,255,0.82);
          font-size: 0.77rem;
          margin: 0;
        }
        .cw-close {
          position: absolute;
          top: 12px; right: 14px;
          background: rgba(255,255,255,0.22);
          border: none; border-radius: 50%;
          width: 28px; height: 28px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 0.85rem; font-weight: 700;
          transition: background 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .cw-close:hover { background: rgba(255,255,255,0.38); }

        /* Body */
        .cw-body {
          padding: 18px 18px 20px;
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        /* Inputs */
        .cw-input {
          width: 100%;
          min-height: 42px;
          padding: 9px 12px;
          border: 1.5px solid #E5E7EB;
          border-radius: 8px;
          font-family: inherit;
          font-size: 16px;
          color: #111827;
          background: white;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          box-sizing: border-box;
        }
        .cw-input:focus { border-color: #F5622D; box-shadow: 0 0 0 3px rgba(245,98,45,0.10); }
        .cw-input:disabled { opacity: 0.6; cursor: not-allowed; }
        .cw-input::placeholder { color: #9CA3AF; }

        .cw-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }
        .cw-textarea { resize: vertical; min-height: 88px; line-height: 1.55; }

        /* Error */
        .cw-error {
          background: #FFF0F0; border: 1px solid #FECACA;
          border-radius: 8px; padding: 9px 13px;
          color: #DC2626; font-size: 0.82rem; font-weight: 500;
          display: flex; align-items: center; gap: 6px;
        }

        /* Button */
        .cw-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #F5622D; color: white; border: none; border-radius: 8px;
          font-family: inherit; font-weight: 700; font-size: 0.88rem;
          letter-spacing: -0.01em; cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .cw-btn-primary:hover:not(:disabled) { background: #d94f22; }
        .cw-btn-primary:active:not(:disabled) { transform: scale(0.97); }
        .cw-submit { width: 100%; padding: 12px; margin-top: 2px; min-height: 46px; }

        /* Spinner */
        .cw-spinner {
          width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white; border-radius: 50%;
          animation: cw-spin 0.7s linear infinite;
          display: inline-block; flex-shrink: 0;
        }

        @keyframes cw-pulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(245,98,45,0.42), 0 2px 8px rgba(0,0,0,0.12); }
          50% { box-shadow: 0 6px 24px rgba(245,98,45,0.42), 0 0 0 10px rgba(245,98,45,0.14), 0 2px 8px rgba(0,0,0,0.12); }
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
  fontSize: '0.71rem',
  fontWeight: 700,
  color: '#374151',
  marginBottom: '5px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};
