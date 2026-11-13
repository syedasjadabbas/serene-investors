'use client'

import { PageSection } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { InvestmentYieldCalculator } from '@/global/components/sections/InvestmentYieldCalculator'
import { funds, sampleFundMinimum } from '@/global/data/funds'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { formatSampleAmount } from '@/global/lib/format'
import { FeaturedFundBand } from './FeaturedFundBand'
import { FundBreakdown } from './FundBreakdown'
import { FundCollection } from './FundCollection'
import { FundsCta } from './FundsCta'
import { FundsHero } from './FundsHero'
import { HowFundsWork } from './HowFundsWork'

const STATS = [
  { value: String(funds.length), label: 'Sample funds' },
  { value: String(funds.reduce((total, fund) => total + fund.propertyCount, 0)), label: 'Sample properties across the collection' },
  { value: formatSampleAmount(sampleFundMinimum), label: 'Sample minimum per fund' },
]

export function FundsPage() {
  usePageMeta(
    'Serene Investors | Funds',
    'Browse a fictional Serene Investors fund catalogue. All yields, minima, and property counts are sample data for this demonstration platform.',
  )

  return (
    <>
      <FundsHero />
      <PageSection label="The collection at a glance" pad="none">
        <StatCards items={STATS} caption="Illustrative sample figures for this demonstration." />
      </PageSection>
      <FundCollection items={funds} />
      <FeaturedFundBand />
      <FundBreakdown items={funds} />
      <HowFundsWork />
      <InvestmentYieldCalculator title="Fund Yield & Growth Forecaster" eyebrow="PORTFOLIO MODELING" />
      <FundsCta />
    </>
  )
}
