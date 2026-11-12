import { AboutClarity } from './AboutClarity'
import { AboutClose } from './AboutClose'
import { AboutContact } from './AboutContact'
import { AboutExperience } from './AboutExperience'
import { AboutHero } from './AboutHero'
import { AboutIdea } from './AboutIdea'
import { AboutPaths } from './AboutPaths'
import { aboutIntro } from '../_lib/about'
import { usePageMeta } from '@/global/hooks/usePageMeta'

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
