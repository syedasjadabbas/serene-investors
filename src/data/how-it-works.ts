import type { ProcessStep, StoryState } from '@/types'

export const howItWorksIntro = {
  eyebrow: 'How it works',
  heading: 'A simpler way to invest in property.',
  body: 'Four steps from a named building to a line in your ledger. This is a demo flow. Figures on this site are sample data.',
  image: {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&h=1200&q=80',
    alt: 'A low house at dusk, pool in the foreground, warm rooms lit from inside',
  },
} as const

export const howItWorksSteps: ProcessStep[] = [
  {
    id: 'choose',
    title: 'Choose a property',
    body: 'Browse selected residential properties and review the available information.',
  },
  {
    id: 'invest',
    title: 'Invest your amount',
    body: 'Select how much you want to allocate to a property.',
  },
  {
    id: 'track',
    title: 'Track your holding',
    body: 'Follow rental activity and your holding from your SERENE INVESTORS account.',
  },
  {
    id: 'receive',
    title: 'Receive your share',
    body: 'View fictional rental distributions and holding performance.',
  },
]

const storyHeadings = ['Choose', 'Invest', 'Track', 'Receive'] as const

export const howItWorksStory: StoryState[] = howItWorksSteps.map((step, index) => ({
  id: step.id,
  number: String(index + 1).padStart(2, '0'),
  kicker: howItWorksIntro.eyebrow,
  heading: storyHeadings[index] ?? step.title,
  subtitle: step.title,
  body: step.body,
}))
