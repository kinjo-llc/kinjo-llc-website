import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// DEPLOYMENT: Set RESEND_API_KEY in .env.local for local dev, or in Vercel environment variables for production.
// Obtain your API key at https://resend.com — add a verified sending domain (kinjollc.com) before going live.
const resend = new Resend(process.env.RESEND_API_KEY)

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContactFormPayload {
  name: string
  email: string
  organization?: string
  service_interest: string
  message: string
  cf_turnstile_response: string
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validate(data: ContactFormPayload): string | null {
  if (!data.name || data.name.trim().length < 2)
    return 'Name must be at least 2 characters.'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return 'A valid email address is required.'
  if (!data.service_interest)
    return 'Please select an area of interest.'
  if (!data.message || data.message.trim().length < 20)
    return 'Project details must be at least 20 characters.'
  if (data.message.length > 3000)
    return 'Project details must be under 3000 characters.'
  if (data.name.length > 100)
    return 'Name must be under 100 characters.'
  if (data.organization && data.organization.length > 120)
    return 'Organization name must be under 120 characters.'
  return null
}

// ─── Route handler ───────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormPayload = await request.json()

    // ── Turnstile verification ─────────────────────────────────────────────
    if (!body.cf_turnstile_response) {
      return NextResponse.json({ error: 'Human verification token missing.' }, { status: 400 })
    }
    const tsRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: body.cf_turnstile_response,
      }),
    })
    const tsData = await tsRes.json()
    if (!tsData.success) {
      return NextResponse.json({ error: 'Human verification failed. Please try again.' }, { status: 400 })
    }

    // ── Form validation ────────────────────────────────────────────────────
    const validationError = validate(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const { name, email, organization, service_interest, message } = body

    // Send notification to Kinjo
    const { error } = await resend.emails.send({
      from: 'Kinjo Contact Form <tatsuki@kinjollc.com>',
      to: ['tatsuki@kinjollc.com'],
      replyTo: email,
      subject: `New inquiry: ${service_interest} — ${name}`,
      text: [
        `Name:         ${name}`,
        `Email:        ${email}`,
        `Organization: ${organization || '—'}`,
        `Interest:     ${service_interest}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('[contact/route] Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    // ── Auto-reply to submitter ────────────────────────────────────────────
    const firstName = name.split(' ')[0]
    const { error: replyError } = await resend.emails.send({
      from: 'Kinjo LLC <noreply@kinjollc.com>',
      to: [email],
      subject: 'Thank you for contacting Kinjo LLC',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for contacting Kinjo LLC</title>
</head>
<body style="margin:0;padding:0;background-color:#020617;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#020617;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#0B1220;border:1px solid rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;">

          <!-- Header bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#A8842A 0%,#C9A84C 100%);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 40px;">

              <!-- Wordmark -->
              <p style="margin:0 0 36px;font-size:13px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#C9A84C;">KINJO</p>

              <!-- Greeting -->
              <p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#E5EEF7;">
                ${firstName},
              </p>

              <!-- Body copy -->
              <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#94A3B8;">
                Thank you for reaching out. Your inquiry has been received and is under review.
              </p>
              <p style="margin:0 0 20px;font-size:16px;line-height:1.7;color:#94A3B8;">
                You can expect a response within <span style="color:#E5EEF7;font-weight:500;">1–2 business days</span>. If your matter is time-sensitive, you are welcome to reply directly to this email.
              </p>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:36px 0;">
                <tr>
                  <td style="height:1px;background-color:rgba(255,255,255,0.07);"></td>
                </tr>
              </table>

              <!-- Signature -->
              <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#E5EEF7;">Tatsuki Kinjo</p>
              <p style="margin:0 0 4px;font-size:14px;color:#94A3B8;">Kinjo LLC</p>
              <a href="https://kinjollc.com" style="font-size:13px;color:#C9A84C;text-decoration:none;">kinjollc.com</a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 28px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:12px;color:rgba(148,163,184,0.5);line-height:1.6;">
                This is an automated confirmation. Please do not reply to this message directly —
                your original inquiry has been forwarded to our team.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    })

    if (replyError) {
      // Log but do not fail the request — the primary notification was already sent
      console.warn('[contact/route] Auto-reply failed:', replyError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
