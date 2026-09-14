import type { Fund, ProcessStep } from '@/types'
import { fundStageAssets } from './fund-stage-assets'

/** Sample funds for card layout only. Returns are invented. */
export const funds: Fund[] = [
  {
    id: 'urban-living-fund',
    name: 'Urban Living Fund',
    market: 'Selected cities',
    image: fundStageAssets['urban-living-fund'].src,
    imageAlt: fundStageAssets['urban-living-fund'].alt,
    type: 'residential',
    sampleReturnPct: 5.4,
    propertyCount: 12,
    portfolioLabel: 'Residential portfolio',
  },
  {
    id: 'olive-court-fund',
    name: 'Olive Court Fund',
    market: 'Iberia',
    image: fundStageAssets['olive-court-fund'].src,
    imageAlt: fundStageAssets['olive-court-fund'].alt,
    type: 'residential',
    sampleReturnPct: 6.2,
    propertyCount: 8,
    portfolioLabel: 'Residential portfolio',
  },
  {
    id: 'quay-mixed-fund',
    name: 'Quay Mixed Fund',
    market: 'Low Countries',
    image: fundStageAssets['quay-mixed-fund'].src,
    imageAlt: fundStageAssets['quay-mixed-fund'].alt,
    type: 'mixed',
    sampleReturnPct: 5.8,
    propertyCount: 9,
    portfolioLabel: 'Mixed portfolio',
  },
]

/** Illustrative figure already shown on the homepage fund stage. */
export const sampleFundMinimum = 10000

export const fundSampleStatus = 'Illustrative sample'

export const fundsIntro = {
  heading: 'A broader property theme, in one allocation.',
  body: 'Explore fictional funds that gather several sample properties under one idea, with a sample minimum and a clear next step.',
} as const

export const fundsNotice = {
  body: 'All funds, yields, minima, and property counts shown here are fictional demonstration data. They do not represent actual portfolios, distributions, or historical performance.',
} as const

export const fundsFeaturedBand = {
  eyebrow: 'Featured sample fund',
  heading: 'A closer look at the allocation.',
  cta: 'View fund',
  fundId: 'urban-living-fund',
} as const

export const fundsBreakdownIntro = {
  heading: 'What each sample fund contains.',
  body: 'A short reading of the figures already published for this demonstration collection.',
} as const

export const fundsHowIntro = {
  heading: 'How sample funds work.',
  body: 'The same four-step demonstration used across the platform, written for a fund allocation instead of a single building.',
} as const

export const fundsHowSteps: ProcessStep[] = [
  {
    id: 'choose-fund',
    title: 'Choose a fund',
    body: 'Browse the sample collection and open a fund built around a broader property theme.',
  },
  {
    id: 'allocate-fund',
    title: 'Allocate',
    body: 'Select how much you want to allocate, from the illustrative sample minimum.',
  },
  {
    id: 'track-fund',
    title: 'Track holdings',
    body: 'Follow the sample properties held in that fund from your SERENE INVESTORS account.',
  },
  {
    id: 'receive-fund',
    title: 'Receive sample distributions',
    body: 'View fictional rental distributions and holding performance.',
  },
]

export const fundsCta = {
  heading: 'Explore a broader property strategy.',
  body: 'Open a sample fund, or start with the same four-step demonstration used for direct property.',
} as const

function requireById(id: string): Fund {
  const match = funds.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample fund: ${id}`)
  }
  return match
}

export const catalogueFeaturedFund = requireById(fundsFeaturedBand.fundId)
