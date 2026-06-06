'use client';
import { useEffect } from 'react';

interface AdUnitProps {
  slot: string; // AdSense slot ID
  type?: 'leaderboard' | 'rectangle' | 'skyscraper' | 'mobile';
  className?: string;
}

export default function AdUnit({ slot, type = 'rectangle', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense push error:', err);
    }
  }, []);

  // Determine styles based on the Google AdWords specification types
  let style: React.CSSProperties = { display: 'block', margin: '0 auto' };
  
  if (type === 'leaderboard') {
    // Usually 728x90 desktop, or responsive width
    style = { ...style, width: '100%', maxWidth: '970px', height: '90px' };
  } else if (type === 'rectangle') {
    // 300x250 Medium Rectangle or 336x280 Large Rectangle
    style = { ...style, width: '300px', height: '250px' };
  } else if (type === 'skyscraper') {
    // 160x600 Wide Skyscraper
    style = { ...style, width: '160px', height: '600px' };
  } else if (type === 'mobile') {
    // 320x50 or 320x100 Mobile Banner
    style = { ...style, width: '320px', height: '50px' };
  } else {
    // Responsive fallback
    style = { display: 'block' };
  }

  return (
    <div className={`ad-container ${className}`} style={{ textAlign: 'center', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-0000000000000000" // Replace with real Publisher ID
        data-ad-slot={slot}
        data-ad-format={type === 'leaderboard' || type === 'mobile' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      >
        {/* Placeholder text for dev mode when ads might be blocked */}
        <span style={{ position: 'absolute' }}>Advertisement</span>
      </ins>
    </div>
  );
}
