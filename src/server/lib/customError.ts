/**
 * An error the API can answer with. Throw it from services; the route wrapper turns it into
 * `{ success: false, message, data: null }` with this status. Errors that are not operational
 * (bugs) are logged and answered with a generic 500.
 */
export class AppError extends Error {
  readonly status: number
  readonly isOperational: boolean
  readonly code?: string

  constructor(status: number, message: string, isOperational = true, code?: string) {
    super(message)
    this.name = 'AppError'
    this.status = status
    this.isOperational = isOperational
    this.code = code
  }
}
