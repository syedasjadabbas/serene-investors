import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, ButtonLink } from '@/components/ui/Button'
import {
  getStartedOnboarding,
  sampleFundMinimum,
  sampleOnboardingAmounts,
} from '@/data'
import { formatPercent, formatPropertyMeta, formatSampleAmount } from '@/lib/format'
import { cn } from '@/lib/cn'
import { useGetStarted } from '@/hooks/useGetStarted'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

function ListingSummary({
  listing,
  amount,
}: {
  listing: ReturnType<typeof useGetStarted>['listing']
  amount: number
}) {
  if (listing.kind === 'fund') {
    const fund = listing.fund
    return (
      <article className="start-summary">
        <img src={fund.image} alt={fund.imageAlt} width={900} height={675} />
        <div>
          <p className="start-kicker">Sample fund</p>
          <h3>{fund.name}</h3>
          <p>
            {fund.market} · {fund.portfolioLabel} · {fund.propertyCount} sample properties
          </p>
          <dl>
            <div>
              <dt>Sample yield</dt>
              <dd>{formatPercent(fund.sampleReturnPct)}</dd>
            </div>
            <div>
              <dt>Sample fund minimum</dt>
              <dd>{formatSampleAmount(sampleFundMinimum)}</dd>
            </div>
            <div>
              <dt>Your sample amount</dt>
              <dd>{formatSampleAmount(amount)}</dd>
            </div>
          </dl>
          <Link to={`/funds/${fund.id}`} className="start-summary__link">
            View fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
          <p className="start-summary__note">Illustrative sample only. This does not place an investment.</p>
        </div>
      </article>
    )
  }

  const property = listing.property
  return (
    <article className="start-summary">
      <img src={property.image} alt={property.imageAlt} width={900} height={1125} />
      <div>
        <p className="start-kicker">Sample property</p>
        <h3>{property.name}</h3>
        <p>
          {formatPropertyMeta(property.neighborhood, property.city)} · {property.type}
        </p>
        <dl>
          <div>
            <dt>Sample yield</dt>
            <dd>{formatPercent(property.sampleYieldPct)}</dd>
          </div>
          <div>
            <dt>Sample listing minimum</dt>
            <dd>{formatSampleAmount(property.sampleMinInvestment)}</dd>
          </div>
          <div>
            <dt>Your sample amount</dt>
            <dd>{formatSampleAmount(amount)}</dd>
          </div>
        </dl>
          <Link to={`/properties/${property.id}`} className="start-summary__link">
            View property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
          <p className="start-summary__note">Illustrative sample only. This does not place an investment.</p>
      </div>
    </article>
  )
}

export function StartOnboarding() {
  const rootRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const onboard = useGetStarted()
  useSectionReveal(rootRef)

  useLayoutEffect(() => {
    const panel = panelRef.current
    if (!panel || reduced) return
    registerGsapPlugins()
    const tween = gsap.fromTo(
      panel,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', overwrite: 'auto' },
    )
    return () => {
      tween.kill()
      gsap.set(panel, { clearProps: 'opacity,y' })
    }
  }, [onboard.completed, onboard.step, reduced])

  const stepCopy = getStartedOnboarding.steps[onboard.step]

  return (
    <section ref={rootRef} className="start-onboard" aria-labelledby="start-onboard-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="start-kicker">
          {getStartedOnboarding.eyebrow}
        </p>
        <h2
          data-reveal-heading
          id="start-onboard-heading"
          className="mt-4 max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {getStartedOnboarding.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {getStartedOnboarding.body}
        </p>

        {onboard.completed ? (
          <div ref={panelRef} className="start-onboard__panel" role="status">
            <p className="property-hero__mark">Illustrative sample</p>
            <h3 className="start-onboard__confirm">{getStartedOnboarding.confirmHeading}</h3>
            <p className="start-onboard__confirm-body">{getStartedOnboarding.confirmBody}</p>
            {onboard.amount ? (
              <ListingSummary listing={onboard.listing} amount={onboard.amount} />
            ) : null}
            <div className="start-onboard__nav">
              <Button type="button" variant="ghost" onClick={onboard.back}>
                Back to review
              </Button>
              <ButtonLink to="/properties" className="min-h-11">
                Explore properties
              </ButtonLink>
              <ButtonLink to="/funds" variant="ghost" className="min-h-11">
                Explore funds
              </ButtonLink>
            </div>
          </div>
        ) : (
          <div className="start-onboard__panel">
            <ol className="start-progress" aria-label="Sample onboarding progress">
              {getStartedOnboarding.steps.map((item, index) => (
                <li
                  key={item.id}
                  aria-current={index === onboard.step ? 'step' : undefined}
                  className={cn(index === onboard.step && 'is-active', index < onboard.step && 'is-done')}
                >
                  <span>{item.number}</span>
                  {item.title}
                </li>
              ))}
            </ol>
            <div className="start-progress__track" aria-hidden="true">
              <span style={{ width: `${((onboard.step + 1) / 3) * 100}%` }} />
            </div>

            <div ref={panelRef} key={onboard.step}>
              <h3 className="start-onboard__step-title">
                <span>{stepCopy?.number}</span>
                {stepCopy?.title}
              </h3>

              {onboard.step === 0 ? (
                <fieldset className="start-choices">
                  <legend className="sr-only">Choose what interests you</legend>
                  {getStartedOnboarding.interests.map((item) => (
                    <label
                      key={item.id}
                      className={cn('start-choice', onboard.interest === item.id && 'is-active')}
                    >
                      <input
                        type="radio"
                        name="start-interest"
                        value={item.id}
                        checked={onboard.interest === item.id}
                        onChange={() => onboard.chooseInterest(item.id)}
                      />
                      <span className="start-choice__title">{item.title}</span>
                      <span className="start-choice__body">{item.body}</span>
                    </label>
                  ))}
                </fieldset>
              ) : null}

              {onboard.step === 1 ? (
                <fieldset className="start-choices start-choices--amounts">
                  <legend className="sr-only">Choose a sample amount</legend>
                  <p className="start-onboard__hint">Sample amounts only. These are not live tickets.</p>
                  {sampleOnboardingAmounts.map((value) => (
                    <label
                      key={value}
                      className={cn('start-choice', onboard.amount === value && 'is-active')}
                    >
                      <input
                        type="radio"
                        name="start-amount"
                        value={value}
                        checked={onboard.amount === value}
                        onChange={() => onboard.chooseAmount(value)}
                      />
                      <span className="start-choice__title">{formatSampleAmount(value)}</span>
                      <span className="start-choice__body">Sample amount</span>
                    </label>
                  ))}
                </fieldset>
              ) : null}

              {onboard.step === 2 && onboard.amount ? (
                <ListingSummary listing={onboard.listing} amount={onboard.amount} />
              ) : null}
            </div>

            <div className="start-onboard__nav">
              <Button type="button" variant="ghost" onClick={onboard.back} disabled={onboard.step === 0}>
                Back
              </Button>
              <Button type="button" onClick={onboard.next} disabled={!onboard.canAdvance} className="min-h-11 gap-1.5">
                {onboard.step === 2 ? 'Confirm sample journey' : 'Next'}
                {onboard.step === 2 ? null : (
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
