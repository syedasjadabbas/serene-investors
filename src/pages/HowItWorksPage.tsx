import { HowCta } from '@/components/sections/how/HowCta'
import { HowFaq } from '@/components/sections/how/HowFaq'
import { HowHero } from '@/components/sections/how/HowHero'
import { HowJourney } from '@/components/sections/how/HowJourney'
import { HowSummary } from '@/components/sections/how/HowSummary'
import { howItWorksIntro } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HowItWorksPage() {
  usePageMeta(
    'SERENE INVESTORS | How it works',
    `${howItWorksIntro.body} All steps are part of a fictional demonstration.`,
  )

  return (
    <>
      <HowHero />
      <HowJourney />
      <HowSummary />
      <HowFaq />
      <HowCta />
    </>
  )
}
