import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Every value below is attacker-controlled and ends up inside an HTML email,
// so it all gets escaped before interpolation.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const FIELD_LIMITS = { name: 100, email: 254, subject: 200, message: 5000 } as const;

// Per-IP throttle. This endpoint sends through our own SMTP credentials, so
// without a limit it is an open relay that can burn the sending reputation of
// the domain. Serverless instances do not share memory, so this caps the
// damage per instance rather than globally — a durable store (Upstash/Redis)
// would be the next step if abuse continues.
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic sweep so the Map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every(t => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (
      typeof name !== 'string' || typeof email !== 'string' ||
      typeof subject !== 'string' || typeof message !== 'string'
    ) {
      return NextResponse.json({ error: 'All fields must be text.' }, { status: 400 });
    }

    for (const [field, max] of Object.entries(FIELD_LIMITS)) {
      if ((body[field] as string).length > max) {
        return NextResponse.json(
          { error: `${field} must be ${max} characters or fewer.` },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Strip CR/LF before anything reaches a mail header, so a crafted subject
    // cannot inject extra headers.
    const safeSubject = subject.replace(/[\r\n]+/g, ' ').trim();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubjectHtml = escapeHtml(safeSubject);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"ThePDFNinja Complaint" <${process.env.SMTP_USER}>`,
      to: process.env.COMPLAINT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Complaint] ${safeSubject}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F8F9FA; border-radius: 12px; overflow: hidden;">
          <div style="background: #F5622D; padding: 28px 32px;">
            <h1 style="color: white; font-size: 1.4rem; font-weight: 800; margin: 0; letter-spacing: -0.02em;">
              🛡️ New Complaint — ThePDFNinja
            </h1>
            <p style="color: rgba(255,255,255,0.85); font-size: 0.88rem; margin: 6px 0 0;">
              Submitted via the website complaint widget
            </p>
          </div>
          <div style="padding: 32px; background: white;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 0.85rem; font-weight: 600; width: 30%; text-transform: uppercase; letter-spacing: 0.05em;">From</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 0.95rem; font-weight: 500;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #1B4DBF; font-size: 0.95rem;">
                  <a href="mailto:${safeEmail}" style="color: #1B4DBF; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                <td style="padding: 10px 0; color: #111827; font-size: 0.95rem; font-weight: 600;">${safeSubjectHtml}</td>
              </tr>
            </table>
            <div>
              <p style="color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</p>
              <div style="background: #F8F9FA; border: 1px solid #E5E7EB; border-radius: 8px; padding: 18px 20px; color: #374151; font-size: 0.95rem; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</div>
            </div>
          </div>
          <div style="padding: 18px 32px; background: #F8F9FA; border-top: 1px solid #E5E7EB; text-align: center;">
            <p style="color: #9CA3AF; font-size: 0.78rem; margin: 0;">
              © 2026 ThePDFNinja · <a href="https://www.thepdfninja.com" style="color: #F5622D; text-decoration: none;">www.thepdfninja.com</a>
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Your complaint has been sent successfully.' });
  } catch (error) {
    console.error('[Complaint API] Error:', error);
    return NextResponse.json({ error: 'Failed to send complaint. Please try again later.' }, { status: 500 });
  }
}
