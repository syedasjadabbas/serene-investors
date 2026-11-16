import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Eyebrow } from '@/global/components/page/PageSection'
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

const BUTTON =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sx-ink/20 px-6 text-sm font-semibold text-sx-ink transition-colors enabled:hover:bg-sx-ink/5 disabled:cursor-not-allowed disabled:opacity-40 sm:text-base'

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
    <article className="grid gap-5 rounded-[20px] bg-sx-paper p-3 text-sx-ink sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] sm:p-4">
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
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/60">{item.kicker}</p>
          <h4 className="mt-1 font-heading text-[1.625rem] font-bold leading-tight tracking-[-0.02em]">{item.name}</h4>
          <p className="mt-1 text-sm text-sx-ink/60">{item.meta}</p>
        </div>
        <dl className="grid gap-2 sm:grid-cols-3">
          {figures.map((figure) => (
            <div key={figure.label} className="flex items-baseline justify-between gap-3 rounded-[12px] bg-white px-4 py-3 sm:flex-col sm:items-start sm:gap-1">
              <dt className="text-xs text-sx-ink/60">{figure.label}</dt>
              <dd className="font-heading text-lg font-bold tabular-nums">{figure.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href={item.href} className="group inline-flex items-center gap-3 rounded-full text-sm font-semibold">
            {item.linkLabel}
            <ArrowCircle tone="dark" size="sm" />
          </Link>
          <p className="text-xs text-sx-ink/60">Illustrative sample only. This does not place an investment.</p>
        </div>
      </div>
    </article>
  )
}

/** Option tile on paper; the selected tile turns forest. The radio stays in the DOM for keyboard use. */
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
        'flex cursor-pointer items-start justify-between gap-4 rounded-[16px] p-5 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sx-brand sm:p-6',
        checked ? 'bg-sx-forest text-white' : 'bg-sx-paper text-sx-ink hover:bg-sx-sand',
      )}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex flex-col gap-1">
        <span className="font-heading text-xl font-bold tracking-[-0.015em]">{title}</span>
        <span className={cn('text-sm leading-relaxed', checked ? 'text-white/70' : 'text-sx-ink/60')}>{body}</span>
      </span>
      <span
        aria-hidden="true"
        className={cn('mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2', checked ? 'border-sx-mint' : 'border-sx-ink/25')}
      >
        {checked && <span className="size-2.5 rounded-full bg-sx-mint" />}
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
    const tween = gsap.fromTo(panel, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out', overwrite: 'auto' })
    return () => {
      tween.kill()
      gsap.set(panel, { clearProps: 'opacity,y' })
    }
  }, [onboard.completed, onboard.step, reduced])

  const steps = getStartedOnboarding.steps
  const stepCopy = steps[onboard.step]

  return (
    <section id="start-onboard" aria-labelledby="start-onboard-heading" className="scroll-mt-20 px-4 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 rounded-[30px] bg-white p-5 text-sx-ink sm:gap-10 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 id="start-onboard-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
              {getStartedOnboarding.heading}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-sx-ink/65">{getStartedOnboarding.body}</p>
          </div>

          <ol className="grid w-full grid-cols-3 gap-2 sm:gap-3 lg:max-w-[460px]" aria-label="Sample onboarding progress">
            {steps.map((item, index) => {
              const done = onboard.completed || index < onboard.step
              const active = !onboard.completed && index === onboard.step
              return (
                <li key={item.id} aria-current={active ? 'step' : undefined} className="flex flex-col gap-2">
                  <span aria-hidden="true" className={cn('h-1.5 rounded-full', done || active ? 'bg-sx-brand' : 'bg-sx-ink/10')} />
                  <span className={cn('text-xs font-semibold sm:text-sm', active ? 'text-sx-ink' : 'text-sx-ink/60')}>
                    Step {item.number}
                    <span className="sr-only">: {item.title}</span>
                    {done && <span className="sr-only"> (completed)</span>}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        {onboard.completed ? (
          <div ref={panelRef} role="status" className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <Eyebrow>Illustrative sample</Eyebrow>
              <h3 className="font-heading text-3xl font-bold tracking-[-0.025em] sm:text-4xl">{getStartedOnboarding.confirmHeading}</h3>
              <p className="text-base text-sx-ink/65">{getStartedOnboarding.confirmBody}</p>
            </div>
            {onboard.amount ? <ListingSummary listing={onboard.listing} amount={onboard.amount} /> : null}
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={onboard.back} className={BUTTON}>
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
            <div ref={panelRef} key={onboard.step} className="flex flex-col gap-5">
              <h3 className="flex items-center gap-3 font-heading text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
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
                  <legend className="mb-3 text-sm text-sx-ink/60">Choose a sample amount. These are not live tickets.</legend>
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
              <button type="button" onClick={onboard.back} disabled={onboard.step === 0} className={BUTTON}>
                <ArrowLeft size={16} aria-hidden="true" />
                Back
              </button>
              <button
                type="button"
                onClick={onboard.next}
                disabled={!onboard.canAdvance}
                className="inline-flex min-h-11 items-center gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors enabled:hover:bg-sx-forest disabled:cursor-not-allowed disabled:opacity-40 sm:text-base"
              >
                {onboard.step === 2 ? 'Confirm sample journey' : 'Next'}
                <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
