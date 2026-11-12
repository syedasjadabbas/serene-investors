'use client'

import { FeaturedFundBand } from './FeaturedFundBand'
import { FundBreakdown } from './FundBreakdown'
import { FundCollection } from './FundCollection'
import { FundsCta } from './FundsCta'
import { FundsHero } from './FundsHero'
import { HowFundsWork } from './HowFundsWork'
import { InvestmentYieldCalculator } from '@/global/components/sections/InvestmentYieldCalculator'
import { funds } from '@/global/data/funds'
import { usePageMeta } from '@/global/hooks/usePageMeta'

export function FundsPage() {
  usePageMeta(
    'SERENE INVESTORS | Funds',
    'Browse a fictional SERENE INVESTORS fund catalogue. All yields, minima, and property counts are sample data for this demonstration platform.',
  )

  return (
    <>
      <FundsHero />
      <FundCollection items={funds} />
      <FeaturedFundBand />
      <FundBreakdown items={funds} />
      <HowFundsWork />
      <InvestmentYieldCalculator
        title="Fund Yield & Growth Forecaster"
        eyebrow="PORTFOLIO MODELING"
      />
      <FundsCta />
    </>
  )
}
