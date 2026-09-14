import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FundClosingCta } from '@/components/sections/fund/FundClosingCta'
import { FundHero } from '@/components/sections/fund/FundHero'
import { FundHoldings } from '@/components/sections/fund/FundHoldings'
import { FundNotFound } from '@/components/sections/fund/FundNotFound'
import { FundRelated } from '@/components/sections/fund/FundRelated'
import { FundSnapshot } from '@/components/sections/fund/FundSnapshot'
import { FundStory } from '@/components/sections/fund/FundStory'
import { funds } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ScrollTrigger } from '@/lib/gsap'

export function FundDetailPage() {
  const { slug } = useParams()
  const fund = funds.find((item) => item.id === slug)

  usePageMeta(
    fund ? `SERENE INVESTORS | ${fund.name}` : 'SERENE INVESTORS | Fund not found',
    fund
      ? `Sample fund listing for ${fund.name} in ${fund.market}. All figures are fictional demonstration data.`
      : 'This sample fund does not exist in the current collection.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!fund) {
    return <FundNotFound />
  }

  return (
    <div key={fund.id} className="fund-detail">
      <FundHero fund={fund} />
      <FundSnapshot fund={fund} />
      <FundStory fund={fund} />
      <FundHoldings fund={fund} />
      <FundClosingCta fund={fund} />
      <FundRelated fund={fund} />
    </div>
  )
}
