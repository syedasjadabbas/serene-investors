'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  ChevronDown,
  HelpCircle,
  Building2,
  ShieldCheck,
  Award,
  Wallet,
  ArrowRight,
  Mail,
  CheckCircle2,
  X,
  ThumbsUp,
  ThumbsDown,
  Clock,
  Sparkles,
} from 'lucide-react'

interface FaqItem {
  id: string
  category: 'Getting Started' | 'Investing' | 'Dividends' | 'Golden Visa' | 'Safety' | 'Exits'
  question: string
  summary: string
  bulletPoints: string[]
  badge?: string
  actionLink?: {
    label: string
    href: string
  }
}

const FAQ_DATABASE: FaqItem[] = [
  {
    id: 'what-is-stake',
    category: 'Getting Started',
    question: 'What is Stake and how does fractional real estate work?',
    badge: 'Core Concept',
    summary:
      'Stake is a digital real estate platform regulated by the DFSA that lets you co-own prime Dubai rental properties starting from just AED 500 (~$136).',
    bulletPoints: [
      'Each property is acquired through an independent Special Purpose Vehicle (SPV) incorporated in the DIFC.',
      'Investors receive official shares and an electronic Title Deed registered with the Dubai Land Department (DLD).',
      'You earn passive monthly rental dividends deposited directly into your digital wallet, plus capital growth when the property sells.',
    ],
    actionLink: { label: 'Explore live properties', href: '/properties' },
  },
  {
    id: 'who-can-invest',
    category: 'Getting Started',
    question: 'Who is eligible to invest on Stake? Do I need UAE residency?',
    badge: 'Global Access',
    summary:
      'Anyone aged 18 or older from virtually any country in the world can invest on Stake without UAE residency or a local bank account.',
    bulletPoints: [
      'No UAE residency, visa, or local bank account required.',
      '100% digital KYC verification takes under 3 minutes using your international passport or Emirates ID.',
      'Over 500,000 registered investors from 200+ nationalities currently invest through the platform.',
    ],
    actionLink: { label: 'Create free account', href: '/signup' },
  },
  {
    id: 'minimum-investment',
    category: 'Investing',
    question: 'What is the minimum amount required to start investing?',
    badge: 'From AED 500',
    summary:
      'The minimum investment is just AED 500 (approx. USD $136 / EUR 125), making prime luxury real estate accessible to everyone.',
    bulletPoints: [
      'Start with AED 500 and gradually build a diversified multi-property portfolio.',
      'No upper investment limits for individual accredited or institutional investors.',
      'Deposit funds seamlessly using international debit/credit cards, Apple Pay, or domestic & international bank wires.',
    ],
    actionLink: { label: 'View investment calculator', href: '/properties' },
  },
  {
    id: 'how-properties-vetted',
    category: 'Investing',
    question: 'How are properties selected and vetted before listing?',
    badge: 'Top 2% Vetted',
    summary:
      'Our in-house acquisitions committee underwrites hundreds of residential assets, selecting only the top 2% of income-producing listings.',
    bulletPoints: [
      'Strict location focus: Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and City Walk.',
      'Rigorous financial modeling evaluating gross yield, service charges, vacancy allowances, and historical tenant track record.',
      'Independent RICS-certified appraisals and legal title searches conducted on every property prior to onboarding.',
    ],
    actionLink: { label: 'Read our Research Reports', href: '/market-reports' },
  },
  {
    id: 'rental-dividends-payout',
    category: 'Dividends',
    question: 'When and how do I receive my rental income dividends?',
    badge: 'Monthly Cash Flow',
    summary:
      'Rental dividends are credited directly into your Stake investor digital wallet on the 1st of every month.',
    bulletPoints: [
      'Distributions are 100% net of building service charges, property management fees, and maintenance reserves.',
      'Withdraw funds at any time directly to your local or international bank account with zero platform withdrawal fees.',
      'Alternatively, toggle automatic reinvestment to compound your passive returns into new properties.',
    ],
    actionLink: { label: 'Learn about rental returns', href: '/learn' },
  },
  {
    id: 'capital-appreciation',
    category: 'Dividends',
    question: 'How is capital appreciation calculated and distributed upon property sale?',
    badge: 'Exit Profits',
    summary:
      'Properties have a standard holding period of 3 to 5 years, after which the property is sold and all net capital gains are distributed.',
    bulletPoints: [
      'At the end of the investment horizon, Stake lists the property for sale to capture market appreciation.',
      'All net sale proceeds above original acquisition cost are distributed pro-rata to shareholders.',
      'Quarterly RICS independent appraisals update your dashboard so you can track unrealized capital gains live.',
    ],
    actionLink: { label: 'View Real Estate Glossary', href: '/glossary' },
  },
  {
    id: 'golden-visa-eligibility',
    category: 'Golden Visa',
    question: 'Can I qualify for the UAE 10-Year Golden Visa through Stake?',
    badge: '10-Year Residency',
    summary:
      'Yes! Investors allocating a cumulative total of AED 2,000,000 (~$545,000) or more across Stake properties qualify for the UAE Golden Visa.',
    bulletPoints: [
      'Crucial advantage: You can diversify across multiple properties (e.g. 10–15 distinct units) rather than locking capital into a single apartment.',
      'Stake’s dedicated government relations team manages the entire DLD title deed collation, medical, and VIP concierge processing.',
      'Includes 10-year renewable residency for yourself, spouse, children of any age, and domestic staff.',
    ],
    actionLink: { label: 'Explore Golden Visa Desk', href: '/golden-visa' },
  },
  {
    id: 'golden-visa-timeline',
    category: 'Golden Visa',
    question: 'What is the processing timeline for the UAE Golden Visa on Stake?',
    badge: 'VIP Concierge',
    summary:
      'The complete Golden Visa process typically takes 10 to 14 business days from portfolio funding to visa issuance in Dubai.',
    bulletPoints: [
      'Step 1: Build your AED 2M+ portfolio across verified pre-funded assets.',
      'Step 2: Stake compiles Dubai Land Department ownership certificates and submits them to the authorities.',
      'Step 3: Attend VIP medical and biometric appointment in Dubai with our dedicated concierge handler.',
    ],
    actionLink: { label: 'Contact Golden Visa Specialists', href: '/golden-visa' },
  },
  {
    id: 'dfsa-regulation',
    category: 'Safety',
    question: 'Is Stake licensed and regulated by government authorities?',
    badge: 'Dual Regulated',
    summary:
      'Yes. Stake is strictly regulated by the DFSA (Dubai) and CMA (Saudi Arabia), operating under institutional compliance standards.',
    bulletPoints: [
      'Regulated by the Dubai Financial Services Authority (DFSA) under Firm Reference Number F006095 in the DIFC.',
      'Authorized under the Capital Market Authority (CMA) FinTech Lab permit in Saudi Arabia.',
      'Holds an Islamic Finance Window endorsement from the DFSA confirming full Shariah investment compliance.',
    ],
    actionLink: { label: 'Review Safety & Regulation', href: '/security' },
  },
  {
    id: 'what-if-stake-closes',
    category: 'Safety',
    question: 'What happens to my investment if Stake ceases operations?',
    badge: 'Bankruptcy Remote',
    summary:
      'Your investment is 100% bankruptcy-remote from Stake. Each property is owned by an independent DIFC SPV with Land Department title deeds.',
    bulletPoints: [
      'Stake does not own the buildings on its corporate balance sheet; individual SPVs hold the real estate.',
      'If Stake were ever to cease operating, an independent regulated custodian or third-party trustee continues managing or liquidates the assets.',
      'Uninvested wallet cash is kept in segregated trust accounts at tier-1 international banks, never co-mingled.',
    ],
    actionLink: { label: 'Read our legal safeguards', href: '/security' },
  },
  {
    id: 'exit-windows',
    category: 'Exits',
    question: 'Can I sell my property shares early before the holding period ends?',
    badge: 'Bi-Annual Liquidity',
    summary:
      'Yes! Stake runs bi-annual Exit Windows (held every May and November) where you can sell shares to other community members.',
    bulletPoints: [
      'Sell your fractional equity units on our secondary marketplace to unlock cash liquidity.',
      'Zero penalty for selling early; shares are priced transparently within current RICS appraisal bands.',
      'Thousands of active investors participate in every window, providing rapid execution for quality assets.',
    ],
    actionLink: { label: 'Learn about Exit Windows', href: '/properties' },
  },
  {
    id: 'exit-fees',
    category: 'Exits',
    question: 'What fees apply when selling shares during Exit Windows?',
    badge: 'Transparent Fees',
    summary:
      'A nominal 1.5% to 2.5% secondary trading processing fee applies only upon successful transaction settlement.',
    bulletPoints: [
      'No upfront listing fee; fees are only deducted when your shares are successfully sold and matched.',
      'Proceeds are credited immediately to your Stake digital cash wallet for bank withdrawal or reinvestment.',
      'Full transparency: all fee structures are clearly displayed before you confirm your trade order.',
    ],
    actionLink: { label: 'Check Stake Rewards Perks', href: '/rewards' },
  },
]

