export default function ToolIcon({ tool, size = 48 }: { tool: string; size?: number }) {
  const o = '#F5622D'; // Orange primary
  const b = '#1B4DBF'; // Blue secondary
  const word = '#2563EB'; // Word Blue
  const excel = '#16A34A'; // Excel Green
  const ppt = '#EA580C'; // PPT Orange

  // Base Document Path
  const BaseDoc = ({ stroke = o, x = 0, y = 0, scale = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <path d="M14 4H34L46 16V52C46 54.2091 44.2091 56 42 56H14C11.7909 56 10 54.2091 10 52V8C10 5.79086 11.7909 4 14 4Z" stroke={stroke} strokeWidth="3" strokeLinecap="round" fill="white"/>
      <path d="M34 4V16H46" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="16" y="42" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill={stroke}>PDF</text>
      <rect x="18" y="48" width="20" height="3" rx="1.5" fill={stroke}/>
    </g>
  );

  const renderIcon = () => {
    switch (tool) {
      // CONVERT TO PDF
      case 'word-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H22L30 18V48C30 50.2 28.2 52 26 52H6C3.8 52 2 50.2 2 48V14C2 11.8 3.8 10 6 10Z" stroke={word} strokeWidth="2.5" fill="white"/>
          <path d="M22 10V18H30" stroke={word} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="7" y="30" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill={word}>W</text>
          <path d="M8 38H24M8 44H20" stroke={word} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={o} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <BaseDoc x={48} y={4} scale={0.8} />
        </svg>
      );
      case 'excel-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H22L30 18V48C30 50.2 28.2 52 26 52H6C3.8 52 2 50.2 2 48V14C2 11.8 3.8 10 6 10Z" stroke={excel} strokeWidth="2.5" fill="white"/>
          <path d="M22 10V18H30" stroke={excel} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="7" y="30" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill={excel}>X</text>
          <rect x="8" y="36" width="16" height="10" stroke={excel} strokeWidth="2"/>
          <path d="M16 36V46M8 41H24" stroke={excel} strokeWidth="2"/>
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={o} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <BaseDoc x={48} y={4} scale={0.8} />
        </svg>
      );
      case 'ppt-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H22L30 18V48C30 50.2 28.2 52 26 52H6C3.8 52 2 50.2 2 48V14C2 11.8 3.8 10 6 10Z" stroke={ppt} strokeWidth="2.5" fill="white"/>
          <path d="M22 10V18H30" stroke={ppt} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="8" y="28" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill={ppt}>P</text>
          <circle cx="16" cy="40" r="6" stroke={ppt} strokeWidth="2"/>
          <path d="M16 40V34A6 6 0 0 1 22 40H16Z" fill={ppt}/>
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={o} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <BaseDoc x={48} y={4} scale={0.8} />
        </svg>
      );
      case 'jpg-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H22L30 18V48C30 50.2 28.2 52 26 52H6C3.8 52 2 50.2 2 48V14C2 11.8 3.8 10 6 10Z" stroke={b} strokeWidth="2.5" fill="white"/>
          <path d="M22 10V18H30" stroke={b} strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M6 40L14 32L20 38L24 34L30 40" stroke={b} strokeWidth="2" fill="none"/>
          <circle cx="12" cy="24" r="3" fill={b}/>
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={o} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <BaseDoc x={48} y={4} scale={0.8} />
        </svg>
      );
      case 'html-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H22L30 18V48C30 50.2 28.2 52 26 52H6C3.8 52 2 50.2 2 48V14C2 11.8 3.8 10 6 10Z" stroke={b} strokeWidth="2.5" fill="white"/>
          <path d="M22 10V18H30" stroke={b} strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M12 28L8 32L12 36M24 28L28 32L24 36M20 26L16 38" stroke={b} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={o} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <BaseDoc x={48} y={4} scale={0.8} />
        </svg>
      );

      // CONVERT FROM PDF
      case 'pdf-to-word': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 10H66L74 18V48C74 50.2 72.2 52 70 52H50C47.8 52 46 50.2 46 48V14C46 11.8 47.8 10 50 10Z" stroke={word} strokeWidth="2.5" fill="white"/>
          <path d="M66 10V18H74" stroke={word} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="51" y="30" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill={word}>W</text>
          <path d="M52 38H68M52 44H64" stroke={word} strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
      case 'pdf-to-excel': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 10H66L74 18V48C74 50.2 72.2 52 70 52H50C47.8 52 46 50.2 46 48V14C46 11.8 47.8 10 50 10Z" stroke={excel} strokeWidth="2.5" fill="white"/>
          <path d="M66 10V18H74" stroke={excel} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="51" y="30" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill={excel}>X</text>
          <rect x="52" y="36" width="16" height="10" stroke={excel} strokeWidth="2"/>
          <path d="M60 36V46M52 41H68" stroke={excel} strokeWidth="2"/>
        </svg>
      );
      case 'pdf-to-ppt': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 10H66L74 18V48C74 50.2 72.2 52 70 52H50C47.8 52 46 50.2 46 48V14C46 11.8 47.8 10 50 10Z" stroke={ppt} strokeWidth="2.5" fill="white"/>
          <path d="M66 10V18H74" stroke={ppt} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="52" y="28" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill={ppt}>P</text>
          <circle cx="60" cy="40" r="6" stroke={ppt} strokeWidth="2"/>
          <path d="M60 40V34A6 6 0 0 1 66 40H60Z" fill={ppt}/>
        </svg>
      );
      case 'pdf-to-jpg': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 10H66L74 18V48C74 50.2 72.2 52 70 52H50C47.8 52 46 50.2 46 48V14C46 11.8 47.8 10 50 10Z" stroke={b} strokeWidth="2.5" fill="white"/>
          <path d="M66 10V18H74" stroke={b} strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M50 40L58 32L64 38L68 34L74 40" stroke={b} strokeWidth="2" fill="none"/>
          <circle cx="56" cy="24" r="3" fill={b}/>
        </svg>
      );
      case 'pdf-to-pdfa': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <path d="M36 30H46M46 30L42 26M46 30L42 34" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 10H66L74 18V48C74 50.2 72.2 52 70 52H50C47.8 52 46 50.2 46 48V14C46 11.8 47.8 10 50 10Z" stroke={b} strokeWidth="2.5" fill="white"/>
          <path d="M66 10V18H74" stroke={b} strokeWidth="2.5" strokeLinejoin="round"/>
          <text x="51" y="38" fontFamily="sans-serif" fontWeight="800" fontSize="12" fill={b}>PDF/A</text>
        </svg>
      );

      // ORGANIZE & EDIT
      case 'merge': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={2} y={4} scale={0.8} />
          <BaseDoc x={48} y={4} scale={0.8} />
          <circle cx="40" cy="30" r="10" fill="white" stroke={b} strokeWidth="2.5"/>
          <path d="M34 30H46M40 24V36" stroke={b} strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
      case 'split': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={8} y={4} scale={0.8} />
          <path d="M42 30H54M54 30L50 26M54 30L50 34" stroke={b} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 20L54 10M54 10L50 10M54 10L54 14" stroke={b} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 40L54 50M54 50L50 50M54 50L54 46" stroke={b} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M62 4H70L76 10V22H62V4Z" stroke={o} strokeWidth="2" fill="white"/>
          <path d="M62 34H70L76 40V52H62V34Z" stroke={o} strokeWidth="2" fill="white"/>
        </svg>
      );
      case 'organize': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6H58V54H22V6Z" stroke={o} strokeWidth="3" fill="white" rx="4"/>
          <rect x="30" y="14" width="8" height="12" rx="2" stroke={b} strokeWidth="2"/>
          <rect x="42" y="14" width="8" height="12" rx="2" stroke={b} strokeWidth="2"/>
          <rect x="30" y="32" width="8" height="12" rx="2" stroke={b} strokeWidth="2"/>
          <rect x="42" y="32" width="8" height="12" rx="2" stroke={b} strokeWidth="2"/>
          <text x="32.5" y="23" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={b}>1</text>
          <text x="44" y="23" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={b}>2</text>
          <text x="32" y="41" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={b}>3</text>
          <text x="43.5" y="41" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill={b}>4</text>
        </svg>
      );
      case 'rotate': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <path d="M50 40C58 38 64 30 64 22M64 22L60 26M64 22L68 26" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      case 'crop': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <rect x="22" y="18" width="28" height="24" stroke={b} strokeWidth="2.5" strokeDasharray="4 4" fill="none"/>
          <rect x="20" y="16" width="4" height="4" fill={b}/>
          <rect x="48" y="16" width="4" height="4" fill={b}/>
          <rect x="20" y="40" width="4" height="4" fill={b}/>
          <rect x="48" y="40" width="4" height="4" fill={b}/>
        </svg>
      );
      case 'compress': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <path d="M56 16V26M56 26L52 22M56 26L60 22" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M56 44V34M56 34L52 38M56 34L60 38" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      case 'ocr': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <path d="M16 20H12V16M12 40V44H16M60 20H64V16M64 40V44H60" stroke={b} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="24" y="34" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" fill={b}>OCR</text>
        </svg>
      );
      case 'scan-to-pdf': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40L70 40L60 50H20L10 40Z" fill={b}/>
          <path d="M15 35H65V45H15V35Z" fill="#3B82F6"/>
          <path d="M30 10H50L56 18V32H24V18L30 10Z" stroke={o} strokeWidth="2.5" fill="white"/>
          <text x="32" y="26" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill={o}>PDF</text>
          <path d="M20 30L60 30" stroke="white" strokeWidth="2"/>
        </svg>
      );
      case 'repair': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <path d="M48 40L62 26C64 24 68 25 68 28L64 32L68 36C65 39 61 38 62 36L48 50C46 52 44 50 46 48L50 44L46 40C44 38 46 38 48 40Z" fill={b} stroke="white" strokeWidth="2"/>
        </svg>
      );
      case 'protect': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <rect x="46" y="34" width="16" height="14" rx="2" fill={b}/>
          <path d="M50 34V30C50 27 58 27 58 30V34" stroke={b} strokeWidth="3" fill="none"/>
          <circle cx="54" cy="41" r="2" fill="white"/>
        </svg>
      );
      case 'unlock': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <rect x="46" y="34" width="16" height="14" rx="2" fill={b}/>
          <path d="M50 34V28C50 25 58 25 58 28" stroke={b} strokeWidth="3" fill="none"/>
          <circle cx="54" cy="41" r="2" fill="white"/>
        </svg>
      );
      case 'watermark': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <path d="M48 48H64M52 48V40C52 36 60 36 60 40V48" stroke={b} strokeWidth="4" strokeLinecap="round"/>
          <path d="M50 34H62" stroke={b} strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
      case 'page-numbers': return (
        <svg width={size} height={size} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <BaseDoc x={14} y={4} scale={0.9} />
          <text x="28" y="44" fontFamily="monospace" fontWeight="bold" fontSize="14" fill={b}>1 2 3</text>
        </svg>
      );
      default: return <BaseDoc x={24} y={4} scale={0.9} />;
    }
  };

  return (
    <div style={{ width: size, height: size, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {renderIcon()}
    </div>
  );
}
