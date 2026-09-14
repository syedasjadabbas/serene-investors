import { LearnCta } from '@/components/sections/learn/LearnCta'
import { LearnDisclaimer } from '@/components/sections/learn/LearnDisclaimer'
import { LearnFeatured } from '@/components/sections/learn/LearnFeatured'
import { LearnHero } from '@/components/sections/learn/LearnHero'
import { LearnResources } from '@/components/sections/learn/LearnResources'
import { learnIntro } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

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
