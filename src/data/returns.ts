import type { ReturnIllustration } from '@/types'
import { properties } from './properties'

function requireById<T extends { id: string }>(items: readonly T[], id: string): T {
  const match = items.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const cedarCourt = requireById(properties, 'cedar-court')

export const returnsIllustration: ReturnIllustration = {
  eyebrow: 'See where your money goes',
  heading: 'More value, as you invest.',
  body: 'A simple breakdown of the two main components behind a fictional property investment: rental income and changes in property value.',
  sampleLabel: 'Sample illustration',
  figureLabel: 'Illustrative sample',
  propertyLabel: 'Sample property',
  propertyName: cedarCourt.name,
  investmentLabel: 'Sample investment',
  investmentValue: '$10,000',
  investmentAmount: 10000,
  image: {
    src: cedarCourt.image,
    alt: cedarCourt.imageAlt,
  },
  flow: {
    from: 'Investment',
    join: 'Rental income and property value change',
    to: 'Illustrative outcome',
  },
  components: [
    {
      id: 'rental',
      label: 'Sample rental income',
      value: '+$420',
      amount: 420,
    },
    {
      id: 'value',
      label: 'Sample value movement',
      value: '+$580',
      amount: 580,
    },
  ],
  total: {
    label: 'Illustrative total',
    value: '+$1,000',
  },
  rate: {
    label: 'Illustrative return',
    value: '10.0%',
  },
  disclaimer:
    'Illustrative sample only. Returns are not guaranteed and figures do not represent actual Serene Investors performance.',
}
