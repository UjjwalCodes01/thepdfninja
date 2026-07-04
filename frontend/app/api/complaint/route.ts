import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

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
      subject: `[Complaint] ${subject}`,
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
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #111827; font-size: 0.95rem; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #1B4DBF; font-size: 0.95rem;">
                  <a href="mailto:${email}" style="color: #1B4DBF; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                <td style="padding: 10px 0; color: #111827; font-size: 0.95rem; font-weight: 600;">${subject}</td>
              </tr>
            </table>
            <div>
              <p style="color: #6B7280; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message</p>
              <div style="background: #F8F9FA; border: 1px solid #E5E7EB; border-radius: 8px; padding: 18px 20px; color: #374151; font-size: 0.95rem; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
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
