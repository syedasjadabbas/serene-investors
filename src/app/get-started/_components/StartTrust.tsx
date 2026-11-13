import { BadgeAlert, Calculator, ShieldCheck } from 'lucide-react'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { getStartedTrust } from '../_lib/get-started'

const ICONS = [ShieldCheck, Calculator, BadgeAlert]

export function StartTrust() {
  const items = getStartedTrust.items.map((item, index) => ({ title: item.title, body: item.body, icon: ICONS[index] }))

  return (
    <PageSection tone="dark" labelledBy="start-trust-heading">
      <SectionHeading
        id="start-trust-heading"
        tone="dark"
        eyebrow="Before you start"
        title={getStartedTrust.heading}
        highlight="live"
        align="center"
      />
      <FeatureCards items={items} tone="dark" className="mt-10 sm:mt-12" />
    </PageSection>
  )
}
