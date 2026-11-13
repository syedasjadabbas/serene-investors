import Link from 'next/link'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { fundsBreakdownIntro, sampleFundMinimum } from '@/global/data/funds'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  items: Fund[]
}

/** Side-by-side reading of each fund's published sample figures. */
export function FundBreakdown({ items }: Props) {
  return (
    <PageSection tone="white" labelledBy="funds-breakdown-heading">
      <SectionHeading
        id="funds-breakdown-heading"
        eyebrow="Compare"
        title={fundsBreakdownIntro.heading}
        highlight="each sample fund"
        body={fundsBreakdownIntro.body}
      />

      <ul className="mt-10 flex flex-col gap-3 sm:mt-12">
        {items.map((fund) => {
          const figures = [
            { label: 'Sample properties', value: String(fund.propertyCount) },
            { label: 'Sample yield', value: formatPercent(fund.sampleReturnPct) },
            { label: 'Sample minimum', value: formatSampleAmount(sampleFundMinimum) },
          ]
          return (
            <li key={fund.id}>
              <article
                aria-labelledby={`breakdown-${fund.id}`}
                className="grid gap-5 rounded-[20px] bg-sx-paper p-5 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)_auto] lg:items-center lg:gap-8"
              >
                <div>
                  <h3 id={`breakdown-${fund.id}`} className="font-heading text-xl font-bold tracking-[-0.015em] sm:text-2xl">
                    {fund.name}
                  </h3>
                  <p className="mt-1 text-sm text-sx-ink/60">
                    {formatFundType(fund.type)} · {fund.market} · {fund.portfolioLabel}
                  </p>
                </div>
                <dl className="grid grid-cols-3 gap-3">
                  {figures.map((figure) => (
                    <div key={figure.label}>
                      <dt className="text-xs text-sx-ink/55">{figure.label}</dt>
                      <dd className="mt-1 font-heading text-lg font-bold tabular-nums sm:text-xl">{figure.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={`/funds/${fund.id}`}
                  className="group inline-flex w-fit items-center gap-3 rounded-full text-sm font-semibold text-sx-ink"
                >
                  View fund
                  <span className="sr-only">: {fund.name}</span>
                  <ArrowCircle tone="dark" size="sm" />
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </PageSection>
  )
}
