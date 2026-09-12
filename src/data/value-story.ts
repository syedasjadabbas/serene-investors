import type { StoryState } from '@/types'
import { longTermValue } from './long-term'
import { returnsIllustration } from './returns'

export const valueStoryIntro = {
  heading: 'More value, as you invest.',
  disclaimer: returnsIllustration.disclaimer,
} as const

export const valueStory: StoryState[] = [
  {
    id: 'receive',
    kicker: 'See where your money goes',
    heading: 'Receive',
    subtitle: 'Rental income as you hold.',
    body: 'Rental income as you hold.',
    note: returnsIllustration.sampleLabel,
  },
  {
    id: 'build',
    kicker: 'More value, as you invest.',
    heading: 'Build',
    body: 'Rental income and sample value movement come together in one illustrative view.',
    note: returnsIllustration.sampleLabel,
  },
  {
    id: 'grow',
    kicker: 'Long-term value',
    heading: 'Grow',
    subtitle: longTermValue.heading,
    body: longTermValue.heading,
    note: longTermValue.sampleLabel,
  },
]
