import { NextResponse } from 'next/server'

/** Every API response has this shape. Keep in sync with `ApiResponse` in src/global/api/types. */
export type ApiBody<T> = {
  success: boolean
  message: string
  data: T | null
  code?: string
}

export function successResponse<T>(data: T, message = 'OK', status = 200) {
  return NextResponse.json<ApiBody<T>>({ success: true, message, data }, { status })
}

export function errorResponse(message: string, status = 500, code?: string) {
  return NextResponse.json<ApiBody<null>>(
    { success: false, message, data: null, ...(code ? { code } : {}) },
    { status },
  )
}
