import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { catalogueFeatured, propertiesFeaturedBand } from '@/data'
import { formatPropertyMeta, formatSampleYield, formatStatus } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FeaturedPropertyBand() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-featured-property-image]' })
  const location = formatPropertyMeta(catalogueFeatured.neighborhood, catalogueFeatured.city)

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip bg-bg-warm px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="featured-property-heading"
    >
      <div className="mx-auto grid max-w-[var(--container-wide)] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="m-0 overflow-hidden rounded-[var(--radius-lg)]">
          <img
            data-featured-property-image
            src={catalogueFeatured.image}
            alt={catalogueFeatured.imageAlt}
            width={1400}
            height={1750}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-[50%_28%] md:aspect-[5/4] lg:aspect-[4/5]"
          />
        </figure>

        <div>
          <p data-reveal-heading className="brand-label text-muted">
            {propertiesFeaturedBand.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="featured-property-heading"
            className="mt-3 max-w-[14ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-balance"
          >
            {propertiesFeaturedBand.heading}
          </h2>

          <p data-reveal-item className="mt-8 text-xl font-medium tracking-tight">
            {catalogueFeatured.name}
          </p>
          <p data-reveal-item className="mt-1 text-sm text-muted">
            {location}
          </p>

          <dl data-reveal-item className="mt-8 max-w-sm space-y-3 border-t border-line pt-6 text-sm">
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-muted">Sample yield</dt>
              <dd className="font-medium tabular-nums">
                {formatSampleYield(catalogueFeatured.sampleYieldPct)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-muted">Minimum investment</dt>
              <dd className="font-medium">{catalogueFeatured.samplePriceLabel}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <dt className="text-muted">Sample status</dt>
              <dd className="font-medium">{formatStatus(catalogueFeatured.status)}</dd>
            </div>
          </dl>

          <div data-reveal-item className="mt-8">
            <ButtonLink
              to={`/properties/${catalogueFeatured.id}`}
              variant="ghost"
              className="gap-1.5 px-0"
            >
              {propertiesFeaturedBand.cta}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
