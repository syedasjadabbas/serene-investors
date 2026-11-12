'use client'

import React from 'react'

/* =========================================================================
   AUTHENTIC 1:1 PUBLICATION LOGOS MATCHING STAKE EXACT SCREENSHOT
   ========================================================================= */

function ForbesLogo() {
  return (
    <svg viewBox="0 0 95 24" className="h-6 w-auto" fill="#0D1117" aria-label="Forbes">
      <text
        x="0"
        y="19"
        fontFamily="'Playfair Display', Didot, 'Times New Roman', Georgia, serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="-0.02em"
      >
        Forbes
      </text>
    </svg>
  )
}

function CnnLogo() {
  return (
    <svg viewBox="0 0 68 24" className="h-6 w-auto" fill="none" aria-label="CNN">
      <path
        d="M18 5.5H10.5C6.9 5.5 4 8.4 4 12C4 15.6 6.9 18.5 10.5 18.5H18M18 18.5V5.5L29 18.5V5.5M29 18.5V5.5L40 18.5V5.5M40 18.5H44"
        stroke="#CC0000"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.5H11C9.3 9.5 8 10.8 8 12.5C8 14.2 9.3 15.5 11 15.5H16"
        stroke="#CC0000"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BloombergLogo() {
  return (
    <svg viewBox="0 0 120 24" className="h-5.5 w-auto" fill="#000000" aria-label="Bloomberg">
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="17.5"
        letterSpacing="-0.035em"
      >
        Bloomberg
      </text>
    </svg>
  )
}

function TechCrunchLogo() {
  return (
    <svg viewBox="0 0 46 24" className="h-6 w-auto" fill="#00D664" aria-label="TechCrunch">
      {/* T block */}
      <path d="M0 2h19v5.5h-6.5v14.5H6.5V7.5H0V2z" fill="#00D664" />
      {/* C block */}
      <path d="M23 2h19v5.5h-12.5v9h12.5V22H23V2z" fill="#00D664" />
    </svg>
  )
}

function ArabNewsLogo() {
  return (
    <svg viewBox="0 0 135 24" className="h-5 w-auto" fill="#0D1117" aria-label="Arab News">
      <text
        x="0"
        y="18"
        fontFamily="'Times New Roman', Times, Didot, Georgia, serif"
        fontWeight="800"
        fontSize="16.5"
        letterSpacing="0.08em"
      >
        ARAB NEWS
      </text>
    </svg>
  )
}

function TimeLogo() {
  return (
    <svg viewBox="0 0 68 24" className="h-6 w-auto" fill="#E90606" aria-label="TIME">
      <text
        x="0"
        y="19"
        fontFamily="'Times New Roman', Didot, Georgia, serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="0.06em"
      >
        TIME
      </text>
    </svg>
  )
}

function FinancialTimesLogo() {
  return (
    <svg viewBox="0 0 160 24" className="h-4.5 w-auto" fill="#1F2937" aria-label="Financial Times">
      <text
        x="0"
        y="17"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="0.14em"
      >
        FINANCIAL TIMES
      </text>
    </svg>
  )
}

const PRESS_ITEMS = [
  { id: 'forbes', component: ForbesLogo, name: 'Forbes' },
  { id: 'cnn', component: CnnLogo, name: 'CNN' },
  { id: 'bloomberg', component: BloombergLogo, name: 'Bloomberg' },
  { id: 'techcrunch', component: TechCrunchLogo, name: 'TechCrunch' },
  { id: 'arab-news', component: ArabNewsLogo, name: 'Arab News' },
  { id: 'time', component: TimeLogo, name: 'TIME' },
  { id: 'financial-times', component: FinancialTimesLogo, name: 'Financial Times' },
]

export function PressSection({ logos }: { logos?: any } = {}) {
  return (
    <section
      id="press"
      className="relative w-full bg-white py-10 md:py-14 select-none overflow-hidden border-b border-black/[0.04]"
      aria-label="We've been featured in"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Scoped CSS animation for continuous left-to-right marquee movement */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeRight {
            0% {
              transform: translate3d(-50%, 0, 0);
            }
            100% {
              transform: translate3d(0%, 0, 0);
            }
          }
          .animate-stake-marquee-right {
            display: flex;
            width: max-content;
            animation: marqueeRight 30s linear infinite;
            will-change: transform;
          }
          .animate-stake-marquee-right:hover {
            animation-play-state: paused;
          }
        ` }} />

        {/* Section Heading: "We've been featured in" */}
        <h3 className="text-center text-[13.5px] sm:text-[14.5px] font-medium text-slate-500 tracking-normal mb-8">
          We&apos;ve been featured in
        </h3>

        {/* Infinite Auto-Scrolling Marquee Track */}
        <div className="relative w-full overflow-hidden">
          
          {/* Left Edge Smooth Gradient Fade Mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Right Edge Smooth Gradient Fade Mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Scrolling Marquee Container with duplicate track for seamless infinite loop */}
          <div className="animate-stake-marquee-right py-2">
            
            {/* Track 1 */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0 pr-12 sm:pr-16 md:pr-20">
              {PRESS_ITEMS.map((item, idx) => {
                const LogoComponent = item.component
                return (
                  <div
                    key={`track1-${item.id}-${idx}`}
                    className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title={item.name}
                  >
                    <LogoComponent />
                  </div>
                )
              })}
            </div>

            {/* Track 2 (Exact Duplicate for seamless 0-jump infinite wrap) */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0 pr-12 sm:pr-16 md:pr-20" aria-hidden="true">
              {PRESS_ITEMS.map((item, idx) => {
                const LogoComponent = item.component
                return (
                  <div
                    key={`track2-${item.id}-${idx}`}
                    className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title={item.name}
                  >
                    <LogoComponent />
                  </div>
                )
              })}
            </div>

            {/* Track 3 (Extra buffer for ultra-wide displays) */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20 shrink-0 pr-12 sm:pr-16 md:pr-20" aria-hidden="true">
              {PRESS_ITEMS.map((item, idx) => {
                const LogoComponent = item.component
                return (
                  <div
                    key={`track3-${item.id}-${idx}`}
                    className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title={item.name}
                  >
                    <LogoComponent />
                  </div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default PressSection
