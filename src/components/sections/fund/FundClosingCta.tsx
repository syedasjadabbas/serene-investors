import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Fund } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { sampleFundMinimum } from '@/data'
import { formatSampleAmount } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundClosingCta({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="fund-close" aria-labelledby="fund-closing-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="fund-closing-heading"
          className="max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          Explore the allocation.
        </h2>
        <p data-reveal-heading className="mt-5 text-xl font-medium tracking-tight">
          {fund.name}
        </p>
        <p data-reveal-heading className="mt-2 text-sm text-muted">
          Sample minimum {formatSampleAmount(sampleFundMinimum)}
        </p>
        <div data-reveal-heading className="fund-close__actions">
          <ButtonLink
            to={`/get-started?intent=fund&id=${fund.id}`}
            className="min-h-11 w-full gap-1.5 sm:w-auto"
          >
            Continue with this fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Back to funds
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
