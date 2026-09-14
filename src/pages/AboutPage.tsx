import { AboutClarity } from '@/components/sections/about/AboutClarity'
import { AboutClose } from '@/components/sections/about/AboutClose'
import { AboutContact } from '@/components/sections/about/AboutContact'
import { AboutExperience } from '@/components/sections/about/AboutExperience'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutIdea } from '@/components/sections/about/AboutIdea'
import { AboutPaths } from '@/components/sections/about/AboutPaths'
import { aboutIntro } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function AboutPage() {
  usePageMeta(
    'SERENE INVESTORS | About',
    `${aboutIntro.body} SERENE INVESTORS is a fictional demonstration product.`,
  )

  return (
    <>
      <AboutHero />
      <AboutIdea />
      <AboutPaths />
      <AboutClarity />
      <AboutExperience />
      <AboutClose />
      <AboutContact />
    </>
  )
}
