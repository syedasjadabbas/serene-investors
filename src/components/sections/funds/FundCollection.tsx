import { useRef } from 'react'
import { FundCard } from '@/components/cards/FundCard'
import { fundsNotice } from '@/data'
import type { Fund } from '@/types'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useSectionReveal } from '@/hooks/useSectionReveal'

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
      className="fund-collection"
      aria-labelledby="fund-collection-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2 id="fund-collection-heading" className="sr-only">
          Sample fund collection
        </h2>

        <div className="fund-collection__grid">
          {items.map((fund) => (
            <FundCard key={fund.id} fund={fund} />
          ))}
        </div>

        <aside className="fund-collection__notice">
          <p>{fundsNotice.body}</p>
        </aside>
      </div>
    </section>
  )
}
