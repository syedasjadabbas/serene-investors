'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  ShoppingCart,
  Tag,
  Share2,
  Bookmark,
  ChevronLeft,
  SlidersHorizontal,
  Wallet,
  Building2,
  HelpCircle,
  Eye,
  Camera,
  Coins,
} from 'lucide-react'

// Authentic iPhone Top Status Bar & Centered Dynamic Island
function PhoneTopBar({
  className = '',
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <div
      className={`relative z-30 pt-3 pb-1 px-4 flex items-center justify-between text-xs font-semibold select-none ${
        light ? 'text-white' : 'text-[#0D1117]'
      } ${className}`}
    >
      <span className="w-10 text-left font-semibold text-[11px] tracking-tight">9:41</span>
      
      {/* Centered Dynamic Island - Protected with generous top clearance (pt-3), never cut off */}
      <div className="h-[18px] w-[72px] rounded-full bg-black flex items-center justify-end px-2 shadow-xs shrink-0">
        <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
          <div className="size-0.5 rounded-full bg-[#20293d]" />
        </div>
      </div>

      <div className="flex w-10 items-center justify-end gap-1">
        <svg className="size-3 shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <rect x="1" y="11" width="2" height="4" rx="0.5" />
          <rect x="5" y="8" width="2" height="7" rx="0.5" />
          <rect x="9" y="5" width="2" height="10" rx="0.5" />
          <rect x="13" y="2" width="2" height="13" rx="0.5" />
        </svg>
        <div className="flex items-center">
          <div className="flex h-2.5 w-4 items-center rounded-[2.5px] border-[1.2px] border-current p-[1px]">
            <div className="h-full w-2.5 rounded-[0.8px] bg-[#00A663]" />
          </div>
          <div className="h-1.5 w-[1px] rounded-r-xs bg-current" />
        </div>
      </div>
    </div>
  )
}

// Authentic VISA Logo SVG
function VisaLogo() {
  return (
    <svg className="h-4 sm:h-5 w-auto" viewBox="0 0 50 16" fill="none">
      <path
        d="M19.5 0.5L12.8 15.5H8.4L5.1 3.5C4.9 2.7 4.7 2.4 4.1 2C3.1 1.4 1.5 0.9 0 0.6L0.1 0.5H7.1C8 0.5 8.8 1.1 9 2.1L10.7 11.2L15 0.5H19.5ZM36.8 10.7C36.8 6.6 31.1 6.4 31.2 4.6C31.2 4 31.8 3.4 33 3.3C33.6 3.2 35.2 3.2 36.9 4L37.6 0.8C36.6 0.4 35.3 0.1 33.7 0.1C29.6 0.1 26.7 2.3 26.6 5.4C26.6 7.7 28.7 9 30.3 9.8C31.9 10.6 32.5 11.1 32.5 11.8C32.5 12.9 31.2 13.4 29.9 13.4C27.8 13.4 26.6 13.1 25.6 12.6L24.8 15.9C26 16.5 28.2 16.9 30.5 16.9C34.8 16.9 36.8 14.8 36.8 10.7ZM47.6 15.5H51.5L48.1 0.5H44.5C43.6 0.5 42.9 1 42.6 1.7L36.4 15.5H40.9L41.8 13.1H47.1L47.6 15.5ZM43 9.9L45.2 3.9L46.5 9.9H43ZM25.7 0.5L22.2 15.5H18L21.5 0.5H25.7Z"
        fill="#1434CB"
      />
    </svg>
  )
}

// Authentic Mastercard Logo SVG
function MastercardLogo() {
  return (
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 38 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#EB001B" />
      <circle cx="26" cy="12" r="11" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  )
}

