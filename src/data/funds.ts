import type { Fund } from '@/types'

/** Sample funds for card layout only. Returns are invented. */
export const funds: Fund[] = [
  {
    id: 'urban-living-fund',
    name: 'Urban Living Fund',
    market: 'Selected cities',
    image: 'https://picsum.photos/seed/serene-urban-living/1600/1000',
    imageAlt: 'A row of pale residential buildings along a tree-lined street',
    type: 'residential',
    sampleReturnPct: 5.4,
    propertyCount: 12,
    portfolioLabel: 'Residential portfolio',
  },
  {
    id: 'olive-court-fund',
    name: 'Olive Court Fund',
    market: 'Iberia',
    image: 'https://picsum.photos/seed/serene-olive-fund/960/720',
    imageAlt: 'A sunlit residential court with olive trees',
    type: 'residential',
    sampleReturnPct: 6.2,
    propertyCount: 8,
    portfolioLabel: 'Residential portfolio',
  },
  {
    id: 'quay-mixed-fund',
    name: 'Quay Mixed Fund',
    market: 'Low Countries',
    image: 'https://picsum.photos/seed/serene-quay-fund/960/720',
    imageAlt: 'Mixed-use buildings along a quay',
    type: 'mixed',
    sampleReturnPct: 5.8,
    propertyCount: 9,
    portfolioLabel: 'Mixed portfolio',
  },
]
