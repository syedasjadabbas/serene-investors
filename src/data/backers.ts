import type { BackerGroup } from '@/types'
import { storyAssets } from './story-assets'

export const backersIntro = {
  eyebrow: 'Built with',
  heading: 'A fictional property community.',
  body: 'Typographic marks for fictional organizations used only inside this demonstration.',
  sampleLabel: 'Fictional organizations',
  image: {
    src: storyAssets.marble.src,
    alt: storyAssets.marble.alt,
  },
} as const

export const backerGroups: BackerGroup[] = [
  {
    id: 'property-investment',
    title: 'Property / Investment',
    items: [
      {
        id: 'stonebridge',
        name: 'Stonebridge Capital',
        category: 'Property capital',
        role: 'Fictional ecosystem participant',
      },
      {
        id: 'urban-property',
        name: 'Urban Property Group',
        category: 'Property group',
        role: 'Fictional holdings participant',
      },
      {
        id: 'harbor-partners',
        name: 'Harbor Partners',
        category: 'Investment partnership',
        role: 'Fictional investment participant',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    items: [
      {
        id: 'northline',
        name: 'Northline Systems',
        category: 'Platform systems',
        role: 'Fictional systems participant',
      },
      {
        id: 'atlas-cloud',
        name: 'Atlas Cloud',
        category: 'Infrastructure',
        role: 'Fictional infrastructure participant',
      },
      {
        id: 'meridian',
        name: 'Meridian Labs',
        category: 'Product research',
        role: 'Fictional research participant',
      },
    ],
  },
]
