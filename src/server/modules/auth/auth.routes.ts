import { defineRoute } from '@/server/lib/route'
import * as authController from './auth.controller'
import { sendOtpSchema, verifyOtpSchema } from './auth.validators'

// Path -> validator -> controller. Mounted by the files in src/app/api/auth/*/route.ts.

/** POST /api/auth/send-otp */
export const sendOtp = defineRoute({ body: sendOtpSchema }, authController.sendOtp)

/** POST /api/auth/verify-otp */
export const verifyOtp = defineRoute({ body: verifyOtpSchema }, authController.verifyOtp)
