import { Building2, Coins, CreditCard, Gift, Home, PlusCircle, RefreshCw, TrendingUp, Users, type LucideIcon } from 'lucide-react'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { cn } from '@/global/lib/cn'

type Benefit = { icon: LucideIcon; title: string; desc: string }

type Tier = {
  id: string
  name: string
  subtitle: string
  /** Investment in the last 12 months that unlocks the tier. */
  threshold: string
  tone: 'white' | 'forest' | 'dark'
  cashback?: { title: string; desc: string }
  benefits: Benefit[]
}

// Illustrative tiers. Amounts are sample figures, not an offer.
const TIERS: Tier[] = [
  {
    id: 'intro',
    name: 'Intro',
    subtitle: 'Your journey into investing on Serene Investors',
    threshold: 'From AED 500',
    tone: 'white',
    benefits: [
      { icon: Home, title: 'Start your journey', desc: 'Begin investing with as little as AED 500, making it easy to start a second income.' },
      { icon: Users, title: 'Share and earn', desc: 'Get AED 150 for each friend you successfully refer to Serene Investors.' },
      { icon: CreditCard, title: 'No payment processing fees', desc: 'We cover payment processing fees when you use your card to invest.' },
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    subtitle: 'Benefits to grow your portfolio',
    threshold: 'AED 15,000+',
    tone: 'white',
    benefits: [
      { icon: RefreshCw, title: 'Automatic RentReinvest', desc: 'Automatically reinvest your rental income on autopilot.' },
      { icon: Users, title: 'Increased referral rewards', desc: 'Get AED 200 for each friend you successfully refer to Serene Investors.' },
      { icon: PlusCircle, title: 'Everything you’ve unlocked', desc: 'Benefits from earlier tiers stay yours, with new ones added on top.' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Unlock more for investing with Serene Investors',
    threshold: 'AED 50,000+',
    tone: 'forest',
    cashback: { title: '1% cashback in the UAE', desc: '1% on UAE investments and 0.50% on KSA investments.' },
    benefits: [
      { icon: RefreshCw, title: 'Automatic RentReinvest', desc: 'Automatically reinvest your rental income on autopilot.' },
      { icon: Users, title: 'Increased referral rewards', desc: 'Get AED 300 for each friend you successfully refer to Serene Investors.' },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    subtitle: 'Unlock more for investing with Serene Investors',
    threshold: 'AED 150,000+',
    tone: 'dark',
    cashback: { title: '2% cashback in the UAE', desc: '2% on UAE investments and 0.75% on KSA investments.' },
    benefits: [
      { icon: Building2, title: 'Early access to funds', desc: 'Invest in KSA funds before they open to the general public.' },
      { icon: Users, title: 'Increased referral rewards', desc: 'Get AED 450 for each friend you successfully refer to Serene Investors.' },
      { icon: PlusCircle, title: 'Everything you’ve unlocked', desc: 'Benefits from earlier tiers stay yours, with new ones added on top.' },
    ],
  },
]

const WAYS_TO_EARN = [
  { icon: Coins, title: 'Earn cashback', body: 'From the Pro tier, a share of every qualifying investment comes back to your wallet.' },
  { icon: Gift, title: 'Share and earn', body: 'Invite friends and receive a referral reward when they make their first qualifying investment.' },
  { icon: TrendingUp, title: 'Level up', body: 'Tiers follow what you invest over a rolling 12 months. Each tier keeps the benefits of the ones before it.' },
]

const TONE = {
  white: { card: 'bg-white text-sx-ink', muted: 'text-sx-ink/60', panel: 'bg-sx-paper', icon: 'bg-sx-forest text-sx-mint', pill: 'bg-sx-sand text-sx-ink' },
  forest: { card: 'bg-sx-forest text-white', muted: 'text-white/65', panel: 'bg-white/10', icon: 'bg-sx-mint text-sx-ink', pill: 'bg-sx-mint text-sx-ink' },
  dark: { card: 'bg-sx-ink text-white', muted: 'text-white/65', panel: 'bg-sx-card-2', icon: 'bg-sx-mint text-sx-ink', pill: 'bg-sx-brand text-white' },
} as const

/** /rewards: ways to earn, then the four Serene Rewards tiers as cards. */
export function RewardsTiers() {
  return (
    <>
      <PageSection labelledBy="rewards-ways" pad="top">
        <SectionHeading
          id="rewards-ways"
          eyebrow="Rewarding investing"
          title="Earn rewards as you grow your investments."
          highlight="rewards"
          body="Cashback, referral rewards and early access. The more you invest, the more you unlock."
          align="center"
        />
        <FeatureCards items={WAYS_TO_EARN} className="mt-12" />
      </PageSection>

      <PageSection id="rewards" labelledBy="rewards-tiers">
        <SectionHeading
          id="rewards-tiers"
          eyebrow="Serene Rewards tiers"
          title="Four tiers, one rule: invest more, unlock more."
          highlight="unlock more"
          body="Your tier is set by how much you have invested in the last 12 months."
        />

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
          {TIERS.map((tier, index) => {
            const t = TONE[tier.tone]
            return (
              <li key={tier.id} aria-labelledby={`tier-${tier.id}`} className={cn('flex flex-col gap-6 rounded-[20px] p-6 sm:p-7', t.card)}>
                <div className="flex items-start justify-between gap-3">
                  <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', t.pill)}>Tier {index + 1}</span>
                  <span className={cn('text-right text-xs', t.muted)}>Invested in 12 months</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 id={`tier-${tier.id}`} className="font-heading text-4xl font-bold tracking-[-0.03em]">
                    {tier.name}
                  </h3>
                  <p className={cn('text-sm', t.muted)}>{tier.subtitle}</p>
                  <p className="mt-2 font-heading text-2xl font-bold tracking-[-0.02em]">{tier.threshold}</p>
                </div>

                {tier.cashback && (
                  <div className={cn('flex items-start gap-3 rounded-[14px] p-4', t.panel)}>
                    <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-full', t.icon)}>
                      <Coins size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{tier.cashback.title}</p>
                      <p className={cn('mt-0.5 text-sm', t.muted)}>{tier.cashback.desc}</p>
                    </div>
                  </div>
                )}

                <ul className="flex flex-col gap-4" aria-label={`${tier.name} benefits`}>
                  {tier.benefits.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                      <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-[10px]', t.icon)}>
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{title}</p>
                        <p className={cn('mt-0.5 text-sm leading-relaxed', t.muted)}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>

        <p className="mt-4 text-xs text-sx-ink/45">
          Illustrative tiers and amounts for demonstration. Tier benefits apply once your qualifying investment total is verified.
        </p>
      </PageSection>
    </>
  )
}

export default RewardsTiers
