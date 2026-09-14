import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { catalogueFeatured, propertiesFeaturedBand } from '@/data'
import { formatPercent, formatPropertyMeta, formatSampleAmount, formatStatus } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FeaturedPropertyBand() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-featured-property-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-featured-property-image]', x: 8, y: 6, rotateX: 1.4, rotateY: 1.8 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-featured-property-image]', yPercent: 7 }])
  const location = formatPropertyMeta(catalogueFeatured.neighborhood, catalogueFeatured.city)

  return (
    <section
      ref={rootRef}
      className="property-featured"
      aria-labelledby="featured-property-heading"
    >
      <div className="property-featured__layout mx-auto max-w-[var(--container-wide)]">
        <figure className="property-featured__media m-0" data-depth-stage>
          <Link
            to={`/properties/${catalogueFeatured.id}`}
            aria-label={`View sample listing for ${catalogueFeatured.name}`}
          >
            <img
              data-featured-property-image
              src={catalogueFeatured.image}
              alt={catalogueFeatured.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </figure>

        <div className="property-featured__copy">
          <p data-reveal-heading className="property-hero__mark">
            {propertiesFeaturedBand.eyebrow}
          </p>
          <p data-reveal-heading className="mt-5 text-sm text-muted">
            {catalogueFeatured.type}
            <span className="text-subtle"> / {formatStatus(catalogueFeatured.status)}</span>
          </p>
          <h2
            data-reveal-heading
            id="featured-property-heading"
            className="mt-3 max-w-[10ch] text-[clamp(2.3rem,4.4vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
          >
            {catalogueFeatured.name}
          </h2>
          <p data-reveal-item className="mt-4 text-[1.05rem] text-muted">
            {location}
          </p>
          <p data-reveal-item className="mt-6 max-w-[36ch] leading-relaxed text-pretty">
            {catalogueFeatured.description}
          </p>

          <dl data-reveal-item className="property-featured__figures">
            <div>
              <dt>Sample yield</dt>
              <dd className="tabular-nums">{formatPercent(catalogueFeatured.sampleYieldPct)}</dd>
            </div>
            <div>
              <dt>Sample minimum</dt>
              <dd className="tabular-nums">{formatSampleAmount(catalogueFeatured.sampleMinInvestment)}</dd>
            </div>
          </dl>

          <div data-reveal-item className="mt-8">
            <ButtonLink
              to={`/properties/${catalogueFeatured.id}`}
              className="min-h-11 gap-1.5"
            >
              View property
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
