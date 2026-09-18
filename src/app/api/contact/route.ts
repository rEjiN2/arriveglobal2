import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import type { ContactPayload, ApiResponse } from '@/lib/types'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) return false

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  })

  const data: { success: boolean } = await res.json()
  return data.success
}

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body: ContactPayload = await req.json()
    const { service, fields, message, recaptchaToken } = body

    if (!service || !fields || !recaptchaToken) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 },
      )
    }

    const recaptchaOk = await verifyRecaptcha(recaptchaToken)
    if (!recaptchaOk) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed.' },
        { status: 400 },
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL
    const apiKey = process.env.RESEND_API_KEY
    if (!toEmail || !apiKey) {
      return NextResponse.json(
        { success: false, error: 'Contact form is not configured.' },
        { status: 500 },
      )
    }

    const resend = new Resend(apiKey)

    const rows = Object.entries(fields)
      .map(([key, value]) => `<tr><td style="padding:4px 12px;font-weight:600;">${escapeHtml(key)}</td><td style="padding:4px 12px;">${escapeHtml(value)}</td></tr>`)
      .join('')

    const html = `
      <h2>New Contact Request — ${escapeHtml(service)}</h2>
      <table>${rows}</table>
      ${message ? `<p><strong>Additional Notes:</strong><br/>${escapeHtml(message)}</p>` : ''}
    `

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
      to: toEmail,
      subject: `New Contact Request — ${escapeHtml(service)}`,
      html,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 },
    )
  }
}
