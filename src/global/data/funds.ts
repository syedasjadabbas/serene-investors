import type { Fund } from '@/global/types/fund'
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

export const fundsNotice = {
  body: 'All funds, yields, minima, and property counts shown here are fictional demonstration data. They do not represent actual portfolios, distributions, or historical performance.',
} as const

export const fundsFeaturedBand = {
  eyebrow: 'Featured sample fund',
  heading: 'A closer look at the allocation.',
  cta: 'View fund',
  fundId: 'urban-living-fund',
} as const

function requireById(id: string): Fund {
  const match = funds.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample fund: ${id}`)
  }
  return match
}

export const catalogueFeaturedFund = requireById(fundsFeaturedBand.fundId)
