'use client'

import { useEffect, useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'
import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react'
import { Button } from '@/global/components/ui/Button'
import { ApiError } from '@/global/api/client'
import { authApi } from '@/global/api/endpoints/authApi'

type Props = {
  email: string
  onSuccess: () => void
  onBack: () => void
  actionLabel?: string
}

export function OtpVerificationStep({
  email,
  onSuccess,
  onBack,
  actionLabel = 'Verify & Log in',
}: Props) {
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', ''])
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
    const nextIndex = Math.min(numericOnly.length, 5)
    inputRefs.current[nextIndex]?.focus()
  }

  async function handleSubmit(e?: React.FormEvent) {
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
      setDigits(['', '', '', '', '', ''])
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
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} />
        Back
      </button>

      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Lock size={13} />
        </span>
        <span className="brand-label text-muted">Two-Factor Authentication</span>
      </div>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Verify your identity
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Enter the 6-digit verification code sent to{' '}
        <span className="font-medium text-ink">{email || 'your email'}</span>.
      </p>

      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* 6 Digit Input Slots */}
        <div>
          <label className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider text-muted">
            Security Verification Code
          </label>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputRefs.current[i] = el
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                className="h-12 w-10 rounded-xl border border-line bg-bg/50 text-center font-mono text-xl font-bold text-ink transition-all focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 sm:h-14 sm:w-12 sm:text-2xl"
                aria-label={`Digit ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-danger/30 bg-danger/10 px-4 py-2.5 text-center text-xs text-danger">
            {error}
          </div>
        )}

        {resendStatus === 'success' && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700">
            <CheckCircle2 size={13} />
            <span>A new verification code has been dispatched to your email.</span>
          </div>
        )}

        {resendStatus === 'error' && (
          <div className="text-center text-xs text-danger">
            Failed to send code. Please try again.
          </div>
        )}

        <Button
          type="submit"
          disabled={!isComplete || isVerifying}
          className="w-full py-3 text-sm font-semibold tracking-wide disabled:opacity-50"
        >
          {isVerifying ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-ink border-t-transparent" />
              Verifying code...
            </span>
          ) : (
            actionLabel
          )}
        </Button>

        <div className="flex items-center justify-between text-xs text-muted">
          <span>Didn&apos;t receive the code?</span>
          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-accent disabled:opacity-50"
          >
            {isResending ? 'Sending...' : 'Resend code'}
          </button>
        </div>
      </form>
    </div>
  )
}
