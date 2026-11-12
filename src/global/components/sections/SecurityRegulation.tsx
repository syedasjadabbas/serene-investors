'use client'

import React, { useState } from 'react'
import {
  ShieldCheck,
  Lock,
  Landmark,
  Scale,
  Award,
} from 'lucide-react'

// Authentic Deed / Ownership Certificate Icon matching reference screenshot
function CertificateIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="7" y1="8" x2="11" y2="8" />
      <line x1="7" y1="12" x2="11" y2="12" />
      <circle cx="15" cy="12" r="2.8" />
      <path d="M14 14.8l-0.8 3.2 1.8-0.8 1.8 0.8-0.8-3.2" />
    </svg>
  )
}

// 1. Emirates NBD Logo
function EmiratesNbdLogo() {
  return (
    <div className="flex items-center gap-3 text-white select-none">
      <div className="w-8 h-8 rounded-[4px] border-[1.5px] border-white p-1 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-white">
          <path d="M4 20C4 11 11 4 20 4" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 20C8 13.5 13.5 8 19 8" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 20C12 16 16 12 18.5 12" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] sm:text-[11px] font-medium leading-none text-white tracking-wide">
          بنك الإمارات دبي الوطني
        </span>
        <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-white leading-tight mt-1">
          Emirates NBD
        </span>
      </div>
    </div>
  )
}

// 2. Property Finder Logo
function PropertyFinderLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white select-none">
      <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
        <path d="M16 3C9.9 3 5 7.9 5 14c0 3.8 2 7.2 5 9.1V15c0-3.3 2.7-6 6-6h7.1C21.2 5.5 18.8 3 16 3z" />
        <path d="M10 25.5c1.8 1.5 4.1 2.5 6.6 2.5 5.8 0 10.5-4.5 10.9-10.2H20c-3.3 0-6 2.7-6 6v1.7h-4z" />
      </svg>
      <div className="flex flex-col text-left leading-[1.05]">
        <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-white">Property</span>
        <span className="text-[14px] sm:text-[15px] font-bold tracking-tight text-white">Finder</span>
      </div>
    </div>
  )
}

// 3. Mubadala Logo
function MubadalaLogo() {
  return (
    <div className="flex items-center gap-3 text-white select-none">
      <svg viewBox="0 0 44 32" fill="none" className="w-10 h-7 sm:w-11 sm:h-8 stroke-white shrink-0">
        <circle cx="20" cy="16" r="8" strokeWidth="1.2" />
        <ellipse cx="20" cy="16" rx="3.5" ry="8" strokeWidth="1.1" />
        <line x1="12" y1="16" x2="28" y2="16" strokeWidth="1.1" />
        <ellipse cx="20" cy="16" rx="18" ry="5.5" strokeWidth="1.2" transform="rotate(-28 20 16)" />
        <ellipse cx="20" cy="16" rx="18" ry="5.5" strokeWidth="1.2" transform="rotate(28 20 16)" />
        <ellipse cx="20" cy="16" rx="18" ry="6.5" strokeWidth="1.2" transform="rotate(78 20 16)" />
      </svg>
      <span className="font-sans font-medium text-xs sm:text-sm tracking-[0.32em] text-white uppercase">
        MUBADALA
      </span>
    </div>
  )
}

// 4. Wa'ed by aramco Logo
function WaedLogo() {
  return (
    <div className="flex flex-col items-center select-none text-white">
      <div className="relative flex items-center pr-4">
        <span className="text-xl sm:text-2xl font-bold leading-none tracking-wide text-white">
          واعد
        </span>
        <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4 absolute -top-1 -right-1">
          <path d="M12 2C8 2 5 5 5 9c0 3.5 2.5 6 6 6 4 0 7-3 7-7 0-4-3-6-6-6z" />
        </svg>
      </div>
      <div className="flex flex-col items-center mt-1 leading-none text-center">
        <span className="text-xs sm:text-[13px] font-black tracking-[0.2em] text-white">
          WA&apos;ED
        </span>
        <span className="text-[8px] font-medium tracking-normal text-white/80 mt-0.5">
          by aramco
        </span>
      </div>
    </div>
  )
}

