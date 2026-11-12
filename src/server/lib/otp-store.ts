// In-memory store for one-time sign-in codes, keyed by normalised email. No business rules here:
// expiry and one-time use are enforced by the auth service.
//
// Note: memory is per server instance. On serverless hosting a code saved by one instance is not
// visible to another; move this to Redis or the database before relying on it in production.

export type OtpEntry = {
  code: string
  expiresAt: number
}

// globalThis keeps the map across hot reloads in `next dev`.
const globalForOtp = globalThis as unknown as {
  __serene_otp_store__?: Map<string, OtpEntry>
}

globalForOtp.__serene_otp_store__ ??= new Map<string, OtpEntry>()

const store = globalForOtp.__serene_otp_store__

const key = (email: string) => email.toLowerCase().trim()

export function setOtp(email: string, code: string, ttlMs: number) {
  store.set(key(email), { code: code.trim(), expiresAt: Date.now() + ttlMs })
}

export function getOtp(email: string): OtpEntry | undefined {
  return store.get(key(email))
}

export function deleteOtp(email: string) {
  store.delete(key(email))
}
