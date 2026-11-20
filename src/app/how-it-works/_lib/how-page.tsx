import { Building2, CalendarHeart, HandCoins, Hotel, ShieldCheck, Timer } from 'lucide-react'
import type { FaqItem } from '@/global/components/page/FaqAccordion'
import type { Feature } from '@/global/components/page/FeatureCards'
import type { Step } from '@/global/components/page/StickySteps'
import { PillLink } from '@/global/components/ui/PillLink'
import { company, contact, investorReasons, ownerBenefits, pkr, smartUnit } from '@/global/data/serene'

// Steps, "how you earn" rows, reasons and FAQ for /how-it-works. Facts come from serene.ts only.

const IMG = '/images/serene'

const STEP_IMAGES = [
  { src: `${IMG}/nathiagali/approach.webp`, alt: 'The approach road to Serene Heights Nathia Gali' },
  { src: `${IMG}/nathiagali/terraces.webp`, alt: 'Apartment balconies on the Serene Heights tower' },
  { src: `${IMG}/nathiagali/facade-entrance.webp`, alt: 'The entrance of Serene Heights Nathia Gali' },
  { src: `${IMG}/resort/rooftop-restaurant.jpg`, alt: 'The rooftop restaurant at Serene Heights Nathia Gali' },
  { src: `${IMG}/nathiagali/snow-tower.webp`, alt: 'The Serene Heights tower in the snow' },
]

const STEP_ACTIONS: (null | { label: string; href: string })[] = [
  { label: 'Start an enquiry', href: '/get-started' },
  { label: 'Open the calculator', href: '/calculator' },
  null,
  { label: 'See owner benefits', href: '/owner-benefits' },
  null,
]

export const howSteps: Step[] = smartUnit.steps.map((step, index) => {
  const action = STEP_ACTIONS[index]
  return {
    step: `Step ${String(index + 1).padStart(2, '0')}`,
    title: step.title,
    body: step.body,
    image: STEP_IMAGES[index],
    action: action ? (
      <div className="mt-2">
        <PillLink href={action.href}>{action.label}</PillLink>
      </div>
    ) : undefined,
  }
})

const quarterly = ownerBenefits.find((b) => b.title === 'Quarterly profit share')!

export const earnRows = [
  {
    title: 'Rental income',
    body: `On completion the apartment is let by ${company.developer} and rental income is distributed according to your units.`,
  },
  { title: 'Quarterly profit share', body: quarterly.body },
  { title: 'Managed by experts', body: `${company.management}` },
  { title: 'Transferable units', body: smartUnit.steps[4].body },
]

const REASON_ICONS = [Hotel, HandCoins, Building2, CalendarHeart, Timer, ShieldCheck]

export const reasons: Feature[] = investorReasons.map((reason, index) => ({ ...reason, icon: REASON_ICONS[index] }))

export const howFaq: FaqItem[] = [
  { q: 'What exactly do I own?', a: smartUnit.what },
  {
    q: 'What does it cost to start?',
    a: `One standard ${smartUnit.sqft} sq ft unit in Nathia Gali is ${pkr(smartUnit.value)}: ${pkr(smartUnit.down)} down and 36 monthly instalments of ${pkr(smartUnit.monthly)}. Smart property in Serene Heights Lahore starts from PKR 2 million.`,
  },
  { q: 'How are returns paid?', a: `${earnRows[0].body} ${quarterly.body}` },
  { q: 'Who looks after the property?', a: company.management },
  { q: 'Can I sell my units later?', a: `Yes. ${smartUnit.steps[4].body}` },
  { q: 'Are returns guaranteed?', a: `No. ${smartUnit.projectionNote}` },
  {
    q: 'How do I begin?',
    a: `${smartUnit.steps[0].body} Call ${contact.uan}, or message ${contact.whatsapp} on WhatsApp.`,
  },
]
