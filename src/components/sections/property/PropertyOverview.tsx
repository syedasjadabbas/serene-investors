import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPropertyMeta, formatSampleAmount, formatSampleYield, formatStatus } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyOverview({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)

  const specs = [
    { label: 'Property type', value: property.type },
    { label: 'Location', value: location },
    { label: 'Sample property value', value: property.sampleValueLabel },
    { label: 'Sample minimum', value: formatSampleAmount(property.sampleMinInvestment) },
    { label: 'Sample yield', value: formatSampleYield(property.sampleYieldPct) },
    { label: 'Sample status', value: formatStatus(property.status) },
    { label: 'Units / residences', value: property.unitsLabel },
    { label: 'Completion', value: property.completion },
    { label: 'Management', value: property.management },
  ]

  return (
    <section
      ref={rootRef}
      id="property-overview"
      className="scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)] overflow-x-clip px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="overview-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="brand-label text-muted">
          Property overview
        </p>
        <h2
          data-reveal-heading
          id="overview-heading"
          className="mt-3 max-w-[14ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
        >
          Designed around the way people live.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-20">
          <div className="max-w-[46ch] space-y-5">
            {property.overview.map((paragraph) => (
              <p
                key={paragraph}
                data-reveal-item
                className="text-[0.95rem] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl>
            {specs.map((spec) => (
              <div
                key={spec.label}
                data-reveal-item
                className="flex items-baseline justify-between gap-6 border-t border-line py-3.5 first:border-t-0 first:pt-0"
              >
                <dt className="text-sm text-muted">{spec.label}</dt>
                <dd className="text-right text-sm font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
