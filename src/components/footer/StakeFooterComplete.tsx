'use client'

import React from 'react'
import Link from 'next/link'
import {
  Apple,
  Play,
} from 'lucide-react'

export function StakeFooterComplete() {
  return (
    <footer className="relative bg-[#060D17] text-white overflow-hidden" aria-label="Footer and App Download">
      
      {/* =========================================================================
          BOTTOM CTA BANNER: Full-width Emerald Card with Tilted Phone
          ========================================================================= */}
      {/* =========================================================================
          BOTTOM CTA BANNER: Full-width Emerald Card with Tilted Phone & 3 Floating Cards
          ========================================================================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 sm:pt-24 pb-16">
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#00A663] px-8 sm:px-12 lg:px-16 pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-hidden shadow-2xl">
          
          {/* Concentric wave / contour arcs background matching reference */}
          <svg
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 1200 500"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <circle cx="820" cy="260" r="140" stroke="white" strokeWidth="1.2" strokeOpacity="0.14" />
            <circle cx="820" cy="260" r="220" stroke="white" strokeWidth="1.2" strokeOpacity="0.11" />
            <circle cx="820" cy="260" r="300" stroke="white" strokeWidth="1.2" strokeOpacity="0.09" />
            <circle cx="820" cy="260" r="400" stroke="white" strokeWidth="1.2" strokeOpacity="0.07" />
            <circle cx="820" cy="260" r="520" stroke="white" strokeWidth="1.2" strokeOpacity="0.05" />
            <circle cx="820" cy="260" r="660" stroke="white" strokeWidth="1.2" strokeOpacity="0.03" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Download our app, Headline, Store Badges */}
            <div className="lg:col-span-6 space-y-5 pb-8 sm:pb-12 lg:pb-14 pt-3 lg:pt-6">
              <p className="text-sm sm:text-base font-semibold text-white/95 tracking-tight">
                Download our app
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white leading-[1.08] max-w-[15ch]">
                The modern way for anyone to invest in real estate
              </h2>

              {/* App Store and Google Play Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl bg-black px-3.5 py-2 text-white transition-all hover:bg-neutral-900 active:scale-95 shadow-md border border-white/10"
                >
                  <Apple size={24} className="fill-white shrink-0" />
                  <div className="text-left">
                    <p className="text-[8px] uppercase font-normal text-white/80 leading-none">
                      Download on the
                    </p>
                    <p className="text-[12.5px] font-bold leading-tight text-white tracking-tight mt-0.5">
                      App Store
                    </p>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl bg-black px-3.5 py-2 text-white transition-all hover:bg-neutral-900 active:scale-95 shadow-md border border-white/10"
                >
                  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 shrink-0">
                    <path d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.3-.6-.8-.6-1.5V3.3c0-.7.2-1.2.6-1.5z" fill="#00E676" />
                    <path d="M17.2 8.6L13.8 12l3.4 3.4 3.9-2.2c.8-.5.8-1.9 0-2.4l-3.9-2.2z" fill="#FFD600" />
                    <path d="M3.6 1.8l10.2 10.2 3.4-3.4L6.1.6C5.1 0 4.1.3 3.6 1.8z" fill="#00B0FF" />
                    <path d="M17.2 15.4L13.8 12 3.6 22.2c.5 1.5 1.5 1.8 2.5 1.2l11.1-8z" fill="#FF3D00" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[8px] uppercase font-semibold text-white/80 leading-none tracking-wider">
                      GET IT ON
                    </p>
                    <p className="text-[12.5px] font-bold leading-tight text-white tracking-tight mt-0.5">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Proportion Phone Mockup + 3 Floating Overlay Cards */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-start h-[370px] sm:h-[410px] lg:h-[430px] select-none">
              
              {/* Floating Card 1: Top-Right Push Notification (Tilted -12deg like phone) */}
              <div className="absolute top-2 sm:top-4 right-0 sm:right-2 lg:right-2 z-30 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-slate-100/90 -rotate-[12deg] transition-transform hover:rotate-0 duration-200">
                <div className="relative size-8.5 rounded-xl bg-[#060D17] flex items-center justify-center shrink-0">
                  <span className="font-heading text-[11px] font-black tracking-[-0.035em] text-white flex items-center">
                    <span>k</span>
                    <span className="inline-block w-1 h-1 bg-[#00A663] rounded-[1px] ml-0.5" />
                  </span>
                  {/* Red notification dot */}
                  <span className="size-2.5 rounded-full bg-[#FF3B30] absolute -top-0.5 -right-0.5 ring-2 ring-white" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-900 leading-none">
                    Stake
                  </p>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-tight whitespace-nowrap">
                    You&apos;ve been paid AED 826 in rent
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Middle-Left Property Card (Marina Gate 1, Dubai Marina +12.4%) */}
              <div className="absolute left-[-8px] sm:left-[-12px] lg:left-0 top-[35%] sm:top-[38%] z-30 w-34 sm:w-38 lg:w-40 rounded-2xl bg-white p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.22)] border border-slate-100 rotate-[8deg] transition-transform hover:rotate-0 duration-200">
                <div className="h-20 sm:h-22 w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/journey/dubai-marina.jpg"
                    alt="Marina Gate 1, Dubai Marina"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[10.5px] font-bold text-slate-900 leading-tight mt-2">
                  Marina Gate 1, Dubai Marina
                </p>
                <p className="text-[11.5px] font-extrabold text-[#00A663] mt-1">
                  +12.4%
                </p>
              </div>

              {/* Floating Card 3: Bottom-Right Property Card (Boulevard Point, Downtown Dubai +10.4%) */}
              <div className="absolute right-[-10px] sm:right-[-6px] lg:right-[-4px] bottom-[-10px] sm:bottom-[-8px] z-30 w-34 sm:w-38 lg:w-40 rounded-2xl bg-white p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.22)] border border-slate-100 rotate-[10deg] transition-transform hover:rotate-0 duration-200">
                <div className="h-20 sm:h-22 w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/journey/residential.jpg"
                    alt="Boulevard Point, Downtown Dubai"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[10.5px] font-bold text-slate-900 leading-tight mt-2">
                  Boulevard Point, Downtown Dubai
                </p>
                <p className="text-[11.5px] font-extrabold text-[#00A663] mt-1">
                  +10.4%
                </p>
              </div>

              {/* Main Phone: Exact Standard iPhone Width (w-[275px] - w-[305px]) with Exact Rotation (-13deg) */}
              <div className="relative w-[275px] sm:w-[290px] lg:w-[305px] shrink-0 transform -rotate-[13deg] translate-y-3 sm:translate-y-5 lg:translate-y-5 z-10">
                <div className="rounded-[44px] bg-[#16181D] p-[7px] shadow-[0_30px_90px_-15px_rgba(0,0,0,0.45)] border border-white/20 select-none">
                  
                  {/* Phone Screen: Proportionate height with bottom cropped exactly below holding cards */}
                  <div className="h-[490px] sm:h-[510px] lg:h-[530px] w-full rounded-[38px] bg-white overflow-hidden p-4 pt-5 pb-8 text-slate-900">
                    
                    {/* Screen Header */}
                    <div>
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-[13px] font-bold text-slate-900">Portfolio</span>
                        <div className="flex items-center gap-1.5 text-[9.5px] text-slate-400 font-medium">
                          <span>Closed</span>
                          <span>Exit</span>
                        </div>
                      </div>

                      {/* Portfolio Value */}
                      <div className="text-center pt-2 pb-3">
                        <p className="text-[9.5px] font-medium text-slate-400">Portfolio value</p>
                        <p className="text-[22px] sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                          AED 306,500<span className="text-slate-400 text-base font-semibold">.00</span>
                        </p>
                      </div>

                      {/* Action Circles Row */}
                      <div className="flex items-center justify-center gap-4 py-2 border-b border-slate-100">
                        {/* Swap button */}
                        <div className="flex flex-col items-center">
                          <div className="size-8.5 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs">
                            <span className="text-xs font-bold leading-none">⇄</span>
                          </div>
                        </div>

                        {/* Deposit button */}
                        <div className="flex flex-col items-center">
                          <div className="size-8.5 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs">
                            <span className="text-sm font-bold leading-none">+</span>
                          </div>
                          <span className="text-[8px] font-bold text-slate-700 mt-1">Deposit</span>
                        </div>

                        {/* Earn & chevron */}
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 pl-1">
                          <span>Earn</span>
                          <span className="text-slate-400 font-normal">&gt;</span>
                        </div>
                      </div>

                      {/* Returns Summary Row with Green/Yellow progress bar */}
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-slate-500 font-medium">Returns</span>
                            <span className="text-[11.5px] font-black text-slate-900">,950.00</span>
                          </div>
                          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[9px] font-black text-[#00A663]">
                            30.8%
                          </span>
                        </div>
                        {/* Bi-color progress bar */}
                        <div className="h-1.5 w-full rounded-full bg-slate-100 flex overflow-hidden mt-1.5">
                          <div className="w-[72%] bg-[#00A663]" />
                          <div className="w-[28%] bg-[#FBBF24]" />
                        </div>
                      </div>

                      {/* Inner Holding / Monthly Rent Cards */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {/* Rent card */}
                        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                          <div className="flex items-center justify-between text-[#00A663]">
                            <span className="text-xs">📅</span>
                            <span className="text-[9px] text-slate-400">ⓘ</span>
                          </div>
                          <p className="text-[10.5px] font-black text-slate-900 mt-1.5">
                            AED 10,225.50
                          </p>
                          <p className="text-[8px] text-slate-500 mt-0.5">
                            May&apos;s rent
                          </p>
                        </div>

                        {/* Total rental income card */}
                        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                          <div className="text-[#00A663] text-xs">💰</div>
                          <p className="text-[10.5px] font-black text-slate-900 mt-1.5">
                            AED 56,200.00
                          </p>
                          <p className="text-[8px] text-slate-500 mt-0.5 truncate">
                            Total rental inc...
                          </p>
                        </div>
                      </div>

                      <div className="text-right pt-2">
                        <span className="text-[9px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer">
                          View all &gt;
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          AUTHENTIC STAKE FOOTER: 3 Product Cards, Navigation Columns & Social Bar
          ========================================================================= */}
      <div className="border-t border-white/10 bg-[#08101C] pt-14 sm:pt-18 pb-12 px-6 lg:px-12 text-white">
        <div className="mx-auto max-w-7xl">
          
          {/* Logo on top left */}
          <div className="mb-10">
            <Link href="/" aria-label="Stake Home" className="inline-block select-none group">
              <span className="font-heading text-3xl sm:text-[34px] font-black tracking-tight text-white leading-none">
                stake
              </span>
            </Link>
          </div>

          {/* =========================================================================
              3 PRODUCT CARDS (Properties, Funds, StakeOne)
              ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
            
            {/* Card 1: Properties */}
            <div className="rounded-2xl bg-[#131E2E] p-4 border border-white/5 space-y-4">
              <Link
                href="/properties"
                className="group flex items-center justify-between rounded-xl bg-[#0E1724] p-3 border border-white/10 hover:border-white/20 hover:bg-[#111C2B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                      <polygon points="12,38 24,44 36,38 24,32" fill="#00D084" fillOpacity="0.3" />
                      <polygon points="12,38 24,44 24,24 12,18" fill="#00A663" />
                      <polygon points="24,44 36,38 36,18 24,24" fill="#047847" />
                      <line x1="16" y1="26" x2="20" y2="28" stroke="#A7F3D0" strokeWidth="1.5" />
                      <line x1="16" y1="32" x2="20" y2="34" stroke="#A7F3D0" strokeWidth="1.5" />
                      <line x1="28" y1="28" x2="32" y2="26" stroke="#6EE7B7" strokeWidth="1.5" />
                      <line x1="28" y1="34" x2="32" y2="32" stroke="#6EE7B7" strokeWidth="1.5" />
                      <polygon points="18,18 24,21 30,18 24,15" fill="#34D399" />
                      <polygon points="18,18 24,21 24,10 18,7" fill="#00A663" />
                      <polygon points="24,21 30,18 30,7 24,10" fill="#047847" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                      Properties
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3 text-slate-400">
                        <path d="M8 1l5 2.2v4.3c0 3.3-2.1 6.3-5 7.5-2.9-1.2-5-4.2-5-7.5V3.2L8 1zm-1 8.5l3.5-3.5-.7-.7-2.8 2.8-1.3-1.3-.7.7 2 2z" />
                      </svg>
                      <span>Regulated by the DFSA</span>
                    </p>
                  </div>
                </div>
                <span className="text-white text-lg font-light group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>

              <div className="space-y-2.5 px-2">
                <div>
                  <Link
                    href="/properties"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <span>Automation</span>
                    <span className="rounded bg-[#00A663] px-1.5 py-0.5 text-[9px] font-black text-black leading-none">
                      NEW
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/rewards"
                    className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    Rewards
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Funds */}
            <div className="rounded-2xl bg-[#131E2E] p-4 border border-white/5 space-y-4">
              <Link
                href="/funds"
                className="group flex items-center justify-between rounded-xl bg-[#0E1724] p-3 border border-white/10 hover:border-white/20 hover:bg-[#111C2B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                      <polygon points="10,40 18,44 18,14 10,10" fill="#06B6D4" />
                      <polygon points="18,44 26,40 26,10 18,14" fill="#0891B2" />
                      <polygon points="10,10 18,14 26,10 18,6" fill="#67E8F9" />
                      <polygon points="24,40 32,44 32,22 24,18" fill="#0284C7" />
                      <polygon points="32,44 40,40 40,18 32,22" fill="#0369A1" />
                      <polygon points="24,18 32,22 40,18 32,14" fill="#38BDF8" />
                      <line x1="14" y1="18" x2="14" y2="36" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                      <line x1="22" y1="18" x2="22" y2="36" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                      Funds
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="size-3 text-slate-400">
                        <path d="M8 1l5 2.2v4.3c0 3.3-2.1 6.3-5 7.5-2.9-1.2-5-4.2-5-7.5V3.2L8 1zm-1 8.5l3.5-3.5-.7-.7-2.8 2.8-1.3-1.3-.7.7 2 2z" />
                      </svg>
                      <span>Regulated by the CMA</span>
                    </p>
                  </div>
                </div>
                <span className="text-white text-lg font-light group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>

              <div className="space-y-2.5 px-2">
                <div>
                  <Link
                    href="/rewards"
                    className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    Rewards
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: StakeOne */}
            <div className="rounded-2xl bg-[#131E2E] p-4 border border-white/5 space-y-4">
              <Link
                href="/properties"
                className="group flex items-center justify-between rounded-xl bg-[#0E1724] p-3 border border-white/10 hover:border-white/20 hover:bg-[#111C2B] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="size-11 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                      <polygon points="14,42 24,46 24,16 14,12" fill="#10B981" />
                      <polygon points="24,46 34,42 34,12 24,16" fill="#059669" />
                      <polygon points="14,12 24,16 34,12 24,8" fill="#34D399" />
                      <rect x="17" y="18" width="3" height="3" rx="0.5" fill="#A7F3D0" />
                      <rect x="17" y="25" width="3" height="3" rx="0.5" fill="#A7F3D0" />
                      <rect x="17" y="32" width="3" height="3" rx="0.5" fill="#A7F3D0" />
                      <rect x="27" y="18" width="3" height="3" rx="0.5" fill="#6EE7B7" />
                      <rect x="27" y="25" width="3" height="3" rx="0.5" fill="#6EE7B7" />
                      <rect x="27" y="32" width="3" height="3" rx="0.5" fill="#6EE7B7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-white leading-none">
                        stake<span className="text-[#00A663]">one</span>
                      </h3>
                      <span className="rounded bg-[#00A663] px-1.5 py-0.5 text-[9px] font-black text-black leading-none">
                        NEW
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Invest in whole properties
                    </p>
                  </div>
                </div>
                <span className="text-white text-lg font-light group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>

              <div className="space-y-2.5 px-2">
                <div>
                  <Link
                    href="/legal/terms"
                    className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    Terms &amp; conditions
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              3 NAVIGATION COLUMNS (Visa Programs, Learn, Company)
              ========================================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-14 border-b border-white/10">
            {/* Column 1: Visa Programs */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-400">
                Visa Programs
              </p>
              <ul className="space-y-2.5 text-base font-bold text-white">
                <li>
                  <Link href="/golden-visa" className="hover:text-[#00A663] transition-colors">
                    Golden Visa
                  </Link>
                </li>
                <li>
                  <Link href="/retirement-visa" className="hover:text-[#00A663] transition-colors">
                    Retirement Visa
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Learn */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-400">
                Learn
              </p>
              <ul className="space-y-2.5 text-base font-bold text-white">
                <li>
                  <Link href="/blog" className="hover:text-[#00A663] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#00A663] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="hover:text-[#00A663] transition-colors">
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-400">
                Company
              </p>
              <ul className="space-y-2.5 text-base font-bold text-white">
                <li>
                  <Link href="/about" className="hover:text-[#00A663] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#00A663] transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* =========================================================================
              BOTTOM BAR: Copyright, Legal Links, Social Icons
              ========================================================================= */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            {/* Left: Copyright and links separated by pipes */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>&copy; {new Date().getFullYear()} Serene Investors. All rights reserved.</span>
              <span className="text-slate-600">|</span>
              <Link href="/legal/terms" className="hover:text-white transition-colors">
                Terms of use
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/legal/risks" className="hover:text-white transition-colors">
                Key risks
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/legal/privacy" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/legal/cookies" className="hover:text-white transition-colors">
                Cookies notice
              </Link>
            </div>

            {/* Right: Social Media Icons (Facebook, Twitter/X, Instagram, LinkedIn, YouTube) */}
            <div className="flex items-center gap-4 text-white">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A663] transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A663] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A663] transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A663] transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00A663] transition-colors"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =========================================================================
              LEGAL & REGULATORY DISCLOSURE PARAGRAPHS
              ========================================================================= */}
          <div className="mt-8 pt-8 border-t border-white/10 text-[11px] sm:text-xs leading-relaxed text-slate-400 space-y-4">
            <p>
              All investments carry risk. Past performance is not a reliable indicator of future results.
            </p>

            <p>
              Stake Properties Limited is regulated by the Dubai Financial Services Authority (DFSA) as an Operator of a Property Investment Crowdfunding Platform. At present there are no regulatory restriction imposed on Stake by the DFSA. Stake platform consists of the website (Stake ) and mobile app. By using Stake, you agree to be bound by the Terms &amp; Conditions, Cookie Notice and Privacy Policy. All investments through Stake carry risk and are not guaranteed. Past performance is not a reliable indicator of future results. Please read Key Risks before investing. Stake Properties Limited also has an Islamic Finance Window endorsement from the DFSA. Stake is authorised to offer Shariah compliant investments.
            </p>

            <p>
              Unit 186, 188, 190, Level 1, Gate Avenue - South Zone, DIFC, PO Box 507211, Dubai, UAE
            </p>

            <p>
              Stake Financial Technology Company is regulated by the Capital Market Authority (CMA) in Saudi Arabia to enter under its FinTech Lab and licensed to launch real estate investment fund opportunities in and from the Kingdom. The Stake platform, which includes our website and mobile apps, operates under the regulatory framework established by the CMA for innovative financial technologies. By using Stake, you agree to abide by our Terms &amp; Conditions, Cookie Notice, and Privacy Policy. While offering unique investment opportunities in the Saudi Arabian real estate market, we remind our investors that all investments carry risks and returns are not guaranteed. We encourage you to review the Key Risks before investing. Permit Number: 05-53-2023.
            </p>

            <p>
              Unit 109, Rubeen Plaza, Northern Ring Br Road, Hittin District, Riyadh 13512, Saudi Arabia
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}
