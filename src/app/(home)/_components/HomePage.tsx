import { SereneHero } from './SereneHero'
import { PressSection } from './PressSection'
import { InteractiveJourney } from './InteractiveJourney'
import { DualProductBento } from './DualProductBento'
import { HowYouEarn } from './HowYouEarn'
import { RewardsTiers } from '@/global/components/sections/RewardsTiers'
import { SecurityRegulation } from '@/global/components/sections/SecurityRegulation'
import { pressLogos } from '../_lib/press'
import { site } from '@/global/data/site'
import { usePageMeta } from '@/global/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)

  return (
    <>
      {/* 1. Hero Architecture with Layered Realistic Mobile Mockups & Trust Pills */}
      <SereneHero />

      {/* 2. Media / Publication Trust Strip (TechCrunch, Forbes, TIME, CNN, Bloomberg, Arab News) */}
      <PressSection logos={pressLogos} />

      {/* 3. Interactive Journey: "Build a diversified real estate portfolio easily from your phone" */}
      <InteractiveJourney />

      {/* 4. Products Bento: 2M+ stats bar, Properties vs Funds showcase */}
      <DualProductBento />

      {/* 5. How You Earn: "So, how do I make money?" - 3 alternating phone showcase rows */}
      <HowYouEarn />

      {/* 6. Rewards Tiers: "The more you invest, the more you earn" - 4 smartphone app screens */}
      <RewardsTiers />

      {/* 7. Security & Regulation: "Safety never sleeps - Robustly regulated" + 13 institutional logos */}
      <SecurityRegulation />
    </>
  )
}
