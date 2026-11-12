import { Resend } from 'resend'
import { env } from '../config/env'

// Created on first use: constructing Resend without a key throws, which would fail `next build`
// whenever RESEND_API_KEY is not set. A missing key is reported like any other send failure.
let client: Resend | null = null
function getClient(): Resend {
  if (!env.resendApiKey) throw new Error('RESEND_API_KEY is not set — email not sent')
  client ??= new Resend(env.resendApiKey)
  return client
}

type MailInput = { to: string; subject: string; html: string }

/** Sends an email. Never throws: returns the failure reason, or null when it was accepted. */
export async function sendMail({ to, subject, html }: MailInput): Promise<string | null> {
  try {
    const result = await getClient().emails.send({ from: env.mailFrom, to: [to], subject, html })
    if (result.error) {
      console.warn('[Resend API Warning]', result.error)
      return result.error.message
    }
    return null
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    console.warn('[Resend Email Send Exception]', message)
    return message
  }
}
