import type { OfferingSplit } from '@/types'
import { formatSampleYield } from '@/lib/format'
import { funds } from './funds'
import { properties } from './properties'

export const offeringsIntro = {
  eyebrow: 'Ways to invest',
  heading: 'Choose how you want to build your property portfolio.',
  body: 'Select individual properties for more direct exposure, or explore diversified fictional funds built around a broader property theme.',
} as const

export const propertyStageIntro = {
  eyebrow: 'Direct property',
  heading: 'A single building, held with care.',
  body: 'Review one fictional residence at a time, with sample yield, minimum, and location shown beside the property itself.',
} as const

export const fundStageIntro = {
  eyebrow: 'Diversified funds',
  heading: 'A broader property theme, in one allocation.',
  body: 'Explore fictional funds that gather several sample properties under one idea, with a sample minimum and a clear next step.',
} as const

function requireById<T extends { id: string }>(items: readonly T[], id: string): T {
  const match = items.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const cedarCourt = requireById(properties, 'cedar-court')
const urbanLiving = requireById(funds, 'urban-living-fund')
const quayFund = requireById(funds, 'quay-mixed-fund')

export const offeringSplits: OfferingSplit[] = [
  {
    id: 'properties',
    kind: 'property',
    label: 'Direct property',
    title: 'Individual Properties',
    body: 'Own exposure to a specific fictional property.',
    href: '/properties',
    cta: 'Browse properties',
    image: cedarCourt.image,
    imageAlt: cedarCourt.imageAlt,
    example: {
      name: cedarCourt.name,
      meta: cedarCourt.neighborhood,
      detail: formatSampleYield(cedarCourt.sampleYieldPct),
    },
    sampleNote: 'Sample listing',
  },
  {
    id: 'funds',
    kind: 'fund',
    label: 'Diversified portfolio',
    title: 'Property Funds',
    body: 'Diversify across a collection of fictional properties.',
    href: '/funds',
    cta: 'Explore funds',
    image: urbanLiving.image,
    imageAlt: urbanLiving.imageAlt,
    secondaryImage: {
      src: quayFund.image,
      alt: quayFund.imageAlt,
    },
    example: {
      name: urbanLiving.name,
      meta: `${urbanLiving.propertyCount} sample properties`,
      detail: urbanLiving.portfolioLabel,
    },
    sampleNote: 'Sample fund',
  },
]
