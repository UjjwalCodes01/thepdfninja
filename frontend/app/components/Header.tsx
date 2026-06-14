'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const tools = [
  { slug: 'merge', label: 'Merge PDF', icon: '⊕' },
  { slug: 'split', label: 'Split PDF', icon: '⊗' },
  { slug: 'compress', label: 'Compress PDF', icon: '↘' },
  { slug: 'pdf-to-word', label: 'PDF to Word', icon: '⇒' },
  { slug: 'word-to-pdf', label: 'Word to PDF', icon: '⇐' },
  { slug: 'pdf-to-jpg', label: 'PDF to JPG', icon: '⊡' },
  { slug: 'jpg-to-pdf', label: 'JPG to PDF', icon: '⊟' },
  { slug: 'protect', label: 'Protect PDF', icon: '🔒' },
  { slug: 'unlock', label: 'Unlock PDF', icon: '🔓' },
  { slug: 'ocr', label: 'OCR PDF', icon: '👁' },
  { slug: 'rotate', label: 'Rotate PDF', icon: '↻' },
  { slug: 'watermark', label: 'Watermark PDF', icon: '◎' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'white',
        borderBottom: `1px solid ${scrolled ? '#E5E7EB' : '#F3F4F6'}`,
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.2s, border-color 0.2s',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <Link href="/" aria-label="ThePDFNinja - Free Online PDF Tools">
            <Logo size={45} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {/* Tools dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setToolsOpen(o => !o)}
                aria-expanded={toolsOpen}
                aria-haspopup="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: 'none', border: 'none',
                  fontFamily: 'var(--font)', fontWeight: 500, fontSize: '0.9rem',
                  color: toolsOpen ? 'var(--orange)' : 'var(--text-secondary)',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => setToolsOpen(true)}
              >
                All Tools
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ transform: toolsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>
                  <path d="M6 8L1 3h10z"/>
                </svg>
              </button>

              {toolsOpen && (
                <div
                  onMouseLeave={() => setToolsOpen(false)}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '12px',
                    width: '480px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2px',
                    zIndex: 100,
                  }}
                >
                  {tools.map(t => (
                    <Link
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '9px 12px',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        transition: 'all 0.12s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--orange-light)'; (e.currentTarget as HTMLElement).style.color = 'var(--orange)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                    >
                      <span style={{ fontSize: '14px', width: '20px', textAlign: 'center' }}>{t.icon}</span>
                      {t.label}
                    </Link>
                  ))}
                  <div style={{ gridColumn: '1/-1', borderTop: '1px solid var(--border)', marginTop: '8px', paddingTop: '10px' }}>
                    <Link href="/tools" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      padding: '9px', borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none', color: 'var(--orange)',
                      fontWeight: 600, fontSize: '0.875rem',
                      background: 'var(--orange-light)',
                    }}>
                      View all 56 PDF tools →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tools" className="nav-link" style={{ padding: '8px 10px' }}>Tools</Link>
            <Link href="/about" className="nav-link" style={{ padding: '8px 10px' }}>About</Link>

            <Link href="/tools/merge" className="btn btn-primary btn-sm" style={{ marginLeft: '12px' }}>
              Get Started Free
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '8px',
              color: 'var(--text)', borderRadius: 'var(--radius-sm)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen
                ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
                : <><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></>
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0,
          background: 'white',
          zIndex: 999,
          overflowY: 'auto',
          padding: '20px 20px 40px',
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
            <Link href="/tools" style={{ padding: '13px 0', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border-light)' }}>All Tools</Link>
            <Link href="/about" style={{ padding: '13px 0', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border-light)' }}>About</Link>
          </div>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '12px' }}>Popular Tools</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {tools.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 12px',
                background: 'var(--bg)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem', fontWeight: 500,
              }}>
                <span>{t.icon}</span> {t.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/tools/merge" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
              Get Started Free
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
