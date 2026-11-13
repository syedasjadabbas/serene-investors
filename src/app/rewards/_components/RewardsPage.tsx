'use client'

import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { RewardsTiers } from '@/global/components/sections/RewardsTiers'
import { usePageMeta } from '@/global/hooks/usePageMeta'

// Figures below come from the illustrative tiers in RewardsTiers.
const STATS = [
  { value: 'Up to 2%', label: 'cashback on UAE investments' },
  { value: 'AED 450', label: 'top referral reward per friend' },
  { value: '4 tiers', label: 'Intro, Plus, Pro and Elite' },
  { value: 'Early', label: 'access to new funds at Elite' },
]

export function RewardsPage() {
  usePageMeta(
    'Serene Investors | Serene Rewards',
    'Earn cashback, referral rewards and early access to funds as you grow your Serene Investors portfolio.',
  )

  return (
    <>
      <PageHero
        eyebrow="Serene Rewards"
        title="Earn more as you grow."
        highlight="grow"
        body="Every investment moves you closer to a higher tier. Unlock cashback on property investments, bigger referral rewards and early access to new funds."
        actions={[
          { label: 'Start investing', href: '/signup' },
          { label: 'See the tiers', href: '#rewards' },
        ]}
      />

      <PageSection label="Serene Rewards at a glance" pad="none">
        <StatCards items={STATS} caption="Illustrative figures for demonstration." />
      </PageSection>

      <RewardsTiers />

      <CtaBand
        title="Share Serene Investors with friends. Earn together."
        highlight="Earn together."
        body="Invite a friend and receive a referral reward when they make their first qualifying investment, from AED 150 at Intro up to AED 450 at Elite."
        actions={[
          { label: 'Get your invite link', href: '/signup' },
          { label: 'Browse properties', href: '/properties' },
        ]}
        image={{ src: '/images/journey/residential.jpg', alt: 'A row of modern low-rise homes with balconies and planted terraces' }}
      />
    </>
  )
}
