import Link from 'next/link'
import { Building2, TrendingUp, Wallet } from 'lucide-react'
import { sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
  /** Heading level of the fund name inside the card. */
  headingLevel?: 'h3' | 'h4'
}

/**
 * Big white listing card: photo on top with dark status pills, a grey "MARKET ✦ TYPE" line, the
 * fund name and label/value rows with small icons. The whole card links to the fund.
 */
export function FundCard({ fund, headingLevel: Heading = 'h3' }: Props) {
  const rows = [
    { icon: TrendingUp, label: 'Sample yield', value: formatPercent(fund.sampleReturnPct) },
    { icon: Building2, label: 'Properties', value: String(fund.propertyCount) },
    { icon: Wallet, label: 'Sample minimum', value: formatSampleAmount(sampleFundMinimum) },
  ]

  return (
    <article id={fund.id} className="h-full scroll-mt-28">
      <Link
        href={`/funds/${fund.id}`}
        className="group flex h-full flex-col rounded-[20px] bg-white p-2.5 text-sx-ink transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(14,16,15,0.35)] sm:p-3"
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-sx-sand">
          <img
            src={withBase(fund.image)}
            alt={fund.imageAlt}
            width={1200}
            height={825}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 flex flex-wrap justify-end gap-1.5">
            <span className="rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-sx-mint">Sample fund</span>
            <span className="rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-sx-sand">{fund.propertyCount} buildings</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4 sm:pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/45">
            {fund.market} <span aria-hidden="true">✦</span>
            <span className="sr-only">,</span> {formatFundType(fund.type)} fund
          </p>
          <Heading className="mt-2 font-heading text-[1.625rem] font-bold leading-tight tracking-[-0.02em] group-hover:text-sx-forest">
            {fund.name}
          </Heading>

          <dl className="mt-5 flex flex-col">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4 border-t border-sx-ink/10 py-3">
                <dt className="flex items-center gap-2.5 text-sm text-sx-ink/60">
                  <Icon size={16} aria-hidden="true" className="text-sx-brand" />
                  {label}
                </dt>
                <dd className="font-semibold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Link>
    </article>
  )
}
