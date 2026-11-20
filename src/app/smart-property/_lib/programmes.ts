import type { FaqItem } from '@/global/components/page/FaqAccordion'
import type { FeatureSlide } from '@/global/components/page/FeatureCarousel'
import type { Step } from '@/global/components/page/StickySteps'
import { company, contact, lahore, pkr, pkrShort, plans, projectById, smartUnit, type ProjectId } from '@/global/data/serene'

// Copy and figures for /smart-property and its two programme pages. Every figure comes from
// src/global/data/serene.ts; nothing here adds a price, return or date of its own.

const IMG = '/images/serene'

const nathiagaliProject = projectById('nathia-gali')!
const lahoreProject = projectById('lahore')!

/** The Smart Property Unit's published plan (the first entry of `plans`). */
export const spuPlan = plans.find((plan) => plan.id === 'spu')!

/** "30%" from the published down payment share. */
export const downPct = `${Math.round((spuPlan.down / spuPlan.total) * 100)}%`

export const MONTHS = 36

/** Label/value rows for the SPU plan, used on cards and the detail page. */
export const spuPlanRows = [
  { label: 'Standard unit', value: `${smartUnit.sqft} sq ft` },
  { label: 'Unit price', value: pkr(smartUnit.value) },
  { label: `Down payment (${downPct})`, value: pkr(smartUnit.down) },
  { label: 'Monthly instalment', value: `${pkr(smartUnit.monthly)} × ${MONTHS}` },
]

export const spuStats = [
  { value: `${smartUnit.sqft} sq ft`, label: 'One standard Smart Property Unit' },
  { value: pkrShort(smartUnit.value), label: `Price of one unit (${pkr(smartUnit.value)})` },
  { value: downPct, label: `Down payment, ${pkr(smartUnit.down)}` },
  { value: String(MONTHS), label: `Monthly instalments of ${pkr(smartUnit.monthly)}` },
]

export const statsCaption = 'Payment plan as published by Serene Heights for Serene Heights Nathia Gali.'

const STEP_IMAGES = [
  { src: `${IMG}/nathiagali/facade-entrance.webp`, alt: 'The entrance of Serene Heights Nathia Gali' },
  { src: `${IMG}/nathiagali/terraces.webp`, alt: 'Apartment balconies on the Serene Heights tower' },
  { src: `${IMG}/nathiagali/tower-closeup.webp`, alt: 'Close view of the Serene Heights Nathia Gali tower' },
  { src: `${IMG}/resort/sky-lounge.jpg`, alt: 'The sky lounge at Serene Heights Nathia Gali' },
  { src: `${IMG}/nathiagali/snow-tower.webp`, alt: 'The Serene Heights tower in the snow' },
]

/** The five Smart Property Unit steps, with real Serene Heights images. */
export const spuSteps: Step[] = smartUnit.steps.map((step, index) => ({
  step: `Step ${String(index + 1).padStart(2, '0')}`,
  title: step.title,
  body: step.body,
  image: STEP_IMAGES[index],
}))

const WHY_IMAGES = [
  { src: `${IMG}/nathiagali/pool-aerial.webp`, alt: 'Aerial view of the heated infinity pool' },
  { src: `${IMG}/nathiagali/approach.webp`, alt: 'The approach road to Serene Heights Nathia Gali' },
  { src: `${IMG}/nathiagali/ridge.webp`, alt: 'Serene Heights on the ridge above the valley' },
  { src: `${IMG}/nathiagali/night-facade.webp`, alt: 'The Serene Heights façade lit at night' },
  { src: `${IMG}/nathiagali/rooftop.webp`, alt: 'The rooftop of Serene Heights Nathia Gali' },
]

export const spuWhySlides: FeatureSlide[] = smartUnit.why.map((item, index) => ({
  title: item.title,
  body: item.body,
  image: WHY_IMAGES[index],
}))

const lowEntry = lahore.reasons.find((reason) => reason.title === 'Low-entry smart property investment')!

export type Programme = {
  id: ProjectId
  name: string
  kicker: string
  project: typeof nathiagaliProject
  summary: string
  from: string
  image: { src: string; alt: string }
  rows: { label: string; value: string }[]
  enquiry: string
}

export const programmes: Record<ProjectId, Programme> = {
  'nathia-gali': {
    id: 'nathia-gali',
    name: 'Nathia Gali Smart Property Unit',
    kicker: `${nathiagaliProject.name} · ${nathiagaliProject.kind}`,
    project: nathiagaliProject,
    summary: `Co-own a fully furnished hotel apartment at 7,906 ft in standard units of ${smartUnit.sqft} sq ft, let and managed by ${company.developer}.`,
    from: pkr(smartUnit.value),
    image: { src: nathiagaliProject.image, alt: 'The Serene Heights Nathia Gali tower among pines in the mist' },
    rows: spuPlanRows,
    enquiry: `Hello, I would like to know more about the Smart Property Unit at ${nathiagaliProject.name} (${smartUnit.sqft} sq ft, ${pkr(smartUnit.value)}).`,
  },
  lahore: {
    id: 'lahore',
    name: 'Lahore smart property',
    kicker: `${lahoreProject.name} · ${lahoreProject.kind}`,
    project: lahoreProject,
    summary: lowEntry.body,
    from: 'PKR 2 million',
    image: { src: lahoreProject.image, alt: 'The 21-storey Serene Heights Lahore tower on Gulberg Main Boulevard' },
    rows: [
      { label: 'Entry', value: 'From PKR 2 million' },
      { label: 'Location', value: 'Gulberg Main Boulevard' },
      { label: 'Delivery', value: '2-year timeline' },
      { label: 'Approval', value: lahoreProject.since },
    ],
    enquiry: `Hello, I would like to know more about smart property at ${lahoreProject.name} (from PKR 2 million).`,
  },
}

export const programmeList = [programmes['nathia-gali'], programmes.lahore]

export function isProgrammeId(id: string | undefined): id is ProjectId {
  return id === 'nathia-gali' || id === 'lahore'
}

export const spuFaq: FaqItem[] = [
  { q: 'What is a Smart Property Unit?', a: smartUnit.what },
  {
    q: 'How much does one unit cost?',
    a: `One standard unit is ${smartUnit.sqft} sq ft at ${pkr(smartUnit.value)}. You pay ${pkr(smartUnit.down)} (${downPct}) down, then ${MONTHS} monthly instalments of ${pkr(smartUnit.monthly)}.`,
  },
  { q: 'Who manages the apartment?', a: `${company.management} ${smartUnit.steps[3].body}` },
  { q: 'Can I sell or transfer my units?', a: `Yes. ${smartUnit.steps[4].body}` },
  { q: 'Is it Shariah-compliant?', a: `${smartUnit.why[3].body} ${smartUnit.why[2].body}` },
  { q: 'Is there smart property in Lahore too?', a: lowEntry.body },
  { q: 'Are the returns guaranteed?', a: `No. ${smartUnit.projectionNote}` },
  {
    q: 'How do I book?',
    a: `${smartUnit.steps[0].body} Call ${contact.uan} or message ${contact.whatsapp} on WhatsApp to begin.`,
  },
]
