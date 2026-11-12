import { HowCta } from './HowCta'
import { HowFaq } from './HowFaq'
import { HowHero } from './HowHero'
import { HowJourney } from './HowJourney'
import { HowSummary } from './HowSummary'
import { howItWorksIntro } from '@/global/data/how-it-works'
import { usePageMeta } from '@/global/hooks/usePageMeta'

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
