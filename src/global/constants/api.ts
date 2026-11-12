// API endpoint paths, relative to the site root. The base path is added by the API client.

export const API = {
  auth: {
    sendOtp: '/api/auth/send-otp',
    verifyOtp: '/api/auth/verify-otp',
  },
} as const
