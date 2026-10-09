'use client'

import React from 'react'
import {
  Sparkles,
  Briefcase,
  Home,
  Users,
  CreditCard,
  RefreshCw,
  PlusCircle,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface BenefitItem {
  iconType: 'journey' | 'share' | 'fees' | 'reinvest' | 'unlocked' | 'funds'
  title: string
  desc: string
  highlight?: string
  hasLearnMore?: boolean
}

interface TierData {
  id: string
  name: string
  subtitle: string
  headerColor: string // Solid or gradient
  hexBorderColor: string
  hexFillColor: string
  investedAed: string
  progressPercent: number
  targetAmount: string
  targetDeadline: string
  nextTierBadge: string
  featuredCashback?: {
    title: string
    desc: string
  }
  benefits: BenefitItem[]
}

const TIERS: TierData[] = [
  {
    id: 'intro',
    name: 'Intro',
    subtitle: 'Your journey into Investing on Stake',
    headerColor: '#00A663',
    hexBorderColor: '#52D48E',
    hexFillColor: '#10B981',
    investedAed: 'AED 2,000',
    progressPercent: 20,
    targetAmount: 'AED 8,000',
    targetDeadline: "Dec 31 '25",
    nextTierBadge: 'Plus',
    benefits: [
      {
        iconType: 'journey',
        title: 'Start your journey',
        desc: 'Begin investing with as little as AED 500, making it easy to start making a second income',
      },
      {
        iconType: 'share',
        title: 'Share and earn',
        desc: 'Get AED 150 for each friend you successfully refer to Stake.',
        highlight: 'AED 150',
      },
      {
        iconType: 'fees',
        title: 'No payment processing fees',
        desc: 'We cover payment processing fees when you use your card to make investments.',
      },
    ],
  },
  {
    id: 'plus',
    name: 'Plus',
    subtitle: 'Benefits to Grow your Portfolio',
    headerColor: '#0A7E8C',
    hexBorderColor: '#38BDF8',
    hexFillColor: '#06B6D4',
    investedAed: 'AED 15,000',
    progressPercent: 50,
    targetAmount: 'AED 15,000',
    targetDeadline: "Dec 31 '25",
    nextTierBadge: 'Pro',
    benefits: [
      {
        iconType: 'reinvest',
        title: 'Automatic RentReinvest',
        desc: 'Access RentReinvest which allows you to automatically reinvest your rental income on autopilot',
        hasLearnMore: true,
      },
      {
        iconType: 'share',
        title: 'Increased referral rewards',
        desc: 'Get AED 200 for each friend you successfully refer to Stake.',
        highlight: 'AED 200',
      },
      {
        iconType: 'unlocked',
        title: 'All the benefits you’ve unlocked so far',
        desc: 'All the benefits you’ve earned so far remain yours, with new bonuses added on top.',
      },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Unlock more for using Stake',
    headerColor: '#582C88',
    hexBorderColor: '#A855F7',
    hexFillColor: '#8B5CF6',
    investedAed: 'AED 50,000',
    progressPercent: 50,
    targetAmount: 'AED 50,000',
    targetDeadline: "Dec 31 '26",
    nextTierBadge: 'Elite',
    featuredCashback: {
      title: 'Earn 1% cashback in UAE',
      desc: '1% cashback for UAE investments and 0.50% cashback for KSA investments.',
    },
    benefits: [
      {
        iconType: 'reinvest',
        title: 'Automatic RentReinvest',
        desc: 'Access RentReinvest which allows you to automatically reinvest your rental income on autopilot',
        hasLearnMore: true,
      },
      {
        iconType: 'share',
        title: 'Increased referral rewards',
        desc: 'Get AED 300 for each friend you successfully refer to Stake.',
        highlight: 'AED 300',
      },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    subtitle: 'Unlock more for using Stake',
    headerColor: '#D97706',
    hexBorderColor: '#FBBF24',
    hexFillColor: '#F59E0B',
    investedAed: 'AED 150,000',
    progressPercent: 50,
    targetAmount: 'AED 150,000',
    targetDeadline: "Dec 31 '25",
    nextTierBadge: 'Prestige',
    featuredCashback: {
      title: 'Earn 2% cashback in UAE',
      desc: '2% cashback for UAE investments and 0.75% cashback for KSA investments.',
    },
    benefits: [
      {
        iconType: 'funds',
        title: 'Early access to funds',
        desc: 'Gain exclusive early access to invest in funds in KSA before they go live to the general public',
      },
      {
        iconType: 'share',
        title: 'Increased referral rewards',
        desc: 'Get AED 450 for each friend you successfully refer to Stake.',
        highlight: 'AED 450',
      },
      {
        iconType: 'unlocked',
        title: 'All the benefits you’ve unlocked so far',
        desc: 'All the benefits you’ve earned so far remain yours, with new bonuses added on top.',
      },
    ],
  },
]

// Duplicate array for seamless infinite marquee loop
const MARQUEE_TIERS = [...TIERS, ...TIERS]

// 3D Isometric Hexagon Building Badge
function HexagonTowersBadge({
  accentColor,
  fillColor,
}: {
  accentColor: string
  fillColor: string
}) {
  return (
    <div className="relative size-16 sm:size-18 shrink-0 flex items-center justify-center">
      <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
        <polygon
          points="50,4 94,28 94,82 50,106 6,82 6,28"
          fill="#0C1420"
          stroke={accentColor}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <polygon
          points="50,10 88,32 88,78 50,100 12,78 12,32"
          fill="none"
          stroke={accentColor}
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <polygon points="34,42 48,34 48,78 34,86" fill="#1E293B" />
        <polygon points="48,34 62,42 62,86 48,78" fill="#334155" />
        <polygon points="34,42 48,34 62,42 48,50" fill={accentColor} opacity="0.8" />

        <line x1="38" y1="48" x2="38" y2="76" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="44" y1="44" x2="44" y2="72" stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="52" y1="44" x2="52" y2="72" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="58" y1="48" x2="58" y2="76" stroke="#64748B" strokeWidth="1.5" strokeDasharray="2 2" />

        <polygon points="46,54 58,47 58,92 46,99" fill={fillColor} />
        <polygon points="58,47 70,54 70,99 58,92" fill={accentColor} />
        <polygon points="46,54 58,47 70,54 58,61" fill="#FFFFFF" opacity="0.6" />

        <line x1="50" y1="60" x2="50" y2="90" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="2 2" />
        <line x1="54" y1="56" x2="54" y2="86" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="2 2" />
        <line x1="62" y1="56" x2="62" y2="86" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="2 2" />
        <line x1="66" y1="60" x2="66" y2="90" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="2 2" />
      </svg>
    </div>
  )
}

// 3D Double Stacked Stake Green Coin Graphic
function StakeCashbackCoin() {
  return (
    <div className="size-11 sm:size-12 shrink-0 flex items-center justify-center">
      <svg viewBox="0 0 54 54" className="w-full h-full drop-shadow-xs">
        <ellipse cx="26" cy="35" rx="19" ry="9.5" fill="#065F46" />
        <ellipse cx="26" cy="33" rx="19" ry="9.5" fill="#047857" />
        <ellipse cx="26" cy="31" rx="18" ry="8.5" fill="#10B981" />

        <ellipse cx="27" cy="23" rx="19" ry="9.5" fill="#047857" />
        <ellipse cx="27" cy="21" rx="19" ry="9.5" fill="#059669" />
        <ellipse cx="27" cy="19" rx="18" ry="8.5" fill="#34D399" />
        <ellipse cx="27" cy="19" rx="15" ry="6.5" fill="#10B981" />

        <text
          x="27"
          y="21.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.5"
          fontWeight="900"
          fontFamily="system-ui"
          letterSpacing="-0.2"
        >
          stake
        </text>
      </svg>
    </div>
  )
}

function BenefitIcon({ type }: { type: BenefitItem['iconType'] }) {
  switch (type) {
    case 'journey':
      return <Home size={15} className="text-[#00A663]" />
    case 'share':
      return <Users size={15} className="text-[#00A663]" />
    case 'fees':
      return <CreditCard size={15} className="text-[#00A663]" />
    case 'reinvest':
      return <RefreshCw size={15} className="text-[#00A663]" />
    case 'unlocked':
      return <PlusCircle size={15} className="text-[#00A663]" />
    case 'funds':
      return <Building2 size={15} className="text-[#00A663]" />
    default:
      return <Home size={15} className="text-[#00A663]" />
  }
}

function CashbackCardIcon() {
  return (
    <svg className="size-8 sm:size-9 md:size-10 text-[#00A663]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="30" height="22" rx="4" />
      <line x1="3" y1="13" x2="33" y2="13" />
      <line x1="8" y1="21" x2="13" y2="21" />
      <path d="M26.5 19.5c-.7-.8-1.8-.8-2.5 0-.7.8-.7 2 0 2.8l2.5 2.5 2.5-2.5c.7-.8.7-2 0-2.8-.7-.8-1.8-.8-2.5 0z" strokeWidth="1.8" />
    </svg>
  )
}

function ShareEarnIcon() {
  return (
    <svg className="size-8 sm:size-9 md:size-10 text-[#00A663]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="11" r="4.5" />
      <path d="M7 26c0-4.5 4-7.5 9-7.5" />
      <path d="M22 20.5a3.5 3.5 0 0 1 3.5 3.5" />
      <path d="M25.5 19.5v4.5h-4.5" />
      <path d="M27.5 25.5a3.5 3.5 0 0 1-3.5-3.5" />
      <path d="M24 26.5v-4.5h4.5" />
    </svg>
  )
}

function LevelUpIcon() {
  return (
    <svg className="size-8 sm:size-9 md:size-10 text-[#00A663]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19h7l2.5 4h9l2.5-4h7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-9z" />
      <circle cx="18" cy="11" r="5" />
      <path d="M18 8v6M16 9.5h3.5a1 1 0 0 1 0 2H16.5a1 1 0 0 0 0 2H20" strokeWidth="1.6" />
    </svg>
  )
}

export function RewardsTiers() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]"
      aria-label="Rewards & Investor Tiers"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#00A663] mb-3 sm:mb-4 tracking-normal">
            Rewarding investing experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
            Start earning rewards as
            <br />
            you grow your investments
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Get cashback, referral bonuses, and exclusive perks to enhance your investment journey. From early access to funds to premium insights, the more you invest, the more you earn.
          </p>

          <div className="mt-7 sm:mt-8 flex justify-center">
            <a
              href="/rewards"
              className="inline-flex items-center justify-center rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white px-7 py-3 text-sm font-semibold shadow-xs transition-all active:scale-95"
            >
              Learn about Rewards
            </a>
          </div>
        </div>

        {/* 3 Circular Micro-Features */}
        <div className="mt-14 sm:mt-18 mb-14 sm:mb-16 grid grid-cols-3 max-w-3xl mx-auto gap-4 sm:gap-8 items-start justify-center">
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <CashbackCardIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-extrabold text-[#0F172A] tracking-tight">
              Earn cashback
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <ShareEarnIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] tracking-tight">
              Share and earn
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <LevelUpIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] tracking-tight">
              Level up
            </p>
          </div>
        </div>

        {/* =========================================================================
            INFINITE HORIZONTAL MARQUEE AUTO-SCROLLING ROW
            ========================================================================= */}
        <div className="overflow-hidden relative w-full py-8 sm:py-12">
          {/* Left Gradient Fade Mask */}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#F7F5EF] to-transparent z-20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Right Gradient Fade Mask */}
          <div
            className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#F7F5EF] to-transparent z-20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Animated Continuous Marquee Track */}
          <div className="flex gap-4 sm:gap-6 items-center animate-marquee select-none hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {MARQUEE_TIERS.map((tier, index) => (
              <div
                key={`${tier.id}-${index}`}
                className="w-[240px] sm:w-[280px] lg:w-[310px] h-[550px] sm:h-[590px] lg:h-[630px] shrink-0 rounded-[44px] bg-[#12161A] p-[5px] sm:p-[6px] shadow-xl border border-white/10 flex flex-col transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Screen Canvas */}
                <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white flex flex-col justify-between">
                  {/* --- TOP TIER BANNER --- */}
                  <div
                    className="h-[235px] shrink-0 pt-3 pb-3 px-4 text-white relative overflow-hidden flex flex-col justify-between"
                    style={{ backgroundColor: tier.headerColor }}
                  >
                    {/* Decorative subtle ambient lights */}
                    <div className="absolute -right-2 top-8 size-20 rounded-full bg-white/[0.08] blur-xl pointer-events-none" />
                    <div className="absolute left-6 top-24 size-1 rounded-full bg-white/40 pointer-events-none" />
                    <div className="absolute right-20 top-20 size-1 rounded-full bg-white/50 pointer-events-none" />
                    <div className="absolute left-14 bottom-14 size-1 rounded-full bg-white/30 pointer-events-none" />

                    {/* Top Native Status Bar (9:41, Dynamic Island, Signal & Battery) */}
                    <div className="relative z-30 flex items-center justify-between text-xs font-semibold text-white/95 pb-1">
                      <span className="w-12 text-left font-semibold text-[12px] tracking-tight">9:41</span>
                      {/* Centered Dynamic Island */}
                      <div className="h-[20px] w-20 rounded-full bg-black flex items-center justify-end px-2 shadow-xs shrink-0 pointer-events-none">
                        <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                          <div className="size-0.5 rounded-full bg-[#20293d]" />
                        </div>
                      </div>
                      {/* Signal & Battery */}
                      <div className="flex w-12 items-center justify-end gap-1.5 text-white/95">
                        <svg className="size-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                          <rect x="1" y="11" width="2" height="4" rx="0.5" />
                          <rect x="5" y="8" width="2" height="7" rx="0.5" />
                          <rect x="9" y="5" width="2" height="10" rx="0.5" />
                          <rect x="13" y="2" width="2" height="13" rx="0.5" />
                        </svg>
                        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                        </svg>
                        <div className="flex items-center">
                          <div className="flex h-3 w-4.5 items-center rounded-[3px] border border-current p-[1px]">
                            <div className="h-full w-3 rounded-[0.5px] bg-white" />
                          </div>
                          <div className="h-1.5 w-[1px] rounded-r-xs bg-current" />
                        </div>
                      </div>
                    </div>

                    {/* App Navigation: Back Arrow & "My tier" */}
                    <div className="relative z-20 flex items-center justify-between pt-0.5 pb-1">
                      <div className="text-white/90">
                        <ChevronLeft size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[13px] font-bold text-white tracking-tight">My tier</span>
                      <div className="w-5" aria-hidden="true" />
                    </div>

                    {/* Tier Title & Subtitle + 3D Hexagon Illustration */}
                    <div className="relative z-20 flex items-center justify-between">
                      <div className="min-w-0 flex-1 pr-2">
                        <h3 className="text-2xl font-black text-white tracking-tight leading-none">
                          {tier.name}
                        </h3>
                        <p className="text-[11.5px] text-white/85 font-medium leading-tight mt-1 line-clamp-2">
                          {tier.subtitle}
                        </p>
                      </div>
                      <HexagonTowersBadge accentColor={tier.hexBorderColor} fillColor={tier.hexFillColor} />
                    </div>

                    {/* Invested Amount & Stat Label */}
                    <div className="relative z-20 mt-2 flex items-baseline justify-between">
                      <span className="text-lg font-extrabold text-white tracking-tight">
                        {tier.investedAed}
                      </span>
                      <span className="text-[10px] text-white/75 font-medium">
                        Invested in last 12 months
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative z-20 mt-1.5 h-1.5 w-full rounded-full bg-black/25 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white transition-all duration-500"
                        style={{ width: `${tier.progressPercent}%` }}
                      />
                    </div>

                    {/* Next Tier Milestone requirement */}
                    <div className="relative z-20 mt-1.5 flex items-center justify-between text-[10px] text-white/90">
                      <p className="truncate">
                        Invest <span className="font-bold">{tier.targetAmount}</span> by {tier.targetDeadline} to reach
                      </p>
                      <span className="ml-1.5 shrink-0 rounded-md border border-white/40 bg-white/10 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-2xs">
                        {tier.nextTierBadge}
                      </span>
                    </div>
                  </div>

                  {/* --- BOTTOM WHITE SHEET: Current benefits --- */}
                  <div className="relative -mt-2.5 flex-1 rounded-t-[26px] bg-white p-3.5 sm:p-4 flex flex-col justify-between shadow-[0_-8px_20px_rgba(0,0,0,0.08)] z-10 text-left overflow-hidden">
                    <div className="space-y-2.5 flex-1 flex flex-col min-h-0">
                      {/* Benefits Header */}
                      <div className="flex items-center gap-1.5 text-[#0F172A] font-extrabold text-xs sm:text-[13px] shrink-0">
                        <Briefcase size={14} className="text-[#0F172A]" />
                        <span>Current benefits</span>
                      </div>

                      {/* Featured Cashback Box if present */}
                      {tier.featuredCashback && (
                        <div className="rounded-2xl border border-gray-200/90 bg-[#F9FBFA] p-2 flex items-start gap-2 shadow-2xs shrink-0">
                          <StakeCashbackCoin />
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-black text-[#0F172A] leading-tight">
                              {tier.featuredCashback.title}
                            </p>
                            <p className="text-[9px] text-[#64748B] leading-snug mt-0.5 line-clamp-2">
                              {tier.featuredCashback.desc}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Benefits List */}
                      <div className="space-y-2 overflow-y-auto scrollbar-none pr-0.5 flex-1">
                        {tier.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="size-5.5 shrink-0 rounded-full bg-[#E8F8F0] flex items-center justify-center mt-0.5">
                              <BenefitIcon type={b.iconType} />
                            </div>
                            <div className="min-w-0 flex-1 leading-tight">
                              <p className="text-[10.5px] font-bold text-[#0F172A]">
                                {b.title}
                              </p>
                              <p className="text-[9px] text-[#64748B] mt-0.5 leading-snug line-clamp-2">
                                {b.highlight ? (
                                  <>
                                    {b.desc.split(b.highlight)[0]}
                                    <span className="font-bold text-[#0F172A]">{b.highlight}</span>
                                    {b.desc.split(b.highlight)[1]}
                                  </>
                                ) : (
                                  b.desc
                                )}
                              </p>
                              {b.hasLearnMore && (
                                <a
                                  href="/rewards"
                                  className="inline-flex items-center text-[9px] font-bold text-[#00A663] hover:underline mt-0.5"
                                >
                                  Learn more &rsaquo;
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View all benefits action button inside screen */}
                    <div className="mt-2.5 pt-2 border-t border-gray-100 shrink-0">
                      <div className="w-full rounded-xl border border-gray-200 bg-white hover:bg-gray-50 py-2 px-3 text-[11px] font-bold text-[#0F172A] flex items-center justify-between shadow-2xs transition-colors cursor-pointer">
                        <div className="flex items-center gap-1.5 text-[#00A663]">
                          <Sparkles size={13} />
                          <span className="text-[#0F172A]">View all your benefits</span>
                        </div>
                        <ChevronRight size={13} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* iOS Bottom Home Bar */}
                  <div className="py-1.5 bg-white shrink-0">
                    <div className="h-1 w-24 bg-black/25 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-[#64748B]">
            All tier privileges are activated instantaneously upon meeting verified equity thresholds.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RewardsTiers
