import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPercent, formatSampleAmount, formatStatus } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyKeyNumbers({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const items = [
    { id: 'yield', label: 'Sample yield', value: formatPercent(property.sampleYieldPct) },
    {
      id: 'minimum',
      label: 'Sample minimum',
      value: formatSampleAmount(property.sampleMinInvestment),
    },
    { id: 'value', label: 'Sample property value', value: property.sampleValueLabel },
    { id: 'status', label: 'Status', value: formatStatus(property.status) },
  ]

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 pb-12 md:px-8 lg:px-10"
      aria-label="Sample property figures"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              data-reveal-item
              className="border-t border-line py-6 first:border-t-0 sm:px-6 sm:first:border-t sm:odd:pl-0 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-[-0.03em] tabular-nums">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
