'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Building2, CheckCircle2, User } from 'lucide-react'
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

type InvestorType = 'individual' | 'institutional'

const INVESTOR_TYPES: { value: InvestorType; label: string; body: string; icon: typeof User }[] = [
  { value: 'individual', label: 'Individual', body: 'Personal wealth & accredited', icon: User },
  { value: 'institutional', label: 'Institutional', body: 'Family office & syndicates', icon: Building2 },
]

/** /signup: investor type + details, then a one-time code by email, then redirect. `?email=` prefills the email. */
export function SignupPage() {
  const router = useRouter()
  const { login } = useAuth()
  const { params, related, otherHref: loginHref, targetHref } = useAuthTarget('/login')
  const [step, setStep] = useState<'form' | 'otp' | 'success'>('form')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState(() => params?.get('email') ?? '')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [investorType, setInvestorType] = useState<InvestorType>('individual')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)

  usePageMeta(
    `${site.name} | Create account`,
    `Create your investor account on ${site.name} and own shares in income-generating real estate.`,
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
      await authApi.sendOtp(email)
      setStep('otp')
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message || 'Failed to dispatch verification code. Please check your email.'
          : 'Network error while dispatching code. Please try again.',
      )
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

  const passwordsEntered = Boolean(confirmPassword && password)
  const passwordsMatch = password === confirmPassword

  return (
    <AuthShell related={related}>
      {step === 'success' ? (
        <AuthSuccess
          title="Your account is ready"
          actions={
            <>
              <PillLink href={targetHref}>Continue to portal</PillLink>
              <Link href="/funds" className={`text-sm ${textLinkClass}`}>
                Explore funds
              </Link>
            </>
          }
        >
          <p>
            Welcome, <span className="font-semibold text-sx-ink">{fullName || 'Investor'}</span>. You&apos;re registered as an{' '}
            <strong className="font-semibold text-sx-ink">{investorType === 'institutional' ? 'Institutional' : 'Individual'}</strong> investor.
          </p>
          <dl className="mt-5 grid gap-1 rounded-[12px] bg-sx-paper p-4 text-left text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-sx-ink/55">Email</dt>
              <dd className="truncate font-medium text-sx-ink">{email}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-sx-ink/55">Type</dt>
              <dd className="font-medium text-sx-ink">
                {investorType === 'institutional' ? 'Institutional / Syndicate' : 'Individual / Accredited'}
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-sm">Taking you to your investor portal in a moment…</p>
        </AuthSuccess>
      ) : step === 'otp' ? (
        <OtpVerificationStep
          email={email}
          onSuccess={handleOtpSuccess}
          onBack={() => setStep('form')}
          actionLabel="Verify & create account"
        />
      ) : (
        <>
          <AuthHeading eyebrow="New investor" title="Create an account">
            Join {site.name} to own shares in vetted, income-generating property.
          </AuthHeading>

          <RelatedNotice related={related} />

          <form className="mt-8 flex flex-col gap-5" onSubmit={onFormSubmit}>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-sx-ink">Investor type</legend>
              <div className="grid grid-cols-2 gap-3">
                {INVESTOR_TYPES.map(({ value, label, body, icon: Icon }) => (
                  <label
                    key={value}
                    className="flex cursor-pointer flex-col gap-1 rounded-[12px] bg-sx-paper p-4 ring-sx-brand transition-shadow has-[:checked]:bg-sx-mint/30 has-[:checked]:ring-2 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sx-brand"
                  >
                    <input
                      type="radio"
                      name="investorType"
                      value={value}
                      checked={investorType === value}
                      onChange={() => setInvestorType(value)}
                      className="sr-only"
                    />
                    <span className="flex items-center gap-2 text-sm font-semibold text-sx-ink">
                      <Icon size={16} aria-hidden="true" className="text-sx-brand" />
                      {label}
                    </span>
                    <span className="text-xs leading-snug text-sx-ink/60">{body}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <TextField
              id="signup-name"
              label="Full name"
              type="text"
              name="fullName"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Eleanor Vance"
            />

            <TextField
              id="signup-email"
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
              id="signup-password"
              label="Password"
              hint="Min. 8 characters"
              type="password"
              name="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              id="signup-confirm-password"
              label="Confirm password"
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              aria-invalid={passwordsEntered && !passwordsMatch ? true : undefined}
              messageId="signup-confirm-status"
              message={
                <p id="signup-confirm-status" aria-live="polite" className="text-sm empty:-mt-2">
                  {passwordsEntered &&
                    (passwordsMatch ? (
                      <span className="flex items-center gap-1.5 text-sx-forest">
                        <CheckCircle2 size={15} aria-hidden="true" /> Passwords match
                      </span>
                    ) : (
                      <span className="text-red-700">Passwords do not match</span>
                    ))}
                </p>
              }
            />

            {errorMessage && <FormAlert>{errorMessage}</FormAlert>}

            <div className="mt-1">
              <SubmitButton busy={isSendingOtp} busyLabel="Sending verification code...">
                Create account
              </SubmitButton>
            </div>

            <p className="text-center text-sm text-sx-ink/60">
              Already have an account?{' '}
              <Link href={loginHref} className={textLinkClass}>
                Log in
              </Link>
            </p>
          </form>

          <AuthFootnote />
        </>
      )}
    </AuthShell>
  )
}