// 5. MEVP Logo (Pixel Stencil)
function MevpLogo() {
  return (
    <div className="select-none text-white">
      <svg viewBox="0 0 116 28" fill="white" className="h-6 sm:h-7 w-auto">
        {/* M */}
        <rect x="0" y="2" width="6" height="24" />
        <rect x="6" y="6" width="5" height="6" />
        <rect x="11" y="12" width="4" height="6" />
        <rect x="15" y="6" width="5" height="6" />
        <rect x="20" y="2" width="6" height="24" />
        {/* E */}
        <rect x="32" y="2" width="6" height="24" />
        <rect x="38" y="2" width="16" height="5" />
        <rect x="38" y="11.5" width="12" height="5" />
        <rect x="38" y="21" width="16" height="5" />
        {/* V */}
        <rect x="60" y="2" width="6" height="10" />
        <rect x="65" y="12" width="5" height="8" />
        <rect x="70" y="20" width="6" height="6" />
        <rect x="75" y="12" width="5" height="8" />
        <rect x="80" y="2" width="6" height="10" />
        {/* P */}
        <rect x="92" y="2" width="6" height="24" />
        <rect x="98" y="2" width="14" height="5" />
        <rect x="108" y="7" width="5" height="8" />
        <rect x="98" y="14" width="14" height="5" />
      </svg>
    </div>
  )
}

// 6. Republic Logo
function RepublicLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white select-none">
      <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0">
        <polygon points="4,20 12,3 12,20" fill="white" fillOpacity="0.45" />
        <polygon points="12,3 20,20 12,20" fill="white" />
        <polygon points="4,20 12,13 12,20" fill="white" fillOpacity="0.75" />
      </svg>
      <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white">
        Republic
      </span>
    </div>
  )
}

// 7. Al Jomaih Holding Logo
function AlJomaihLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white select-none">
      <div className="flex flex-col text-right">
        <span className="text-[12px] sm:text-[13px] font-medium leading-tight text-white">
          الجميح القابضة
        </span>
        <span className="text-[9px] font-sans tracking-tight text-white/85 mt-0.5">
          Al Jomaih Holding
        </span>
      </div>
      <div className="w-6 h-6 border-[1.5px] border-white p-0.5 flex items-center justify-center shrink-0">
        <div className="w-4 h-4 border border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white" />
        </div>
      </div>
    </div>
  )
}

// 8. MadisonMarquette Logo
function MadisonMarquetteLogo() {
  return (
    <div className="flex items-center gap-2 text-white select-none">
      <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-white shrink-0">
        <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="1.5" />
        <path d="M7 10C9.5 8 14.5 8 17 9.5L12 12C9.5 11 7 10 7 10Z" fill="white" />
        <path d="M6 14.5C9 12.5 16 11.5 20 14L14 17C10 16 6 14.5 6 14.5Z" fill="white" />
        <path d="M8 19C11 17 17 16.5 21 18.5L17 21C13 20 8 19 8 19Z" fill="white" />
      </svg>
      <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-white">
        MadisonMarquette
      </span>
    </div>
  )
}

// 9. Ellington Properties Logo
function EllingtonLogo() {
  return (
    <div className="flex flex-col items-center select-none text-white text-center">
      <svg viewBox="0 0 20 16" fill="none" className="w-3.5 h-3 text-white stroke-white mb-1">
        <path d="M10 2L15 8L10 14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 5L10 2L14 5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-[0.22em] text-white uppercase leading-tight">
        ELLINGTON
      </span>
      <span className="font-sans text-[7px] tracking-[0.35em] text-white/70 uppercase leading-tight mt-0.5">
        PROPERTIES
      </span>
    </div>
  )
}

// 10. STV Logo
function StvLogo() {
  return (
    <div className="select-none text-white">
      <span className="font-sans font-black text-xl sm:text-2xl tracking-[0.16em] text-white">
        STV
      </span>
    </div>
  )
}

