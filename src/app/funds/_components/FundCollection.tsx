'use client'

import { useRef } from 'react'
import { FundCard } from './FundCard'
import { fundsNotice } from '@/global/data/funds'
import type { Fund } from '@/global/types/fund'
import { useDepthParallax } from '@/global/hooks/useDepthParallax'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

type Props = {
  items: Fund[]
}

export function FundCollection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-fund-card]', depth: true })
  useDepthParallax(rootRef, [{ selector: '[data-fund-card-image]', yPercent: 4 }])

  return (
    <section
      ref={rootRef}
      id="fund-collection"
      className="py-10 md:py-16 lg:py-20 px-5 md:px-8 lg:px-10"
      aria-labelledby="fund-collection-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2 id="fund-collection-heading" className="sr-only">
          Sample fund collection
        </h2>

        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-8">
          {items.map((fund) => (
            <FundCard key={fund.id} fund={fund} />
          ))}
        </div>

        <aside className="max-w-[48ch] mt-14 pt-6 border-t border-line text-sm leading-relaxed text-muted">
          <p>{fundsNotice.body}</p>
        </aside>
      </div>
    </section>
  )
}

