export const fundStageAssets = {
  field: {
    src: '/images/funds/fund-stage-field.png',
    alt: 'A quiet residential neighborhood of pale apartment blocks and planted courts',
  },
  'urban-living-fund': {
    src: '/images/funds/fund-urban-living.png',
    alt: 'A tree-lined street of pale contemporary townhouses',
  },
  'olive-court-fund': {
    src: '/images/funds/fund-olive-court.png',
    alt: 'A sunlit residential court with olive trees',
  },
  'quay-mixed-fund': {
    src: '/images/funds/fund-quay-mixed.png',
    alt: 'Mixed-use buildings along a quiet quay',
  },
} as const

export function fundStageImage(id: string) {
  if (id === 'urban-living-fund' || id === 'olive-court-fund' || id === 'quay-mixed-fund') {
    return fundStageAssets[id]
  }
  return fundStageAssets.field
}
