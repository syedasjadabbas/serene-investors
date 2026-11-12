'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Scale,
  Sparkles,
  Building2,
  Copy,
  Check,
  X,
  Info,
} from 'lucide-react'

interface GlossaryItem {
  id: string
  term: string
  category: 'Returns' | 'Legal' | 'Regulation' | 'Metrics' | 'Ownership' | 'Liquidity'
  shortDef: string
  fullDef: string
  formulaOrRule?: string
  stakeExample: string
  tags: string[]
}

const GLOSSARY_TERMS: GlossaryItem[] = [
  {
    id: 'irr',
    term: 'Annualised Return (IRR)',
    category: 'Returns',
    shortDef: 'Total projected compound annual return combining rental dividends and property value growth.',
    fullDef: 'The Internal Rate of Return (IRR) is the universal institutional benchmark for real estate. It reflects the annual rate of growth that an investment generates over its full lifecycle, factoring in both monthly rental yield distributions and capital appreciation realised upon the property sale.',
    formulaOrRule: 'IRR = Discount rate making Net Present Value (NPV) of all cashflows equal to 0',
    stakeExample: 'A Dubai Marina apartment on Stake with a 10.2% IRR combines approx. 6.8% annual rental dividend + 3.4% projected annual capital appreciation.',
    tags: ['IRR', 'Yield', 'Capital Growth', 'Performance'],
  },
  {
    id: 'net-yield',
    term: 'Net Rental Yield',
    category: 'Returns',
    shortDef: 'The actual cash dividend paid to investors after all building expenses and management costs.',
    fullDef: 'Net rental yield calculates the exact annual income distributed to property shareholders after deducting all mandatory service charges, building maintenance, property insurance, and platform management fees. This is the true cash flow received in your digital wallet.',
    formulaOrRule: 'Net Yield = (Annual Rent - Service Charges - Management Fees) ÷ Total Property Cost × 100',
    stakeExample: 'If a Downtown Dubai property generates AED 100,000 rent and incurs AED 20,000 in service charges/fees, the net return of AED 80,000 represents an 8.0% Net Yield on a 1M purchase.',
    tags: ['Cash Flow', 'Dividends', 'Rent', 'Returns'],
  },
  {
    id: 'gross-yield',
    term: 'Gross Rental Yield',
    category: 'Returns',
    shortDef: 'Total headline rental income expressed as a percentage of purchase price before expenses.',
    fullDef: 'The unadjusted annual rent collected from a tenant before any operating costs, service fees, or taxes are deducted. While commonly quoted by property brokers, gross yield is higher than the actual money investors take home.',
    formulaOrRule: 'Gross Yield = (Total Annual Contract Rent ÷ Purchase Price) × 100',
    stakeExample: 'Brokers advertise 9.5% gross yield, but Stake models deduct all maintenance to show you the honest net yield (e.g. 7.4%).',
    tags: ['Yield', 'Rent', 'Comparison'],
  },
  {
    id: 'spv',
    term: 'Special Purpose Vehicle (SPV)',
    category: 'Legal',
    shortDef: 'An independent corporate entity created solely to hold legal title to a single property.',
    fullDef: 'A Special Purpose Vehicle (SPV) is a legally ring-fenced private corporate entity incorporated in the Dubai International Financial Centre (DIFC). When you invest on Stake, you acquire equity shares in the specific SPV that holds the registered title deed with the Dubai Land Department (DLD).',
    formulaOrRule: '1 Property = 1 Dedicated SPV (100% Bankruptcy Remote)',
    stakeExample: 'If you invest AED 2,000 in a City Walk apartment, your ownership is officially recorded as shares in the DIFC SPV that holds that exact building unit deed.',
    tags: ['DIFC', 'SPV', 'Title Deed', 'Asset Protection'],
  },
  {
    id: 'title-deed',
    term: 'Title Deed (DLD)',
    category: 'Legal',
    shortDef: 'Government-certified certificate of property ownership issued by the Dubai Land Department.',
    fullDef: 'The definitive government proof of property ownership issued by the Dubai Land Department (DLD). For every property funded on Stake, an official electronic title deed is minted under the dedicated SPV, guaranteeing unassailable institutional ownership.',
    formulaOrRule: 'Issued & verified by Dubai Land Department (DLD)',
    stakeExample: 'Investors can download the official DLD title deed registration document directly from the documents tab on each property listing.',
    tags: ['DLD', 'Legal', 'Government', 'Ownership'],
  },
  {
    id: 'dfsa',
    term: 'DFSA Regulation',
    category: 'Regulation',
    shortDef: 'Licensing and oversight by the Dubai Financial Services Authority in the DIFC.',
    fullDef: 'The Dubai Financial Services Authority (DFSA) is the independent financial regulator of the DIFC. Stake is licensed and strictly regulated by the DFSA to operate an investment crowdfunding platform, ensuring rigorous client money protection, capital adequacy, and governance.',
    formulaOrRule: 'DFSA Firm Reference No. F006095',
    stakeExample: 'Stake is audited annually and holds an Islamic Finance Window endorsement from the DFSA.',
    tags: ['DFSA', 'DIFC', 'Licence', 'Compliance'],
  },
  {
    id: 'cma',
    term: 'CMA Saudi Arabia Regulation',
    category: 'Regulation',
    shortDef: 'Authorization by the Capital Market Authority to operate real estate funds in Saudi Arabia.',
    fullDef: 'The Capital Market Authority (CMA) oversees securities and collective investment schemes in the Kingdom of Saudi Arabia. Stake is authorized under the CMA FinTech Lab permit to launch real estate investment fund opportunities in and from the Kingdom.',
    formulaOrRule: 'CMA FinTech Lab Permit: 05-53-2023',
    stakeExample: 'Enables cross-border diversification across both Dubai high-yield rentals and Saudi institutional expansion.',
    tags: ['CMA', 'Saudi Arabia', 'Vision 2030', 'Compliance'],
  },
  {
    id: 'capital-appreciation',
    term: 'Capital Appreciation',
    category: 'Returns',
    shortDef: 'Growth in the market value of the property from purchase to eventual exit/sale.',
    fullDef: 'The increase in the market resale value of real estate over the typical 3 to 5-year investment horizon. When a property is sold at maturity, all net capital gains above the acquisition cost are distributed directly to investors proportional to their fractional shareholdings.',
    formulaOrRule: 'Capital Gain = Net Sale Proceeds - Original Acquisition Cost',
    stakeExample: 'A Palm Jumeirah villa purchased at AED 3,000,000 and sold 3 years later for AED 3,600,000 delivers an extra 20% capital gain distributed to all shareholders.',
    tags: ['Growth', 'Capital Gains', 'Exit', 'Wealth'],
  },
  {
    id: 'exit-windows',
    term: 'Exit Windows (Secondary Market)',
    category: 'Liquidity',
    shortDef: 'Bi-annual trading periods allowing investors to sell property shares early to other members.',
    fullDef: 'Stake provides liquidity twice a year (typically in May and November) through designated Exit Windows. Investors who wish to unlock cash before the standard 3-5 year holding maturity can list their shares on the internal marketplace for other community members to purchase at market valuations.',
    formulaOrRule: 'Bi-annual liquidity (May & November) • 0% early exit penalty',
    stakeExample: 'Need cash early? During the May Exit Window, you can list your fractional shares and receive funds straight to your digital wallet.',
    tags: ['Liquidity', 'Exit', 'Secondary Market', 'Trading'],
  },
  {
    id: 'fractional-ownership',
    term: 'Fractional Ownership',
    category: 'Ownership',
    shortDef: 'Co-owning high-value institutional properties starting from just AED 500 (~$136).',
    fullDef: 'A digital investment model that divides premium real estate into fractional equity units. Rather than needing millions of dirhams to buy an entire apartment, individual investors can own proportionate shares in luxury properties while enjoying the exact same dividend and appreciation rights as a whole-unit owner.',
    formulaOrRule: 'Ownership % = Your Investment Amount ÷ Total Property Cost',
    stakeExample: 'For AED 1,000, you co-own a luxury Burj Khalifa-view apartment and receive monthly rent deposits proportional to your AED 1,000 share.',
    tags: ['Fractional', 'Accessibility', 'Equity', 'Diversification'],
  },
  {
    id: 'occupancy-rate',
    term: 'Occupancy Rate',
    category: 'Metrics',
    shortDef: 'The percentage of the year a property is actively tenanted and generating rental income.',
    fullDef: 'A vital performance metric measuring rental consistency. A 95% occupancy rate indicates the property was vacant for less than 18 days across the entire calendar year. High occupancy in prime urban hubs safeguards steady dividend cashflow.',
    formulaOrRule: 'Occupancy % = (Days Tenanted ÷ 365 Days) × 100',
    stakeExample: 'Stake targets prime Dubai micro-markets (Downtown, Marina, DIFC) with historical occupancy exceeding 94%.',
    tags: ['Tenancy', 'Occupancy', 'Rental Income', 'Due Diligence'],
  },
  {
    id: 'golden-visa',
    term: 'UAE Golden Visa',
    category: 'Ownership',
    shortDef: '10-year renewable UAE residency visa granted through property investments of AED 2,000,000+.',
    fullDef: 'A long-term residency visa issued by the UAE government to real estate investors who allocate a minimum of AED 2,000,000 (~$545,000) in property assets. On Stake, you can reach this threshold by aggregating investments across multiple diversified fractional properties.',
    formulaOrRule: 'Minimum cumulative real estate investment: AED 2,000,000 (~$545,000)',
    stakeExample: 'Instead of buying a single AED 2M apartment, Stake allows you to spread AED 2M across 15 high-yielding properties and qualify for full 10-year residency.',
    tags: ['Residency', 'Golden Visa', 'Dubai', 'UAE'],
  },
  {
    id: 'rics',
    term: 'RICS Independent Valuation',
    category: 'Metrics',
    shortDef: 'Impartial quarterly property appraisals conducted by certified international surveyors.',
    fullDef: 'The Royal Institution of Chartered Surveyors (RICS) sets the global gold standard for professional land and property valuations. Every asset on Stake undergoes independent RICS-accredited appraisals on a quarterly basis to guarantee transparent, unbiased mark-to-market valuations.',
    formulaOrRule: 'Audited quarterly by independent RICS-certified appraisal firms',
    stakeExample: 'Your portfolio dashboard automatically reflects the latest quarterly RICS appraisal numbers so you know exactly what your shares are worth.',
    tags: ['RICS', 'Valuation', 'Audit', 'Transparency'],
  },
  {
    id: 'ejari',
    term: 'Ejari Tenancy Registration',
    category: 'Legal',
    shortDef: 'Mandatory government electronic registration system for all rental leases in Dubai.',
    fullDef: 'Ejari (Arabic for "my rent") is the Dubai Land Department’s official electronic registration system. It records and legalizes all residential and commercial tenancy contracts, establishing legal protections for both landlord and tenant under Dubai tenancy laws.',
    formulaOrRule: 'Mandatory DLD regulatory registration for all UAE leases',
    stakeExample: 'All tenancies across Stake properties are registered on Ejari, guaranteeing enforceable rental contracts and prompt dispute resolution.',
    tags: ['Ejari', 'DLD', 'Lease', 'Tenant'],
  },
  {
    id: 'service-charges',
    term: 'Service Charges',
    category: 'Metrics',
    shortDef: 'Annual community management and building maintenance fees regulated by RERA.',
    fullDef: 'Mandatory annual maintenance fees paid to building management for common area upkeep (elevators, swimming pools, 24/7 security, air conditioning, and capital reserve sinking funds). In Dubai, service charges are strictly regulated and audited by RERA.',
    formulaOrRule: 'Calculated as AED per sq. ft. of property area',
    stakeExample: 'Stake accounts for service charges in advance in our financial models so dividends paid to your wallet are 100% net of these costs.',
    tags: ['Expenses', 'Maintenance', 'RERA', 'Building'],
  },
  {
    id: 'cap-rate',
    term: 'Capitalization Rate (Cap Rate)',
    category: 'Metrics',
    shortDef: 'Ratio of Net Operating Income to the current market value of an asset.',
    fullDef: 'The Cap Rate is an essential institutional ratio used to evaluate the natural profitability of an income property without factoring in debt or mortgages. A higher Cap Rate indicates stronger relative annual cash returns compared to property cost.',
    formulaOrRule: 'Cap Rate = Net Operating Income (NOI) ÷ Current Market Value × 100',
    stakeExample: 'Dubai prime residential assets typically trade at healthy Cap Rates of 6.5% - 8.5%, significantly outperforming London (3.2%) and New York (4.1%).',
    tags: ['Cap Rate', 'Metrics', 'Profitability', 'Benchmarking'],
  },
  {
    id: 'noi',
    term: 'Net Operating Income (NOI)',
    category: 'Metrics',
    shortDef: 'Total revenue generated by a property minus all essential operating expenses.',
    fullDef: 'A calculation used to analyze the earnings power of real estate. NOI takes into account all collected rental revenues and subtracts all necessary operating expenses such as service charges, insurance, and utilities, but excludes financing costs.',
    formulaOrRule: 'NOI = Total Gross Revenues - Operating Expenses',
    stakeExample: 'On Stake listings, NOI is transparently displayed on the financial projections sheet with full expense line items.',
    tags: ['NOI', 'Revenue', 'Operating Income'],
  },
  {
    id: 'cash-on-cash',
    term: 'Cash-on-Cash Return',
    category: 'Returns',
    shortDef: 'The rate of cash income earned on the exact cash amount you personally invested.',
    fullDef: 'A straightforward metric measuring the annual dollar-for-dollar cash income returned relative to the actual cash capital you deployed. Because Stake offers fractional equity without leverage, Cash-on-Cash return closely mirrors your Net Dividend Yield.',
    formulaOrRule: 'Cash-on-Cash Return = Annual Net Cash Flow ÷ Total Cash Invested × 100',
    stakeExample: 'Investing AED 10,000 cash and collecting AED 780 net rent per year equals a 7.8% Cash-on-Cash Return.',
    tags: ['Cash Flow', 'Return', 'Cash-on-Cash'],
  },
  {
    id: 'shariah',
    term: 'Islamic Finance (Shariah Window)',
    category: 'Regulation',
    shortDef: 'Ethical investment framework adhering to principles of Islamic jurisprudence.',
    fullDef: 'An endorsement granted under DFSA rules verifying that Stake’s fractional property investment models adhere to Shariah principles—meaning investments are asset-backed, free from prohibited usury (riba), and exclude non-compliant activities.',
    formulaOrRule: 'DFSA Islamic Finance Window Endorsement',
    stakeExample: 'Investors can invest with total peace of mind knowing that fractional real estate is inherently asset-backed and ethically structured.',
    tags: ['Islamic Finance', 'Shariah', 'Ethical', 'Compliance'],
  },
  {
    id: 'escrow',
    term: 'Escrow Account (RERA)',
    category: 'Regulation',
    shortDef: 'Government-mandated bank trust account safeguarding all transaction and investor funds.',
    fullDef: 'Under UAE real estate law (Law No. 8 of 2007), all real estate and development funds must be deposited into a licensed escrow trust account approved by the Dubai Real Estate Regulatory Agency (RERA). Funds are ring-fenced and disbursed only upon verified milestones.',
    formulaOrRule: 'Tier-1 Segregated Bank Trust Custody',
    stakeExample: 'When you fund an investment on Stake, your capital rests in segregated client escrow accounts until the property SPV closes.',
    tags: ['Escrow', 'RERA', 'Custody', 'Safety'],
  },
  {
    id: 'holding-period',
    term: 'Target Holding Period',
    category: 'Liquidity',
    shortDef: 'The recommended timeframe (usually 3–5 years) to optimize rental compounding and market value.',
    fullDef: 'The planned duration during which the property will be owned, leased, and managed by Stake before the asset is listed for sale to capture capital appreciation. Investors receive steady monthly dividends throughout the entire holding term.',
    formulaOrRule: 'Typical platform horizon: 3 to 5 Years',
    stakeExample: 'A 3-year holding term allows you to collect 36 consecutive monthly rent distributions while letting Dubai market property values appreciate.',
    tags: ['Strategy', 'Holding Period', 'Timeline', 'Compounding'],
  },
  {
    id: 'pre-funded',
    term: 'Pre-Funded Allocations',
    category: 'Ownership',
    shortDef: 'Prime properties secured in advance by Stake with locked pricing before launch.',
    fullDef: 'To ensure investors never lose out on fast-moving deals, Stake’s acquisitions committee conducts due diligence and commits deposits to lock in high-yield properties in advance, allowing retail investors to participate in institutional off-market pricing.',
    formulaOrRule: 'Institutional pre-vetted acquisition pipeline',
    stakeExample: 'Properties marked "Pre-Funded" are already under firm purchase contract with keys secured.',
    tags: ['Deals', 'Pipeline', 'Exclusive', 'Acquisitions'],
  },
  {
    id: 'distribution-frequency',
    term: 'Distribution Frequency',
    category: 'Returns',
    shortDef: 'The regular schedule by which rental dividends are paid into your investor wallet.',
    fullDef: 'The cadence at which collected tenant rent is deposited into investor accounts. On Stake, residential rental distributions are credited monthly, giving investors a predictable passive income stream that can be withdrawn or reinvested.',
    formulaOrRule: 'Credited directly to wallet on the 1st of every month',
    stakeExample: 'Your monthly dividend notification arrives on your phone, and you can withdraw to your local bank account with a single tap.',
    tags: ['Dividends', 'Monthly Pay', 'Passive Income'],
  },
  {
    id: 'secondary-market',
    term: 'Secondary Trading Market',
    category: 'Liquidity',
    shortDef: 'The peer-to-peer order book where investors buy and sell existing property shares.',
    fullDef: 'An integrated marketplace allowing fractional property shareholders to trade their equity stakes with other registered users, creating true liquidity for an asset class that is historically illiquid.',
    formulaOrRule: 'Peer-to-peer matched order book during bi-annual windows',
    stakeExample: 'Want to buy into a sold-out property from 2024? You can buy existing shares from other community members during the secondary exit window.',
    tags: ['Marketplace', 'Trading', 'Order Book', 'Liquidity'],
  },
]

