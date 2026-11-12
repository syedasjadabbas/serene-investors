import type { z } from 'zod'
import { AppError } from './customError'

/** Parses the JSON body against a zod schema; throws a 400 AppError with the first issue's message. */
export async function validateBody<S extends z.ZodType>(request: Request, schema: S): Promise<z.infer<S>> {
  const raw: unknown = await request.json().catch(() => ({}))
  const result = schema.safeParse(raw ?? {})
  if (!result.success) {
    throw new AppError(400, result.error.issues[0]?.message ?? 'Invalid request body.', true, 'VALIDATION_ERROR')
  }
  return result.data
}

/** Parses the URL search params against a zod schema; throws a 400 AppError on failure. */
export function validateQuery<S extends z.ZodType>(request: Request, schema: S): z.infer<S> {
  const raw = Object.fromEntries(new URL(request.url).searchParams)
  const result = schema.safeParse(raw)
  if (!result.success) {
    throw new AppError(400, result.error.issues[0]?.message ?? 'Invalid query.', true, 'VALIDATION_ERROR')
  }
  return result.data
}
