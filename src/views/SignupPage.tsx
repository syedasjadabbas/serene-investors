'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Building2, CheckCircle2, User } from 'lucide-react'
import { OtpVerificationStep } from '@/components/auth/OtpVerificationStep'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useAuth } from '@/context/AuthContext'
import { funds, properties, site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { cn } from '@/lib/cn'
import { withBase } from '@/lib/asset'

export function SignupPage() {
  const router = useRouter()
  const params = useSearchParams()
  const { login } = useAuth()
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [investorType, setInvestorType] = useState<'individual' | 'institutional'>('individual')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)

  const intent = params?.get('intent')
  const relatedId = params?.get('id')
  const property = intent === 'property' ? properties.find((item) => item.id === relatedId) : undefined
  const fund = intent === 'fund' ? funds.find((item) => item.id === relatedId) : undefined

  const loginHref =
    intent && relatedId
      ? `/login?intent=${encodeURIComponent(intent)}&id=${encodeURIComponent(relatedId)}`
      : '/login'

  const redirectParam = params?.get('redirect')
  const targetHref = redirectParam || (property
    ? `/properties/${property.id}`
    : fund
      ? `/funds/${fund.id}`
      : '/')

  usePageMeta(
    `${site.name} | Create account`,
    'Create your investor account on SERENE INVESTORS. Access institutional fractional ownership in prime UK real estate assets and core syndicates.',
  )

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (step === 'success') {
      timer = setTimeout(() => {
        router.push(targetHref)
      }, 1200)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [step, router, targetHref])

  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please ensure both passwords match.')
      return
    }

    setIsSendingOtp(true)

    try {
      const res = await fetch(withBase('/api/auth/send-otp'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data.success) {
        setStep('otp')
      } else {
        setErrorMessage(data.error || 'Failed to dispatch verification code. Please check your email.')
      }
    } catch {
      setErrorMessage('Network error while dispatching code. Please try again.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  function handleOtpSuccess() {
    login({
      name: fullName || 'Eleanor Vance',
      email: email || 'investor@serene-investors.com',
      investorType,
    })
    setStep('success')
  }

  return (
    <Container as="section" className="flex justify-center py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-lg rounded-3xl border border-line bg-surface/90 p-7 sm:p-10 shadow-xl backdrop-blur-xl transition-all">
        {step === 'success' ? (
          <div className="py-2 text-center" role="status">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Investor account created
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Welcome, <span className="font-medium text-ink">{fullName || 'Investor'}</span>! Your account has been registered as an{' '}
              <strong className="text-ink">
                {investorType === 'institutional' ? 'Institutional' : 'Individual'}
              </strong>{' '}
              investor.
            </p>

            <div className="mx-auto mt-5 max-w-sm rounded-2xl border border-line bg-bg-warm/60 p-4 text-left text-xs">
              <p className="font-semibold text-ink">Account Summary:</p>
              <p className="mt-1 font-medium text-ink">Email: {email}</p>
              <p className="text-muted">Type: {investorType === 'institutional' ? 'Institutional / Syndicate' : 'Individual / Accredited'}</p>
              <p className="mt-2 text-[0.75rem] text-muted">
                Redirecting to your investor portal in a moment...
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={targetHref} className="w-full gap-2 sm:w-auto">
                Continue to portal
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/funds" variant="ghost" className="w-full sm:w-auto">
                Explore funds
              </ButtonLink>
            </div>

            <div className="mt-8 border-t border-line pt-4 text-xs text-muted">
              Already have an account?{' '}
              <Link
                href={loginHref}
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Log in
              </Link>
            </div>
          </div>
        ) : step === 'otp' ? (
          <OtpVerificationStep
            email={email}
            onSuccess={handleOtpSuccess}
            onBack={() => setStep('form')}
            actionLabel="Verify & Create Account"
          />
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="brand-label text-muted">Investor Portal · Private Client Registration</span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Join Serene Investors to access curated prime UK real estate allocations and institutional syndicates.
            </p>

            {property ? (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-bg-warm/60 px-4 py-2.5 text-xs text-ink">
                <span>
                  Continuing from sample property: <strong>{property.name}</strong>
                </span>
                <Link
                  href={`/properties/${property.id}`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                >
                  View
                </Link>
              </div>
            ) : null}

            {fund ? (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-bg-warm/60 px-4 py-2.5 text-xs text-ink">
                <span>
                  Continuing from sample fund: <strong>{fund.name}</strong>
                </span>
                <Link
                  href={`/funds/${fund.id}`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                >
                  View
                </Link>
              </div>
            ) : null}

            <form className="mt-6 flex flex-col gap-4" onSubmit={onFormSubmit}>
              {/* Investor Type (Radio pills) */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                  Investor Type
                </span>
                <div className="mt-2 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Investor type">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={investorType === 'individual'}
                    onClick={() => setInvestorType('individual')}
                    className={cn(
                      'flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all',
                      investorType === 'individual'
                        ? 'border-primary bg-primary/5 text-ink ring-1 ring-primary'
                        : 'border-line bg-bg/50 text-muted hover:border-ink/20 hover:text-ink',
                    )}
                  >
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                      <User size={15} className={investorType === 'individual' ? 'text-primary' : 'text-muted'} />
                      Individual
                    </span>
                    <span className="mt-1 text-xs text-muted leading-tight">
                      Personal wealth & accredited
                    </span>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={investorType === 'institutional'}
                    onClick={() => setInvestorType('institutional')}
                    className={cn(
                      'flex flex-col items-start rounded-2xl border p-3.5 text-left transition-all',
                      investorType === 'institutional'
                        ? 'border-primary bg-primary/5 text-ink ring-1 ring-primary'
                        : 'border-line bg-bg/50 text-muted hover:border-ink/20 hover:text-ink',
                    )}
                  >
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                      <Building2 size={15} className={investorType === 'institutional' ? 'text-primary' : 'text-muted'} />
                      Institutional
                    </span>
                    <span className="mt-1 text-xs text-muted leading-tight">
                      Family office & syndicates
                    </span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="signup-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="signup-confirm-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Confirm Password
                </label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {confirmPassword && password && (
                  <p className="mt-1.5 text-xs">
                    {password === confirmPassword ? (
                      <span className="flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 size={13} /> Passwords match
                      </span>
                    ) : (
                      <span className="text-danger">Passwords do not match</span>
                    )}
                  </p>
                )}
              </div>

              {errorMessage && (
                <div className="rounded-xl border border-danger/30 bg-danger/10 px-4 py-2.5 text-xs text-danger">
                  {errorMessage}
                </div>
              )}

              {/* Primary Submit Button */}
              <Button
                type="submit"
                disabled={isSendingOtp}
                className="mt-2 w-full py-3 text-sm font-semibold tracking-wide disabled:opacity-60"
              >
                {isSendingOtp ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-ink border-t-transparent" />
                    Sending verification code...
                  </span>
                ) : (
                  'Create account'
                )}
              </Button>

              {/* Inter-page Link to Login */}
              <p className="mt-2 text-center text-xs text-muted">
                Already have an account?{' '}
                <Link
                  href={loginHref}
                  className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Log in
                </Link>
              </p>

              {/* Muted regulatory notice at the bottom */}
              <p className="mt-3 border-t border-line/60 pt-4 text-center text-[0.75rem] text-muted/80 leading-relaxed">
                FCA Regulatory Notice: Serene Investors operates in compliance with UK financial services standards. All client investments and cash accounts are held by regulated custodian banks.
              </p>
            </form>
          </div>
        )}
      </div>
    </Container>
  )
}
