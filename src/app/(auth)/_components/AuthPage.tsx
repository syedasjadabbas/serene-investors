'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PillLink } from '@/global/components/ui/PillLink'
import { useAuth } from '@/global/stores/auth'
import { site } from '@/global/data/site'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ApiError } from '@/global/api/client'
import { authApi } from '@/global/api/endpoints/authApi'
import { useAuthTarget } from '../_lib/useAuthTarget'
import {
  AuthFootnote,
  AuthHeading,
  AuthShell,
  AuthSuccess,
  FormAlert,
  RelatedNotice,
  SubmitButton,
  TextField,
  textLinkClass,
} from './AuthLayout'
import { OtpVerificationStep } from './OtpVerificationStep'

type Props = {
  title: string
}

/** /login: email + password, then a one-time code by email, then redirect. */
export function AuthPage({ title }: Props) {
  const router = useRouter()
  const { login } = useAuth()
  const { related, otherHref: signupHref, targetHref } = useAuthTarget('/signup')
  const [authState, setAuthState] = useState<'credentials' | 'otp' | 'success'>('credentials')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [sendOtpError, setSendOtpError] = useState('')

  usePageMeta(
    `${site.name} | ${title}`,
    `${title} to the ${site.name} investor portal. Enter your credentials to access your investor portfolio.`,
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
      await authApi.sendOtp(targetEmail)
      setAuthState('otp')
    } catch (error) {
      setSendOtpError(
        error instanceof ApiError
          ? error.message || 'Failed to dispatch verification code. Please check your email.'
          : 'Network error while dispatching code. Please try again.',
      )
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

  const toHome = targetHref === '/'

  return (
    <AuthShell related={related}>
      {authState === 'success' ? (
        <AuthSuccess
          title="You're signed in"
          actions={
            <>
              <PillLink href={targetHref}>{toHome ? 'Continue to home' : 'Continue to portal'}</PillLink>
              <p className="text-sm text-sx-ink/55">
                Taking longer than expected?{' '}
                <Link href={targetHref} className={textLinkClass}>
                  Continue now
                </Link>
              </p>
            </>
          }
        >
          Welcome back{email ? ` (${email})` : ''}. Taking you to {toHome ? 'the home page' : 'your investor portal'}…
        </AuthSuccess>
      ) : authState === 'otp' ? (
        <OtpVerificationStep
          email={email}
          onSuccess={handleOtpSuccess}
          onBack={() => setAuthState('credentials')}
          actionLabel="Verify & log in"
        />
      ) : (
        <>
          <AuthHeading eyebrow="Investor portal" title="Log in">
            Enter your email and password. We&apos;ll send a one-time code to confirm it&apos;s you.
          </AuthHeading>

          <RelatedNotice related={related} />

          <form className="mt-8 flex flex-col gap-5" onSubmit={onCredentialsSubmit}>
            <TextField
              id="auth-email"
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />

            <TextField
              id="auth-password"
              label="Password"
              hint="Min. 8 characters"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {sendOtpError && <FormAlert>{sendOtpError}</FormAlert>}

            <div className="mt-1 flex flex-col gap-4">
              <SubmitButton busy={isSendingOtp} busyLabel="Sending verification code...">
                Log in
              </SubmitButton>
              <button
                type="button"
                onClick={handleQuickDemo}
                disabled={isSendingOtp}
                className="w-full rounded-[12px] bg-sx-paper py-3 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand disabled:opacity-55"
              >
                Explore with the demo investor account
              </button>
            </div>

            <p className="text-center text-sm text-sx-ink/60">
              Don&apos;t have an account?{' '}
              <Link href={signupHref} className={textLinkClass}>
                Sign up
              </Link>
            </p>
          </form>

          <AuthFootnote />
        </>
      )}
    </AuthShell>
  )
}
