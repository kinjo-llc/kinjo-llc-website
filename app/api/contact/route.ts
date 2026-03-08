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
    const validationError = validate(body)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const { name, email, organization, service_interest, message } = body

    // Send notification to Kinjo
    const { error } = await resend.emails.send({
      from: 'Kinjo Contact Form <hello@kinjollc.com>',
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

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
