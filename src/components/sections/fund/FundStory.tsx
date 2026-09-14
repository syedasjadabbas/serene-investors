import { useRef } from 'react'
import type { Fund } from '@/types'
import { formatFundType } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundStory({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-fund-story-image]' })
  useDepthParallax(rootRef, [{ selector: '[data-fund-story-image]', yPercent: 5 }])

  return (
    <section ref={rootRef} className="fund-story" aria-labelledby="fund-story-heading">
      <div className="fund-story__layout mx-auto max-w-[var(--container-wide)]">
        <figure className="fund-story__media m-0">
          <img
            data-fund-story-image
            src={fund.image}
            alt={fund.imageAlt}
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div>
          <h2
            data-reveal-heading
            id="fund-story-heading"
            className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
          >
            {fund.name}
          </h2>
          <p data-reveal-item className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-pretty">
            {fund.name} is presented as a {fund.portfolioLabel.toLowerCase()} across {fund.market.toLowerCase()}
            . The sample collection holds {fund.propertyCount} sample properties under one allocation.
          </p>
          <p data-reveal-item className="mt-6 text-sm text-muted">
            {formatFundType(fund.type)}
            <span className="text-subtle"> / </span>
            {fund.market}
          </p>
        </div>
      </div>
    </section>
  )
}
