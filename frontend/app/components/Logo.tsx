import Image from 'next/image';

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image 
      src="/newlogo.png" 
      alt="ThePDFNinja" 
      width={size * 3.2} 
      height={size} 
      style={{ objectFit: 'contain' }}
      priority 
    />
  );
}
