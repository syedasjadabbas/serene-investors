import { fundStageAssets } from './fund-stage-assets'
import { howItWorksIntro } from './how-it-works'
import { properties } from './properties'
import { site } from './site'

function requireById(id: string) {
  const match = properties.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

const courtyard = requireById('courtyard-residences')

export const sampleOnboardingAmounts = [5000, 10000, 25000] as const

export const getStartedIntro = {
  heading: 'Start exploring.',
  body: 'This is a demonstration onboarding for SERENE INVESTORS. You can browse sample listings, open fictional funds, or walk a short sample allocation. Nothing here opens an account or places an investment.',
} as const

export const getStartedOptions = [
  {
    id: 'properties',
    title: 'Explore Properties',
    body: 'Browse the sample catalogue of named residential buildings.',
    href: '/properties',
    image: courtyard.image,
    imageAlt: courtyard.imageAlt,
  },
  {
    id: 'funds',
    title: 'Explore Funds',
    body: 'Open fictional funds gathered around a broader property theme.',
    href: '/funds',
    image: fundStageAssets.field.src,
    imageAlt: fundStageAssets.field.alt,
  },
  {
    id: 'how',
    title: 'How It Works',
    body: 'See the four-step demonstration from choose to sample distributions.',
    href: '/how-it-works',
    image: howItWorksIntro.image.src,
    imageAlt: howItWorksIntro.image.alt,
  },
] as const

export const getStartedOnboarding = {
  eyebrow: 'Sample onboarding',
  heading: 'Walk a short demonstration.',
  body: 'Three steps, using only published sample figures. You can go back at any time. No payment is taken.',
  steps: [
    {
      id: 'interest',
      number: '01',
      title: 'Choose what interests you',
    },
    {
      id: 'amount',
      number: '02',
      title: 'Choose a sample amount',
    },
    {
      id: 'review',
      number: '03',
      title: 'Review your sample opportunity',
    },
  ],
  interests: [
    {
      id: 'property',
      title: 'Properties',
      body: 'A single sample building from the catalogue.',
    },
    {
      id: 'fund',
      title: 'Diversified funds',
      body: 'A fictional fund gathered around one property theme.',
    },
  ],
  confirmHeading: 'Your sample journey is ready.',
  confirmBody: 'This is a fictional demonstration. No investment has been made.',
} as const

export const getStartedTrust = {
  heading: 'Nothing here is live.',
  items: [
    {
      id: 'transaction',
      title: 'No real transaction is processed',
      body: 'The login and get-started flows are local demo interactions. They do not store information, collect funds, or create an account.',
    },
    {
      id: 'figures',
      title: 'Figures are illustrative',
      body: 'Yields, minima, and sample amounts shown on this page are demonstration data. They are not live prices or expected returns.',
    },
    {
      id: 'offer',
      title: 'Not an offer or guarantee',
      body: site.disclaimer,
    },
  ],
} as const
