'use client'

import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { ApiError } from '@/global/api/client'
import { authApi } from '@/global/api/endpoints/authApi'
import { AuthHeading, FormAlert, SubmitButton, textLinkClass } from './AuthLayout'

type Props = {
  email: string
  onSuccess: () => void
  onBack: () => void
  actionLabel?: string
}

const EMPTY = ['', '', '', '', '', '']

export function OtpVerificationStep({ email, onSuccess, onBack, actionLabel = 'Verify & Log in' }: Props) {
  const [digits, setDigits] = useState<string[]>(EMPTY)
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [resendStatus, setResendStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Auto-focus first input slot on mount
    inputRefs.current[0]?.focus()
  }, [])

  function handleChange(index: number, value: string) {
    const char = value.slice(-1)
    if (char && !/^\d$/.test(char)) return

    setError('')
    const updated = [...digits]
    updated[index] = char
    setDigits(updated)

    // Advance to next slot if a digit was entered
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault()
    const text = e.clipboardData.getData('text').trim()
    const numericOnly = text.replace(/\D/g, '').slice(0, 6)
    if (!numericOnly) return

    const updated = [...digits]
    for (let i = 0; i < numericOnly.length; i++) {
      updated[i] = numericOnly[i]
    }
    setDigits(updated)
    setError('')
    const nextIndex = Math.min(numericOnly.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  async function handleSubmit(e?: FormEvent) {
    if (e) e.preventDefault()
    const code = digits.join('')
    if (code.length < 6) {
      setError('Please enter all 6 digits of the verification code.')
      return
    }

    setIsVerifying(true)
    setError('')

    try {
      await authApi.verifyOtp(email, code)
      onSuccess()
    } catch (error) {
      setError(
        error instanceof ApiError
          ? 'Invalid verification code. Please check your email.'
          : 'Unable to verify code. Please check your connection and try again.',
      )
    } finally {
      setIsVerifying(false)
    }
  }

  async function handleResend() {
    if (isResending) return
    setIsResending(true)
    setError('')
    setResendStatus('idle')

    try {
      await authApi.sendOtp(email)
      setResendStatus('success')
      setDigits(EMPTY)
      inputRefs.current[0]?.focus()
      setTimeout(() => setResendStatus('idle'), 4000)
    } catch {
      setResendStatus('error')
      setTimeout(() => setResendStatus('idle'), 4000)
    } finally {
      setIsResending(false)
    }
  }

  const isComplete = digits.every((d) => d.length === 1)

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-sx-ink/60 transition-colors hover:text-sx-ink"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back
      </button>

      <AuthHeading eyebrow="Two-step verification" title="Check your email">
        Enter the 6-digit code we sent to <span className="font-semibold text-sx-ink">{email || 'your email'}</span>.
      </AuthHeading>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="mb-3 text-sm font-medium text-sx-ink">Verification code</legend>
          <div className="grid grid-cols-6 gap-2 sm:gap-3">
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputRefs.current[i] = el
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete={i === 0 ? 'one-time-code' : 'off'}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                aria-label={`Digit ${i + 1} of 6`}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'otp-error' : undefined}
                className="h-14 w-full min-w-0 rounded-[12px] bg-sx-paper text-center font-heading text-2xl font-bold text-sx-ink outline-none ring-sx-brand transition-shadow focus:ring-2 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-600"
              />
            ))}
          </div>
        </fieldset>

        {error && <FormAlert id="otp-error">{error}</FormAlert>}

        {/* Stays rendered (no display:none) so screen readers announce the resend result; collapses its gap when empty. */}
        <div aria-live="polite" className="empty:-mt-5">
          {resendStatus === 'success' && (
            <p className="flex items-center gap-2 rounded-[12px] bg-sx-mint/40 px-4 py-3 text-sm text-sx-forest">
              <CheckCircle2 size={16} aria-hidden="true" />
              A new code is on its way to your email.
            </p>
          )}
          {resendStatus === 'error' && (
            <p className="rounded-[12px] bg-red-50 px-4 py-3 text-sm text-red-700">Failed to send code. Please try again.</p>
          )}
        </div>

        <SubmitButton busy={isVerifying} busyLabel="Verifying code..." disabled={!isComplete}>
          {actionLabel}
        </SubmitButton>

        <p className="flex flex-wrap items-center justify-between gap-2 text-sm text-sx-ink/60">
          <span>Didn&apos;t receive the code?</span>
          <button type="button" onClick={handleResend} disabled={isResending} className={`${textLinkClass} disabled:opacity-50`}>
            {isResending ? 'Sending...' : 'Resend code'}
          </button>
        </p>
      </form>
    </div>
  )
}
