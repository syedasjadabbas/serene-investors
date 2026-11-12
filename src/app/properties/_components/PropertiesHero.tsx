'use client'

import React from 'react'
import { withBase } from '@/global/lib/asset'

// 3D Coin Graphic Component for Passive Rental Income Card
function Coin({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <ellipse cx="50" cy="54" rx="44" ry="24" fill="#15803D" />
      <ellipse cx="50" cy="50" rx="44" ry="24" fill="#25C974" />
      <ellipse cx="50" cy="50" rx="38" ry="19" fill="#2ED573" />
      <ellipse cx="50" cy="48" rx="34" ry="16" fill="#38E586" />
      <ellipse cx="50" cy="48" rx="26" ry="11" fill="#25C974" />
    </svg>
  )
}

// Cash Banknote Graphic for Capital Appreciation Card
function Banknote({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 48" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="76" height="44" rx="5" fill="#25C974" stroke="#16A34A" strokeWidth="2" />
      <rect x="6" y="6" width="68" height="36" rx="3" fill="#2ED573" stroke="#4ADE80" strokeWidth="1" />
      <circle cx="40" cy="24" r="10" fill="#25C974" />
      <circle cx="40" cy="24" r="7" fill="#4ADE80" />
      <circle cx="14" cy="14" r="2.5" fill="#4ADE80" />
      <circle cx="66" cy="14" r="2.5" fill="#4ADE80" />
      <circle cx="14" cy="34" r="2.5" fill="#4ADE80" />
      <circle cx="66" cy="34" r="2.5" fill="#4ADE80" />
    </svg>
  )
}

