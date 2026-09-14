import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { catalogueFeatured, propertiesCta } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertiesCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="properties-cta" aria-labelledby="properties-cta-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Next step
        </p>
        <h2
          data-reveal-heading
          id="properties-cta-heading"
          className="mt-6 max-w-[10ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {propertiesCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {propertiesCta.body}
        </p>
        <div data-reveal-heading className="properties-cta__actions">
          <ButtonLink to={`/properties/${catalogueFeatured.id}`} className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore a property
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
