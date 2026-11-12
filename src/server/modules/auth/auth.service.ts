import { env } from '@/server/config/env'
import { AppError } from '@/server/lib/customError'
import { sendMail } from '@/server/lib/mailer'
import { deleteOtp, getOtp, setOtp } from '@/server/lib/otp-store'
import { otpEmailHtml } from './auth.emails'

const INVALID_CODE = 'Invalid or expired code'

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

/**
 * Creates a sign-in code for the email and emails it. The code is stored even when the email
 * fails, so the failure is returned as a warning rather than an error.
 */
export async function sendOtp(email: string): Promise<{ warning?: string }> {
  const code = generateOtp()
  setOtp(email, code, env.otpTtlMs)

  console.log(`[Serene Investors OTP] Generated OTP for ${email}: ${code}`)

  const failure = await sendMail({
    to: email,
    subject: 'Your Serene Investors Verification Code',
    html: otpEmailHtml(code),
  })

  return failure ? { warning: failure } : {}
}

/** Checks a sign-in code and uses it up. Throws a 400 AppError when it is wrong or expired. */
export function verifyOtp(email: string, code: string): void {
  if (env.otpDemoCodes.includes(code)) return

  const entry = getOtp(email)
  if (!entry) throw new AppError(400, INVALID_CODE, true, 'OTP_INVALID')

  if (Date.now() > entry.expiresAt) {
    deleteOtp(email)
    throw new AppError(400, INVALID_CODE, true, 'OTP_EXPIRED')
  }

  if (entry.code !== code) throw new AppError(400, INVALID_CODE, true, 'OTP_INVALID')

  deleteOtp(email)
}
