// Sample portfolio shown on /dashboard: a demonstration built from real, published Serene Heights
// plans (src/global/data/serene.ts). Not anyone's real holdings or payments.

import { nathiagali, plans, pricing, projectById, smartUnit, type Plan } from '@/global/data/serene'

const nathiagaliProject = projectById('nathia-gali')!

const spu = plans.find((p) => p.id === 'spu')!
const oneBed = plans.find((p) => p.id === '1bhk-667')!

/** How many of each published plan the sample investor holds. */
const SAMPLE_SPU_UNITS = 2

export type Holding = {
  id: string
  name: string
  location: string
  type: string
  status: string
  units: number
  plan: Plan
  image: string
  imageAlt: string
  link: string
  linkLabel: string
}

export const holdingsData: Holding[] = [
  {
    id: 'ng-smart-units',
    name: 'Smart Property Units',
    location: nathiagaliProject.name,
    type: `${spu.area} sq ft units`,
    status: nathiagaliProject.status,
    units: SAMPLE_SPU_UNITS,
    plan: spu,
    image: nathiagali.amenityGroups[0].image,
    imageAlt: 'Aerial view of the pool at Serene Heights Nathia Gali',
    link: '/smart-property',
    linkLabel: 'Smart Property',
  },
  {
    id: 'ng-1bhk',
    name: `${oneBed.kind}, ${oneBed.area} sq ft`,
    location: nathiagaliProject.name,
    type: 'Hotel apartment',
    status: nathiagaliProject.status,
    units: 1,
    plan: oneBed,
    image: nathiagaliProject.image,
    imageAlt: 'The Serene Heights Nathia Gali tower in the pines',
    link: '/resort',
    linkLabel: 'the resort',
  },
]

/** Contract totals for a holding (published plan figures × units held). */
export const holdingTotals = (h: Holding) => ({
  total: h.plan.total * h.units,
  down: h.plan.down * h.units,
  monthly: h.plan.monthly * h.units,
})

export const portfolioStats = [
  { value: String(holdingsData.length), label: 'Sample holdings · Nathia Gali' },
  { value: `${Math.round(pricing.downShare * 100)}%`, label: 'Down payment on each plan' },
  { value: String(pricing.months), label: 'Monthly instalments' },
  { value: '28', label: 'Free owner nights a year' },
]

export const projection = { rows: smartUnit.projection, note: smartUnit.projectionNote }

export const documentItems = [
  {
    id: 'booking-form',
    title: 'Booking form',
    desc: 'Your application with personal and payment-plan details, the first step for every unit.',
  },
  {
    id: 'payment-plan',
    title: 'Payment plan',
    desc: `${Math.round(pricing.downShare * 100)}% down payment and ${pricing.months} monthly instalments, as published by Serene Heights.`,
  },
  {
    id: 'agreement',
    title: 'Legal agreement',
    desc: 'Every unit is protected by a legal agreement, and transactions are Shariah-compliant.',
  },
]
