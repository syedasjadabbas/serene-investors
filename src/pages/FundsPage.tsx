import { FeaturedFundBand } from '@/components/sections/funds/FeaturedFundBand'
import { FundBreakdown } from '@/components/sections/funds/FundBreakdown'
import { FundCollection } from '@/components/sections/funds/FundCollection'
import { FundsCta } from '@/components/sections/funds/FundsCta'
import { FundsHero } from '@/components/sections/funds/FundsHero'
import { HowFundsWork } from '@/components/sections/funds/HowFundsWork'
import { funds } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

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
      <FundsCta />
    </>
  )
}
