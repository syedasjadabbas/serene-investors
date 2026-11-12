'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { OtpVerificationStep } from '@/components/auth/OtpVerificationStep'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useAuth } from '@/context/AuthContext'
import { funds, properties, site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { withBase } from '@/lib/asset'

type Props = {
  title: string
}

export function AuthPage({ title }: Props) {
  const router = useRouter()
  const params = useSearchParams()
  const { login } = useAuth()
  const [authState, setAuthState] = useState<'credentials' | 'otp' | 'success'>('credentials')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [sendOtpError, setSendOtpError] = useState('')

  const isLogin = title === 'Login'
  const intent = params?.get('intent')
  const relatedId = params?.get('id')
  const property = intent === 'property' ? properties.find((item) => item.id === relatedId) : undefined
  const fund = intent === 'fund' ? funds.find((item) => item.id === relatedId) : undefined

  const signupHref =
    intent && relatedId
      ? `/signup?intent=${encodeURIComponent(intent)}&id=${encodeURIComponent(relatedId)}`
      : '/signup'

  const redirectParam = params?.get('redirect')
  const targetHref = redirectParam || (property
    ? `/properties/${property.id}`
    : fund
      ? `/funds/${fund.id}`
      : '/')

  usePageMeta(
    `${site.name} | ${title}`,
    `${title} for the SERENE INVESTORS private wealth portal. Enter your credentials to access your investor portfolio.`,
  )

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (authState === 'success') {
      timer = setTimeout(() => {
        router.push(targetHref)
      }, 900)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [authState, router, targetHref])

  async function sendOtpAndProceed(targetEmail: string) {
    setIsSendingOtp(true)
    setSendOtpError('')

    try {
      const res = await fetch(withBase('/api/auth/send-otp'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: targetEmail }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data.success) {
        setAuthState('otp')
      } else {
        setSendOtpError(data.error || 'Failed to dispatch verification code. Please check your email.')
      }
    } catch {
      setSendOtpError('Network error while dispatching code. Please try again.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  function onCredentialsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email || !password) return
    sendOtpAndProceed(email)
  }

  function handleQuickDemo() {
    login({
      name: 'Yasir Khokhar',
      email: 'investor@serene-investors.com',
      investorType: 'individual',
    })
    setAuthState('success')
  }

  function handleOtpSuccess() {
    // Authenticate user in persistent context
    login({
      name: email.includes('@') ? email.split('@')[0].replace(/[._-]/g, ' ') : 'Yasir Khokhar',
      email: email || 'investor@serene-investors.com',
      investorType: 'individual',
    })
    setAuthState('success')
  }

  return (
    <Container as="section" className="flex justify-center py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface/90 p-7 sm:p-10 shadow-xl backdrop-blur-xl transition-all">
        {authState === 'success' ? (
          <div className="py-2 text-center" role="status">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Authentication successful
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Welcome back{email ? ` (${email})` : ''}. Redirecting to {targetHref === '/' ? 'the home page' : 'your investor portal'}...
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={targetHref} className="w-full gap-2 sm:w-auto">
                {targetHref === '/' ? 'Continue to Home' : 'Continue to portal'}
                <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
            </div>

            <p className="mt-6 text-xs text-muted">
              Taking longer than expected?{' '}
              <Link
                href={targetHref}
                className="font-medium text-primary underline underline-offset-2 hover:text-accent"
              >
                Click here to continue
              </Link>
            </p>
          </div>
        ) : authState === 'otp' ? (
          <OtpVerificationStep
            email={email}
            onSuccess={handleOtpSuccess}
            onBack={() => setAuthState('credentials')}
            actionLabel="Verify & Log in"
          />
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="brand-label text-muted">Investor Portal · {isLogin ? 'Member Login' : 'Client Access'}</span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {isLogin
                ? 'Enter your credentials to access your investor portal.'
                : 'Enter your credentials to access curated institutional real estate allocations.'}
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

            <form className="mt-6 flex flex-col gap-4" onSubmit={onCredentialsSubmit}>
              {!isLogin ? (
                <div>
                  <label
                    htmlFor="auth-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ) : null}

              <div>
                <label
                  htmlFor="auth-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="auth-email"
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

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="auth-password"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Password
                  </label>
                  {isLogin ? (
                    <span className="text-[0.72rem] text-muted">Min. 8 characters</span>
                  ) : null}
                </div>
                <input
                  id="auth-password"
                  type="password"
                  name="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {sendOtpError && (
                <div className="rounded-xl border border-danger/30 bg-danger/10 px-4 py-2.5 text-center text-xs text-danger">
                  {sendOtpError}
                </div>
              )}

              {/* Action Buttons: Primary 'Log in' + Secondary 'Quick Access' */}
              <div className="mt-2 flex flex-col gap-2.5">
                <Button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full py-3 text-sm font-semibold tracking-wide disabled:opacity-60"
                >
                  {isSendingOtp ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-ink border-t-transparent" />
                      Sending verification code...
                    </span>
                  ) : isLogin ? (
                    'Log in'
                  ) : (
                    'Create account'
                  )}
                </Button>

                {isLogin ? (
                  <Button
                    type="button"
                    variant="ghost"
                    disabled={isSendingOtp}
                    onClick={handleQuickDemo}
                    className="w-full border border-line/70 bg-bg-warm/40 py-2.5 text-xs font-medium text-muted transition-colors hover:border-line hover:bg-bg-warm hover:text-ink disabled:opacity-60"
                  >
                    <ShieldCheck size={14} className="mr-1.5 text-primary" />
                    Investor Portal Quick Access
                  </Button>
                ) : null}
              </div>

              <div className="mt-2 flex flex-col items-center gap-2 text-center text-xs text-muted">
                {isLogin ? (
                  <p>
                    Don&apos;t have an account?{' '}
                    <Link
                      href={signupHref}
                      className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      Sign up
                    </Link>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      Log in
                    </Link>
                  </p>
                )}
              </div>

              {/* Muted regulatory notice at the bottom */}
              <p className="mt-3 border-t border-line/60 pt-4 text-center text-[0.75rem] text-muted/80 leading-relaxed">
                FCA Regulatory Notice: Serene Investors is a registered digital wealth syndication platform. All client funds and fractional holdings are protected by regulated Tier-1 UK custodian banks.
              </p>
            </form>
          </div>
        )}
      </div>
    </Container>
  )
}
