import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { formatPercent, formatPropertyMeta, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { usePropertyHeroReveal } from '@/hooks/usePropertyHeroReveal'

type Props = {
  property: Property
}

export function PropertyHero({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  usePropertyHeroReveal(rootRef)
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-property-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.6 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-property-hero-image]', yPercent: 6 }])

  const location = formatPropertyMeta(property.neighborhood, property.city)

  return (
    <section ref={rootRef} id="hero" className="property-hero" aria-labelledby="property-name">
      <figure className="property-hero__media m-0" data-depth-stage>
        <img
          data-property-hero-image
          src={property.image}
          alt={property.imageAlt}
          width={1600}
          height={2000}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      <div className="property-hero__copy">
        <p data-property-hero-copy className="property-hero__mark">
          Sample listing
        </p>
        <p data-property-hero-copy className="mt-5 text-sm text-muted">
          {property.type}
        </p>
        <h1
          data-property-hero-copy
          id="property-name"
          className="mt-2 max-w-[12ch] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
        >
          {property.name}
        </h1>
        <p data-property-hero-copy className="mt-3 text-[1.05rem] text-muted">
          {location}
        </p>

        <dl data-property-hero-copy className="property-hero__figures">
          <div>
            <dt>Sample yield</dt>
            <dd className="tabular-nums">{formatPercent(property.sampleYieldPct)}</dd>
          </div>
          <div>
            <dt>Sample minimum</dt>
            <dd className="tabular-nums">{formatSampleAmount(property.sampleMinInvestment)}</dd>
          </div>
        </dl>

        <div data-property-hero-copy className="property-hero__actions">
          <ButtonLink
            to={`/get-started?intent=property&id=${property.id}`}
            className="min-h-11 w-full gap-1.5 sm:w-auto"
          >
            Invest in this property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/properties" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore properties
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
