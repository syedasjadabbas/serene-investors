import { API } from '@/global/constants/api'
import { apiPost } from '../client'
import type { SendOtpData } from '../types/auth'

// Components call these; they never call fetch themselves.
export const authApi = {
  sendOtp: (email: string) => apiPost<SendOtpData>(API.auth.sendOtp, { email }),
  verifyOtp: (email: string, code: string) => apiPost<null>(API.auth.verifyOtp, { email, code }),
}
