/** `data` of POST /api/auth/send-otp. `warning` is set when the code was created but the email failed. */
export type SendOtpData = {
  warning?: string
}
