import Image from 'next/image';

// Brand mark used as the thumbnail on blog cards, in place of the emoji that
// used to sit there. One asset across every card keeps the listing looking
// like a single publication rather than a sticker sheet.
export default function PostThumb({
  size = 56,
  height,
  width,
  radius,
  style,
}: {
  /** Rendered size of the mark itself. */
  size?: number;
  /** Height of the tinted panel behind it. Omit to fill the parent. */
  height?: number | string;
  width?: number | string;
  /** Corner rounding, for use as a small badge rather than a full-bleed panel. */
  radius?: number | string;
  /** Extra styles, e.g. spacing below the badge. */
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--orange-light)',
        height: height ?? '100%',
        width: width ?? '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: radius,
        ...style,
      }}
    >
      <Image
        src="/pdfninja-mark.png"
        alt=""
        width={size}
        height={size}
        style={{ objectFit: 'contain', opacity: 0.9 }}
      />
    </div>
  );
}
