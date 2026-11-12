import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { setOtp } from '@/lib/otpStore'

// Created on first use: constructing Resend without a key throws, which used to fail `next build`
// whenever RESEND_API_KEY was not set. A missing key is now reported like any other send failure.
let resend: Resend | null = null
function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) throw new Error('RESEND_API_KEY is not set — email not sent')
  resend ??= new Resend(process.env.RESEND_API_KEY)
  return resend
}

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

function getLuxuryEmailHtml(code: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Serene Investors Verification Code</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f6f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c2421;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f7f6f2; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="540" style="max-width: 540px; background-color: #ffffff; border-radius: 20px; border: 1px solid #e7e5dd; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);">
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #173829; padding: 36px 32px; text-align: center;">
              <span style="display: inline-block; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #a5d6a7; font-weight: 600; margin-bottom: 8px;">Private Real Estate &amp; Syndicates</span>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">Serene Investors</h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 32px 28px 32px; text-align: center;">
              <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #173829;">Security Verification Code</h2>
              <p style="margin: 0 0 28px 0; font-size: 14px; line-height: 1.6; color: #5c6460;">
                Use the following one-time verification code to authenticate your portal session. This code is valid for <strong>5 minutes</strong>.
              </p>

              <!-- Code Box -->
              <div style="background-color: #f4f6f4; border: 1.5px solid #c8d9ce; border-radius: 14px; padding: 20px 16px; margin: 0 auto 28px auto; max-width: 300px;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 34px; font-weight: 700; letter-spacing: 8px; color: #173829; display: inline-block; padding-left: 8px;">
                  ${code}
                </span>
              </div>

              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #88908b;">
                Never share this verification code with anyone. Serene Investors will never ask for your code via phone or chat.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 32px;">
              <div style="border-top: 1px solid #e7e5dd;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px 32px 32px; text-align: center; font-size: 11px; color: #9aa29e; line-height: 1.6;">
              <p style="margin: 0 0 6px 0;">This email was sent in response to an authentication request on Serene Investors.</p>
              <p style="margin: 0;">If you did not request this, you can safely ignore this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = typeof body.email === 'string' ? body.email.trim() : ''

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 },
      )
    }

    const code = generateOtp()
    // Store in-memory with 5-minute expiry
    setOtp(email, code, 5 * 60 * 1000)

    console.log(`[Serene Investors OTP] Generated OTP for ${email}: ${code}`)

    // Dispatch email via Resend
    let resendError = null
    try {
      const result = await getResend().emails.send({
        from: 'Serene Investors <onboarding@resend.dev>',
        to: [email],
        subject: 'Your Serene Investors Verification Code',
        html: getLuxuryEmailHtml(code),
      })

      if (result.error) {
        console.warn('[Resend API Warning]', result.error)
        resendError = result.error.message
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err)
      console.warn('[Resend Email Send Exception]', message)
      resendError = message
    }

    return NextResponse.json({
      success: true,
      message: 'Verification code sent.',
      ...(resendError ? { warning: resendError } : {}),
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    )
  }
}
