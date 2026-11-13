import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { funds } from '@/global/data/funds'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { FundClosingCta } from './FundClosingCta'
import { FundHero } from './FundHero'
import { FundHoldings } from './FundHoldings'
import { FundNotFound } from './FundNotFound'
import { FundRelated } from './FundRelated'
import { FundSnapshot } from './FundSnapshot'
import { FundStory } from './FundStory'

export function FundDetailPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const fund = funds.find((item) => item.id === slug)

  usePageMeta(
    fund ? `Serene Investors | ${fund.name}` : 'Serene Investors | Fund not found',
    fund
      ? `Sample fund listing for ${fund.name} in ${fund.market}. All figures are fictional demonstration data.`
      : 'This sample fund does not exist in the current collection.',
  )

  // Layout height changes between funds; let any scroll-driven effects elsewhere re-measure.
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
    <div key={fund.id}>
      <FundHero fund={fund} />
      <FundSnapshot fund={fund} />
      <FundStory fund={fund} />
      <FundHoldings fund={fund} />
      <FundRelated fund={fund} />
      <FundClosingCta fund={fund} />
    </div>
  )
}
