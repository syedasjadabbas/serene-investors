import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Fund } from '@/types'
import { fundSampleStatus, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'

type Props = {
  fund: Fund
}

export function FundCard({ fund }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article
      ref={cardRef}
      id={fund.id}
      data-fund-id={fund.id}
      data-fund-card
      className="fund-card scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)]"
    >
      <Link
        to={`/funds/${fund.id}`}
        aria-label={`${fund.name}, ${fund.market}, ${fund.propertyCount} sample properties, ${fundSampleStatus}. View fund.`}
        className="fund-card__link"
      >
        <div className="fund-card__media">
          <div className="fund-card__image">
            <img
              data-fund-card-image
              src={fund.image}
              alt={fund.imageAlt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="fund-card__badge">
            {formatFundType(fund.type)}
            <span> / {fundSampleStatus}</span>
          </p>
        </div>

        <div className="fund-card__body">
          <h3>{fund.name}</h3>
          <p className="fund-card__place">
            {fund.market}
            <span> · {fund.portfolioLabel}</span>
          </p>
          <p className="fund-card__figures">
            <span>{fund.propertyCount} sample properties</span>
            <span>Sample yield {formatPercent(fund.sampleReturnPct)}</span>
            <span>Sample minimum {formatSampleAmount(sampleFundMinimum)}</span>
          </p>
          <p className="fund-card__action">
            View fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </p>
        </div>
      </Link>
    </article>
  )
}
