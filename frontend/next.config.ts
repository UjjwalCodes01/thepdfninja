import type { NextConfig } from "next";

// Security headers.
//
// Note on the CSP: `default-src` is deliberately omitted. The site loads
// AdSense, Google Analytics, Clarity and Vercel Analytics, which pull from a
// wide and changing set of Google/Microsoft hosts — an enumerated allowlist
// would break ads the first time one of them changes. The directives below
// are the ones that harden the page without depending on that list:
// clickjacking, base-tag injection, plugin content and form exfiltration.
const CSP = [
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: CSP },
  // Stop the browser guessing a content type it was not given.
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Belt-and-braces alongside frame-ancestors, for older browsers.
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Do not leak full URLs (which can contain filenames) to third parties.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Nothing here needs these devices.
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
