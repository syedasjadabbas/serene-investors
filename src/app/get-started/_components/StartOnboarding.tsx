import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import { sampleFundMinimum } from '@/global/data/funds'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { formatPercent, formatPropertyMeta, formatSampleAmount } from '@/global/lib/format'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'
import { useGetStarted } from '../_hooks/useGetStarted'
import { getStartedOnboarding, sampleOnboardingAmounts } from '../_lib/get-started'

type Listing = ReturnType<typeof useGetStarted>['listing']

const BUTTON = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors sm:text-base disabled:cursor-not-allowed disabled:opacity-40'

function ListingSummary({ listing, amount }: { listing: Listing; amount: number }) {
  const isFund = listing.kind === 'fund'
  const item = isFund
    ? {
        kicker: 'Sample fund',
        name: listing.fund.name,
        meta: `${listing.fund.market} · ${listing.fund.portfolioLabel} · ${listing.fund.propertyCount} sample properties`,
        image: listing.fund.image,
        imageAlt: listing.fund.imageAlt,
        yieldPct: listing.fund.sampleReturnPct,
        minimumLabel: 'Sample fund minimum',
        minimum: sampleFundMinimum,
        href: `/funds/${listing.fund.id}`,
        linkLabel: 'View fund',
      }
    : {
        kicker: 'Sample property',
        name: listing.property.name,
        meta: `${formatPropertyMeta(listing.property.neighborhood, listing.property.city)} · ${listing.property.type}`,
        image: listing.property.image,
        imageAlt: listing.property.imageAlt,
        yieldPct: listing.property.sampleYieldPct,
        minimumLabel: 'Sample listing minimum',
        minimum: listing.property.sampleMinInvestment,
        href: `/properties/${listing.property.id}`,
        linkLabel: 'View property',
      }

  const figures = [
    { label: 'Sample yield', value: formatPercent(item.yieldPct) },
    { label: item.minimumLabel, value: formatSampleAmount(item.minimum) },
    { label: 'Your sample amount', value: formatSampleAmount(amount) },
  ]

  return (
    <article className="grid gap-5 rounded-[20px] bg-white p-3 text-sx-ink sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:p-4">
      <div className="relative min-h-[180px] overflow-hidden rounded-[14px] bg-sx-sand">
        <img
          src={withBase(item.image)}
          alt={item.imageAlt}
          width={900}
          height={675}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-2 sm:p-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-brand">{item.kicker}</p>
          <h4 className="mt-1 font-heading text-2xl font-bold tracking-[-0.02em]">{item.name}</h4>
          <p className="mt-1 text-sm text-sx-ink/60">{item.meta}</p>
        </div>
        <dl className="grid gap-2 sm:grid-cols-3">
          {figures.map((figure) => (
            <div key={figure.label} className="flex items-baseline justify-between gap-3 rounded-[12px] bg-sx-paper px-4 py-3 sm:flex-col sm:items-start sm:gap-1">
              <dt className="text-xs text-sx-ink/55">{figure.label}</dt>
              <dd className="font-heading text-lg font-bold tabular-nums">{figure.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href={item.href} className="group inline-flex items-center gap-3 rounded-full text-sm font-semibold">
            {item.linkLabel}
            <ArrowCircle tone="dark" size="sm" />
          </Link>
          <p className="text-xs text-sx-ink/50">Illustrative sample only. This does not place an investment.</p>
        </div>
      </div>
    </article>
  )
}

function Choice({
  name,
  checked,
  onChange,
  title,
  body,
}: {
  name: string
  checked: boolean
  onChange: () => void
  title: string
  body: string
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start justify-between gap-4 rounded-[16px] border-2 bg-white p-5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sx-brand',
        checked ? 'border-sx-brand' : 'border-transparent hover:border-sx-ink/15',
      )}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex flex-col gap-1">
        <span className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">{title}</span>
        <span className="text-sm leading-relaxed text-sx-ink/60">{body}</span>
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2',
          checked ? 'border-sx-brand' : 'border-sx-ink/25',
        )}
      >
        {checked && <span className="size-2.5 rounded-full bg-sx-brand" />}
      </span>
    </label>
  )
}

