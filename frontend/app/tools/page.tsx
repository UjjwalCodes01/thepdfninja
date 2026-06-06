'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TOOLS } from '../lib/toolConfig';
import ToolIcon from '../components/ToolIcon';

const allTools = Object.values(TOOLS);
const categories = ['All', ...Array.from(new Set(allTools.map(t => t.category)))];

export default function AllToolsPage() {
  const [activeCat, setActiveCat] = useState('All');


  const filtered = allTools.filter(t =>
    (activeCat === 'All' || t.category === activeCat)
  );

  return (
    <>
      <section style={{ background: 'var(--orange-light)', padding: '64px 0 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="anim-fade-up" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', letterSpacing: '-0.03em' }}>
            All PDF Tools
          </h1>
          <p className="anim-fade-up anim-delay-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            Every tool you need to work with PDFs in one place. All 100% free, secure, and easy to use.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 0', background: 'var(--bg)', minHeight: '60vh' }}>
        <div className="container-wide">
          <div className="anim-fade-up anim-delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map(c => (
                <button
                  key={c}
                  className={`cat-pill ${activeCat === c ? 'active' : ''}`}
                  onClick={() => setActiveCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>


          </div>

          <div className="anim-fade-up anim-delay-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {filtered.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`} className="tool-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px' }}>
                <span className="tool-card-arrow">→</span>
                <div style={{ flexShrink: 0 }}>
                  <ToolIcon tool={t.slug} size={56} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: '4px' }}>{t.label}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '8px' }}>{t.description}</p>
                  <span className={`badge ${t.type !== 'easy' ? 'badge-gray' : 'badge-green'}`} style={{ fontSize: '0.65rem' }}>
                    {t.type !== 'easy' ? '🔄 Async Process' : '⚡ Instant Process'}
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
