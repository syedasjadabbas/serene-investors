import { site } from '@/global/data/site'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { EcosystemCarousel } from './EcosystemCarousel'
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
    <>
      {/* Dark zone: hero, intro, products, services */}
      <div className="bg-sx-ink">
        <HomeHero />
        <IntroSplit />
        <ProductCards />
        <EcosystemCarousel />
      </div>

      {/* Light sheet: rounded at the bottom, sitting on the dark footer */}
      <div className="relative z-[1] -mb-10 rounded-b-[40px] bg-sx-paper">
        <MissionQuote />
        <StatsGrid />
        <LocationsMarquee />
        <StoryCards />
        <Testimonials />
        <HomeFaq />
        <Newsletter />
      </div>
    </>
  )
}
