import type { RewardItem } from '@/types'

export const rewardsIntro = {
  eyebrow: 'Serene Rewards',
  heading: 'Build more value as your portfolio grows.',
  body: 'Fictional member benefits designed around participation in the Serene Investors demonstration platform.',
  sampleLabel: 'Sample benefits',
  action: {
    label: 'Explore rewards',
    href: '/learn',
  },
} as const

export const rewards: RewardItem[] = [
  {
    id: 'referral',
    title: 'Referral reward',
    body: 'Receive a fictional platform credit when a referred member completes the demo onboarding flow.',
    sampleBenefit: 'Sample $250 credit',
    level: 'Referral',
    threshold: 'First referred member',
    benefits: ['Sample $250 credit', 'Shared preview access', 'Demo welcome note'],
  },
  {
    id: 'access',
    title: 'Member access',
    body: 'Access fictional investor updates, property previews, and platform insights.',
    sampleBenefit: 'Sample member access',
    level: 'Access',
    threshold: 'Active demo account',
    benefits: ['Weekly property notes', 'Sample preview window', 'Holdings recap'],
  },
  {
    id: 'milestones',
    title: 'Portfolio milestones',
    body: 'Unlock fictional benefits as your sample portfolio grows.',
    sampleBenefit: 'Sample priority previews',
    level: 'Milestone',
    threshold: 'Sample portfolio $25,000',
    benefits: ['Priority sample previews', 'Portfolio review note', 'Longer hold recap'],
  },
]