// 11. GFH Partners Logo
function GfhLogo() {
  return (
    <div className="flex flex-col items-center select-none text-white">
      <div className="flex items-center gap-1.5">
        <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-white lowercase leading-none">
          gfh
        </span>
        <div className="flex items-center -space-x-1.5">
          <div className="w-3.5 h-3.5 border-2 border-white rotate-45" />
          <div className="w-3.5 h-3.5 border-2 border-white rotate-45" />
        </div>
      </div>
      <span className="font-sans text-[7px] font-bold tracking-[0.25em] text-white/80 uppercase mt-0.5">
        PARTNERS
      </span>
    </div>
  )
}

// 12. Vivium Logo
function ViviumLogo() {
  return (
    <div className="flex items-center select-none text-white">
      <svg viewBox="0 0 114 22" fill="white" className="h-4 sm:h-5 w-auto">
        {/* \ */}
        <polygon points="4,2 9.5,2 5.5,20 0,20" />
        {/* | */}
        <rect x="17" y="2" width="4.5" height="18" />
        {/* \ */}
        <polygon points="31,2 36.5,2 32.5,20 27,20" />
        {/* | */}
        <rect x="44" y="2" width="4.5" height="18" />
        {/* U */}
        <path d="M56,2 h4.5 v12.5 c0,2.5 1.5,4 4.5,4 s4.5,-1.5 4.5,-4 V2 h4.5 v12.5 c0,4.8 -3.5,7.2 -9,7.2 s-9,-2.4 -9,-7.2 Z" />
        {/* M */}
        <polygon points="84,20 84,2 89,2 94,12.5 99,2 104,2 104,20 99.8,20 99.8,7.5 95.8,16.5 92.2,16.5 88.2,7.5 88.2,20" />
      </svg>
    </div>
  )
}

// 13. BY Venture Partners Logo
function ByVentureLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none text-white">
      <div className="border-[1.5px] border-white px-1.5 py-0.5 flex items-center justify-center">
        <span className="font-sans font-black text-xs sm:text-[13px] tracking-tight text-white leading-none">
          BY
        </span>
      </div>
      <span className="font-sans text-xs sm:text-[13px] tracking-tight text-white font-normal">
        Venture Partners
      </span>
    </div>
  )
}

