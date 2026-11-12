import { withBase } from '@/global/lib/asset'
import type { ApiResponse } from './types/api'

/**
 * The server answered with `success: false` or a non-2xx status. `message` is the server's message
 * (empty when the response was not JSON). Network failures are thrown as the browser's own error.
 */
export class ApiError extends Error {
  readonly status: number
  readonly code?: string

  constructor(status: number, message: string, code?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

/** POSTs JSON to an API path (base path added) and returns the unwrapped response. */
export async function apiPost<T>(path: string, body: unknown): Promise<ApiResponse<T>> {
  const res = await fetch(withBase(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const json = (await res.json().catch(() => null)) as ApiResponse<T> | null

  if (!res.ok || !json?.success) {
    throw new ApiError(res.status, json?.message ?? '', json?.code)
  }
  return json
}
