export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size * 3.2}
      height={size}
      viewBox="0 0 192 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ThePDFNinja logo"
      role="img"
    >
      {/* Document icon */}
      <rect x="0" y="4" width="38" height="52" rx="5" stroke="#F5622D" strokeWidth="3.5" fill="none"/>
      <path d="M26 4 L26 16 L38 16" stroke="#F5622D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <text x="6" y="36" fontFamily="Inter, Arial, sans-serif" fontWeight="800" fontSize="11" fill="#F5622D">PDF</text>
      <rect x="8" y="41" width="22" height="3" rx="1.5" fill="#F5622D"/>

      {/* THE */}
      <text x="50" y="22" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="13" fill="#F5622D" letterSpacing="1">THE</text>
      {/* PDF */}
      <text x="49" y="44" fontFamily="Inter, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#F5622D" letterSpacing="-0.5">PDF</text>
      {/* NINJA */}
      <text x="49" y="62" fontFamily="Inter, Arial, sans-serif" fontWeight="900" fontSize="22" fill="#1B4DBF" letterSpacing="-0.5">NINJA</text>
    </svg>
  );
}
