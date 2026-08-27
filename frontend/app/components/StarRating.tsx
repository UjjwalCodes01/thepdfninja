// Star display. Deliberately free of hooks and browser APIs so it renders in
// both server and client components.

interface StarRatingProps {
  rating: number;
  size?: number;
  /** Screen-reader label. Set to null when a nearby element already says it. */
  label?: string | null;
}

export default function StarRating({ rating, size = 18, label }: StarRatingProps) {
  const rounded = Math.round(rating * 2) / 2; // nearest half star
  const text = label === null ? undefined : label ?? `Rated ${rating} out of 5`;

  return (
    <span
      role="img"
      aria-label={text}
      aria-hidden={label === null ? true : undefined}
      style={{ display: 'inline-flex', gap: '2px', lineHeight: 1 }}
    >
      {[1, 2, 3, 4, 5].map(i => {
        const fill = rounded >= i ? 1 : rounded >= i - 0.5 ? 0.5 : 0;
        return <Star key={i} size={size} fill={fill} />;
      })}
    </span>
  );
}

function Star({ size, fill }: { size: number; fill: number }) {
  const gradId = `half-${size}`;
  const d =
    'M12 1.6l3.09 6.26 6.91 1L17 13.72l1.18 6.88L12 17.35l-6.18 3.25L7 13.72 2 8.86l6.91-1L12 1.6z';

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      {fill === 0.5 && (
        <defs>
          <linearGradient id={gradId}>
            <stop offset="50%" stopColor="var(--orange)" />
            <stop offset="50%" stopColor="var(--border)" />
          </linearGradient>
        </defs>
      )}
      <path
        d={d}
        fill={fill === 1 ? 'var(--orange)' : fill === 0.5 ? `url(#${gradId})` : 'var(--border)'}
      />
    </svg>
  );
}
