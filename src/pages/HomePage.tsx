import { AppDownloadSection } from '@/components/sections/home/AppDownloadSection'
import { BackersSection } from '@/components/sections/home/BackersSection'
import { FeaturedHoldingsSection } from '@/components/sections/home/FeaturedHoldingsSection'
import { FundStageSection } from '@/components/sections/home/FundStageSection'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { HowItWorksSection } from '@/components/sections/home/HowItWorksSection'
import { PlatformStatsSection } from '@/components/sections/home/PlatformStatsSection'
import { PressSection } from '@/components/sections/home/PressSection'
import { PropertyStageSection } from '@/components/sections/home/PropertyStageSection'
import { RewardsSection } from '@/components/sections/home/RewardsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { TrustSection } from '@/components/sections/home/TrustSection'
import { ValueStorySection } from '@/components/sections/home/ValueStorySection'
import {
  featuredProperties,
  offeringSplits,
  platformStats,
  pressLogos,
  rewards,
  site,
  testimonials,
  trustItems,
} from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)
  const propertyOffering = offeringSplits.find((item) => item.kind === 'property')
  const fundOffering = offeringSplits.find((item) => item.kind === 'fund')

  return (
    <>
      <HeroSection />
      <PressSection logos={pressLogos} />
      <HowItWorksSection />
      <FeaturedHoldingsSection properties={featuredProperties} />
      <PlatformStatsSection stats={platformStats} />
      {propertyOffering ? <PropertyStageSection offering={propertyOffering} /> : null}
      {fundOffering ? <FundStageSection offering={fundOffering} /> : null}
      <RewardsSection items={rewards} />
      <ValueStorySection />
      <TrustSection items={trustItems} />
      <BackersSection />
      <TestimonialsSection items={testimonials} />
      <AppDownloadSection />
    </>
  )
}
