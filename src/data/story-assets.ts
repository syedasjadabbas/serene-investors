export const storyAssets = {
  choose: {
    src: '/images/story/choose-cedar-court.png',
    alt: 'Pale residential court with planted walks and simple geometric facades',
  },
  receive: {
    src: '/images/story/receive-cedar-court.png',
    alt: 'Warm afternoon light on a pale contemporary house and planted front garden',
  },
  valueWalk: {
    src: '/images/story/value-cedar-walk.png',
    alt: 'A planted walk between two pale residential wings',
  },
  grow: {
    src: '/images/story/grow-townhouses.png',
    alt: 'A quiet row of contemporary townhouses',
  },
  pines: {
    src: '/images/story/pines-loft.png',
    alt: 'A narrow loft building with tall windows',
  },
  marble: {
    src: '/images/story/marble-house.png',
    alt: 'A pale stone townhouse on a quiet street',
  },
} as const

const holdingThumbs: Record<string, { src: string; alt: string }> = {
  'cedar-court': storyAssets.choose,
  'pines-loft': storyAssets.pines,
  'marble-house': storyAssets.marble,
}

export function storyHoldingThumb(id: string) {
  return holdingThumbs[id] ?? storyAssets.choose
}