export function PropertiesHero() {
  return (
    <section
      id="properties-hero"
      aria-label="Properties Introduction"
      className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Ambient soft mint/green background glow in top right */}
      <div
        className="pointer-events-none absolute -top-24 -right-12 -z-10 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-[#bbf7d0]/40 via-[#dcfce7]/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ================= 1. TOP HERO EDITORIAL & IPHONE SHOWCASE ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          
          {/* Left Editorial Column */}
          <div className="z-10 lg:col-span-7 flex flex-col items-start">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#25c974]/40 bg-[#eafaf1] px-4 py-1.5 text-xs sm:text-[13px] font-semibold text-[#0da85f] shadow-2xs">
              <svg
                className="size-4 shrink-0 text-[#25c974]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Invest from anywhere in the world</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.25rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.08]">
              Invest in high<br />
              <span className="text-[#25c974]">income generating</span><br />
              properties in <span className="text-[#25c974]">Dubai</span>
            </h1>

            {/* Metric Row: Up-right Arrow Badge + 10.1% Returns */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3">
              <div className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-[#25c974] text-white shadow-xs">
                <svg
                  className="size-4 sm:size-4.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-[#0f172a]">
                <strong className="font-bold text-[#0f172a]">10.1%</strong>{' '}
                <span className="font-medium text-[#1e293b]">average investor returns in 2025</span>
              </p>
            </div>

            {/* App Store & Google Play Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#app"
                aria-label="Download on the App Store"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg active:scale-95"
              >
                <svg className="size-6 text-white shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.01.62-2.65 1.37-.56.65-1.06 1.71-.92 2.73 1.03.08 2.05-.53 2.65-1.25" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase font-medium tracking-tight text-white/75 leading-none">
                    Download on the
                  </span>
                  <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5">
                    App Store
                  </span>
                </div>
              </a>

              <a
                href="#app"
                aria-label="Get it on Google Play"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-neutral-800 hover:shadow-lg active:scale-95"
              >
                <svg className="size-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M3.609 1.814C3.239 2.122 3 2.601 3 3.167v17.666c0 .566.239 1.045.609 1.353l10.184-10.186L3.609 1.814z" />
                  <path fill="#34A853" d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.736-2.097c.725-.407 1.084-1.127 1.084-1.903s-.359-1.496-1.084-1.903l-3.736-2.097z" />
                  <path fill="#FBBC05" d="M4.5 1.5c-.338 0-.65.115-.89.314L13.793 12l3.387-3.387-11.352-6.371C5.537 1.79 5.042 1.5 4.5 1.5z" />
                  <path fill="#EA4335" d="M3.61 22.186c.24.199.552.314.89.314.542 0 1.037-.29 1.328-.743l11.352-6.37-3.387-3.387L3.61 22.186z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase font-medium tracking-wider text-white/75 leading-none">
                    GET IT ON
                  </span>
                  <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5">
                    Google Play
                  </span>
                </div>
              </a>
            </div>

            {/* DFSA Regulatory Notice */}
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#64748b]">
              <svg className="size-3.5 shrink-0 text-[#64748b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Stake Properties is regulated by the DFSA as an Operator of a Crowdfunding Platform in the UAE</span>
            </div>

          </div>

          {/* Right Visual Column: Centered Green Circle + Normal iPhone */}
          <div className="relative lg:col-span-5 flex items-center justify-center py-6">
            
            {/* Symmetrical Green Circle Centered Behind Mobile */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] sm:size-[470px] md:size-[490px] rounded-full bg-[#25c974] pointer-events-none shadow-[0_10px_40px_rgba(37,201,116,0.22)]"
              aria-hidden="true"
            />

            {/* Realistic iPhone Hardware Mockup */}
            <div className="relative z-10 w-[278px] sm:w-[288px] md:w-[294px] select-none">
              
              <div className="relative rounded-[46px] bg-gradient-to-b from-[#343b47] via-[#1a1f26] to-[#252b34] p-[3px] shadow-[0_30px_70px_rgba(0,0,0,0.42),0_12px_28px_rgba(0,0,0,0.25)] border border-[#485362]">
                
                <div className="pointer-events-none absolute inset-0 rounded-[45px] ring-1 ring-inset ring-white/20" aria-hidden="true" />

                {/* Left Hardware Buttons */}
                <div className="absolute -left-[4.5px] top-[66px] h-[15px] w-[3px] rounded-l-[2px] bg-[#3a424e] border-l border-y border-[#525d6d]" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[92px] h-[34px] w-[3px] rounded-l-[2px] bg-[#3a424e] border-l border-y border-[#525d6d]" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[134px] h-[34px] w-[3px] rounded-l-[2px] bg-[#3a424e] border-l border-y border-[#525d6d]" aria-hidden="true" />

                {/* Right Hardware Button */}
                <div className="absolute -right-[4.5px] top-[98px] h-[48px] w-[3px] rounded-r-[2px] bg-[#3a424e] border-r border-y border-[#525d6d]" aria-hidden="true" />

                {/* Inner Black OLED Bezel */}
                <div className="relative rounded-[43px] bg-[#090b0e] p-[2.5px] overflow-hidden shadow-inner">
                  
                  {/* Screen Content Wrapper */}
                  <div className="relative flex flex-col overflow-hidden rounded-[40px] bg-white text-[#111827]">
                    
                    {/* Status Bar */}
                    <div className="relative z-30 flex h-8 items-center justify-between px-5 pt-1 text-[10px] font-semibold text-gray-900 bg-white">
                      <span className="w-10 text-left font-mono text-[10px] font-bold">9:41</span>

                      {/* Dynamic Island Pill */}
                      <div className="mx-auto flex h-[18px] w-[78px] items-center justify-end rounded-full bg-black px-2 shadow-xs">
                        <div className="size-1.5 rounded-full bg-[#0a0d14] ring-1 ring-[#1f2937] flex items-center justify-center">
                          <div className="size-0.5 rounded-full bg-[#2563eb]/70" />
                        </div>
                      </div>

                      {/* Cellular, WiFi, Battery */}
                      <div className="flex w-10 items-center justify-end gap-1.5 text-gray-900">
                        <svg className="size-2.5 fill-current" viewBox="0 0 16 16">
                          <rect x="1" y="11" width="2" height="4" rx="0.5" />
                          <rect x="5" y="8" width="2" height="7" rx="0.5" />
                          <rect x="9" y="5" width="2" height="10" rx="0.5" />
                          <rect x="13" y="2" width="2" height="13" rx="0.5" />
                        </svg>
                        <svg className="size-2.5 fill-current" viewBox="0 0 16 16">
                          <path d="M8 12.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.07-3.07a5.75 5.75 0 0 0-8.14 0l.88.88a4.5 4.5 0 0 1 6.38 0l.88-.88zm2.12-2.12a8.75 8.75 0 0 0-12.38 0l.88.88a7.5 7.5 0 0 1 10.62 0l.88-.88z" />
                        </svg>
                        <div className="flex items-center">
                          <div className="flex h-2 w-3.5 items-center rounded-xs border border-current p-[0.5px]">
                            <div className="h-full w-2 rounded-2xs bg-[#25c974]" />
                          </div>
                          <div className="h-1 w-[1px] rounded-r-xs bg-current" />
                        </div>
                      </div>
                    </div>

                    {/* Property Photo & Overlay Buttons */}
                    <div className="relative aspect-[16/11.5] w-full overflow-hidden bg-gray-100">
                      <img
                        src={withBase("/images/properties/boulevard-point-hero.jpg")}
                        alt="Boulevard Point, Downtown Dubai"
                        className="h-full w-full object-cover"
                      />

                      {/* Top Overlay Buttons */}
                      <div className="absolute top-2 inset-x-2.5 flex items-center justify-between pointer-events-auto">
                        <button type="button" aria-label="Back" className="flex size-6.5 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-xs backdrop-blur-xs hover:bg-white">
                          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button type="button" aria-label="Save Property" className="flex size-6.5 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-xs backdrop-blur-xs hover:bg-white">
                            <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </button>
                          <button type="button" aria-label="Share Property" className="flex size-6.5 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-xs backdrop-blur-xs hover:bg-white">
                            <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                              <polyline points="16 6 12 2 8 6" />
                              <line x1="12" y1="2" x2="12" y2="15" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Video Tour Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                        <button type="button" aria-label="Play Video Tour" className="group flex size-12 items-center justify-center rounded-full bg-[#1c2430]/90 text-white shadow-xl backdrop-blur-xs transition-transform hover:scale-105 active:scale-95">
                          <svg className="size-5.5 ml-0.5 fill-white" viewBox="0 0 24 24">
                            <polygon points="6 4 20 12 6 20 6 4" />
                          </svg>
                        </button>
                      </div>

                      {/* Pagination Dots */}
                      <div className="absolute bottom-1.5 inset-x-0 flex justify-center gap-1">
                        <span className="size-1 rounded-full bg-white/60" />
                        <span className="size-1 rounded-full bg-white/60" />
                        <span className="h-1 w-2.5 rounded-full bg-white" />
                        <span className="size-1 rounded-full bg-white/60" />
                        <span className="size-1 rounded-full bg-white/60" />
                        <span className="size-1 rounded-full bg-white/60" />
                      </div>
                    </div>

                    {/* Property Specs & Pricing */}
                    <div className="p-3 pt-2.5 flex flex-col bg-white">
                      <h3 className="font-bold text-[14.5px] text-gray-950 leading-tight">
                        Boulevard Point, Downtown Dubai
                      </h3>

                      <div className="mt-1 flex items-center gap-2.5 text-[10px] text-gray-600 font-medium">
                        <span className="flex items-center gap-0.5">
                          <svg className="size-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 19h20M2 17v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8M14 9h6a2 2 0 0 1 2 2v6" /></svg>
                          1
                        </span>
                        <span className="flex items-center gap-0.5">
                          <svg className="size-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zM6 12V5a2 2 0 0 1 2-2h1" /></svg>
                          2
                        </span>
                        <span className="flex items-center gap-0.5">
                          <svg className="size-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="22" x2="9" y2="18" /><line x1="15" y1="22" x2="15" y2="18" /></svg>
                          #705
                        </span>
                        <span className="flex items-center gap-0.5">
                          <svg className="size-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21l18-18M3 3h7M3 3v7M21 21h-7M21 21v-7" /></svg>
                          78 sqm
                        </span>
                      </div>

                      {/* 3D Tour & 6 Photos Buttons */}
                      <div className="mt-2 flex items-center gap-2">
                        <button type="button" className="flex-1 flex items-center justify-center gap-1.5 py-1 px-1.5 rounded-lg border border-gray-200 bg-gray-50/80 text-[10px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                          <span className="text-[9px] font-bold border border-gray-400 rounded px-1 py-0.2">3D</span>
                          <span>3D Tour</span>
                        </button>
                        <button type="button" className="flex-1 flex items-center justify-center gap-1.5 py-1 px-1.5 rounded-lg border border-gray-200 bg-gray-50/80 text-[10px] font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                          <svg className="size-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                          <span>6 photos</span>
                        </button>
                      </div>

                      {/* Price in Green Accent */}
                      <div className="mt-2.5 flex items-baseline">
                        <span className="font-extrabold text-[15px] text-[#25c974]">AED 1,305,990</span>
                        <span className="text-[10px] text-gray-500 font-normal ml-1.5">purchase price</span>
                      </div>

                      {/* Investors Badges */}
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9.5px] font-medium text-gray-700">
                          <svg className="size-2.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                          368 Investors
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[9.5px] font-medium text-gray-700">
                          <svg className="size-2.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                          15 days left
                        </span>
                      </div>

                      {/* Funding Progress Bar */}
                      <div className="mt-2">
                        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                          <div className="h-full w-[75%] rounded-full bg-[#25c974]" />
                        </div>
                        <div className="mt-1 flex items-center justify-between text-[10px]">
                          <span className="flex items-center gap-1 font-semibold text-[#25c974]">
                            <svg className="size-2.5 fill-current" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            75% funded
                          </span>
                          <span className="text-gray-500 font-medium">AED 764,000 available</span>
                        </div>
                      </div>

                      {/* Yield Metrics */}
                      <div className="mt-2 divide-y divide-gray-100 border-t border-b border-gray-100 py-0.5 text-[10px]">
                        <div className="flex items-center justify-between py-1">
                          <span className="flex items-center gap-1 text-gray-600">Year 1 property yield <span className="text-gray-400 text-[9px]">ⓘ</span></span>
                          <span className="font-bold text-gray-950">6.2%</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="flex items-center gap-1 text-gray-600">Annualised return <span className="text-gray-400 text-[9px]">ⓘ</span></span>
                          <span className="font-bold text-gray-950">9.2%</span>
                        </div>
                      </div>

                      {/* Add to Cart */}
                      <div className="mt-1.5 flex items-center justify-between gap-2 pt-0.5">
                        <span className="font-extrabold text-[12px] text-gray-950">AED 2,000</span>
                        <button type="button" className="rounded-lg bg-[#141b24] px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-xs hover:bg-black transition-colors">
                          Add to cart
                        </button>
                      </div>

                      <p className="mt-1.5 text-[8.5px] text-gray-400 truncate">
                        This unique development offers something that no other living in Dubai hills can. It has outstanding communal...
                      </p>
                    </div>

                    {/* Home Indicator */}
                    <div className="relative z-30 flex justify-center py-1 bg-white">
                      <div className="h-1 w-24 rounded-full bg-gray-400" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ================= 2. KEY PLATFORM STATS ROW (UNDER HERO) ================= */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-6 pb-4">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 text-center">
            {/* Stat 1: 2M+ Registered users */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#0f172a] leading-none">
                2<span className="text-[#25c974]">M+</span>
              </div>
              <p className="mt-2.5 text-sm sm:text-base font-medium text-[#64748b]">
                Registered users
              </p>
            </div>

            {/* Stat 2: AED 1.5B+ Property transactions */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#0f172a] leading-none">
                AED 1.5<span className="text-[#25c974]">B+</span>
              </div>
              <p className="mt-2.5 text-sm sm:text-base font-medium text-[#64748b]">
                Property transactions
              </p>
            </div>

            {/* Stat 3: AED 90.5M+ Rental income paid */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#0f172a] leading-none">
                AED 90.5<span className="text-[#25c974]">M+</span>
              </div>
              <p className="mt-2.5 text-sm sm:text-base font-medium text-[#64748b]">
                Rental income paid
              </p>
            </div>
          </div>
        </div>

        {/* ================= 3. TWO FEATURE CARDS: RENTAL INCOME & CAPITAL APPRECIATION ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            
            {/* Card 1: Build passive income from monthly rental payments */}
            <div className="relative flex min-h-[420px] sm:min-h-[460px] flex-col items-center justify-between overflow-hidden rounded-[32px] bg-[#f8f9fa] p-8 sm:p-10 text-center border border-gray-100 shadow-2xs transition-all duration-300 hover:shadow-md">
              {/* Heading */}
              <h3 className="max-w-[340px] text-2xl sm:text-[1.75rem] md:text-[1.85rem] font-bold leading-[1.25] tracking-tight text-[#0f172a]">
                Build passive income<br />
                from monthly <span className="text-[#25c974]">rental</span><br />
                <span className="text-[#25c974]">payments</span>
              </h3>

              {/* Graphic area: Floating 3D Green Coins + Payment Notification Card */}
              <div className="relative mt-8 flex h-[210px] w-full items-center justify-center">
                {/* 3D Green Coin Top-Left */}
                <div className="pointer-events-none absolute left-6 sm:left-10 top-2 -rotate-[24deg]">
                  <Coin className="size-16 sm:size-18 drop-shadow-md" />
                </div>

                {/* 3D Green Coin Top-Right */}
                <div className="pointer-events-none absolute right-6 sm:right-10 top-4 rotate-[34deg]">
                  <Coin className="size-16 sm:size-18 drop-shadow-md" />
                </div>

                {/* 3D Green Coin Bottom-Center */}
                <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-[45%] rotate-[8deg]">
                  <Coin className="size-20 sm:size-24 drop-shadow-lg" />
                </div>

                {/* Centered Payment Notification Card */}
                <div className="relative z-20 flex items-center gap-3.5 rounded-2xl border border-gray-100 bg-white p-3 sm:p-3.5 pr-6 sm:pr-7 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                  {/* Mint Wallet Icon */}
                  <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-[#e8faf0] text-[#25c974]">
                    <svg className="size-5.5 fill-[#25c974]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 7H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM20 5H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z" />
                    </svg>
                  </div>
                  {/* Text Details */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-[#0da85f] leading-tight">
                      You&apos;ve been paid!
                    </span>
                    <span className="mt-1 text-[13px] sm:text-sm font-bold text-[#0f172a] leading-tight">
                      AED 3,000 in rent for June
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Realise capital appreciation when you sell your shares */}
            <div className="relative flex min-h-[420px] sm:min-h-[460px] flex-col items-center justify-between overflow-hidden rounded-[32px] bg-[#f8f9fa] p-8 sm:p-10 text-center border border-gray-100 shadow-2xs transition-all duration-300 hover:shadow-md">
              {/* Heading */}
              <h3 className="max-w-[340px] text-2xl sm:text-[1.75rem] md:text-[1.85rem] font-bold leading-[1.25] tracking-tight text-[#0f172a]">
                Realise <span className="text-[#25c974]">capital</span><br />
                <span className="text-[#25c974]">appreciation</span> when you<br />
                sell your shares
              </h3>

              {/* Graphic area: Tilted Property Card + Up-Arrow Badge + Floating Banknote */}
              <div className="relative mt-8 flex h-[210px] w-full items-center justify-center">
                
                {/* Floating Tilted Property Card */}
                <div className="relative z-10 w-[175px] sm:w-[190px] -rotate-[5deg] rounded-2xl border border-gray-100 bg-white p-2.5 pb-3 shadow-[0_16px_36px_rgba(0,0,0,0.1)] text-left transition-transform duration-300 hover:-rotate-1">
                  {/* Photo of Marina Tower */}
                  <div className="relative aspect-[16/11.5] w-full overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={withBase("/images/properties/marina-tower.jpg")}
                      alt="Marina Tower, Dubai Marina"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Title & Return */}
                  <div className="mt-2">
                    <h4 className="text-[11px] font-bold text-[#0f172a] leading-tight truncate">
                      Marina Tower, Dubai Marina
                    </h4>
                    <p className="mt-1 text-sm font-bold text-[#25c974] leading-tight">
                      +30.4%
                    </p>
                  </div>
                </div>

                {/* Overlapping Up-Right Trend Arrow Green Badge (Left) */}
                <div className="absolute left-8 sm:left-14 top-14 z-20 flex size-11 items-center justify-center rounded-full bg-[#25c974] text-white shadow-lg">
                  <svg
                    className="size-5 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>

                {/* Floating Green Cash Banknote (Right) */}
                <div className="pointer-events-none absolute right-8 sm:right-12 bottom-6 z-15 rotate-[24deg] drop-shadow-md">
                  <Banknote className="w-14 sm:w-16" />
                </div>

              </div>
            </div>

          </div>

          {/* Card 3 (Horizontal): Trade your investments within our community */}
          <div className="rounded-[32px] bg-[#f8f9fa] border border-gray-100 p-8 sm:p-10 lg:p-12 overflow-hidden relative shadow-2xs transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 sm:gap-10">
              
              {/* Left Column: Heading and Learn more CTA */}
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.2] text-[#0f172a]">
                  <span className="text-[#25c974]">Trade</span>{' '}
                  <span>your investments</span>
                  <br />
                  <span>within</span>{' '}
                  <span className="text-[#25c974]">our community</span>
                </h3>

                <div className="mt-6 sm:mt-7">
                  <a
                    href="#trade"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0f172a] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1e293b] transition-colors"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Right Column: Floating White Pill Card with City Walk Property */}
              <div className="relative flex items-center justify-center md:justify-end pt-3 pb-3 px-3 sm:px-6">
                
                {/* Floating Green Circle Badge with Tag Icon (Top-Right) */}
                <div className="absolute -top-3 -right-1 sm:-top-4 sm:-right-2 z-20 flex size-11 sm:size-12 items-center justify-center rounded-full bg-[#25c974] text-white shadow-md transition-transform hover:scale-105">
                  <svg
                    className="size-5 sm:size-5.5 fill-none stroke-current -rotate-12"
                    viewBox="0 0 24 24"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                  </svg>
                </div>

                {/* Floating Green Upward Trending Arrow (Bottom-Left) */}
                <div className="absolute -bottom-3 left-1 sm:-bottom-4 sm:left-2 z-20 pointer-events-none text-[#25c974]">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>

                {/* Main White Capsule Card */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] rounded-2xl bg-white p-3.5 sm:p-4 pr-5 sm:pr-6 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-3.5 sm:gap-4 transition-transform hover:-translate-y-0.5 duration-300">
                  
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
                    <p className="font-bold text-[#0f172a] text-sm sm:text-[15px] truncate leading-tight">
                      Building 8, City Walk
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full w-[90%] rounded-full bg-[#25c974]" />
                    </div>

                    {/* Stats Under Progress Bar */}
                    <div className="mt-1.5 flex items-center justify-between gap-3 text-[11px] sm:text-xs">
                      <span className="font-medium text-[#64748b] whitespace-nowrap">
                        20,000 shares listed
                      </span>
                      <span className="font-bold text-[#25c974] whitespace-nowrap">
                        90% sold
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

      {/* Floating Customer Support Chat Button on bottom-right */}
      <div
        className="fixed bottom-6 right-6 z-50 flex size-12 sm:size-13 items-center justify-center rounded-full bg-[#25c974] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Customer Support Chat"
        title="Chat with an advisor"
      >
        <svg className="size-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
        </svg>
      </div>
    </section>
  )
}
