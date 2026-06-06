import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | ThePDFNinja',
  description: 'This page does not exist.',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--ninja-black)',
      textAlign: 'center',
      padding: '40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(227,28,35,0.07) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontSize: '8rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          color: 'var(--ninja-red)',
          lineHeight: 1,
          marginBottom: '8px',
          textShadow: '0 0 60px rgba(227,28,35,0.4)',
          letterSpacing: '-0.05em',
        }}>
          4✦4
        </div>

        <div style={{
          fontSize: '64px',
          marginBottom: '24px',
          animation: 'shuriken-spin 3s linear infinite',
          display: 'inline-block',
          filter: 'drop-shadow(0 0 20px rgba(227,28,35,0.6))',
        }}>✦</div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--ninja-white)',
          marginBottom: '16px',
        }}>
          The Ninja Vanished
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'var(--ninja-steel)',
          maxWidth: '420px',
          lineHeight: 1.7,
          marginBottom: '36px',
        }}>
          Even the most skilled ninja sometimes takes a wrong path. This page cannot be found — perhaps it never existed.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-ninja">
            ↩ Return to Dojo
          </Link>
          <Link href="/tools" className="btn-ghost">
            View All Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
