import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { formatSampleAmount } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyClosingCta({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="property-close" aria-labelledby="closing-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="closing-heading"
          className="max-w-[10ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          Explore the opportunity.
        </h2>
        <p data-reveal-heading className="mt-5 text-xl font-medium tracking-tight">
          {property.name}
        </p>
        <p data-reveal-heading className="mt-2 text-sm text-muted">
          Sample minimum {formatSampleAmount(property.sampleMinInvestment)}
        </p>
        <div data-reveal-heading className="property-close__actions">
          <ButtonLink
            to={`/get-started?intent=property&id=${property.id}`}
            className="min-h-11 w-full gap-1.5 sm:w-auto"
          >
            Invest in this property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/properties" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Back to properties
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
