import { Banknote, KeyRound, Search } from 'lucide-react'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { howPageSummary } from '@/global/data/how-it-works'

const ICONS = [Search, KeyRound, Banknote]

export function HowSummary() {
  const items = howPageSummary.map((step, index) => ({ title: step.title, body: step.body, icon: ICONS[index] }))

  return (
    <PageSection tone="dark" labelledBy="how-summary-heading">
      <SectionHeading
        id="how-summary-heading"
        tone="dark"
        eyebrow="In short"
        title="The short version."
        highlight="short version"
        body="Three beats, using only the demonstration flow already on this site."
        align="center"
      />
      <FeatureCards items={items} tone="dark" className="mt-10 sm:mt-12" />
    </PageSection>
  )
}