const CATEGORY_TABS = [
  { id: 'All', label: 'All Questions', icon: HelpCircle },
  { id: 'Getting Started', label: 'Getting Started', icon: Sparkles },
  { id: 'Investing', label: 'Investing & Vetting', icon: Building2 },
  { id: 'Dividends', label: 'Dividends & Cashflow', icon: Wallet },
  { id: 'Golden Visa', label: 'UAE Golden Visa', icon: Award },
  { id: 'Safety', label: 'Safety & DFSA', icon: ShieldCheck },
  { id: 'Exits', label: 'Exits & Secondary Market', icon: Clock },
] as const

const POPULAR_SEARCH_CHIPS = [
  'Minimum investment',
  'Golden Visa AED 2M',
  'Monthly dividends',
  'DFSA regulation',
  'Exit Windows',
  'Who can invest',
]

export function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'what-is-stake': true, // Open first question by default
  })
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, 'yes' | 'no'>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const markHelpful = (id: string, value: 'yes' | 'no') => {
    setHelpfulFeedback((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Filtered Questions
  const filteredFaqs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return FAQ_DATABASE.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.bulletPoints.some((b) => b.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: FAQ_DATABASE.length }
    FAQ_DATABASE.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <div className="bg-[#FAFBFB] text-[#0F172A] min-h-screen">
      
      {/* =========================================================================
          PREMIUM HERO BANNER: Obsidian Midnight with Emerald Radiant Glow
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#08101C] text-white pt-16 sm:pt-22 pb-16 sm:pb-24 px-5 sm:px-8 border-b border-white/10">
        
        {/* Ambient Radial Lights */}
        <div
          className="pointer-events-none absolute -left-48 top-0 size-[500px] rounded-full bg-[#00A663]/15 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-48 bottom-0 size-[450px] rounded-full bg-blue-500/10 blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/15 px-4 py-1.5 text-xs font-bold text-[#34D399] backdrop-blur-md">
            <HelpCircle size={14} className="text-[#34D399]" />
            <span className="tracking-wide uppercase font-mono text-[11px]">STAKE HELP CENTER &bull; 24/7 INVESTOR SUPPORT</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-white leading-[1.12]">
            How can we help you <br className="hidden sm:block" />
            <span className="text-[#00A663]">invest with confidence?</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Clear, straightforward answers about fractional Dubai real estate, monthly dividend payouts, DFSA regulation, and the UAE 10-Year Golden Visa.
          </p>

          {/* Search Box with Clear Button & Real-time Count */}
          <div className="pt-2 max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-[#00A663] transition-colors" />
              <input
                type="text"
                placeholder="Search questions (e.g. minimum investment, Golden Visa, dividends, DFSA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-24 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00A663] focus:bg-white/[0.1] backdrop-blur-md transition-all shadow-xl"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              ) : (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[11px] font-mono font-medium text-slate-400 bg-white/[0.08] px-2 py-0.5 rounded-md border border-white/10">
                  <span>{filteredFaqs.length} FAQs</span>
                </div>
              )}
            </div>

            {/* Popular Search Chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Popular:</span>
              {POPULAR_SEARCH_CHIPS.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setSearchQuery(chip)
                    setSelectedCategory('All')
                  }}
                  className="rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 px-3 py-1 text-slate-300 hover:text-white transition-colors cursor-pointer text-[11.5px]"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          TOP 4 TOPIC BENTO CARDS: Quick Jump to Main Themes
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div
            onClick={() => {
              setSelectedCategory('Getting Started')
              setSearchQuery('')
            }}
            className="rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.08] shadow-md hover:shadow-xl hover:border-[#00A663]/40 transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-xl bg-[#E8FAF0] text-[#00A663] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles size={20} />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">Getting Started</h3>
            <p className="text-[11px] text-gray-500 mt-1 leading-snug">Eligibility, passports &amp; AED 500 minimum</p>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Dividends')
              setSearchQuery('')
            }}
            className="rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.08] shadow-md hover:shadow-xl hover:border-[#00A663]/40 transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-xl bg-[#E8FAF0] text-[#00A663] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Wallet size={20} />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">Monthly Dividends</h3>
            <p className="text-[11px] text-gray-500 mt-1 leading-snug">Payout dates, withdrawals &amp; returns</p>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Golden Visa')
              setSearchQuery('')
            }}
            className="rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.08] shadow-md hover:shadow-xl hover:border-[#00A663]/40 transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-xl bg-[#E8FAF0] text-[#00A663] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award size={20} />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">UAE Golden Visa</h3>
            <p className="text-[11px] text-gray-500 mt-1 leading-snug">AED 2M threshold &amp; family residency</p>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Safety')
              setSearchQuery('')
            }}
            className="rounded-2xl bg-white p-4 sm:p-5 border border-black/[0.08] shadow-md hover:shadow-xl hover:border-[#00A663]/40 transition-all cursor-pointer group"
          >
            <div className="size-10 rounded-xl bg-[#E8FAF0] text-[#00A663] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-tight">DFSA &amp; Safety</h3>
            <p className="text-[11px] text-gray-500 mt-1 leading-snug">DLD title deeds &amp; segregated custody</p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN FAQ INTERFACE: Sticky Category Tabs + Rich Accordion
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT SIDEBAR (Desktop Tabs + Concierge Card) ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Category Navigation List */}
            <div className="rounded-3xl bg-white p-3 border border-black/[0.08] shadow-xs space-y-1">
              <p className="px-3 pt-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Browse Categories
              </p>
              {CATEGORY_TABS.map((tab) => {
                const Icon = tab.icon
                const count = categoryCounts[tab.id] || 0
                const isSelected = selectedCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(tab.id)
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={16} className={isSelected ? 'text-[#00A663]' : 'text-gray-400'} />
                      <span>{tab.label}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Support Concierge Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1523] to-[#060D17] p-6 text-white border border-white/10 shadow-lg space-y-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-[#00A663] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  LIVE INVESTOR DESK
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">Need personal guidance?</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Our Dubai-based investment advisors are on hand 7 days a week to review properties with you.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href="mailto:contact@stake.properties"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-xs font-bold text-white transition-colors"
                >
                  <Mail size={14} className="text-[#00A663]" />
                  <span>Email: contact@stake.properties</span>
                </a>
                <Link
                  href="/golden-visa"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#00A663] hover:bg-[#008f55] text-xs font-bold text-white shadow-xs transition-colors"
                >
                  <Award size={14} />
                  <span>Book Golden Visa Call</span>
                </Link>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (Rich Accordion Items) ================= */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Header with active filter & count */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Showing</span>
                <span className="rounded-full bg-[#E8FAF0] px-3 py-0.5 text-xs font-bold text-[#00A663]">
                  {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500 font-mono">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
              </span>
            </div>

            {/* Empty State */}
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-300 p-8 space-y-3">
                <div className="size-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                  <Search size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">No answers matching &quot;{searchQuery}&quot;</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
                  Try broader keywords like &quot;dividend&quot;, &quot;passport&quot;, or &quot;SPV&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#00A663] text-white px-4 py-2 text-xs font-bold hover:bg-[#008f55] transition-colors cursor-pointer"
                >
                  <span>Reset filters</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = !!openItems[faq.id]
                  const feedback = helpfulFeedback[faq.id]

                  return (
                    <div
                      key={faq.id}
                      className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'border-[#00A663]/40 bg-white shadow-lg ring-1 ring-[#00A663]/15'
                          : 'border-black/[0.08] bg-white hover:border-black/20 shadow-xs'
                      }`}
                    >
                      {/* Accordion Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleItem(faq.id)}
                        className="w-full flex items-start sm:items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 group"
                        aria-expanded={isOpen}
                      >
                        <div className="space-y-1.5 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-[#E8FAF0] px-2.5 py-0.5 text-[10px] font-bold text-[#00A663] uppercase tracking-wider">
                              {faq.category}
                            </span>
                            {faq.badge && (
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                                {faq.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight group-hover:text-[#00A663] transition-colors leading-snug">
                            {faq.question}
                          </h3>
                        </div>

                        <div className={`size-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 transition-all ${
                          isOpen ? 'bg-[#00A663] text-white border-[#00A663] rotate-180' : 'bg-gray-50 text-gray-500'
                        }`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>

                      {/* Accordion Expanded Body */}
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 border-t border-gray-100 text-[#0F172A] animate-in fade-in duration-200">
                          
                          {/* Core Summary Punchline */}
                          <p className="text-sm sm:text-[15px] font-semibold text-[#0F172A] leading-relaxed pt-2">
                            {faq.summary}
                          </p>

                          {/* Bullet Points with Checkmarks */}
                          <div className="space-y-2 rounded-2xl bg-gray-50/70 p-4 border border-black/[0.04]">
                            {faq.bulletPoints.map((point, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                <CheckCircle2 size={16} className="text-[#00A663] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Link + Helpful Feedback Row */}
                          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-100">
                            {faq.actionLink ? (
                              <Link
                                href={faq.actionLink.href}
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00A663] hover:underline"
                              >
                                <span>{faq.actionLink.label}</span>
                                <ArrowRight size={14} />
                              </Link>
                            ) : (
                              <span />
                            )}

                            {/* Micro-Feedback: Was this helpful? */}
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>Was this helpful?</span>
                              <button
                                type="button"
                                onClick={() => markHelpful(faq.id, 'yes')}
                                className={`size-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                                  feedback === 'yes'
                                    ? 'bg-[#E8FAF0] text-[#00A663] border-[#00A663]'
                                    : 'border-gray-200 text-gray-400 hover:text-black hover:border-gray-300'
                                }`}
                                aria-label="Helpful"
                              >
                                <ThumbsUp size={12} />
                              </button>
                              <button
                                type="button"
                                onClick={() => markHelpful(faq.id, 'no')}
                                className={`size-7 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${
                                  feedback === 'no'
                                    ? 'bg-red-50 text-red-600 border-red-300'
                                    : 'border-gray-200 text-gray-400 hover:text-black hover:border-gray-300'
                                }`}
                                aria-label="Not helpful"
                              >
                                <ThumbsDown size={12} />
                              </button>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Bottom Support Callout Card */}
            <div className="mt-12 rounded-3xl bg-[#08101C] p-8 sm:p-10 text-white relative overflow-hidden border border-white/10 shadow-xl">
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <span className="rounded-full bg-[#00A663] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black">
                    INSTANT SUPPORT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Still have questions about investing?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Our team of investment specialists is available to walk you through property documentation, expected returns, and the UAE Golden Visa.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A663] hover:bg-[#008f55] text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                  >
                    <span>Browse Properties</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-[#00A663]/15 blur-[90px]"
                aria-hidden="true"
              />
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