// Authentic Apple Pay Logo
function ApplePayLogo() {
  return (
    <div className="flex items-center gap-1 font-semibold text-[#0F172A] tracking-tight">
      <svg className="h-4 sm:h-5 w-auto fill-current" viewBox="0 0 170 170">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6-9.13-10.74-19.46-14.23-30.99-3.48-11.53-5.23-22.37-5.23-32.52 0-14.79 3.73-26.83 11.19-36.13 7.46-9.3 16.71-14.07 27.75-14.3 4.9.11 10.14 1.34 15.73 3.69 5.58 2.35 9.53 3.58 11.83 3.69 1.74 0 5.8-1.29 12.18-3.86 6.39-2.58 11.93-3.72 16.63-3.43 12.83 1.09 23.01 5.92 30.54 14.51-11.1 6.74-16.53 16.21-16.31 28.4.22 9.57 3.84 17.56 10.87 23.97 7.03 6.41 15.34 10.14 24.94 11.19-2.07 6.31-4.79 12.89-8.17 19.71zM119.22 33.04c0-7.39 2.66-14.46 7.99-21.21 5.33-6.74 12.01-11.03 20.04-12.83 1.2 7.72-.98 15.12-6.53 22.2-5.55 7.07-12.72 11.36-21.5 11.84z" />
      </svg>
      <span className="font-bold text-sm sm:text-base">Pay</span>
    </div>
  )
}

// UAE Flag SVG Icon
function UaeFlagIcon() {
  return (
    <svg className="size-5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 32 32">
      <rect x="0" y="0" width="32" height="10.66" fill="#00732F" />
      <rect x="0" y="10.66" width="32" height="10.66" fill="#FFFFFF" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#000000" />
      <rect x="0" y="0" width="9.5" height="32" fill="#FF0000" />
    </svg>
  )
}

