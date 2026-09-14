import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPercent, formatPropertyMeta, formatSampleAmount } from '@/lib/format'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyFeatures({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { depth: true })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-why-card]', x: 8, y: 0, rotateX: 1.8, rotateY: 2.2 }],
  })

  const cards = [
    { id: 'type', label: 'Property type', value: property.type, body: property.description },
    {
      id: 'place',
      label: 'Location',
      value: formatPropertyMeta(property.neighborhood, property.city),
      body: property.occupancyLabel,
    },
    {
      id: 'minimum',
      label: 'Sample minimum',
      value: formatSampleAmount(property.sampleMinInvestment),
      body: property.samplePriceLabel,
    },
    {
      id: 'yield',
      label: 'Sample yield',
      value: formatPercent(property.sampleYieldPct),
      body: `Sample net ${formatPercent(property.sampleNetYieldPct)}`,
    },
  ]

  return (
    <section ref={rootRef} className="property-why" aria-labelledby="features-heading" data-depth-stage>
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="features-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Why this listing.
        </h2>

        <div className="property-why__grid">
          {cards.map((card, index) => (
            <article
              key={card.id}
              data-reveal-item
              data-why-card
              className={index === 0 ? 'property-why__card property-why__card--lead' : 'property-why__card'}
            >
              <p className="text-sm text-muted">{card.label}</p>
              <h3 className="mt-4 text-[1.65rem] font-semibold tracking-[-0.03em]">{card.value}</h3>
              <p className="mt-3 max-w-[28ch] text-sm leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
