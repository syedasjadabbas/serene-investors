import { ClipboardList, Phone, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { getStartedIntro, getStartedNotes } from '../_lib/get-started'
import { StartOnboarding } from './StartOnboarding'

// Tool page, Pattern B in docs/INNER-PAGE-PATTERNS.md: title → the enquiry card → notes → band.

const NOTE_ICONS = [ShieldCheck, ClipboardList, Phone]

export function GetStartedPage() {
  usePageMeta('Serene Investors | Get started', getStartedIntro.body)
  const params = useSearchParams()
  // A new ?intent=&id= (e.g. "Get started" on a programme page) restarts the enquiry.
  const onboardingKey = `${params?.get('intent') ?? ''}:${params?.get('id') ?? ''}`
  const notes = getStartedNotes.map((item, index) => ({ ...item, icon: NOTE_ICONS[index] }))

  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title={getStartedIntro.heading}
        highlight="enquiry"
        body={getStartedIntro.body}
        aside={
          <PillLink href="/how-it-works" variant="outline">
            How it works
          </PillLink>
        }
      />

      <StartOnboarding key={onboardingKey} />

      <PageSection labelledBy="start-notes-heading" pad="bottom">
        <SectionHeading id="start-notes-heading" eyebrow="Before you send" title="Good to know." highlight="Good to know." />
        <FeatureCards items={notes} className="mt-10 sm:mt-12" />
      </PageSection>

      <CtaBand
        tone="brand"
        title="Prefer to look around first?"
        highlight="look around"
        body="Read how Smart Property Units work, or try the numbers in the calculator."
        actions={[
          { label: 'Smart Property', href: '/smart-property' },
          { label: 'Open the calculator', href: '/calculator' },
        ]}
      />
    </>
  )
}