export function InteractiveJourney() {
  // 4 steps corresponding 1-to-1 to the 4 user images:
  // Step 0: First image (Invest)
  // Step 1: Second image (Browse)
  // Step 2: Third image (Earn)
  // Step 3: Fourth image (Sell)
  const [activeStep, setActiveStep] = useState<number>(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      id: 0,
      kicker: 'Invest',
      headline: (
        <>
          Own a piece of the ones you
          <br className="hidden sm:inline" /> love , from only USD 150
        </>
      ),
      description:
        'Invest in your favourite opportunities, no matter where you are in the world and leave the rest to us',
      nextPreview: 'Earn',
      type: 'invest',
    },
    {
      id: 1,
      kicker: 'Browse',
      headline: (
        <>
          Access prime real estate
          <br className="hidden sm:inline" /> across multiple markets
        </>
      ),
      description:
        'Sign up to Stake in a matter of minutes and explore a curated collection of real estate in global cities from just USD 150',
      nextPreview: 'Invest',
      type: 'browse',
    },
    {
      id: 2,
      kicker: 'Earn',
      headline: (
        <>
          Enjoy regular passive income
          <br className="hidden sm:inline" /> with no effort
        </>
      ),
      description:
        'Sit back and earn consistent rental income from your brand new real estate portfolio',
      nextPreview: 'Sell',
      type: 'earn',
    },
    {
      id: 3,
      kicker: 'Sell',
      headline: (
        <>
          From entry to exit – liquidity
          <br className="hidden sm:inline" /> when you need it
        </>
      ),
      description:
        'Realise your full investment appreciation at maturity or take early profits by selling within our community',
      type: 'sell',
    },
  ]

  // Automated Scroll-Driven Step Detection (Sticky Scrollytelling)
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2
      let closestIndex = 0
      let minDistance = Infinity

      stepRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const distance = Math.abs(elementCenter - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setActiveStep((prev) => (prev !== closestIndex ? closestIndex : prev))
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Smooth scroll handler on manual click
  const scrollToStep = (index: number) => {
    setActiveStep(index)
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const el = stepRefs.current[index]
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }
  }

  return (
    <section
      id="how-it-works"
      className="relative bg-[#F7F8F9] pt-16 sm:pt-28 pb-16 lg:pb-28 border-b border-black/[0.06] select-none overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        
        {/* Top Centered Header (Exact Match to User Image) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-20">
          <p className="text-sm sm:text-base lg:text-xl font-medium text-[#00A663] mb-2 sm:mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[62px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12] text-balance">
            Build a diversified real
            <br />
            estate portfolio easily
            <br />
            from your phone
          </h2>
        </div>

        {/* Step Navigation Pill Selector */}
        <div className="w-full overflow-x-auto no-scrollbar flex justify-start sm:justify-center mb-8 sm:mb-16 px-1 py-1">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/[0.04] p-1.5 border border-black/[0.05] shadow-2xs backdrop-blur-md shrink-0">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => scrollToStep(idx)}
                  className={`min-h-[40px] px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-sm scale-105'
                      : 'text-gray-500 hover:text-[#0F172A]'
                  }`}
                >
                  <span className="text-[#00A663] mr-1.5">0{idx + 1}</span>
                  {step.kicker}
                </button>
              )
            })}
          </div>
        </div>

        {/* Mobile Editorial Card for active step (< lg) */}
        <div className="lg:hidden flex flex-col space-y-4 mb-6 text-center px-2">
          <p className="text-sm font-bold text-[#00A663] tracking-tight">{steps[activeStep].kicker}</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
            {steps[activeStep].headline}
          </h3>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-md mx-auto">
            {steps[activeStep].description}
          </p>
          {steps[activeStep].type === 'invest' && (
            <div className="pt-2 flex items-center justify-center gap-5">
              <VisaLogo />
              <MastercardLogo />
              <ApplePayLogo />
            </div>
          )}
          {steps[activeStep].type === 'browse' && (
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl shadow-md border border-black">
                <svg className="size-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6-9.13-10.74-19.46-14.23-30.99-3.48-11.53-5.23-22.37-5.23-32.52 0-14.79 3.73-26.83 11.19-36.13 7.46-9.3 16.71-14.07 27.75-14.3 4.9.11 10.14 1.34 15.73 3.69 5.58 2.35 9.53 3.58 11.83 3.69 1.74 0 5.8-1.29 12.18-3.86 6.39-2.58 11.93-3.72 16.63-3.43 12.83 1.09 23.01 5.92 30.54 14.51-11.1 6.74-16.53 16.21-16.31 28.4.22 9.57 3.84 17.56 10.87 23.97 7.03 6.41 15.34 10.14 24.94 11.19-2.07 6.31-4.79 12.89-8.17 19.71zM119.22 33.04c0-7.39 2.66-14.46 7.99-21.21 5.33-6.74 12.01-11.03 20.04-12.83 1.2 7.72-.98 15.12-6.53 22.2-5.55 7.07-12.72 11.36-21.5 11.84z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">Download on the</span>
                  <span className="block text-xs font-bold text-white tracking-tight mt-0.5">App Store</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl shadow-md border border-black">
                <svg className="size-4.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.6 1.4L13.7 11.5L3.6 21.6c-.3-.2-.6-.6-.6-1.1V2.5c0-.5.3-.9.6-1.1z" />
                  <path fill="#34A853" d="M17.1 8.1L13.7 11.5L3.6 1.4C3.9 1.2 4.4 1.1 5 1.4l12.1 6.7z" />
                  <path fill="#EA4335" d="M17.1 14.9L5 21.6c-.6.3-1.1.2-1.4 0l10.1-10.1l3.4 3.4z" />
                  <path fill="#FBBC05" d="M20.5 10.4l-3.4-1.9l-3.4 3l3.4 3l3.4-1.9c.8-.5.8-1.7 0-2.2z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">GET IT ON</span>
                  <span className="block text-xs font-bold text-white tracking-tight mt-0.5">Google Play</span>
                </div>
              </div>
            </div>
          )}
          {steps[activeStep].type === 'earn' && (
            <div className="pt-2 flex justify-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A] bg-white px-3.5 py-1.5 rounded-full border border-black/5 shadow-2xs">
                <span className="text-[#00A663]"><Wallet size={16} strokeWidth={2.4} /></span>
                <span>Paid directly to your Stake wallet</span>
              </div>
            </div>
          )}
        </div>

        {/* 2-Column Scrollytelling Grid: Left Typography (Desktop), Right Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* =========================================================================
              LEFT COLUMN: Exact Typography, Spacing, and Badges per Image (Desktop Only)
              ========================================================================= */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-32 lg:space-y-48 py-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el
                  }}
                  data-step-index={index}
                  onClick={() => scrollToStep(index)}
                  className={`min-h-[46vh] lg:min-h-[58vh] flex flex-col justify-center cursor-pointer scroll-mt-24 transition-all duration-500 ${
                    isActive
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-20 hover:opacity-40 -translate-x-1'
                  }`}
                >
                  <div className="relative pl-1 sm:pl-2">
                    {/* Green Kicker */}
                    <p className="text-base sm:text-lg font-bold text-[#00A663] tracking-tight">
                      {step.kicker}
                    </p>

                    {/* Headline */}
                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-[1.14] tracking-tight">
                      {step.headline}
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg">
                      {step.description}
                    </p>

                    {/* STEP 0 (Invest) Payments row: VISA, Mastercard, Apple Pay */}
                    {step.type === 'invest' && (
                      <div className="mt-8 flex items-center gap-5 sm:gap-6">
                        <VisaLogo />
                        <MastercardLogo />
                        <ApplePayLogo />
                      </div>
                    )}

                    {/* STEP 1 (Browse) Badges row: App Store & Google Play */}
                    {step.type === 'browse' && (
                      <div className="mt-8 flex items-center gap-3">
                        {/* App Store Badge */}
                        <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl shadow-md border border-black hover:opacity-90 transition-opacity">
                          <svg className="size-5 fill-current" viewBox="0 0 170 170">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6-9.13-10.74-19.46-14.23-30.99-3.48-11.53-5.23-22.37-5.23-32.52 0-14.79 3.73-26.83 11.19-36.13 7.46-9.3 16.71-14.07 27.75-14.3 4.9.11 10.14 1.34 15.73 3.69 5.58 2.35 9.53 3.58 11.83 3.69 1.74 0 5.8-1.29 12.18-3.86 6.39-2.58 11.93-3.72 16.63-3.43 12.83 1.09 23.01 5.92 30.54 14.51-11.1 6.74-16.53 16.21-16.31 28.4.22 9.57 3.84 17.56 10.87 23.97 7.03 6.41 15.34 10.14 24.94 11.19-2.07 6.31-4.79 12.89-8.17 19.71zM119.22 33.04c0-7.39 2.66-14.46 7.99-21.21 5.33-6.74 12.01-11.03 20.04-12.83 1.2 7.72-.98 15.12-6.53 22.2-5.55 7.07-12.72 11.36-21.5 11.84z" />
                          </svg>
                          <div className="text-left leading-none">
                            <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">Download on the</span>
                            <span className="block text-xs font-bold text-white tracking-tight mt-0.5">App Store</span>
                          </div>
                        </div>

                        {/* Google Play Badge */}
                        <div className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-xl shadow-md border border-black hover:opacity-90 transition-opacity">
                          <svg className="size-4.5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M3.6 1.4L13.7 11.5L3.6 21.6c-.3-.2-.6-.6-.6-1.1V2.5c0-.5.3-.9.6-1.1z" />
                            <path fill="#34A853" d="M17.1 8.1L13.7 11.5L3.6 1.4C3.9 1.2 4.4 1.1 5 1.4l12.1 6.7z" />
                            <path fill="#EA4335" d="M17.1 14.9L5 21.6c-.6.3-1.1.2-1.4 0l10.1-10.1l3.4 3.4z" />
                            <path fill="#FBBC05" d="M20.5 10.4l-3.4-1.9l-3.4 3l3.4 3l3.4-1.9c.8-.5.8-1.7 0-2.2z" />
                          </svg>
                          <div className="text-left leading-none">
                            <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">GET IT ON</span>
                            <span className="block text-xs font-bold text-white tracking-tight mt-0.5">Google Play</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2 (Earn) Wallet Pill: Paid directly to your Stake wallet */}
                    {step.type === 'earn' && (
                      <div className="mt-8 flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A]">
                        <span className="text-[#00A663]">
                          <Wallet size={19} strokeWidth={2.4} />
                        </span>
                        <span>Paid directly to your Stake wallet</span>
                      </div>
                    )}

                    {/* Faint hint of the next step at bottom (like in screenshot) */}
                    {step.nextPreview && (
                      <div className="mt-20 pt-6 opacity-15 pointer-events-none select-none">
                        <p className="text-lg font-bold text-[#00A663]">{step.nextPreview}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Sticky Rounded Card Container with Realistic Mockup & Stickers
              ========================================================================= */}
          <div className="col-span-12 lg:col-span-7 lg:sticky lg:top-24 h-auto lg:h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
            
            {/* Dynamic Card Container whose background color & size matches user screenshot with refined proportions */}
            <div
              className={`w-full max-w-[480px] lg:max-w-[565px] h-[380px] sm:h-[440px] lg:h-[515px] rounded-[1.75rem] sm:rounded-[2.5rem] p-0 relative shadow-2xl overflow-hidden transition-colors duration-700 select-none flex justify-center items-start pt-5 sm:pt-7 lg:pt-9 ${
                activeStep === 0
                  ? 'bg-[#0E1726]' // 1st Image: Deep Dark Navy
                  : activeStep === 1
                  ? 'bg-[#22C55E]' // 2nd Image: Vibrant Emerald Green
                  : activeStep === 2
                  ? 'bg-[#FBBF24]' // 3rd Image: Warm Golden Amber
                  : 'bg-[#F4F6F8]' // 4th Image: Light Neutral Gray
              }`}
            >
              {/* =============================================================
                  PROPERTY 1 (IMAGE 1): INVEST STATE
                  - Navy rounded container
                  - Realistic Phone with waterfront residence
                  - Green Shopping Cart circular sticker (top-left)
                  - Circular Dubai Marina skyline badge (top-right)
                  - Floating "AED 500" Invest pill across center-bottom
                  ============================================================= */}
              {activeStep === 0 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Sticker 1: Green Shopping Cart Circle (Top Left) */}
                  <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-30 size-12 sm:size-16 rounded-full bg-[#00D084] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                    <ShoppingCart size={22} className="sm:size-7" strokeWidth={2.4} />
                  </div>

                  {/* Sticker 2: Circular Dubai Marina Cityscape Badge (Top Right) */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-5 z-10 size-20 sm:size-28 rounded-full border-2 sm:border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      src="/images/journey/dubai-marina.jpg"
                      alt="Dubai Marina"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Phone Mockup (Half-screen cut off at bottom of card - Steel Gray Titanium Frame) */}
                  <div className="w-[230px] min-[390px]:w-[245px] sm:w-[255px] lg:w-[265px] h-[500px] sm:h-[580px] lg:h-[600px] rounded-t-[40px] sm:rounded-t-[46px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[3.5px] shadow-[0_28px_60px_-12px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.14)] relative z-20 border border-[#485362]/80 shrink-0">
                    <div className="h-full rounded-t-[38px] sm:rounded-t-[42px] overflow-hidden bg-white relative flex flex-col text-[#0F172A] pb-3">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white" />

                      {/* Phone Main Media (Waterfront yachts / apartments) */}
                      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-gray-100">
                        <img
                          src="/images/journey/dubai-marina.jpg"
                          alt="Marina luxury residence"
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Top Action Icons inside media */}
                        <div className="absolute top-2.5 right-3 flex items-center gap-1.5 z-10">
                          <div className="size-6.5 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                            <Bookmark size={12} className="text-[#0F172A]" />
                          </div>
                          <div className="size-6.5 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                            <Share2 size={12} className="text-[#0F172A]" />
                          </div>
                        </div>
                      </div>

                      {/* Floating AED 500 Invest Glass Card (Center/Bottom Overlay) */}
                      <div className="absolute bottom-36 sm:bottom-46 lg:bottom-52 left-2 right-2 sm:left-2.5 sm:right-2.5 z-30 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-xl p-2 sm:p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <UaeFlagIcon />
                          <div className="truncate">
                            <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">AED 500</span>
                            <span className="text-[10px] text-gray-400 font-medium ml-1">~$136.15</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md transition-transform active:scale-95 shrink-0"
                        >
                          Invest
                        </button>
                      </div>

                      {/* Bottom Property Specs & Tour Pills */}
                      <div className="px-2.5 space-y-2 mt-2">
                        <div className="flex items-center justify-between text-[10px] text-gray-600 px-0.5 font-semibold">
                          <span>🛏️ 2</span>
                          <span>🚿 3</span>
                          <span>🔲 #1020</span>
                          <span>📐 170 sqm</span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-0.5">
                          <div className="flex-1 flex items-center justify-center gap-1 rounded-xl border border-gray-200 py-1.5 text-[10px] font-semibold text-gray-700">
                            <Eye size={11} className="text-[#00A663]" />
                            <span>Virtual Tour</span>
                          </div>
                          <div className="flex-1 flex items-center justify-center gap-1 rounded-xl border border-gray-200 py-1.5 text-[10px] font-semibold text-gray-700">
                            <Camera size={11} className="text-[#00A663]" />
                            <span>6 photos</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =============================================================
                  PROPERTY 2 (IMAGE 2): BROWSE STATE
                  - Vibrant Green rounded container (matching screenshot exactly)
                  - Half-screen phone width ~355px cut off at bottom of card
                  - Left tilted skyscraper sticker
                  - Top-right tilted Ferris wheel sticker
                  - Bottom-right Burj Al Arab sticker
                  ============================================================= */}
              {activeStep === 1 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Sticker 1: Tilted Skyscraper Photo (Left, -12deg) */}
                  <div className="absolute top-1/4 left-1 sm:left-2 z-10 -rotate-[12deg] border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-20 sm:w-26 lg:w-30 h-26 sm:h-32 lg:h-38 bg-white">
                    <img
                      src="/images/journey/residential.jpg"
                      alt="Modern Skyscrapers"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 2: Tilted Ferris Wheel Architecture Photo (Top Right, +12deg) */}
                  <div className="absolute top-3 sm:top-5 right-1 sm:right-4 z-10 rotate-[12deg] border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-20 sm:w-26 lg:w-30 h-26 sm:h-32 lg:h-38 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=400&q=80"
                      alt="Dubai Architecture"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 3: Burj Al Arab in turquoise ocean (Bottom Right, +4deg) */}
                  <div className="absolute bottom-4 sm:bottom-6 right-1 sm:right-3 z-30 rotate-[4deg] border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-22 sm:w-28 lg:w-34 h-22 sm:h-28 lg:h-34 bg-white">
                    <img
                      src="/images/journey/burj-al-arab.jpg"
                      alt="Burj Al Arab"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Phone Mockup (Exact half-screen size cut off at bottom of green card) */}
                  <div className="w-[230px] min-[390px]:w-[245px] sm:w-[255px] lg:w-[265px] h-[500px] sm:h-[580px] lg:h-[600px] rounded-t-[40px] sm:rounded-t-[44px] bg-[#161a20] p-[3px] shadow-2xl relative z-20 border border-[#374151]/80 shrink-0">
                    <div className="h-full rounded-t-[41px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white border-b border-gray-100/60" />

                      <div className="p-2.5 sm:p-3 flex flex-col flex-1">
                        {/* Header: Properties & Icons */}
                        <div className="flex items-center justify-between px-0.5">
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">Properties</h3>
                          <div className="flex items-center gap-2 text-gray-700">
                            <Bookmark size={15} />
                            <SlidersHorizontal size={15} />
                          </div>
                        </div>

                        {/* Segmented Tabs: Available (7), Funded (213), Exited (3) */}
                        <div className="mt-1.5 flex items-center justify-between border-b border-gray-100 pb-1.5 text-[11px] font-semibold text-gray-400">
                          <span className="text-[#0F172A] font-bold border-b-2 border-[#00A663] pb-1">
                            Available (7)
                          </span>
                          <span className="pb-1">Funded (213)</span>
                          <span className="pb-1">Exited (3)</span>
                          <SlidersHorizontal size={12} className="text-gray-400" />
                        </div>

                        {/* Featured Property Card: Marina Gate, Dubai Marina */}
                        <div className="mt-2 rounded-2xl border border-gray-100 overflow-hidden shadow-xs bg-white">
                          <div className="relative h-36 sm:h-40 w-full">
                            <img
                              src="/images/journey/dubai-marina.jpg"
                              alt="Marina Gate"
                              className="size-full object-cover"
                            />
                            {/* Capital Growth Pill */}
                            <span className="absolute top-2 left-2 rounded-full bg-white/95 px-2 py-0.5 text-[9.5px] font-bold text-[#00A663] shadow-xs flex items-center gap-1">
                              <span>🌱</span> Capital growth
                            </span>

                            {/* Image Carousel Dots */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              <span className="size-1.5 rounded-full bg-white shadow-xs" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                            </div>
                          </div>

                          <div className="p-2.5">
                            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] truncate">
                              Marina Gate, Dubai Marina
                            </h4>
                            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-gray-500 font-medium truncate">
                              <span>🛏️ 2</span>
                              <span>•</span>
                              <span>🏢 #1020</span>
                              <span>•</span>
                              <span>🔑 Rented</span>
                              <span>•</span>
                              <span>🇦🇪 Dubai</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =============================================================
                  PROPERTY 3 (IMAGE 3): EARN STATE
                  - Warm Golden Amber rounded container
                  - Realistic Half-Screen Phone
                  - Floating Stake Rent Notification (Top/Center)
                  - Floating "All time returns" Card (Bottom)
                  ============================================================= */}
              {activeStep === 2 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Floating Notification 1: Stake Rent Paid Notification (Top) */}
                  <div className="absolute top-14 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 z-30 rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-black/5 p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3">
                    <div className="size-9 sm:size-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 relative shadow-sm">
                      <span className="font-black text-sm text-[#00A663]">k</span>
                      <span className="size-2 rounded-full bg-pink-500 absolute top-1 right-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                        Stake
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug truncate">
                        You&apos;ve been paid AED 18,000 in rent
                      </p>
                    </div>
                  </div>

                  {/* Floating Card 2: All Time Returns (Bottom) */}
                  <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 left-2 right-2 sm:left-4 sm:right-4 z-30 rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-black/5 p-3 sm:p-4.5 lg:p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                        All time returns
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 sm:gap-2.5">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0F172A] tracking-tight">
                        AED 89,000
                      </p>
                      <span className="rounded-full bg-[#D1FAE5] px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-[#059669]">
                        30.8%
                      </span>
                    </div>

                    {/* Dual-color Progress Bar: 75% Green, 25% Yellow */}
                    <div className="mt-2.5 sm:mt-3.5 h-2 sm:h-2.5 w-full rounded-full bg-gray-100 flex overflow-hidden">
                      <div className="h-full w-[75%] bg-[#00A663]" />
                      <div className="h-full w-[25%] bg-[#FBBF24]" />
                    </div>
                  </div>

                  {/* Phone Mockup (Half-screen cut off at bottom of card) */}
                  <div className="w-[230px] min-[390px]:w-[245px] sm:w-[255px] lg:w-[265px] h-[500px] sm:h-[580px] lg:h-[600px] rounded-t-[40px] sm:rounded-t-[44px] bg-[#161a20] p-[3px] shadow-2xl relative z-10 border border-[#374151]/80 shrink-0">
                    <div className="h-full rounded-t-[41px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white border-b border-gray-100/60" />

                      <div className="p-2.5 sm:p-3 flex flex-col flex-1">
                        {/* Header: Portfolio & Currency Badge */}
                        <div className="flex items-center justify-between px-0.5">
                          <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">Portfolio</h3>
                          <div className="flex items-center gap-1 bg-black/[0.06] px-2 py-0.5 rounded-full text-[10.5px] font-bold text-gray-800">
                            <span>🇦🇪</span>
                            <span>AED</span>
                            <span className="text-gray-400">›</span>
                          </div>
                        </div>

                        {/* Action Circles Bar */}
                        <div className="mt-3 flex items-center justify-around py-2 border-b border-gray-100">
                          <div className="size-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <Coins size={14} />
                          </div>
                          <div className="size-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <Wallet size={14} />
                          </div>
                          <div className="size-8.5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <Building2 size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =============================================================
                  PROPERTY 4 (IMAGE 4): SELL STATE
                  - Soft Light Gray rounded container
                  - Half-screen phone width ~355px cut off at bottom of card
                  - Tilted left photo card (Palm Jumeirah aerial)
                  - Tilted top-right photo card (Resort towers with pool)
                  - Green circular Price Tag sticker (Bottom-Right)
                  ============================================================= */}
              {activeStep === 3 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Sticker 1: Tilted Palm Jumeirah Aerial Photo (Left, -12deg) */}
                  <div className="absolute top-1/4 left-1 sm:left-2 z-10 -rotate-[12deg] border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-20 sm:w-26 lg:w-30 h-26 sm:h-32 lg:h-38 bg-white">
                    <img
                      src="/images/journey/palm-aerial.jpg"
                      alt="Palm Jumeirah"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 2: Tilted Pool Towers Photo (Top Right, +12deg) */}
                  <div className="absolute top-3 sm:top-5 right-1 sm:right-4 z-10 rotate-[12deg] border-2 sm:border-4 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-20 sm:w-26 lg:w-30 h-26 sm:h-32 lg:h-38 bg-white">
                    <img
                      src="/images/journey/tower-pool.jpg"
                      alt="Towers and pool"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 3: Green Circular Price Tag Badge (Bottom Right) */}
                  <div className="absolute bottom-4 sm:bottom-6 right-2 sm:right-4 z-30 size-12 sm:size-16 rounded-full bg-[#00D084] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                    <Tag size={20} strokeWidth={2.4} className="sm:size-7 -rotate-12" />
                  </div>

                  {/* Phone Mockup (Half-screen cut off at bottom of card) */}
                  <div className="w-[230px] min-[390px]:w-[245px] sm:w-[255px] lg:w-[265px] h-[500px] sm:h-[580px] lg:h-[600px] rounded-t-[40px] sm:rounded-t-[44px] bg-[#161a20] p-[3px] shadow-2xl relative z-20 border border-[#374151]/80 shrink-0">
                    <div className="h-full rounded-t-[41px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white border-b border-gray-100/60" />

                      <div className="p-2.5 sm:p-3 flex flex-col flex-1">
                        {/* Top Action Bar: Back chevron, Bookmark, Info/Question */}
                        <div className="flex items-center justify-between px-0.5 text-gray-700">
                          <div className="size-6.5 rounded-full bg-gray-100 flex items-center justify-center">
                            <ChevronLeft size={15} />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="size-6.5 rounded-full bg-gray-100 flex items-center justify-center">
                              <Bookmark size={13} />
                            </div>
                            <div className="size-6.5 rounded-full bg-gray-100 flex items-center justify-center">
                              <HelpCircle size={13} />
                            </div>
                          </div>
                        </div>

                        {/* Featured Media: Commercial Plaza titled "HITTIN" */}
                        <div className="mt-1.5 relative h-32 sm:h-36 w-full rounded-2xl overflow-hidden shadow-xs">
                          <img
                            src="/images/journey/hittin.jpg"
                            alt="HITTIN Plaza"
                            className="size-full object-cover"
                          />
                          {/* Vertical "HITTIN" Sign Banner */}
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider">
                            HITTIN
                          </div>

                          {/* Image Carousel Dots */}
                          <div className="absolute bottom-2 right-2.5 flex gap-1">
                            <span className="size-1.5 rounded-full bg-white shadow-xs" />
                            <span className="size-1.5 rounded-full bg-white/50" />
                            <span className="size-1.5 rounded-full bg-white/50" />
                            <span className="size-1.5 rounded-full bg-white/50" />
                          </div>
                        </div>

                        {/* Action Row Under Image: 6 photos & Fund member */}
                        <div className="mt-1.5 flex items-center justify-between text-[10px] font-semibold text-gray-700 px-0.5">
                          <div className="flex items-center gap-1">
                            <Camera size={12} className="text-[#00A663]" />
                            <span>6 photos</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Building2 size={12} className="text-[#00A663]" />
                            <span>Fund member...</span>
                          </div>
                        </div>

                        {/* Stake Coverage Card */}
                        <div className="mt-2 rounded-2xl border border-gray-100 bg-[#F8FAF9] p-2 sm:p-2.5 text-center space-y-1">
                          <p className="text-[9.5px] font-semibold uppercase tracking-wider text-gray-500">
                            Stake coverage
                          </p>
                          <p className="text-base sm:text-lg font-black text-[#0D3B4C] tracking-tight">
                            SAR 120,000,000
                          </p>
                          <div className="pt-0.5 flex items-center justify-center gap-1.5 text-[9.5px]">
                            <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 font-bold text-gray-700">
                              368 Investors
                            </span>
                            <span className="rounded-full bg-white border border-gray-200 px-2 py-0.5 font-bold text-gray-700">
                              ⏱️ 15 days left
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Mobile Touch Stepper Controls (< lg) */}
            <div className="lg:hidden w-full max-w-[480px] flex items-center justify-between pt-4 px-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
                className="px-4 py-2 min-h-[44px] rounded-xl text-xs font-bold text-gray-700 bg-white border border-gray-200 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                &larr; Previous
              </button>
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToStep(i)}
                    className={`size-2.5 rounded-full transition-all cursor-pointer ${
                      activeStep === i ? 'w-6 bg-[#00A663]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
                className="px-4 py-2 min-h-[44px] rounded-xl text-xs font-bold text-white bg-[#00A663] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