const CATEGORIES = [
  'All',
  'Returns',
  'Legal',
  'Regulation',
  'Metrics',
  'Ownership',
  'Liquidity',
] as const

export function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeLetter, setActiveLetter] = useState<string>('ALL')

  // Alphabet letters available
  const alphabet = useMemo(() => {
    const letters = new Set<string>()
    GLOSSARY_TERMS.forEach((t) => letters.add(t.term[0].toUpperCase()))
    return ['ALL', ...Array.from(letters).sort()]
  }, [])

  // Filtered terms
  const filtered = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      const q = search.toLowerCase().trim()
      const matchesSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.shortDef.toLowerCase().includes(q) ||
        item.fullDef.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory

      const matchesLetter =
        activeLetter === 'ALL' || item.term[0].toUpperCase() === activeLetter

      return matchesSearch && matchesCategory && matchesLetter
    })
  }, [search, selectedCategory, activeLetter])

  const copyDefinition = (item: GlossaryItem) => {
    const text = `${item.term} (${item.category}):\n${item.fullDef}\n\nExample: ${item.stakeExample}`
    navigator.clipboard.writeText(text)
    setCopiedId(item.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: GLOSSARY_TERMS.length }
    GLOSSARY_TERMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <div className="bg-[#FAFBFB] text-[#0F172A] min-h-screen">
      
      {/* =========================================================================
          PREMIUM HERO BANNER: Deep Midnight with Radiant Emerald Glow
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#08101C] text-white pt-16 sm:pt-22 pb-16 sm:pb-24 px-5 sm:px-8 border-b border-white/10">
        
        {/* Ambient Radial Mesh Lights */}
        <div
          className="pointer-events-none absolute -left-48 top-0 size-[500px] rounded-full bg-[#00A663]/15 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-48 bottom-0 size-[450px] rounded-full bg-blue-500/10 blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          
          {/* Top Academy Trust Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/15 px-4 py-1.5 text-xs font-bold text-[#34D399] backdrop-blur-md">
            <BookOpen size={14} className="text-[#34D399]" />
            <span className="tracking-wide uppercase font-mono text-[11px]">STAKE ACADEMY &bull; INVESTOR GLOSSARY</span>
          </div>

          {/* Master Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.035em] text-white leading-[1.12]">
            Demystify Modern <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Real Estate &amp;{' '}
            </span>
            <span className="text-[#00A663]">FinTech Investing</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Master the financial formulas, legal ownership vehicles, and regulatory benchmarks that power fractional property wealth creation.
          </p>

          {/* Institutional Trust KPI Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1">
              <ShieldCheck size={13} className="text-[#00A663]" />
              <span>DFSA &amp; DLD Verified</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1">
              <Scale size={13} className="text-[#00A663]" />
              <span>RICS Valuations Standard</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-3 py-1">
              <Sparkles size={13} className="text-[#00A663]" />
              <span>25+ Institutional Terms</span>
            </span>
          </div>

          {/* Search Box with Real-time Count */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-[#00A663] transition-colors" />
              <input
                type="text"
                placeholder="Search financial terms, metrics, laws (e.g. IRR, SPV, Yield, Golden Visa)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-white placeholder:text-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00A663] focus:bg-white/[0.1] backdrop-blur-md transition-all shadow-xl"
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 size-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              ) : (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[11px] font-mono font-medium text-slate-400 bg-white/[0.08] px-2 py-0.5 rounded-md border border-white/10">
                  <span>{filtered.length} terms</span>
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat)
                    setActiveLetter('ALL')
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#00A663] text-white shadow-lg shadow-[#00A663]/30 scale-102'
                      : 'bg-white/[0.06] border border-white/10 text-slate-300 hover:bg-white/[0.12] hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isSelected ? 'bg-black/25 text-white' : 'bg-white/10 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SPOTLIGHT FEATURE BANNER: Core Difference Between Yield & Appreciation
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F1D30] to-[#0A1422] p-6 sm:p-8 border border-white/10 text-white shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#00A663] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">
                  KEY CONCEPT
                </span>
                <span className="text-xs text-slate-400">Total Return Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Net Yield vs. Capital Appreciation vs. IRR
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                On Stake, real estate delivers two distinct wealth streams: monthly rental dividends in cash, plus capital appreciation on property sale. Together, they compound into your total annualised IRR.
              </p>
            </div>

            {/* Visual Formula Stack */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 bg-black/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="text-center px-3">
                <p className="text-xs font-bold text-emerald-400 font-mono">Net Yield</p>
                <p className="text-lg font-black text-white">~6% - 9%</p>
                <p className="text-[10px] text-slate-400">Monthly Cash</p>
              </div>
              <span className="text-xl font-bold text-slate-500">+</span>
              <div className="text-center px-3">
                <p className="text-xs font-bold text-blue-400 font-mono">Appreciation</p>
                <p className="text-lg font-black text-white">~3% - 6%</p>
                <p className="text-[10px] text-slate-400">Exit Gain</p>
              </div>
              <span className="text-xl font-bold text-slate-500">=</span>
              <div className="text-center px-3 bg-[#00A663]/20 rounded-xl py-1 border border-[#00A663]/40">
                <p className="text-xs font-bold text-[#34D399] font-mono">Target IRR</p>
                <p className="text-lg font-black text-[#34D399]">10% - 14%</p>
                <p className="text-[10px] text-emerald-200">Total Return</p>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-[#00A663]/15 blur-[80px]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* =========================================================================
          ALPHABETICAL QUICK-JUMP FILTER BAR
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 flex-wrap gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {alphabet.map((letter) => {
              const isActive = activeLetter === letter
              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setActiveLetter(letter)}
                  className={`size-8 sm:size-9 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'text-gray-500 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  {letter}
                </button>
              )
            })}
          </div>

          <div className="text-xs font-semibold text-gray-500">
            Showing <span className="font-bold text-[#0F172A]">{filtered.length}</span> of {GLOSSARY_TERMS.length} terms
          </div>
        </div>
      </section>

      {/* =========================================================================
          TERMS GRID: 2-Column Responsive High-End Cards
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-20">
        
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 p-8">
            <div className="size-16 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">No definitions match &quot;{search}&quot;</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Try searching for common metrics like IRR, Yield, SPV, DFSA, or Golden Visa.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('')
                setSelectedCategory('All')
                setActiveLetter('ALL')
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#00A663] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#008f55] transition-colors cursor-pointer shadow-xs"
            >
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((item) => {
              const isCopied = copiedId === item.id
              
              // Category badge colors
              let catBadgeClass = 'bg-gray-100 text-gray-700'
              if (item.category === 'Returns') catBadgeClass = 'bg-[#E8FAF0] text-[#00A663] border border-[#00A663]/20'
              if (item.category === 'Legal') catBadgeClass = 'bg-blue-50 text-blue-700 border border-blue-200'
              if (item.category === 'Regulation') catBadgeClass = 'bg-purple-50 text-purple-700 border border-purple-200'
              if (item.category === 'Metrics') catBadgeClass = 'bg-amber-50 text-amber-800 border border-amber-200'
              if (item.category === 'Ownership') catBadgeClass = 'bg-indigo-50 text-indigo-700 border border-indigo-200'
              if (item.category === 'Liquidity') catBadgeClass = 'bg-teal-50 text-teal-700 border border-teal-200'

              return (
                <div
                  key={item.id}
                  className="rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-black/15 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${catBadgeClass}`}>
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight group-hover:text-[#00A663] transition-colors">
                          {item.term}
                        </h3>
                      </div>

                      {/* Quick Copy Button */}
                      <button
                        type="button"
                        onClick={() => copyDefinition(item)}
                        title="Copy definition"
                        className="size-8 rounded-lg border border-gray-200 text-gray-400 hover:text-black hover:border-gray-400 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                      >
                        {isCopied ? <Check size={14} className="text-[#00A663]" /> : <Copy size={14} />}
                      </button>
                    </div>

                    {/* Short definition punchline */}
                    <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                      {item.shortDef}
                    </p>

                    {/* In-depth definition */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.fullDef}
                    </p>

                    {/* Formula / Legal standard box (if applicable) */}
                    {item.formulaOrRule && (
                      <div className="rounded-xl bg-[#F8FAF9] p-3 border border-black/[0.06] flex items-start gap-2.5">
                        <Info size={15} className="text-[#00A663] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Formula &bull; Standard</p>
                          <p className="text-xs font-mono font-bold text-[#0F172A] mt-0.5 leading-snug">
                            {item.formulaOrRule}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Stake Real-World Demonstration Context */}
                    <div className="rounded-2xl bg-emerald-50/60 p-3.5 border border-emerald-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#00A663]">
                        <Building2 size={13} />
                        <span>Example on Stake</span>
                      </div>
                      <p className="text-xs text-[#064E3B] leading-relaxed">
                        {item.stakeExample}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Tags Strip */}
                  <div className="pt-5 mt-5 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => setSearch(tag)}
                        className="rounded-md bg-gray-100 hover:bg-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-600 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>
        )}

        {/* =========================================================================
            BOTTOM CALL TO ACTION: Direct path to live properties
            ========================================================================= */}
        <div className="mt-14 rounded-3xl bg-[#08101C] border border-white/10 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="rounded-full bg-[#00A663] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black">
                PRACTICE WHAT YOU LEARN
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Put financial knowledge to work with live Dubai properties
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Review verified RICS appraisals, DIFC SPV title deeds, and projected net yields across currently available listings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A663] hover:bg-[#008f55] text-white px-7 py-4 text-sm font-bold shadow-lg shadow-[#00A663]/30 transition-all active:scale-95"
              >
                <span>Explore Properties</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white px-6 py-4 text-sm font-semibold transition-all"
              >
                <span>Read FAQs</span>
              </Link>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-[#00A663]/15 blur-[100px]"
            aria-hidden="true"
          />
        </div>

      </section>

    </div>
  )
}
