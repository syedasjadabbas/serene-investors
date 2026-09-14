import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { howPageCta } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function HowCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="how-cta" aria-labelledby="how-cta-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Next step
        </p>
        <h2
          data-reveal-heading
          id="how-cta-heading"
          className="mt-6 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {howPageCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {howPageCta.body}
        </p>
        <div data-reveal-heading className="how-cta__actions">
          <ButtonLink to="/properties" className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore properties
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore funds
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
