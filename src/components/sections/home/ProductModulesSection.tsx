'use client'

import { Building2, Layers, Play, CheckCircle2, Tag } from 'lucide-react'
import { Link } from '@/components/ui/Link'
import { PhoneFrame } from '@/components/ui/mockups/PhoneFrame'
import { withBase } from '@/lib/asset'

const STATS = [
  { prefix: '2', suffix: 'M+', label: 'Registered users' },
  { prefix: 'AED 1.5', suffix: 'B+', label: 'Property transactions' },
  { prefix: '202', suffix: '+', label: 'User nationalities' },
  { prefix: 'AED 236.9', suffix: 'M+', label: 'Total distributed' },
]

export function ProductModulesSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-bg py-20 md:py-28 lg:py-32 border-b border-ink/[0.08]"
      aria-label="Investment Products"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8">
        {/* Centered Header & 4 Key Stats */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base font-semibold text-[#00A663] tracking-tight">
            Leading digital real estate platform
          </p>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.14] tracking-tight text-[#0F172A] text-balance">
            Build a global and diversified
            <br />
            real estate portfolio
          </h2>

          {/* 4 Key Stats Row */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-none">
                  <span>{stat.prefix}</span>
                  <span className="text-[#00A663]">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-Side Large Rounded Cards (Dual columns) */}
        <div className="mt-14 lg:mt-18 grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
          {/* Card 1: Properties */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-ink/[0.08] bg-surface p-7 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/25">
            <div>
              {/* Icon & Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-3.5 py-1 text-xs font-semibold text-emerald-900">
                <Building2 size={14} className="text-primary" />
                <span>Properties</span>
              </div>

              {/* Headline & Description */}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Invest in properties in prime areas
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted max-w-[42ch]">
                Own shares of individual properties with high-yield and appreciation potential, verified on the UK Land Registry.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/properties"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent active:scale-95"
                >
                  Learn more
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:bg-bg-warm active:scale-95"
                >
                  <Play size={13} className="text-primary fill-primary" />
                  <span>Watch how it works</span>
                </Link>
              </div>
            </div>

            {/* Floating Phone Visual (Peeking from bottom of card) */}
            <div className="mt-10 pt-4 flex justify-center overflow-hidden -mb-10 sm:-mb-14">
              <div className="w-[min(100%,320px)] sm:w-[330px] transition-transform duration-500 ease-out group-hover:-translate-y-3">
                <PhoneFrame className="shadow-2xl" showHomeIndicator={false}>
                  <div className="bg-bg p-3.5 space-y-3 text-ink">
                    {/* Phone Header */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-ink">Available Properties</span>
                      <span className="text-[10px] text-primary font-semibold">View All &rarr;</span>
                    </div>

                    {/* Property Card 1: Park Islands */}
                    <div className="overflow-hidden rounded-xl bg-surface border border-ink/[0.08] shadow-xs">
                      <div className="relative h-24 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                          alt="Park Islands"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-white">
                          7.2% Net Yield
                        </span>
                        <span className="absolute right-2 top-2 rounded-full bg-surface/90 px-2 py-0.5 text-[9px] font-semibold text-ink">
                          From £500
                        </span>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[11px] font-bold text-ink">Park Islands, Canary Wharf</p>
                        <p className="text-[10px] text-muted">London E14 • 94% Funded</p>
                        <div className="mt-1.5 h-1 w-full rounded-full bg-ink/[0.08]">
                          <div className="h-full w-[94%] rounded-full bg-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Property Card 2: Boulevard Point */}
                    <div className="overflow-hidden rounded-xl bg-surface border border-ink/[0.08] shadow-xs">
                      <div className="relative h-20 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                          alt="Boulevard Point"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-emerald-800 px-2 py-0.5 text-[9px] font-bold text-white">
                          Available
                        </span>
                        <span className="absolute right-2 top-2 rounded-full bg-surface/90 px-2 py-0.5 text-[9px] font-semibold text-ink">
                          6.9% Target Yield
                        </span>
                      </div>
                      <div className="p-2">
                        <p className="text-[11px] font-bold text-ink">Boulevard Point, Mayfair</p>
                        <p className="text-[10px] text-muted">London W1 • Prime Residential</p>
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Card 2: Funds */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-ink/[0.08] bg-surface p-7 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/25">
            <div>
              {/* Icon & Tag */}
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
                <Layers size={14} className="text-primary" />
                <span>Funds</span>
              </div>

              {/* Headline & Description */}
              <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Invest in private single-asset real estate funds
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted max-w-[42ch]">
                Own units of exclusive commercial, residential and mixed-use funds managed by institutional asset operators.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/funds"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent active:scale-95"
                >
                  Learn more
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-surface px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink transition-all hover:bg-bg-warm active:scale-95"
                >
                  <Play size={13} className="text-primary fill-primary" />
                  <span>Watch how it works</span>
                </Link>
              </div>
            </div>

            {/* Floating Phone Visual (Peeking from bottom of card) */}
            <div className="mt-10 pt-4 flex justify-center overflow-hidden -mb-10 sm:-mb-14">
              <div className="w-[min(100%,320px)] sm:w-[330px] transition-transform duration-500 ease-out group-hover:-translate-y-3">
                <PhoneFrame className="shadow-2xl" showHomeIndicator={false}>
                  <div className="bg-bg p-3.5 space-y-3 text-ink">
                    {/* Fund Highlight Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#244534] to-[#183124] p-3.5 text-white shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-semibold text-emerald-200">Fund Growth</span>
                        <span className="rounded-full bg-emerald-500/25 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                          +41.4%
                        </span>
                      </div>
                      <p className="text-xl font-extrabold tracking-tight mt-1">£24,800.00</p>
                      <p className="text-[10px] text-emerald-200 mt-0.5">Total Return Since Inception</p>

                      {/* Mini Area Chart SVG */}
                      <div className="mt-2.5 h-10 w-full">
                        <svg viewBox="0 0 100 30" className="h-full w-full overflow-visible">
                          <path
                            d="M0 25 Q 25 22, 45 15 T 75 10 T 100 4"
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0 25 Q 25 22, 45 15 T 75 10 T 100 4 L 100 30 L 0 30 Z"
                            fill="rgba(52, 211, 153, 0.15)"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Underlying Fund Assets List */}
                    <div className="rounded-xl bg-surface p-2.5 border border-ink/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <div>
                          <p className="font-bold text-ink">Urban Living Fund</p>
                          <p className="text-[9.5px] text-muted">12 Residential Properties</p>
                        </div>
                        <span className="font-bold text-primary">8.8% IRR</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-ink/[0.06] pt-1.5 text-[11px]">
                        <div>
                          <p className="font-bold text-ink">UK Logistics Core</p>
                          <p className="text-[9.5px] text-muted">Commercial Warehousing</p>
                        </div>
                        <span className="font-bold text-primary">7.9% IRR</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-muted">
                      <CheckCircle2 size={13} className="text-primary shrink-0" />
                      <span>Quarterly liquidity windows &amp; automated distributions</span>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Showcase Card (At the footer of both product boxes) */}
        <div className="mt-8 lg:mt-10 rounded-[2.5rem] bg-[#F7F9FA] border border-black/[0.06] p-7 sm:p-10 lg:p-12 overflow-hidden relative shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10">
            
            {/* Left Column: Heading and Learn more CTA */}
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight leading-[1.18] text-[#0F172A]">
                <span className="text-[#00c48c]">Trade</span>{' '}
                <span className="text-[#0F172A]">your investments</span>
                <br />
                <span className="text-[#0F172A]">within</span>{' '}
                <span className="text-[#00c48c]">our community</span>
              </h3>

              <div className="mt-6 sm:mt-7">
                <Link
                  href="#trade"
                  className="inline-flex items-center justify-center rounded-lg bg-[#0F172A] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1E293B] transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            {/* Right Column: Floating White Pill Card with City Walk Property */}
            <div className="relative flex items-center justify-center lg:justify-end pt-3 pb-3 px-3 sm:px-6">
              
              {/* Floating Green Circle Badge with Tag Icon (Top-Right) */}
              <div className="absolute -top-3 -right-1 sm:-top-4 sm:-right-2 z-20 size-11 sm:size-12 rounded-full bg-[#00c48c] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105">
                <Tag size={20} strokeWidth={2.4} className="-rotate-12 text-white" />
              </div>

              {/* Floating Green Upward Trending Arrow (Bottom-Left) */}
              <div className="absolute -bottom-3 left-1 sm:-bottom-4 sm:left-2 z-20 pointer-events-none text-[#00c48c]">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00c48c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>

              {/* Main White Capsule Card */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white p-3.5 sm:p-4 pr-5 sm:pr-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center gap-3.5 sm:gap-4 transition-transform hover:-translate-y-0.5 duration-300">
                
                {/* Circular Property Image */}
                <div className="size-12 sm:size-13 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5 bg-gray-100">
                  <img
                    src={withBase("/images/journey/residential.jpg")}
                    alt="Building 8, City Walk"
                    className="size-full object-cover"
                  />
                </div>

                {/* Card Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#0F172A] text-sm sm:text-[15px] truncate leading-tight">
                    Building 8, City Walk
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-2 h-1.5 w-full rounded-full bg-[#E2E8F0] overflow-hidden">
                    <div className="h-full w-[90%] rounded-full bg-[#00c48c]" />
                  </div>

                  {/* Stats Under Progress Bar */}
                  <div className="mt-1.5 flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="font-medium text-[#64748B]">
                      20,000 shares listed
                    </span>
                    <span className="font-bold text-[#00c48c]">
                      90% sold
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
