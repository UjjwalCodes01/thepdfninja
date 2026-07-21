'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Cookie consent banner backed by Google Consent Mode v2.
// The consent DEFAULT (denied) is set in layout <head> before any tag loads;
// this component surfaces the choice and calls gtag('consent','update', …).

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

const KEY = 'pdfninja_consent';

const GRANTED = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
} as const;

const DENIED = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(KEY); } catch { /* ignore */ }
    if (stored !== 'granted' && stored !== 'denied') {
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    try { localStorage.setItem(KEY, granted ? 'granted' : 'denied'); } catch { /* ignore */ }
    const w = window as GtagWindow;
    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', granted ? GRANTED : DENIED);
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Cookie consent" aria-live="polite" className="cc-banner">
      <div className="cc-inner">
        <div className="cc-text">
          <strong style={{ color: '#111827', display: 'block', marginBottom: '4px', fontSize: '0.92rem' }}>
            🍪 We value your privacy
          </strong>
          <p style={{ margin: 0, fontSize: '0.84rem', color: '#4B5563', lineHeight: 1.55 }}>
            We use cookies to run the site, measure traffic, and &mdash; if you allow it &mdash; show personalised ads.
            You can accept or decline non-essential cookies. Read our{' '}
            <Link href="/privacy" style={{ color: '#F5622D', textDecoration: 'underline' }}>Privacy Policy</Link>.
          </p>
        </div>
        <div className="cc-actions">
          <button onClick={() => decide(false)} className="cc-btn cc-decline" type="button">Decline</button>
          <button onClick={() => decide(true)} className="cc-btn cc-accept" type="button">Accept all</button>
        </div>
      </div>

      <style>{`
        .cc-banner {
          position: fixed;
          left: 16px; right: 16px; bottom: 16px;
          z-index: 10001;
          background: #ffffff;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.16);
          padding: 18px 20px;
          max-width: 720px;
          margin: 0 auto;
          animation: cc-up 0.3s ease;
        }
        .cc-inner {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          justify-content: space-between;
        }
        .cc-text { flex: 1; min-width: 240px; }
        .cc-actions { display: flex; gap: 10px; flex-shrink: 0; }
        .cc-btn {
          font-family: inherit; font-weight: 700; font-size: 0.85rem;
          padding: 10px 20px; border-radius: 8px; cursor: pointer;
          border: 1.5px solid transparent; transition: all 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .cc-decline { background: #fff; color: #4B5563; border-color: #E5E7EB; }
        .cc-decline:hover { background: #F9FAFB; }
        .cc-accept { background: #F5622D; color: #fff; }
        .cc-accept:hover { background: #d94f22; }
        @keyframes cc-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @media (max-width: 560px) {
          .cc-actions { width: 100%; }
          .cc-btn { flex: 1; }
        }
      `}</style>
    </div>
  );
}
