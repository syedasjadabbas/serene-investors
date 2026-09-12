import { useRef } from 'react'
import type { Property } from '@/types'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyRecord({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)
  const record = property.documentation
  const rows = [
    { label: record.recordLabel, value: record.recordValue },
    { label: record.ownershipLabel, value: record.ownershipValue },
    { label: record.documentsLabel, value: record.documentsValue },
    { label: record.statusLabel, value: record.statusValue },
  ]

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="record-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p data-reveal-heading className="brand-label text-muted">
            Property record
          </p>
          <h2
            data-reveal-heading
            id="record-heading"
            className="mt-3 max-w-[14ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
          >
            Information presented clearly.
          </h2>
        </div>

        <div className="mt-10 max-w-xl lg:mt-2">
          <dl>
            {rows.map((row) => (
              <div
                key={row.label}
                data-reveal-item
                className="flex items-baseline justify-between gap-6 border-t border-line py-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-sm text-muted">{row.label}</dt>
                <dd className="text-right text-sm font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p data-reveal-item className="mt-6 text-sm leading-relaxed text-muted">
            {record.note}
          </p>
        </div>
      </div>
    </section>
  )
}
