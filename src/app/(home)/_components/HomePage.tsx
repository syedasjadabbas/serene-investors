import { site } from '@/global/data/site'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { EcosystemCarousel } from './EcosystemCarousel'
import { HomeCanvas } from './HomeCanvas'
import { HomeFaq } from './HomeFaq'
import { HomeHero } from './HomeHero'
import { IntroSplit } from './IntroSplit'
import { MissionQuote } from './MissionQuote'
import { Newsletter } from './Newsletter'
import { ProductCards } from './ProductCards'
import { LocationsMarquee, StatsGrid } from './StatsGrid'
import { StoryCards } from './StoryCards'
import { Testimonials } from './Testimonials'

export function HomePage() {
  usePageMeta(site.name, site.disclaimer)

  return (
    <HomeCanvas
      dark={
        <>
          <HomeHero />
          <IntroSplit />
          <ProductCards />
          <EcosystemCarousel />
        </>
      }
      light={
        <>
          {/* The background fades from dark to paper as this section reaches mid-screen. */}
          <MissionQuote />
          <StatsGrid />
          <LocationsMarquee />
          <StoryCards />
          <Testimonials />
          <HomeFaq />
          <Newsletter />
        </>
      }
    />
  )
}
