import { successResponse } from '@/server/lib/response'
import * as authService from './auth.service'
import type { SendOtpBody, VerifyOtpBody } from './auth.validators'

// Thin: call the service, wrap the response. Errors propagate to defineRoute's handler.

export async function sendOtp({ body }: { body: SendOtpBody }) {
  const result = await authService.sendOtp(body.email)
  return successResponse(result, 'Verification code sent.')
}

export async function verifyOtp({ body }: { body: VerifyOtpBody }) {
  authService.verifyOtp(body.email, body.code)
  return successResponse(null, 'Code verified successfully.')
}
