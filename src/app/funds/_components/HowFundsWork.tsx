import { Banknote, LineChart, Search, Wallet } from 'lucide-react'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { fundsHowIntro, fundsHowSteps } from '@/global/data/funds'

const ICONS = [Search, Wallet, LineChart, Banknote]

export function HowFundsWork() {
  const items = fundsHowSteps.map((step, index) => ({
    title: `${String(index + 1).padStart(2, '0')}. ${step.title}`,
    body: step.body,
    icon: ICONS[index],
  }))

  return (
    <PageSection labelledBy="funds-how-heading">
      <SectionHeading
        id="funds-how-heading"
        eyebrow="The process"
        title={fundsHowIntro.heading}
        highlight="sample funds"
        body={fundsHowIntro.body}
        align="center"
      />
      <FeatureCards items={items} columns={4} className="mt-10 sm:mt-12" />
    </PageSection>
  )
}
