import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { catalogueFeaturedFund, fundsCta } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FundsCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="funds-cta" aria-labelledby="funds-cta-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Next step
        </p>
        <h2
          data-reveal-heading
          id="funds-cta-heading"
          className="mt-6 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {fundsCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {fundsCta.body}
        </p>
        <div data-reveal-heading className="funds-cta__actions">
          <ButtonLink to={`/funds/${catalogueFeaturedFund.id}`} className="min-h-11 w-full gap-1.5 sm:w-auto">
            View a fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
            How it works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
