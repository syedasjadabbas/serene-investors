import { useRef } from 'react'
import type { Property } from '@/types'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyFeatures({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="features-heading"
          className="text-[clamp(1.85rem,3vw,2.75rem)] font-semibold tracking-[-0.03em]"
        >
          What stands out
        </h2>
        <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-3">
          {property.features.map((feature) => (
            <li
              key={feature.id}
              data-reveal-item
              className="border-t border-line py-6 md:px-6 md:odd:pl-0 lg:px-6 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <p className="text-lg font-medium tracking-tight">{feature.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
