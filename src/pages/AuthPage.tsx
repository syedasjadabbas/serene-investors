import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { funds, properties, site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

type Props = {
  title: string
}

export function AuthPage({ title }: Props) {
  const [params] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const isLogin = title === 'Login'
  const intent = params.get('intent')
  const relatedId = params.get('id')
  const property = intent === 'property' ? properties.find((item) => item.id === relatedId) : undefined
  const fund = intent === 'fund' ? funds.find((item) => item.id === relatedId) : undefined

  usePageMeta(
    `SERENE INVESTORS | ${title}`,
    `${title} for the SERENE INVESTORS demonstration platform. This is a sample interaction and does not create a real account.`,
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container as="section" className="py-16 lg:py-20">
      <p className="brand-label text-muted">Demo platform</p>
      <h1 className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 max-w-prose text-muted">
        {isLogin
          ? 'Use this sample form to preview a demo login. No credentials are stored and no real account is created.'
          : 'Use this sample form to preview onboarding. Submitting it does not open an account or place an investment.'}
      </p>

      {property ? (
        <p className="mt-4 max-w-prose text-sm">
          Continuing from sample property{' '}
          <Link to={`/properties/${property.id}`} className="font-medium underline underline-offset-2">
            {property.name}
          </Link>
          .
        </p>
      ) : null}
      {fund ? (
        <p className="mt-4 max-w-prose text-sm">
          Continuing from sample fund{' '}
          <Link to={`/funds/${fund.id}`} className="font-medium underline underline-offset-2">
            {fund.name}
          </Link>
          .
        </p>
      ) : null}

      {submitted ? (
        <div className="demo-confirm" role="status">
          <p className="font-medium tracking-tight">
            {isLogin ? 'Demo session started.' : 'Demo request received.'}
          </p>
          <p className="mt-2 text-sm text-muted">
            This is a sample interaction on {site.name}. Nothing was sent and no account was created.
          </p>
          <div className="page-actions">
            {property ? (
              <>
                <ButtonLink to={`/properties/${property.id}`}>View {property.name}</ButtonLink>
                <ButtonLink to="/properties" variant="ghost">
                  Browse properties
                </ButtonLink>
              </>
            ) : fund ? (
              <>
                <ButtonLink to={`/funds/${fund.id}`}>View {fund.name}</ButtonLink>
                <ButtonLink to="/funds" variant="ghost">
                  Explore funds
                </ButtonLink>
              </>
            ) : (
              <>
                <ButtonLink to="/properties">Browse properties</ButtonLink>
                <ButtonLink to="/funds" variant="ghost">
                  Explore funds
                </ButtonLink>
              </>
            )}
          </div>
        </div>
      ) : (
        <form className="mt-10 max-w-md" onSubmit={onSubmit}>
          {isLogin ? null : (
            <label className="demo-field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
          )}
          <label className="demo-field">
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className="demo-field">
            <span>{isLogin ? 'Password' : 'Create a demo password'}</span>
            <input
              type="password"
              name="password"
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
              minLength={8}
            />
          </label>
          <p className="demo-note">Sample interaction only. Do not enter a real password.</p>
          <div className="page-actions">
            <Button type="submit">{isLogin ? 'Enter demo' : 'Create demo account'}</Button>
            {isLogin ? (
              <ButtonLink
                to={
                  property
                    ? `/get-started?intent=property&id=${property.id}`
                    : fund
                      ? `/get-started?intent=fund&id=${fund.id}`
                      : '/get-started'
                }
                variant="ghost"
              >
                Get started
              </ButtonLink>
            ) : (
              <ButtonLink to="/login" variant="ghost">
                Login
              </ButtonLink>
            )}
          </div>
        </form>
      )}
    </Container>
  )
}
