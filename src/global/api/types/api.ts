/** Every API response has this shape. Keep in sync with `ApiBody` in src/server/lib/response.ts. */
export type ApiResponse<T> = {
  success: boolean
  message: string
  data: T | null
  code?: string
}
