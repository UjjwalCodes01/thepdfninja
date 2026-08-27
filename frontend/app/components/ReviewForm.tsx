'use client';
import { useState } from 'react';
import { API_URL } from '../lib/reviews';
import { TOOL_LIST } from '../lib/toolConfig';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const MIN_BODY = 20;
const MAX_BODY = 1500;

const RATING_LABELS: Record<number, string> = {
  1: 'Poor',
  2: 'Not great',
  3: 'Okay',
  4: 'Good',
  5: 'Excellent',
};

export default function ReviewForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [hovered, setHovered] = useState(0);
  const [form, setForm] = useState({
    rating: 0,
    name: '',
    role: '',
    tool: '',
    title: '',
    body: '',
    website: '', // honeypot — real people never see or fill this
  });

  const set = (k: string, v: string | number) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      setErrorMsg('Please pick a star rating.');
      setState('error');
      return;
    }
    setState('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/v1/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg(data?.error || 'Something went wrong. Please try again.');
        setState('error');
        return;
      }
      setState('success');
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div style={{ ...cardStyle, textAlign: 'center', padding: '48px 32px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', margin: '0 auto 20px' }}>
          ✓
        </div>
        <h3 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: '10px', letterSpacing: '-0.02em' }}>
          Thank you for the review
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '440px', margin: '0 auto' }}>
          We read every review before publishing it, so yours will appear on this page shortly.
          We never edit what you wrote and we never remove a review for being critical.
        </p>
      </div>
    );
  }

  const bodyLength = form.body.length;
  const bodyTooShort = bodyLength > 0 && bodyLength < MIN_BODY;

  return (
    <form onSubmit={handleSubmit} noValidate style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Write a review
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
          Tell other people what actually happened when you used ThePDFNinja. No account needed.
        </p>
      </div>

      {/* Rating */}
      <div>
        <label style={labelStyle} id="rating-label">
          Your rating <span style={{ color: 'var(--orange)' }}>*</span>
        </label>
        <div role="radiogroup" aria-labelledby="rating-label" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '4px' }} onMouseLeave={() => setHovered(0)}>
            {[1, 2, 3, 4, 5].map(n => {
              const active = (hovered || form.rating) >= n;
              return (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={form.rating === n}
                  aria-label={`${n} star${n > 1 ? 's' : ''} — ${RATING_LABELS[n]}`}
                  onMouseEnter={() => setHovered(n)}
                  onFocus={() => setHovered(n)}
                  onBlur={() => setHovered(0)}
                  onClick={() => set('rating', n)}
                  disabled={state === 'submitting'}
                  style={{
                    background: 'none', border: 'none', padding: '2px',
                    cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
                    lineHeight: 0, borderRadius: '4px',
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" style={{ display: 'block', transition: 'transform 0.12s ease' }}>
                    <path
                      d="M12 1.6l3.09 6.26 6.91 1L17 13.72l1.18 6.88L12 17.35l-6.18 3.25L7 13.72 2 8.86l6.91-1L12 1.6z"
                      fill={active ? 'var(--orange)' : 'var(--border)'}
                    />
                  </svg>
                </button>
              );
            })}
          </div>
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: (hovered || form.rating) ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
            {RATING_LABELS[hovered || form.rating] || 'Pick a rating'}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
        <div>
          <label htmlFor="rv-name" style={labelStyle}>
            Your name <span style={{ color: 'var(--orange)' }}>*</span>
          </label>
          <input
            id="rv-name" type="text" required maxLength={60} autoComplete="name"
            placeholder="Priya S."
            value={form.name} onChange={e => set('name', e.target.value)}
            disabled={state === 'submitting'} style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="rv-role" style={labelStyle}>What you do <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
          <input
            id="rv-role" type="text" maxLength={60}
            placeholder="Student, accountant, designer…"
            value={form.role} onChange={e => set('role', e.target.value)}
            disabled={state === 'submitting'} style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="rv-tool" style={labelStyle}>Which tool did you use? <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <select
          id="rv-tool" value={form.tool} onChange={e => set('tool', e.target.value)}
          disabled={state === 'submitting'} style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="">No particular tool</option>
          {TOOL_LIST.map(t => <option key={t.slug} value={t.slug}>{t.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="rv-title" style={labelStyle}>Headline <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <input
          id="rv-title" type="text" maxLength={100}
          placeholder="Compressed my form to exactly 200KB"
          value={form.title} onChange={e => set('title', e.target.value)}
          disabled={state === 'submitting'} style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="rv-body" style={labelStyle}>
          Your review <span style={{ color: 'var(--orange)' }}>*</span>
        </label>
        <textarea
          id="rv-body" required rows={5} maxLength={MAX_BODY}
          placeholder="What did you need to do, and how did it go? Specifics help other people more than praise."
          value={form.body} onChange={e => set('body', e.target.value)}
          disabled={state === 'submitting'}
          style={{ ...inputStyle, minHeight: '128px', resize: 'vertical', lineHeight: 1.6, paddingTop: '12px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.78rem' }}>
          <span style={{ color: bodyTooShort ? 'var(--orange)' : 'var(--text-muted)' }}>
            {bodyTooShort ? `At least ${MIN_BODY} characters, please` : 'Reviews cannot contain links.'}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>{bodyLength}/{MAX_BODY}</span>
        </div>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="rv-website">Leave this field empty</label>
        <input
          id="rv-website" type="text" tabIndex={-1} autoComplete="off"
          value={form.website} onChange={e => set('website', e.target.value)}
        />
      </div>

      {state === 'error' && errorMsg && (
        <div role="alert" style={{ background: '#FFF0F0', border: '1px solid #FECACA', borderRadius: '8px', padding: '11px 14px', color: '#DC2626', fontSize: '0.88rem', fontWeight: 500, display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span aria-hidden="true">⚠️</span> {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn btn-primary"
        style={{ padding: '14px', justifyContent: 'center', width: '100%', opacity: state === 'submitting' ? 0.75 : 1, cursor: state === 'submitting' ? 'not-allowed' : 'pointer' }}
      >
        {state === 'submitting' ? 'Submitting…' : 'Submit review'}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
        Reviews are checked by a person before they appear, usually within a day.
        We publish critical reviews too — we only remove spam and abuse.
      </p>
    </form>
  );
}

const cardStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: 'var(--radius-lg)',
  padding: '32px',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-md)',
  position: 'relative',
};

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
