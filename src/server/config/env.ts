// Server config. Everything comes from env vars with safe defaults; read it here, never from
// process.env inside modules.

function toInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? '', 10)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

function toList(value: string | undefined, fallback: string[]): string[] {
  if (value === undefined) return fallback
  return value.split(',').map((item) => item.trim()).filter(Boolean)
}

export const env = {
  /** Resend API key for outbound email. Empty means emails are skipped and reported as a warning. */
  resendApiKey: process.env.RESEND_API_KEY ?? '',
  /** Sender for outbound email. */
  mailFrom: process.env.MAIL_FROM ?? 'Serene Investors <onboarding@resend.dev>',
  /** How long a sign-in code stays valid. */
  otpTtlMs: toInt(process.env.OTP_TTL_SECONDS, 5 * 60) * 1000,
  /**
   * Codes that always pass verification, for demos and local testing. Set OTP_DEMO_CODES to an
   * empty value to turn them off.
   */
  otpDemoCodes: toList(process.env.OTP_DEMO_CODES, ['123456', '000000']),
} as const
