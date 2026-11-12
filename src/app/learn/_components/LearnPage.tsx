import { LearnCta } from './LearnCta'
import { LearnDisclaimer } from './LearnDisclaimer'
import { LearnFeatured } from './LearnFeatured'
import { LearnHero } from './LearnHero'
import { LearnResources } from './LearnResources'
import { learnIntro } from '../_lib/learn'
import { usePageMeta } from '@/global/hooks/usePageMeta'

export function LearnPage() {
  usePageMeta(
    'SERENE INVESTORS | Learn',
    `${learnIntro.body} All guides on this demonstration platform are fictional.`,
  )

  return (
    <>
      <LearnHero />
      <LearnFeatured />
      <LearnResources />
      <LearnDisclaimer />
      <LearnCta />
    </>
  )
}
