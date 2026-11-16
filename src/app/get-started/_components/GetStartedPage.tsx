import { BadgeAlert, Calculator, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { getStartedIntro, getStartedTrust } from '../_lib/get-started'
import { StartOnboarding } from './StartOnboarding'

// Tool page, Pattern B in docs/INNER-PAGE-PATTERNS.md: title → the onboarding card → notes → sign-up band.

const TRUST_ICONS = [ShieldCheck, Calculator, BadgeAlert]

export function GetStartedPage() {
  usePageMeta('Serene Investors | Get started', getStartedIntro.body)
  const params = useSearchParams()
  // A new ?intent=&id= (e.g. "Continue with this fund") restarts the sample onboarding.
  const onboardingKey = `${params?.get('intent') ?? ''}:${params?.get('id') ?? ''}`
  const trust = getStartedTrust.items.map((item, index) => ({ title: item.title, body: item.body, icon: TRUST_ICONS[index] }))

  return (
    <>
      <PageHeader
        eyebrow="Sample onboarding"
        title={getStartedIntro.heading}
        highlight="exploring"
        body={getStartedIntro.body}
        aside={
          <PillLink href="/how-it-works" variant="outline">
            How it works
          </PillLink>
        }
      />

      <StartOnboarding key={onboardingKey} />

      <PageSection labelledBy="start-trust-heading" pad="bottom">
        <SectionHeading id="start-trust-heading" eyebrow="Before you start" title={getStartedTrust.heading} highlight="live" />
        <FeatureCards items={trust} className="mt-10 sm:mt-12" />
      </PageSection>

      <CtaBand
        tone="brand"
        title="Prefer to look around first?"
        highlight="look around"
        body="Browse the sample properties and funds, then come back with one selected."
        actions={[
          { label: 'Browse properties', href: '/properties' },
          { label: 'Explore funds', href: '/funds' },
        ]}
      />
    </>
  )
}
