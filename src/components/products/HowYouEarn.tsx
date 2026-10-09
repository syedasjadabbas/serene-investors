'use client'

import React from 'react'
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  ArrowDownLeft,
  ArrowLeftRight,
  Plus,
  Settings,
  Building,
  PieChart,
  Star,
  User,
} from 'lucide-react'
import { DeviceFrame } from '@/components/common/DeviceFrame'

export function HowYouEarn() {
  return (
    <section
      id="how-you-earn"
      className="relative overflow-hidden bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 border-b border-black/[0.08]"
      aria-label="How Investors Make Money"
    >
      <div className="max-w-7xl mx-auto py-4 sm:py-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-24">
          <p className="text-sm sm:text-base font-semibold text-[#00A663] mb-2 sm:mb-4">
            It’s your money, grow it
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[56px] font-extrabold tracking-[-0.03em] text-[#0D1117] leading-[1.12] mb-4 sm:mb-6">
            So, how do I make money?
          </h2>
          <p className="font-heading text-lg sm:text-xl lg:text-[26px] font-semibold text-[#0D1117] tracking-tight leading-snug sm:leading-relaxed max-w-2xl mx-auto">
            Join <span className="text-[#00A663]">2M+</span> other real estate{' '}
            <br className="hidden sm:inline" />
            investors who made <span className="text-[#00A663]">10.2%</span> in 2025
          </p>
        </div>

        {/* 3 STACKED HORIZONTAL SHOWCASE ROWS */}
        <div className="space-y-20 sm:space-y-36">

          {/* =========================================================================
              ROW 1: Passive Income
              Left: Phone Wallet with Green Circle | Right: Editorial Text & Large Stats
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Phone with Green Circle Backdrop - Straight Front-Facing View) */}
            <div className="lg:col-span-6 flex items-center justify-center relative py-6 sm:py-8 select-none">
              {/* Backdrop Circle */}
              <div
                className="absolute h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px] rounded-full bg-[#52D48E] -z-10 shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />

              {/* Phone Chassis (Realistic Steel Gray Titanium Frame matching reference picture) */}
              <div className="relative w-[260px] min-[390px]:w-[270px] sm:w-[295px] aspect-[9/18.5] rounded-[50px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.42),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.14)] border border-[#485362]/80 select-none">
                {/* Outer Metallic Chamfer Highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/15" aria-hidden="true" />

                {/* Physical Side Buttons & Antenna Seams */}
                <div className="absolute -left-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                <div className="absolute -left-[5.5px] top-[74px] h-[18px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
                <div className="absolute -left-[5.5px] top-[104px] h-[40px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
                <div className="absolute -left-[5.5px] top-[154px] h-[40px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
                <div className="absolute -left-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                <div className="absolute -right-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                <div className="absolute -right-[5.5px] top-[110px] h-[60px] w-[4px] rounded-r-[2px] bg-gradient-to-l from-[#3e4754] to-[#252a33] border-r border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
                <div className="absolute -right-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                {/* Inner OLED Pitch-Black Bezel */}
                <div className="relative h-full w-full rounded-[46px] bg-[#0a0d12] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                  {/* Screen Container */}
                  <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white flex flex-col justify-between">
                    {/* Top Portion (Status, Header, Card, Actions, Transactions) */}
                    <div className="flex flex-col">
                      {/* Status Bar */}
                      <div className="relative pt-2.5 pb-0.5 px-5 flex items-center justify-between text-xs font-semibold text-gray-900 select-none">
                        <span className="w-14 text-left font-semibold text-[13px] tracking-tight">9:41</span>
                        
                        {/* Perfectly Centered Dynamic Island */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-2 h-[22px] w-[90px] rounded-full bg-black flex items-center justify-end px-2.5 shadow-xs pointer-events-none">
                          <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                            <div className="size-0.5 rounded-full bg-[#20293d]" />
                          </div>
                        </div>

                      <div className="flex w-14 items-center justify-end gap-1.5">
                        {/* 4-bar cellular */}
                        <svg className="size-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                          <rect x="1" y="11" width="2" height="4" rx="0.5" />
                          <rect x="5" y="8" width="2" height="7" rx="0.5" />
                          <rect x="9" y="5" width="2" height="10" rx="0.5" />
                          <rect x="13" y="2" width="2" height="13" rx="0.5" />
                        </svg>
                        {/* WiFi */}
                        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                        </svg>
                        {/* Battery pill */}
                        <div className="flex items-center">
                          <div className="h-3 w-5 rounded-[3.5px] border-[1.2px] border-current p-[1.5px] flex items-center">
                            <div className="h-full w-3 rounded-[1px] bg-gray-900" />
                          </div>
                          <div className="h-1.5 w-[1.5px] bg-current rounded-r-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Screen Header */}
                    <div className="px-5 pt-1.5 pb-1 flex items-center justify-between">
                      <h4 className="text-xl font-bold text-gray-900 tracking-tight">Wallet</h4>
                      <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800 shadow-2xs">
                        <span className="text-xs">🇦🇪</span>
                        <span>AED</span>
                        <span className="text-gray-400 text-xs">›</span>
                      </div>
                    </div>

                    {/* Balance Carousel Card */}
                    <div className="relative overflow-hidden pl-4 pr-0 mt-1">
                      <div className="flex gap-2.5 items-stretch">
                        {/* Active Main Card */}
                        <div className="relative w-[86%] shrink-0 rounded-2xl bg-[#00A663] text-white p-4 shadow-md text-center overflow-hidden">
                          {/* Decorative subtle background shapes */}
                          <div className="absolute -right-3 -top-6 w-24 h-24 rounded-2xl bg-white/[0.08] rotate-12 pointer-events-none" />
                          <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-2xl bg-black/[0.1] -rotate-12 pointer-events-none" />
                          
                          <div className="relative z-10 py-0.5">
                            <p className="text-[11px] font-medium text-white/85">Total balance</p>
                            <p className="text-[21px] font-extrabold tracking-tight text-white mt-0.5">
                              <span className="text-xs font-bold text-white/90 mr-1">AED</span>
                              20,150.00
                            </p>
                          </div>
                        </div>

                        {/* Second Card Peek on the right */}
                        <div className="w-[18%] shrink-0 rounded-l-2xl bg-[#00A663] opacity-90 shadow-md" />
                      </div>
                    </div>

                    {/* 2 Carousel Indicator Dots */}
                    <div className="flex items-center justify-center gap-1.5 pt-2">
                      <div className="w-5 h-1 rounded-full bg-[#00A663]" />
                      <div className="size-1 rounded-full bg-gray-200" />
                    </div>

                    {/* 4 Action Buttons Row */}
                    <div className="grid grid-cols-4 gap-2 px-3 pt-3 text-center">
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
                          <ArrowLeftRight size={15} />
                        </div>
                        <span className="text-[10px] font-semibold text-gray-800 mt-1">Invest</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
                          <Plus size={18} strokeWidth={2.5} />
                        </div>
                        <span className="text-[10px] font-semibold text-gray-800 mt-1">Deposit</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center shadow-2xs">
                          <ArrowUpRight size={15} />
                        </div>
                        <span className="text-[10px] font-semibold text-gray-800 mt-1">Withdraw</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="size-10 rounded-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center shadow-2xs">
                          <Settings size={15} />
                        </div>
                        <span className="text-[10px] font-semibold text-gray-800 mt-1">Settings</span>
                      </div>
                    </div>

                    {/* Transactions Feed */}
                    <div className="px-4 pt-3 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900">Transactions</span>
                        <span className="text-[10px] font-semibold text-gray-400 hover:text-gray-600 cursor-pointer">View all</span>
                      </div>

                      {/* Filter Pills */}
                      <div className="flex items-center gap-1.5 overflow-x-hidden text-[9.5px] pt-0.5">
                        <span className="rounded-full bg-[#0F172A] text-white px-2.5 py-0.5 font-semibold shrink-0">All</span>
                        <span className="rounded-full border border-gray-200 text-gray-500 px-2.5 py-0.5 font-medium shrink-0">Investments</span>
                        <span className="rounded-full border border-gray-200 text-gray-500 px-2.5 py-0.5 font-medium shrink-0">Incoming</span>
                        <span className="rounded-full border border-gray-200 text-gray-500 px-2.5 py-0.5 font-medium shrink-0">Outgoing</span>
                        <span className="rounded-full border border-gray-200 text-gray-500 px-2.5 py-0.5 font-medium shrink-0">Exit</span>
                      </div>

                      {/* Date Header */}
                      <p className="text-[9.5px] font-medium text-gray-400 pt-0.5">July 2023</p>

                      {/* Transaction Item 1 */}
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-full overflow-hidden shrink-0 border border-black/5 bg-gray-100 flex items-center justify-center">
                            <img src="/images/journey/dubai-marina.jpg" alt="Park Tower" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10.5px] font-bold text-gray-900 leading-tight">1 bed in Park Tower</p>
                            <p className="text-[9px] text-[#64748B]">Rent Payment</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10.5px] font-extrabold text-[#00A663]">+ AED 320</p>
                          <p className="text-[8.5px] text-gray-400">6th July &apos;23</p>
                        </div>
                      </div>

                      {/* Transaction Item 2 */}
                      <div className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-200/60">
                            <ArrowDownLeft size={15} strokeWidth={2.5} />
                          </div>
                          <div>
                            <p className="text-[10.5px] font-bold text-gray-900 leading-tight">Emirates NBD ****34</p>
                            <p className="text-[9px] text-amber-500 font-medium">Pending deposit</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10.5px] font-bold text-gray-900">+ AED 6,000</p>
                          <p className="text-[8.5px] text-gray-400">6th July &apos;23</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tab Bar (5 iOS navigation tabs) */}
                  <div className="pt-2 pb-1 border-t border-gray-100">
                    <div className="grid grid-cols-5 text-center text-[8.5px] text-gray-400">
                      <div className="flex flex-col items-center gap-0.5">
                        <Building size={14} />
                        <span>Properties</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 text-gray-900 font-bold relative">
                        <Wallet size={14} className="text-gray-900" />
                        <span>Wallet</span>
                        <div className="w-4 h-0.5 bg-gray-900 rounded-full mt-0.5" />
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <PieChart size={14} />
                        <span>Portfolio</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Star size={14} />
                        <span>Rewards</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <User size={14} />
                        <span>Profile</span>
                      </div>
                    </div>
                    {/* iOS Home Indicator */}
                    <div className="w-28 h-1 bg-black/80 rounded-full mx-auto mt-2 mb-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Right Column (Editorial & Stats) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Earn consistent passive income
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Build new income streams with rental payments from income generating properties and funds
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0D1117] tracking-tight">
                    AED 90.5M+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Total Rental Income Paid
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0D1117] tracking-tight">
                    5.30<span className="text-[#00A663]">%</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Average Rental Yield in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              ROW 2: Capital Appreciation
              Left: Editorial Text & Large Stats | Right: Phone with Circle Backdrop
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Editorial text */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663]">
                <TrendingUp size={13} />
                EQUITY COMPOUNDING
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Long term capital appreciation
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Watch your investment grow as prime property values appreciate over holding cycles and institutional funds near scheduled capital distributions.
              </p>

              {/* Large Stat Blocks */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-black/[0.08]">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-[#0D1117] tracking-tight">
                    600+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Properties Funded Since 2021
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-[#00A663] tracking-tight">
                    5.40%
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Average Investor Appreciation in 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right: DeviceFrame with large solid light-green circle backdrop */}
            <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
              {/* Solid Light-Green Circle Backdrop */}
              <div
                className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full bg-[#52D88A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
                aria-hidden="true"
              />

              <DeviceFrame
                aspectRatio="aspect-[9/17.5]"
                className="w-[260px] min-[390px]:w-[270px] sm:w-[290px] shadow-[0_25px_65px_-15px_rgba(11,53,40,0.3)]"
              >
                <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0D1117]">Portfolio Growth</span>
                      <span className="text-[10px] font-bold text-[#00A663]">+30.8% Total</span>
                    </div>

                    {/* Chart Card */}
                    <div className="rounded-2xl bg-[#0B3528] p-4 text-white">
                      <span className="text-[9px] uppercase font-bold text-emerald-300">Capital Value</span>
                      <p className="text-2xl font-black text-white mt-0.5">AED 1,236,000.00</p>
                      
                      {/* Growth Curve */}
                      <div className="mt-3 h-14 w-full">
                        <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                          <path
                            d="M0 35 Q 25 30, 45 20 T 75 14 T 100 5"
                            fill="none"
                            stroke="#00A663"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0 35 Q 25 30, 45 20 T 75 14 T 100 5 L 100 40 L 0 40 Z"
                            fill="rgba(0, 166, 99, 0.2)"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Holdings with Capital Growth */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Appreciating Assets
                      </span>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">Boulevard Point</p>
                          <p className="text-[9px] text-[#64748B]">Downtown Dubai</p>
                        </div>
                        <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                          +10.4% Apprec.
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">Marina Gate 1</p>
                          <p className="text-[9px] text-[#64748B]">Dubai Marina</p>
                        </div>
                        <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                          +12.4% Apprec.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#F8FAF9] p-2 text-center text-[10px] text-[#64748B] font-medium border border-black/[0.06]">
                    Independent RICS quarterly valuations
                  </div>
                </div>
              </DeviceFrame>
            </div>
          </div>

          {/* =========================================================================
              ROW 3: Liquidity
              Left: Phone Property Listing | Right: Editorial Text & Large Stats
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: DeviceFrame displaying property listing screen with Green Circle */}
            <div className="lg:col-span-6 flex justify-center relative">
              {/* Solid Light-Green Circle Backdrop */}
              <div
                className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full bg-[#52D88A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
                aria-hidden="true"
              />

              <DeviceFrame
                aspectRatio="aspect-[9/17.5]"
                className="w-[260px] min-[390px]:w-[270px] sm:w-[290px] shadow-[0_25px_65px_-15px_rgba(11,53,40,0.3)]"
              >
                <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0D1117]">Secondary Listing</span>
                      <span className="rounded-full bg-[#00A663] px-2 py-0.5 text-[10px] font-bold text-white">
                        Exit Window Open
                      </span>
                    </div>

                    {/* Property Image & Details */}
                    <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-2xs">
                      <div className="relative h-28 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                          alt="Studio One"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0D1117]/90 px-2 py-0.5 text-[9.5px] font-bold text-white">
                          Verified Asset
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-bold text-[#0D1117]">Studio One, Dubai Marina</p>
                        <p className="text-[10px] text-[#64748B]">Prime High-Yield Unit</p>

                        <div className="mt-2.5 flex items-center justify-between text-xs">
                          <span className="text-[#64748B] text-[10px]">5-Year Total Return:</span>
                          <span className="font-extrabold text-[#00A663]">47.5%</span>
                        </div>

                        {/* 75% funded meter */}
                        <div className="mt-2">
                          <div className="flex justify-between text-[10px] text-[#64748B] mb-1 font-medium">
                            <span>Funding Progress</span>
                            <span className="font-bold text-[#0D1117]">75% funded</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                            <div className="h-full w-[75%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Exit Guarantee Pill */}
                    <div className="rounded-xl bg-[#E8F8F0] p-2.5 text-xs text-[#0B3528] space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[11px]">
                        <Clock size={13} className="text-[#00A663]" />
                        <span>Bi-Annual Liquidity Window</span>
                      </div>
                      <p className="text-[10px] text-[#4B5563]">
                        Matched with institutional &amp; secondary buyers with 0% exit fee.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#00A663] py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
                  >
                    View Exit Opportunities &rarr;
                  </button>
                </div>
              </DeviceFrame>
            </div>

            {/* Right: Editorial text & stats */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663]">
                <Clock size={13} />
                FLEXIBLE LIQUIDITY
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Liquidity, when you need it most
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Exit your investments at maturity or take early profits by selling during our bi-annual exit windows.
              </p>

              {/* Large Stat Blocks */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-black/[0.08]">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-[#0D1117] tracking-tight">
                    38+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Properties Fully Exited
                  </p>
                </div>
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-[#00A663] tracking-tight">
                    AED 33M+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Total Traded During Exit Windows
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
