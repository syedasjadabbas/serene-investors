import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { learnCta, learnGuides, learnIntro } from '../_lib/learn'
import { LearnFeatured } from './LearnFeatured'
import { LearnGuideCard } from './LearnGuideCard'

// Learn hub (Pattern C in docs/INNER-PAGE-PATTERNS.md): centred header → tall featured cards →
// "Latest guides" grid → green sign-up band.
export function LearnPage() {
  usePageMeta(
    'Serene Investors | Learn',
    `${learnIntro.body} All guides on this demonstration platform are fictional.`,
  )

  return (
    <>
      <PageHeader
        align="center"
        eyebrow="Illustrative sample"
        title={learnIntro.heading}
        highlight="Learn"
        body={learnIntro.body}
      />

      <LearnFeatured />

      <PageSection labelledBy="learn-latest-heading" pad="top">
        <SectionHeading
          id="learn-latest-heading"
          title="Latest guides"
          body="Short notes written from the same sample catalogues and demonstration flow used across the site."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learnGuides.map((guide) => (
            <li key={guide.id}>
              <LearnGuideCard guide={guide} id={guide.anchor} />
            </li>
          ))}
        </ul>
      </PageSection>

      <CtaBand
        tone="brand"
        title={learnCta.heading}
        highlight="platform"
        body={learnCta.body}
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Explore funds', href: '/funds' },
        ]}
      />
    </>
  )
}
