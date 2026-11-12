import { z } from 'zod'

const EMAIL_REQUIRED = 'A valid email address is required.'
const VERIFY_REQUIRED = 'Email and verification code are required.'

export const sendOtpSchema = z.object({
  email: z
    .string({ error: EMAIL_REQUIRED })
    .trim()
    .refine((value) => value.includes('@'), { error: EMAIL_REQUIRED }),
})

export const verifyOtpSchema = z.object({
  email: z.string({ error: VERIFY_REQUIRED }).trim().min(1, { error: VERIFY_REQUIRED }),
  code: z.string({ error: VERIFY_REQUIRED }).trim().min(1, { error: VERIFY_REQUIRED }),
})

export type SendOtpBody = z.infer<typeof sendOtpSchema>
export type VerifyOtpBody = z.infer<typeof verifyOtpSchema>
