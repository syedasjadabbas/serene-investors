import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
  /** Heading level of the fund name inside the card. */
  headingLevel?: 'h3' | 'h4'
}

/** White rounded fund card: photo, name, three sample figures and a "View fund" arrow. */
export function FundCard({ fund, headingLevel: Heading = 'h3' }: Props) {
  const figures = [
    { label: 'Sample yield', value: formatPercent(fund.sampleReturnPct) },
    { label: 'Properties', value: String(fund.propertyCount) },
    { label: 'Sample min.', value: formatSampleAmount(sampleFundMinimum) },
  ]

  return (
    <article id={fund.id} data-fund-id={fund.id} className="h-full scroll-mt-28">
      <Link
        href={`/funds/${fund.id}`}
        aria-label={`${fund.name}, ${fund.market}, ${fund.propertyCount} sample properties. View fund.`}
        className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white text-sx-ink transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(14,16,15,0.35)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-sx-sand">
          <img
            src={withBase(fund.image)}
            alt={fund.imageAlt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">
            <MapPin size={12} aria-hidden="true" className="shrink-0 text-sx-brand" />
            <span className="truncate">{fund.market}</span>
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">
            Sample fund
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
          <div>
            <p className="text-sm text-sx-ink/55">
              {formatFundType(fund.type)} · {fund.portfolioLabel}
            </p>
            <Heading className="mt-1 font-heading text-2xl font-bold tracking-[-0.02em]">{fund.name}</Heading>
          </div>

          <dl className="grid grid-cols-3 gap-2 rounded-[14px] bg-sx-paper p-3">
            {figures.map((figure) => (
              <div key={figure.label} className="flex flex-col gap-1">
                <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-sx-ink/50">{figure.label}</dt>
                <dd className="font-heading text-base font-bold tabular-nums sm:text-lg">{figure.value}</dd>
              </div>
            ))}
          </dl>

          <span className="mt-auto flex items-center justify-between text-sm font-semibold">
            View fund
            <ArrowCircle tone="dark" />
          </span>
        </div>
      </Link>
    </article>
  )
}
