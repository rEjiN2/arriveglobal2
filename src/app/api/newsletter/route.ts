import { NextRequest, NextResponse } from 'next/server'
import type { NewsletterPayload, ApiResponse } from '@/lib/types'

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body: NewsletterPayload = await req.json()
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 },
      )
    }

    // TODO: wire up your email provider (Resend, SendGrid, Mailchimp, etc.)
    // e.g. await resend.contacts.create({ email, audienceId: process.env.NEWSLETTER_LIST_ID })
    console.log(`[newsletter] subscriber: ${email}`)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 },
    )
  }
}
