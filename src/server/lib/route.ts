import type { z } from 'zod'
import { AppError } from './customError'
import { errorResponse } from './response'
import { validateBody, validateQuery } from './validate'

type RouteContext<B, Q> = { request: Request; body: B; query: Q }
type Controller<B, Q> = (ctx: RouteContext<B, Q>) => Promise<Response>

type RouteOptions<BS extends z.ZodType | undefined, QS extends z.ZodType | undefined> = {
  body?: BS
  query?: QS
}

type Infer<S> = S extends z.ZodType ? z.infer<S> : undefined

/**
 * Builds a Next.js route handler: validate query/body with zod, call the controller, and turn any
 * thrown error into the standard error response. This is the one global error handler for the API.
 *
 *   export const sendOtp = defineRoute({ body: sendOtpSchema }, authController.sendOtp)
 */
export function defineRoute<BS extends z.ZodType | undefined = undefined, QS extends z.ZodType | undefined = undefined>(
  options: RouteOptions<BS, QS>,
  controller: Controller<Infer<BS>, Infer<QS>>,
) {
  return async function handler(request: Request): Promise<Response> {
    try {
      const query = (options.query ? validateQuery(request, options.query) : undefined) as Infer<QS>
      const body = (options.body ? await validateBody(request, options.body) : undefined) as Infer<BS>
      return await controller({ request, body, query })
    } catch (error: unknown) {
      if (error instanceof AppError && error.isOperational) {
        return errorResponse(error.message, error.status, error.code)
      }
      console.error('[api] Unhandled error', error)
      return errorResponse('Internal Server Error', 500)
    }
  }
}
