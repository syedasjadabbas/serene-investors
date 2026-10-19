'use client'

import React, { useState } from 'react'
import {
  ShoppingCart,
  Tag,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Wallet,
  Building2,
  HelpCircle,
  Eye,
  Camera,
  Coins,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
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

      {/* Centered Dynamic Island */}
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
  // Step 0: Browse (Access prime real estate across multiple markets) - Matches screenshot!
  // Step 1: Invest (Own a piece of the ones you love, from only USD 150)
  // Step 2: Earn (Enjoy regular passive income with no effort)
  // Step 3: Sell (From entry to exit – liquidity when you need it)
  const [activeStep, setActiveStep] = useState<number>(0)

  const steps = [
    {
      id: 0,
      kicker: 'Browse',
      headline: 'Access prime real estate across multiple markets',
      description:
        'Sign up to Serene Investors in a matter of minutes and explore a curated collection of real estate in global cities from just USD 150',
      type: 'browse',
      nextPreview: 'Invest',
      accentColor: '#00A663',
      bgTheme: 'from-[#0B3528] via-[#0E4737] to-[#08291F]',
      badgeText: 'Curated Global Cities',
    },
    {
      id: 1,
      kicker: 'Invest',
      headline: 'Own a piece of the ones you love, from only USD 150',
      description:
        'Invest in your favourite opportunities, no matter where you are in the world and leave the rest to us',
      type: 'invest',
      nextPreview: 'Earn',
      accentColor: '#10B981',
      bgTheme: 'from-[#0D1829] via-[#0F1E33] to-[#0A1220]',
      badgeText: 'Instant Fractional Ownership',
    },
    {
      id: 2,
      kicker: 'Earn',
      headline: 'Enjoy regular passive income with no effort',
      description:
        'Sit back and earn consistent rental income from your brand new real estate portfolio, deposited straight to your wallet',
      type: 'earn',
      nextPreview: 'Sell',
      accentColor: '#F59E0B',
      bgTheme: 'from-[#B45309] via-[#D97706] to-[#92400E]',
      badgeText: 'Monthly Rental Distributions',
    },
    {
      id: 3,
      kicker: 'Sell',
      headline: 'From entry to exit – liquidity when you need it',
      description:
        'Realise your full investment appreciation at maturity or take early profits by selling within our verified investor community',
      type: 'sell',
      nextPreview: 'Browse',
      accentColor: '#3B82F6',
      bgTheme: 'from-[#1E293B] via-[#0F172A] to-[#020617]',
      badgeText: 'Bi-Annual Exit Windows',
    },
  ]

  const current = steps[activeStep]

  return (
    <section
      id="how-it-works"
      className="relative bg-[#F7F8F9] pt-16 sm:pt-24 pb-16 lg:pb-28 border-b border-black/[0.06] select-none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-sm sm:text-base font-semibold text-[#00A663] mb-2 tracking-wide uppercase">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Build a diversified real
            <br />
            estate portfolio easily
            <br />
            from your phone
          </h2>
        </div>

        {/* Step Navigation Pill Selector */}
        <div className="w-full flex justify-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-black/[0.04] p-1.5 border border-black/[0.05] shadow-xs backdrop-blur-md overflow-x-auto max-w-full">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`min-h-[42px] px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-md scale-[1.02]'
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

        {/* Unified 2-Column Responsive Showcase: Left Editorial + Right Media Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* =========================================================================
              LEFT COLUMN: Exact Typography, Spacing, and Badges (ALWAYS Visible)
              ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-sm font-bold text-[#00A663] tracking-wide uppercase">
                {current.kicker}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00A663]/10 text-[#00A663] font-semibold">
                Step 0{activeStep + 1} of 04
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight">
              {current.headline}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              {current.description}
            </p>

            {/* STEP 0 (Browse) Custom Badges: App Store & Google Play + Market highlights */}
            {current.type === 'browse' && (
              <div className="mt-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {/* App Store Badge */}
                  <a
                    href="#download"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl shadow-md border border-black hover:opacity-90 transition-opacity"
                  >
                    <svg className="size-5 fill-current" viewBox="0 0 170 170">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12.01-14.42-6-9.13-10.74-19.46-14.23-30.99-3.48-11.53-5.23-22.37-5.23-32.52 0-14.79 3.73-26.83 11.19-36.13 7.46-9.3 16.71-14.07 27.75-14.3 4.9.11 10.14 1.34 15.73 3.69 5.58 2.35 9.53 3.58 11.83 3.69 1.74 0 5.8-1.29 12.18-3.86 6.39-2.58 11.93-3.72 16.63-3.43 12.83 1.09 23.01 5.92 30.54 14.51-11.1 6.74-16.53 16.21-16.31 28.4.22 9.57 3.84 17.56 10.87 23.97 7.03 6.41 15.34 10.14 24.94 11.19-2.07 6.31-4.79 12.89-8.17 19.71zM119.22 33.04c0-7.39 2.66-14.46 7.99-21.21 5.33-6.74 12.01-11.03 20.04-12.83 1.2 7.72-.98 15.12-6.53 22.2-5.55 7.07-12.72 11.36-21.5 11.84z" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">
                        Download on the
                      </span>
                      <span className="block text-xs font-bold text-white tracking-tight mt-0.5">
                        App Store
                      </span>
                    </div>
                  </a>

                  {/* Google Play Badge */}
                  <a
                    href="#download"
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl shadow-md border border-black hover:opacity-90 transition-opacity"
                  >
                    <svg className="size-4.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M3.6 1.4L13.7 11.5L3.6 21.6c-.3-.2-.6-.6-.6-1.1V2.5c0-.5.3-.9.6-1.1z" />
                      <path fill="#34A853" d="M17.1 8.1L13.7 11.5L3.6 1.4C3.9 1.2 4.4 1.1 5 1.4l12.1 6.7z" />
                      <path fill="#EA4335" d="M17.1 14.9L5 21.6c-.6.3-1.1.2-1.4 0l10.1-10.1l3.4 3.4z" />
                      <path fill="#FBBC05" d="M20.5 10.4l-3.4-1.9l-3.4 3l3.4 3l3.4-1.9c.8-.5.8-1.7 0-2.2z" />
                    </svg>
                    <div className="text-left leading-none">
                      <span className="block text-[8.5px] text-gray-300 uppercase tracking-tight">
                        GET IT ON
                      </span>
                      <span className="block text-xs font-bold text-white tracking-tight mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-gray-600 font-medium">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#00A663]" />
                    <span>Dubai · Riyadh · Global Markets</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <ShieldCheck size={13} className="text-[#00A663]" />
                    <span>DFSA Regulated</span>
                  </span>
                </div>
              </div>
            )}

            {/* STEP 1 (Invest) Badges: VISA, Mastercard, Apple Pay */}
            {current.type === 'invest' && (
              <div className="mt-7 space-y-4">
                <div className="flex items-center gap-6">
                  <VisaLogo />
                  <MastercardLogo />
                  <ApplePayLogo />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium pt-1">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#00A663]" />
                    <span>Invest from only USD 150 / AED 500</span>
                  </span>
                </div>
              </div>
            )}

            {/* STEP 2 (Earn) Badges: Stake wallet */}
            {current.type === 'earn' && (
              <div className="mt-7 space-y-4">
                <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A] bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[#00A663]">
                    <Wallet size={20} strokeWidth={2.4} />
                  </span>
                  <span>Paid directly to your Stake wallet monthly</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <TrendingUp size={13} className="text-[#00A663]" />
                    <span>Average 9.4% Rental Yield</span>
                  </span>
                </div>
              </div>
            )}

            {/* STEP 3 (Sell) Badges: Liquidity & Secondary Market */}
            {current.type === 'sell' && (
              <div className="mt-7 space-y-4">
                <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A] bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs">
                  <span className="text-[#3B82F6]">
                    <Building2 size={20} strokeWidth={2.4} />
                  </span>
                  <span>Exit at maturity or sell during bi-annual windows</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                    <CheckCircle2 size={13} className="text-[#3B82F6]" />
                    <span>Over 350+ community exits fulfilled</span>
                  </span>
                </div>
              </div>
            )}

            {/* Next Step Quick Link & Step Indicators */}
            <div className="mt-8 pt-5 border-t border-gray-200/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeStep === i ? 'w-8 bg-[#00A663]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Jump to step ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F172A] hover:text-[#00A663] transition-colors cursor-pointer group"
              >
                <span>Next: {current.nextPreview}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Rich Visual Card Container with Phone Mockup & Photos
              ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
            <div
              className={`w-full max-w-[560px] h-[480px] sm:h-[520px] rounded-[2rem] sm:rounded-[2.5rem] relative shadow-2xl overflow-hidden transition-all duration-700 select-none flex justify-center items-start pt-6 sm:pt-8 bg-gradient-to-br ${current.bgTheme}`}
            >
              {/* Subtle Ambient Glow Effect inside container */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

              {/* Top Container Badge */}
              <div className="absolute top-3 sm:top-4 left-4 sm:left-6 z-20">
                <span className="text-[11px] font-bold text-white/80 uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {current.badgeText}
                </span>
              </div>

              {/* =====================================================================
                  STEP 0: BROWSE STATE (Access Prime Real Estate Across Multiple Markets)
                  ===================================================================== */}
              {activeStep === 0 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  {/* Floating Photo Sticker 1: Modern Skyscraper / Residential (Top Left, Tilted -10deg) */}
                  <div className="absolute top-10 sm:top-14 left-2 sm:left-4 z-10 -rotate-[10deg] border-2 sm:border-[3px] border-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden w-22 sm:w-28 lg:w-32 h-28 sm:h-36 lg:h-40 bg-white transition-transform hover:scale-105 hover:rotate-0 duration-300">
                    <img
                      src="/images/journey/residential.jpg"
                      alt="Prime Modern Skyscraper"
                      className="size-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs py-1 px-1.5 text-center">
                      <span className="text-[9px] font-bold text-white tracking-tight uppercase">
                        Skyline Residence
                      </span>
                    </div>
                  </div>

                  {/* Floating Photo Sticker 2: Burj Al Arab in turquoise ocean (Top Right, Tilted +12deg) */}
                  <div className="absolute top-6 sm:top-8 right-2 sm:right-4 z-10 rotate-[12deg] border-2 sm:border-[3px] border-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden w-22 sm:w-28 lg:w-32 h-28 sm:h-36 lg:h-40 bg-white transition-transform hover:scale-105 hover:rotate-0 duration-300">
                    <img
                      src="/images/journey/burj-al-arab.jpg"
                      alt="Burj Al Arab, Dubai"
                      className="size-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs py-1 px-1.5 text-center">
                      <span className="text-[9px] font-bold text-white tracking-tight uppercase">
                        Burj Al Arab · UAE
                      </span>
                    </div>
                  </div>

                  {/* Floating Photo Sticker 3: Palm Jumeirah Aerial Photo (Bottom Right, Tilted +4deg) */}
                  <div className="absolute bottom-6 sm:bottom-8 right-2 sm:right-4 z-30 rotate-[4deg] border-2 sm:border-[3px] border-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden w-24 sm:w-30 lg:w-34 h-24 sm:h-30 lg:h-34 bg-white transition-transform hover:scale-105 hover:rotate-0 duration-300">
                    <img
                      src="/images/journey/palm-aerial.jpg"
                      alt="Palm Jumeirah Aerial"
                      className="size-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs py-1 px-1.5 text-center">
                      <span className="text-[9px] font-bold text-white tracking-tight uppercase">
                        Palm Jumeirah
                      </span>
                    </div>
                  </div>

                  {/* Floating Market Pill (Bottom Left) */}
                  <div className="absolute bottom-6 sm:bottom-8 left-3 sm:left-5 z-30 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-xl border border-white flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#00A663] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#0F172A]">
                      🇦🇪 Dubai · 🇸🇦 Riyadh
                    </span>
                  </div>

                  {/* Realistic Phone Mockup: Stake Properties Marketplace Screen */}
                  <div className="w-[240px] sm:w-[265px] h-[520px] sm:h-[600px] rounded-t-[42px] bg-[#161a20] p-[3.5px] shadow-2xl relative z-20 border border-[#374151]/90 shrink-0">
                    <div className="h-full rounded-t-[38px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white border-b border-gray-100" />

                      <div className="p-3 flex flex-col flex-1">
                        {/* Header: Properties & Filters */}
                        <div className="flex items-center justify-between px-0.5">
                          <div>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">
                              Stake Explorer
                            </span>
                            <h4 className="text-base font-extrabold text-[#0F172A] leading-tight">
                              Properties
                            </h4>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-700">
                            <div className="size-7 rounded-full bg-gray-100 flex items-center justify-center">
                              <Bookmark size={13} />
                            </div>
                            <div className="size-7 rounded-full bg-gray-100 flex items-center justify-center">
                              <SlidersHorizontal size={13} />
                            </div>
                          </div>
                        </div>

                        {/* Segmented Filter Tabs: Available (7), Funded (213), Exited (3) */}
                        <div className="mt-2.5 flex items-center justify-between border-b border-gray-100 pb-1.5 text-[10.5px] font-semibold text-gray-400">
                          <span className="text-[#0F172A] font-bold border-b-2 border-[#00A663] pb-1">
                            Available (7)
                          </span>
                          <span className="pb-1 hover:text-gray-700">Funded (213)</span>
                          <span className="pb-1 hover:text-gray-700">Exited (3)</span>
                        </div>

                        {/* Featured Curated Property Card: Marina Gate, Dubai Marina */}
                        <div className="mt-2.5 rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs bg-white">
                          <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-gray-100">
                            <img
                              src="/images/journey/dubai-marina.jpg"
                              alt="Marina Gate, Dubai Marina"
                              className="size-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            {/* Capital Growth Tag */}
                            <span className="absolute top-2 left-2 rounded-full bg-white/95 backdrop-blur-xs px-2 py-0.5 text-[9px] font-bold text-[#00A663] shadow-xs flex items-center gap-1">
                              <span>🌱</span> Capital growth
                            </span>

                            {/* Yield Tag */}
                            <span className="absolute top-2 right-2 rounded-full bg-black/75 backdrop-blur-xs px-2 py-0.5 text-[9px] font-bold text-white shadow-xs">
                              9.4% Projected Return
                            </span>

                            {/* Image Dots */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                              <span className="size-1.5 rounded-full bg-white shadow-xs" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                              <span className="size-1.5 rounded-full bg-white/50" />
                            </div>
                          </div>

                          <div className="p-2.5">
                            <div className="flex items-center justify-between">
                              <h5 className="text-xs font-extrabold text-[#0F172A] truncate">
                                Marina Gate, Dubai Marina
                              </h5>
                              <span className="text-[10px] font-extrabold text-[#00A663]">
                                AED 500
                              </span>
                            </div>
                            <div className="mt-1 flex items-center gap-1.5 text-[9.5px] text-gray-500 font-medium">
                              <span>🛏️ 2 Bed</span>
                              <span>•</span>
                              <span>🏢 Luxury Tower</span>
                              <span>•</span>
                              <span>🔑 Rented</span>
                            </div>

                            {/* Funded Progress Bar */}
                            <div className="mt-2">
                              <div className="flex justify-between text-[9px] font-bold text-gray-600 mb-1">
                                <span>84% Funded</span>
                                <span>6 days left</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#00A663] rounded-full w-[84%]" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Secondary Property Peek Card at Bottom */}
                        <div className="mt-2 rounded-xl border border-gray-100 bg-gray-50/80 p-2 flex items-center gap-2">
                          <img
                            src="/images/properties/boulevard-point-hero.jpg"
                            alt="Boulevard Point"
                            className="size-9 rounded-lg object-cover shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold text-[#0F172A] truncate">
                              Boulevard Point, Downtown
                            </p>
                            <p className="text-[9px] text-[#00A663] font-semibold">
                              Funded in 48 hours · 8.9% yield
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =====================================================================
                  STEP 1: INVEST STATE (Own a piece of the ones you love, from only USD 150)
                  ===================================================================== */}
              {activeStep === 1 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  {/* Sticker 1: Green Shopping Cart Circle (Top Left) */}
                  <div className="absolute top-4 sm:top-6 left-3 sm:left-6 z-30 size-12 sm:size-14 rounded-full bg-[#00D084] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                    <ShoppingCart size={22} className="sm:size-6" strokeWidth={2.4} />
                  </div>

                  {/* Sticker 2: Circular Dubai Marina Cityscape Badge (Top Right) */}
                  <div className="absolute top-4 sm:top-5 right-3 sm:right-6 z-10 size-20 sm:size-24 rounded-full border-3 sm:border-4 border-white shadow-2xl overflow-hidden">
                    <img
                      src="/images/journey/dubai-marina.jpg"
                      alt="Dubai Marina"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Realistic Phone Mockup: Investment Details & Share Amount */}
                  <div className="w-[240px] sm:w-[265px] h-[520px] sm:h-[600px] rounded-t-[42px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[3.5px] shadow-2xl relative z-20 border border-[#485362]/80 shrink-0">
                    <div className="h-full rounded-t-[38px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      {/* Top Status Bar & Dynamic Island */}
                      <PhoneTopBar className="bg-white" />

                      {/* Property Hero Media */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-100">
                        <img
                          src="/images/journey/dubai-marina.jpg"
                          alt="Marina luxury residence"
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Top Action Icons */}
                        <div className="absolute top-2.5 right-3 flex items-center gap-1.5 z-10">
                          <div className="size-6.5 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                            <Bookmark size={12} className="text-[#0F172A]" />
                          </div>
                          <div className="size-6.5 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                            <Share2 size={12} className="text-[#0F172A]" />
                          </div>
                        </div>
                      </div>

                      {/* Floating AED 500 Invest Glass Card (Center Overlay) */}
                      <div className="mx-3 -mt-6 relative z-30 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <UaeFlagIcon />
                          <div className="truncate">
                            <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                              AED 500
                            </span>
                            <span className="text-[10px] text-gray-400 font-medium ml-1">
                              ~$136.15
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-transform active:scale-95 shrink-0"
                        >
                          Invest
                        </button>
                      </div>

                      {/* Property Specs & Tour Pills */}
                      <div className="p-3 space-y-2 mt-1">
                        <div className="flex items-center justify-between text-[10px] text-gray-600 px-0.5 font-semibold">
                          <span>🛏️ 2 Bed</span>
                          <span>🚿 3 Bath</span>
                          <span>🔲 #1020</span>
                          <span>📐 170 sqm</span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-1">
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

              {/* =====================================================================
                  STEP 2: EARN STATE (Enjoy Regular Passive Income With No Effort)
                  ===================================================================== */}
              {activeStep === 2 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  {/* Floating Notification: Stake Rent Paid Notification */}
                  <div className="absolute top-12 sm:top-14 left-2 right-2 sm:left-4 sm:right-4 z-30 rounded-2xl bg-white shadow-2xl border border-black/5 p-3 sm:p-3.5 flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shrink-0 relative shadow-sm">
                      <span className="font-black text-sm text-[#00A663]">k</span>
                      <span className="size-2 rounded-full bg-pink-500 absolute top-1 right-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase">
                        Stake Notification
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug truncate">
                        You&apos;ve been paid AED 18,000 in rent
                      </p>
                    </div>
                  </div>

                  {/* Floating Card: All Time Returns */}
                  <div className="absolute bottom-5 sm:bottom-8 left-2 right-2 sm:left-4 sm:right-4 z-30 rounded-2xl bg-white shadow-2xl border border-black/5 p-3.5 sm:p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-500">
                        All time returns
                      </span>
                      <span className="rounded-full bg-[#D1FAE5] px-2 py-0.5 text-[10px] font-bold text-[#059669]">
                        +30.8%
                      </span>
                    </div>
                    <div className="mt-1">
                      <p className="text-2xl font-black text-[#0F172A] tracking-tight">
                        AED 89,000
                      </p>
                    </div>

                    {/* Progress Bar: 75% Green Rental Yield, 25% Yellow Capital Growth */}
                    <div className="mt-2.5 h-2 w-full rounded-full bg-gray-100 flex overflow-hidden">
                      <div className="h-full w-[75%] bg-[#00A663]" />
                      <div className="h-full w-[25%] bg-[#FBBF24]" />
                    </div>
                  </div>

                  {/* Phone Mockup: Stake Portfolio Screen */}
                  <div className="w-[240px] sm:w-[265px] h-[520px] sm:h-[600px] rounded-t-[42px] bg-[#161a20] p-[3.5px] shadow-2xl relative z-10 border border-[#374151]/90 shrink-0">
                    <div className="h-full rounded-t-[38px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      <PhoneTopBar className="bg-white border-b border-gray-100" />

                      <div className="p-3 flex flex-col flex-1">
                        <div className="flex items-center justify-between px-0.5">
                          <h4 className="text-base font-extrabold text-[#0F172A]">Portfolio</h4>
                          <div className="flex items-center gap-1 bg-black/[0.06] px-2 py-0.5 rounded-full text-[10.5px] font-bold text-gray-800">
                            <span>🇦🇪</span>
                            <span>AED</span>
                          </div>
                        </div>

                        {/* Action Circles */}
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

              {/* =====================================================================
                  STEP 3: SELL STATE (From Entry to Exit – Liquidity When You Need It)
                  ===================================================================== */}
              {activeStep === 3 && (
                <div className="w-full h-full relative flex justify-center items-start animate-in fade-in zoom-in-95 duration-500">
                  {/* Sticker 1: Palm Jumeirah Aerial Photo (Left, Tilted -12deg) */}
                  <div className="absolute top-12 sm:top-16 left-2 sm:left-4 z-10 -rotate-[12deg] border-2 sm:border-3 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-22 sm:w-28 h-26 sm:h-34 bg-white">
                    <img
                      src="/images/journey/palm-aerial.jpg"
                      alt="Palm Jumeirah"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 2: Resort Towers and Pool Photo (Right, Tilted +12deg) */}
                  <div className="absolute top-6 sm:top-8 right-2 sm:right-4 z-10 rotate-[12deg] border-2 sm:border-3 border-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden w-22 sm:w-28 h-26 sm:h-34 bg-white">
                    <img
                      src="/images/journey/tower-pool.jpg"
                      alt="Towers and pool"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Sticker 3: Price Tag Badge (Bottom Right) */}
                  <div className="absolute bottom-5 sm:bottom-7 right-3 sm:right-5 z-30 size-12 sm:size-14 rounded-full bg-[#00D084] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                    <Tag size={20} strokeWidth={2.4} className="sm:size-6 -rotate-12" />
                  </div>

                  {/* Phone Mockup: Liquidity / Secondary Exit Screen */}
                  <div className="w-[240px] sm:w-[265px] h-[520px] sm:h-[600px] rounded-t-[42px] bg-[#161a20] p-[3.5px] shadow-2xl relative z-20 border border-[#374151]/90 shrink-0">
                    <div className="h-full rounded-t-[38px] overflow-hidden bg-white relative flex flex-col text-[#0F172A]">
                      <PhoneTopBar className="bg-white border-b border-gray-100" />

                      <div className="p-3 flex flex-col flex-1">
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

                        {/* Commercial Media: Hittin Plaza */}
                        <div className="mt-2 relative h-32 w-full rounded-2xl overflow-hidden shadow-xs">
                          <img
                            src="/images/journey/hittin.jpg"
                            alt="HITTIN Plaza"
                            className="size-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded tracking-wider">
                            HITTIN
                          </div>
                        </div>

                        {/* Stake Coverage Card */}
                        <div className="mt-3 rounded-2xl border border-gray-100 bg-[#F8FAF9] p-2.5 text-center space-y-1">
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

            {/* Stepper Controls under card */}
            <div className="w-full max-w-[560px] flex items-center justify-between pt-4 px-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-gray-700 bg-white border border-gray-200 shadow-2xs hover:bg-gray-50 disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1"
              >
                <ChevronLeft size={14} />
                <span>Previous</span>
              </button>

              <span className="text-xs font-semibold text-gray-500">
                {activeStep + 1} / {steps.length}
              </span>

              <button
                type="button"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-white bg-[#00A663] hover:bg-[#009156] disabled:opacity-30 disabled:pointer-events-none cursor-pointer flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