export function SecurityRegulation() {
  const [activeTab, setActiveTab] = useState<'dual' | 'ownership'>('dual')

  return (
    <section
      id="security"
      className="relative overflow-hidden bg-[#0B131F] py-24 px-6 lg:px-12 text-white border-t border-b border-white/10"
      aria-label="Security and Regulation"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-blue-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================================
            HEADER: Safety never sleeps -> Robustly regulated
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-sm sm:text-base font-semibold text-[#00A663] mb-3 sm:mb-4 tracking-normal">
            Safety never sleeps
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-[-0.03em] text-white leading-[1.12]">
            Robustly regulated
          </h2>

          {/* Filter Tabs matching exact design and position */}
          <div className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('dual')}
              className={`flex items-center gap-2.5 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'dual'
                  ? 'bg-[#132F26] text-[#00A663] border border-[#00A663]/30 shadow-sm'
                  : 'text-white hover:bg-white/[0.04]'
              }`}
            >
              <ShieldCheck size={20} strokeWidth={2.2} className={activeTab === 'dual' ? 'text-[#00A663]' : 'text-white'} />
              <span>Dual regulated</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ownership')}
              className={`flex items-center gap-2.5 rounded-xl px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'ownership'
                  ? 'bg-[#132F26] text-[#00A663] border border-[#00A663]/30 shadow-sm'
                  : 'text-white hover:bg-white/[0.04]'
              }`}
            >
              <CertificateIcon className={activeTab === 'ownership' ? 'text-[#00A663]' : 'text-white'} />
              <span>Ownership protection</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            TWO SPLIT REGULATORY CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Card A (Left): Narrative card */}
          <div className="lg:col-span-5 rounded-[32px] bg-white/[0.04] p-8 sm:p-10 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#00A663]/20 border border-[#00A663]/30 text-[#A7F3D0] mb-6">
                {activeTab === 'dual' ? <Scale size={26} /> : <Lock size={26} />}
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                {activeTab === 'dual' ? 'INSTITUTIONAL OVERSIGHT' : 'LEGAL TITLES'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 leading-snug">
                {activeTab === 'dual' ? 'Dual regulated' : 'Ownership protection'}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeTab === 'dual'
                  ? 'Invest with the assurance that we are dual regulated by the most prestigious regulators in the Middle East.'
                  : 'We provide verifiable ownership documents, celebrated partnerships with government entities like DIFC and Absher, and the backing of industry giants such as Aramco.'}
              </p>
            </div>
          </div>

          {/* Card B (Right): Split Regulatory Authority Items */}
          <div className="lg:col-span-7 space-y-6">
            
            {activeTab === 'dual' ? (
              <>
                {/* Top item: DFSA */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-[#A7F3D0]">
                      <Landmark size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-[#A7F3D0]">
                          UAE • DIFC
                        </span>
                        <span className="text-xs text-slate-400">• DFSA Operator Licence</span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Regulated by the DFSA in the UAE
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        An independent regulator of financial services conducted in or from the DIFC, a purpose-built financial free zone in Dubai. Stake also holds an Islamic Finance Window endorsement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom item: CMA */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-400/25 text-blue-300">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-blue-300">
                          SAUDI ARABIA • CMA
                        </span>
                        <span className="text-xs text-slate-400">• FinTech Lab Permit: 05-53-2023</span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Regulated by the CMA in Saudi Arabia
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        We’re regulated by the Capital Markets Authority (CMA) in Saudi Arabia to enter under its FinTech Lab and licensed to launch real estate investment fund opportunities in and from the Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Ownership item 1: DIFC & DLD */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-[#A7F3D0]">
                      <Landmark size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-[#A7F3D0]">
                          DUBAI LAND DEPARTMENT
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Share Certificates and Title Deeds in Dubai
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        Share Certificates are backed by the Dubai International Financial Centre (DIFC), and Title Deeds are issued by the Dubai Land Department (DLD).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ownership item 2: Saudi Fund Units */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-400/25 text-blue-300">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-blue-300">
                          AUTHORIZED ADMINISTRATORS
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Fund Unit Certificates in Saudi Arabia
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        Subscription certificates and fund unit registries are issued by professional licensed fund administrators in Saudi Arabia.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

        {/* =========================================================================
            "WE'RE BACKED BY" INSTITUTIONAL LOGOS (Stake Style Vector Display)
            ========================================================================= */}
        <div className="pt-16 border-t border-white/10">
          <p className="text-center text-white/95 font-medium text-base sm:text-lg mb-12 sm:mb-16 tracking-tight">
            We&apos;re backed by
          </p>

          <div className="flex flex-col items-center space-y-12 sm:space-y-14 md:space-y-16 max-w-6xl mx-auto px-4">
            {/* Row 1: Emirates NBD, Property Finder, MUBADALA, Wa'ed by aramco */}
            <div className="w-full flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <EmiratesNbdLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <PropertyFinderLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <MubadalaLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <WaedLogo />
              </div>
            </div>

            {/* Row 2: MEVP, Republic, Al Jomaih Holding, MadisonMarquette */}
            <div className="w-full flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <MevpLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <RepublicLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <AlJomaihLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <MadisonMarquetteLogo />
              </div>
            </div>

            {/* Row 3: ELLINGTON PROPERTIES, STV, gfh PARTNERS, VIVIUM, BY Venture Partners */}
            <div className="w-full flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <EllingtonLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <StvLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <GfhLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <ViviumLogo />
              </div>
              <div className="opacity-90 hover:opacity-100 transition-opacity duration-200">
                <ByVentureLogo />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