export function StartOnboarding() {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const onboard = useGetStarted()

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

  const steps = getStartedOnboarding.steps
  const stepCopy = steps[onboard.step]

  return (
    <PageSection id="start-onboard" tone="white" labelledBy="start-onboard-heading" className="scroll-mt-20">
      <SectionHeading
        id="start-onboard-heading"
        eyebrow={getStartedOnboarding.eyebrow}
        title={getStartedOnboarding.heading}
        highlight="short demonstration"
        body={getStartedOnboarding.body}
      />

      <div className="mt-10 rounded-[24px] bg-sx-paper p-4 sm:mt-12 sm:p-8 lg:p-10">
        {onboard.completed ? (
          <div ref={panelRef} role="status" className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <Eyebrow>Illustrative sample</Eyebrow>
              <h3 className="font-heading text-3xl font-bold tracking-[-0.025em] text-sx-ink sm:text-4xl">
                {getStartedOnboarding.confirmHeading}
              </h3>
              <p className="text-base text-sx-ink/65">{getStartedOnboarding.confirmBody}</p>
            </div>
            {onboard.amount ? <ListingSummary listing={onboard.listing} amount={onboard.amount} /> : null}
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={onboard.back} className={cn(BUTTON, 'border border-sx-ink/20 text-sx-ink hover:bg-sx-ink/5')}>
                <ArrowLeft size={16} aria-hidden="true" />
                Back to review
              </button>
              <PillLink href="/signup">Create demo account</PillLink>
              <PillLink href="/properties" variant="outline">
                Explore properties
              </PillLink>
              <PillLink href="/funds" variant="outline">
                Explore funds
              </PillLink>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <ol className="grid grid-cols-3 gap-2 sm:gap-3" aria-label="Sample onboarding progress">
              {steps.map((item, index) => {
                const done = index < onboard.step
                const active = index === onboard.step
                return (
                  <li key={item.id} aria-current={active ? 'step' : undefined} className="flex flex-col gap-2">
                    <span
                      aria-hidden="true"
                      className={cn('h-1.5 rounded-full', done || active ? 'bg-sx-brand' : 'bg-sx-ink/10')}
                    />
                    <span className={cn('text-xs font-semibold sm:text-sm', active ? 'text-sx-ink' : 'text-sx-ink/45')}>
                      {item.number}
                      <span className="hidden sm:inline"> · {item.title}</span>
                      {done && <span className="sr-only"> (completed)</span>}
                    </span>
                  </li>
                )
              })}
            </ol>

            <div ref={panelRef} key={onboard.step} className="flex flex-col gap-5">
              <h3 className="flex items-center gap-3 font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink sm:text-3xl">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sx-ink text-sm text-sx-mint">
                  {stepCopy?.number}
                </span>
                {stepCopy?.title}
              </h3>

              {onboard.step === 0 ? (
                <fieldset>
                  <legend className="sr-only">Choose what interests you</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {getStartedOnboarding.interests.map((item) => (
                      <Choice
                        key={item.id}
                        name="start-interest"
                        checked={onboard.interest === item.id}
                        onChange={() => onboard.chooseInterest(item.id)}
                        title={item.title}
                        body={item.body}
                      />
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {onboard.step === 1 ? (
                <fieldset>
                  <legend className="sr-only">Choose a sample amount</legend>
                  <p className="mb-3 text-sm text-sx-ink/55">Sample amounts only. These are not live tickets.</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {sampleOnboardingAmounts.map((value) => (
                      <Choice
                        key={value}
                        name="start-amount"
                        checked={onboard.amount === value}
                        onChange={() => onboard.chooseAmount(value)}
                        title={formatSampleAmount(value)}
                        body="Sample amount"
                      />
                    ))}
                  </div>
                </fieldset>
              ) : null}

              {onboard.step === 2 && onboard.amount ? <ListingSummary listing={onboard.listing} amount={onboard.amount} /> : null}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onboard.back}
                disabled={onboard.step === 0}
                className={cn(BUTTON, 'border border-sx-ink/20 text-sx-ink enabled:hover:bg-sx-ink/5')}
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back
              </button>
              <button
                type="button"
                onClick={onboard.next}
                disabled={!onboard.canAdvance}
                className={cn(BUTTON, 'bg-sx-ink text-white enabled:hover:bg-sx-forest')}
              >
                {onboard.step === 2 ? 'Confirm sample journey' : 'Next'}
                {onboard.step === 2 ? null : <ArrowRight size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </PageSection>
  )
}
