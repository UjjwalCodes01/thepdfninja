import Link from 'next/link';
import type { Block } from './types';

// Minimal inline parser: [label](/href) and **bold**. Produces React nodes,
// never raw HTML, so a stray angle bracket in copy can never become markup.
const INLINE = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

export function inline(text: string): React.ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith('/')
        ? <Link key={i} href={href}>{label}</Link>
        : <a key={i} href={href} rel="noopener noreferrer" target="_blank">{label}</a>;
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

export function renderBlock(block: Block, i: number): React.ReactNode {
  if ('h2' in block) return <h2 key={i}>{block.h2}</h2>;
  if ('h3' in block) return <h3 key={i}>{block.h3}</h3>;
  if ('p' in block) return <p key={i}>{inline(block.p)}</p>;

  if ('ul' in block)
    return <ul key={i}>{block.ul.map((li, j) => <li key={j}>{inline(li)}</li>)}</ul>;

  if ('ol' in block)
    return <ol key={i}>{block.ol.map((li, j) => <li key={j}>{inline(li)}</li>)}</ol>;

  if ('note' in block)
    return (
      <div key={i} style={{ background: 'var(--orange-light)', borderLeft: '3px solid var(--orange)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0' }}>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>{inline(block.note)}</p>
      </div>
    );

  if ('table' in block)
    return (
      <div key={i} style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr>
              {block.table.headers.map((h, j) => (
                <th key={j} style={{ textAlign: 'left', padding: '10px 14px', background: 'var(--bg)', borderBottom: '2px solid var(--border)', fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, j) => (
              <tr key={j}>
                {row.map((cell, k) => (
                  <td key={k} style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', color: k === 0 ? 'var(--text)' : 'var(--text-secondary)', fontWeight: k === 0 ? 600 : 400 }}>{inline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  if ('faq' in block)
    return (
      <div key={i} style={{ margin: '28px 0' }}>
        {block.faq.map((f, j) => (
          <details key={j} style={{ borderBottom: '1px solid var(--border)' }}>
            <summary style={{ fontWeight: 600, fontSize: '0.98rem', padding: '16px 0', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span>{f.q}</span>
              <span style={{ color: 'var(--orange)', fontSize: '1.2rem', lineHeight: 1 }}>+</span>
            </summary>
            <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', paddingBottom: '16px', margin: 0 }}>{inline(f.a)}</p>
          </details>
        ))}
      </div>
    );

  return null;
}
