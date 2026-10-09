import React from 'react';

// Micro SVG helper for authentic iOS status bar
function IosStatusBar({ dark = false, currencyPill = false }: { dark?: boolean; currencyPill?: boolean }) {
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const iconColor = dark ? 'text-white/80' : 'text-gray-800';

  return (
    <div className={`flex justify-between items-center px-4 pt-1.5 text-[10px] font-semibold ${textColor} select-none`}>
      <span className="font-bold tracking-tight text-[10px]">9:41</span>
      
      {currencyPill ? (
        <div className="flex items-center gap-1 bg-gray-100/90 px-2 py-0.5 rounded-full text-[8.5px] font-bold text-gray-800 border border-black/5 shadow-2xs">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          <span>AED</span>
          <span className="text-[9px] text-gray-500 font-normal">›</span>
        </div>
      ) : null}

      <div className={`flex items-center gap-1.5 ${iconColor}`}>
        {/* Cellular 4 Signal Bars */}
        <svg className="w-3.5 h-2.5 fill-current" viewBox="0 0 17 12">
          <rect x="0" y="9" width="3" height="3" rx="0.6" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.6" />
          <rect x="9" y="3" width="3" height="9" rx="0.6" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.6" />
        </svg>

        {/* WiFi Icon */}
        <svg className="w-3.5 h-2.5 fill-current" viewBox="0 0 16 12">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4.24-2.83a6 6 0 0 1 8.48 0 .75.75 0 1 1-1.06 1.06 4.5 4.5 0 0 0-6.36 0 .75.75 0 0 1-1.06-1.06zm-2.83-2.83a10 10 0 0 1 14.14 0 .75.75 0 1 1-1.06 1.06 8.5 8.5 0 0 0-12.02 0 .75.75 0 0 1-1.06-1.06z" />
        </svg>

        {/* Battery Pill */}
        <div className="flex items-center">
          <div className="w-[17px] h-[8.5px] rounded-[2.5px] border border-current p-[1px] flex items-center">
            <div className="w-full h-full bg-[#00A663] rounded-[1px]" />
          </div>
          <div className="w-[1px] h-[3px] bg-current rounded-r-[0.5px] -ml-[0.5px]" />
        </div>
      </div>
    </div>
  );
}

export function StakeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] pt-8 pb-32 lg:pb-44">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#00A663]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* ================= LEFT EDITORIAL COLUMN ================= */}
          <div className="lg:col-span-6 z-10">
            {/* Yield Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#E8F8F0] px-3.5 py-1.5 text-xs font-semibold text-[#00A663]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A663] text-white text-[10px] font-bold">
                ↗
              </span>
              10% average returns in 2025
            </div>

            {/* Display Headline */}
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl tracking-tight font-extrabold text-[#0D1117] leading-[1.08]">
              Build your wealth through{' '}
              <span className="text-[#00A663]">real estate</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Join thousands of people globally earning passive income from investing in curated residential and commercial real estate with Stake, from just USD 150
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
              <button className="flex min-h-[44px] items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white transition-opacity hover:opacity-85 shadow-md">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.83.93-2.9-.9.04-2 .6-2.65 1.36-.57.65-1.07 1.73-.93 2.78 1.01.08 2.02-.48 2.65-1.24z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/70 uppercase">Download on the</div>
                  <div className="text-xs font-semibold leading-tight">App Store</div>
                </div>
              </button>

              <button className="flex min-h-[44px] items-center gap-2.5 rounded-xl bg-black px-4 py-2.5 text-white transition-opacity hover:opacity-85 shadow-md">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.18-.323-.448-.323-.755V2.569c0-.307.125-.575.322-.755zM15.207 13.414l2.122 2.122-11.96 6.834 9.838-8.956zm2.122-2.828l-2.122 2.121-9.838-8.956 11.96 6.835zm.707.707l3.664 2.094c.645.368.645.969 0 1.337l-3.664 2.094-1.768-1.768 1.768-1.757z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/70 uppercase">GET IT ON</div>
                  <div className="text-xs font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* ================= RIGHT 3-PHONE TILTED CLUSTER ================= */}
          <div className="relative lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[640px] w-full select-none overflow-hidden lg:overflow-visible">
            <div className="absolute inset-0 w-full h-full">

              {/* --- PHONE 1: TOP-LEFT / BACK LAYER (Property Detail) --- */}
              <div className="hidden lg:block absolute -top-6 left-6 lg:left-4 w-[245px] lg:w-[265px] h-[480px] -rotate-[16deg] rounded-[50px] bg-gradient-to-br from-[#4b5563] via-[#202630] to-[#333d4b] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.45),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.16)] border border-[#4f5c6e] z-10 opacity-95 transition-transform duration-300 hover:-rotate-[13deg] select-none">
                {/* Outer Metallic Chamfer Highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/18" aria-hidden="true" />

                {/* Hardware Buttons */}
                <div className="absolute -left-[4.5px] top-[64px] h-[16px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[90px] h-[34px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[132px] h-[34px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -right-[4.5px] top-[96px] h-[50px] w-[3.5px] rounded-r-[2px] bg-gradient-to-l from-[#4b5563] to-[#202630] border-r border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />

                {/* Inner Pitch-Black OLED Bezel */}
                <div className="relative h-full w-full rounded-[46px] bg-[#090c10] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                  <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white flex flex-col justify-between text-left">
                    
                    {/* Top Section */}
                    <div>
                      {/* Dynamic Island with camera lens */}
                      <div className="mx-auto flex h-[17px] w-20 items-center justify-end rounded-full bg-black px-2 shadow-sm mt-1.5 shrink-0">
                        <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                          <div className="size-0.5 rounded-full bg-[#20293d]" />
                        </div>
                      </div>
                      
                      {/* Authentic iOS Status Bar */}
                      <IosStatusBar />

                      {/* Navigation Bar inside App */}
                      <div className="flex justify-between items-center px-4 pt-1 text-[9px]">
                        <span className="font-bold text-gray-500 cursor-pointer text-xs">‹</span>
                        <span className="font-bold text-[#00A663] bg-[#E8F8F0] px-2 py-0.5 rounded-full text-[8.5px]">
                          Available
                        </span>
                        <div className="flex gap-2 text-gray-400 text-xs">
                          <span>♡</span>
                          <span>↗</span>
                        </div>
                      </div>

                      {/* Studio One Tower Hero Image with Pagination */}
                      <div
                        className="mx-3 mt-1.5 h-26 rounded-xl bg-cover bg-center relative overflow-hidden shadow-xs"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80")' }}
                      >
                        <div className="absolute bottom-1.5 flex justify-center w-full gap-1 items-center">
                          <span className="h-1 w-2.5 bg-white rounded-full" />
                          <span className="h-1 w-1 bg-white/60 rounded-full" />
                          <span className="h-1 w-1 bg-white/60 rounded-full" />
                        </div>
                        <span className="absolute right-2 top-2 rounded-full bg-black/50 backdrop-blur-xs px-1.5 py-0.5 text-[7.5px] font-bold text-white">
                          1 / 6
                        </span>
                      </div>

                      {/* Specs & Pricing matching exact reference screenshot */}
                      <div className="px-4 pt-2 pb-1 space-y-1 text-left">
                        <div className="text-[8.5px] text-gray-500 font-semibold flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span>🛏 2</span>
                            <span>• Ready</span>
                            <span>• 📍 Dubai</span>
                          </div>
                          <span className="text-[#00A663] font-bold text-[8px]">45% funded</span>
                        </div>

                        <h4 className="text-[11px] font-extrabold text-gray-900 leading-tight">
                          2 Bed in Studio One Tower
                        </h4>
                        <div className="text-xs font-black text-[#00A663]">AED 1,236,002</div>

                        {/* Financial Table matching Screenshot */}
                        <div className="mt-1.5 pt-1.5 border-t border-gray-100 space-y-0.5 text-[8px] text-gray-500 font-medium">
                          <div className="flex justify-between">
                            <span>Annualised return</span>
                            <span className="font-bold text-gray-900">11.98%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Annual appreciation</span>
                            <span className="font-bold text-gray-900">6.84%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Gross yield</span>
                            <span className="font-bold text-gray-900">6.77%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Net yield</span>
                            <span className="font-bold text-[#00A663]">5.98%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Tab Bar with 5 iOS Icons */}
                    <div className="border-t border-gray-100 px-2.5 py-1.5 bg-gray-50/90 flex justify-between items-center text-[7px] font-semibold text-gray-400">
                      <div className="flex flex-col items-center text-[#00A663]">
                        <span>☖</span>
                        <span>Properties</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>💳</span>
                        <span>Wallet</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>📊</span>
                        <span>Portfolio</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>★</span>
                        <span>Rewards</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>👤</span>
                        <span>Profile</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* --- FLOATING OVERLAY: POLAROID BADGE --- */}
              <div className="hidden lg:flex absolute top-[6%] left-[200px] lg:left-[225px] z-30 -rotate-[10deg] rounded-2xl bg-white p-2 shadow-2xl border border-black/5 flex-col items-center w-[105px] text-center transition-transform hover:scale-105">
                <div
                  className="h-12 w-full rounded-lg bg-cover bg-center mb-1"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80")' }}
                />
                <div className="text-[7.5px] font-extrabold text-gray-900 leading-tight">Boulevard Point, Downtown Dubai</div>
                <span className="mt-0.5 inline-block rounded bg-[#E8F8F0] px-1 py-0.5 text-[8px] font-black text-[#00A663]">+10.4%</span>
              </div>

              {/* --- PHONE 2: FRONT-RIGHT (Main Portfolio Screen) --- */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-2 w-[270px] sm:w-[300px] lg:w-[275px] h-[500px] sm:h-[510px] rotate-0 lg:-rotate-[16deg] rounded-[50px] bg-gradient-to-br from-[#4b5563] via-[#202630] to-[#333d4b] p-[4px] shadow-[0_34px_80px_-15px_rgba(0,0,0,0.48),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.18)] border border-[#4f5c6e] z-20 transition-transform duration-300 hover:-rotate-[13deg] select-none">
                {/* Outer Metallic Chamfer Highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/18" aria-hidden="true" />

                {/* Hardware Buttons */}
                <div className="absolute -left-[4.5px] top-[68px] h-[16px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[96px] h-[36px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[140px] h-[36px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -right-[4.5px] top-[102px] h-[52px] w-[3.5px] rounded-r-[2px] bg-gradient-to-l from-[#4b5563] to-[#202630] border-r border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />

                {/* Inner Pitch-Black OLED Bezel */}
                <div className="relative h-full w-full rounded-[46px] bg-[#090c10] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                  <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white flex flex-col justify-between text-left pb-2">
                    
                    <div>
                      {/* Dynamic Island with camera lens */}
                      <div className="mx-auto flex h-[17px] w-20 items-center justify-end rounded-full bg-black px-2 shadow-sm mt-1.5 shrink-0">
                        <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                          <div className="size-0.5 rounded-full bg-[#20293d]" />
                        </div>
                      </div>
                      
                      {/* Status Bar with Currency Picker */}
                      <IosStatusBar currencyPill={true} />

                      {/* Title & Valuation */}
                      <div className="px-3.5 pt-1 text-sm font-extrabold text-gray-950">Portfolio</div>
                      
                      <div className="px-3.5 pt-0.5">
                        <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">PORTFOLIO VALUE</div>
                        <div className="text-xl font-black tracking-tight text-gray-950 mt-0.5">
                          AED 306,500<span className="text-xs font-semibold text-gray-400">.00</span>
                        </div>
                      </div>

                      {/* 4 Action Buttons with Labels */}
                      <div className="grid grid-cols-4 gap-1 px-3 pt-2 text-center">
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800 shadow-2xs">⇄</div>
                          <span className="text-[7.5px] font-semibold text-gray-600">Invest</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="h-7 w-7 rounded-full bg-black flex items-center justify-center text-white text-[11px] font-bold shadow-2xs">+</div>
                          <span className="text-[7.5px] font-semibold text-gray-600">Deposit</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800 shadow-2xs">☆</div>
                          <span className="text-[7.5px] font-semibold text-gray-600">Earn</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800 shadow-2xs">↗</div>
                          <span className="text-[7.5px] font-semibold text-gray-600">Exit</span>
                        </div>
                      </div>

                      {/* All Time Returns Card */}
                      <div className="mx-3 mt-1.5 rounded-xl bg-gray-50 border border-gray-100 p-1.5">
                        <div className="flex justify-between items-center text-[8px] font-bold text-gray-600">
                          <span>All time returns</span>
                          <span className="text-emerald-700 bg-emerald-100 px-1 py-0.5 rounded text-[8px] font-black">30.8%</span>
                        </div>
                        <div className="mt-0.5 text-[11px] font-black text-gray-950">AED 91,950.00</div>
                        <div className="mt-1 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden flex">
                          <div className="h-full bg-[#00A663] w-[70%]" />
                          <div className="h-full bg-emerald-300 w-[30%]" />
                        </div>
                      </div>

                      {/* Dual Rent Card */}
                      <div className="mx-3 mt-1.5 grid grid-cols-2 gap-1 text-[8px] bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-gray-400 block text-[7px] font-semibold">July&apos;s rent</span>
                          <span className="font-extrabold text-gray-900 text-[9.5px]">AED 10,225.50</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[7px] font-semibold">Total rental income</span>
                          <span className="font-extrabold text-gray-900 text-[9.5px]">AED 56,200.00</span>
                        </div>
                      </div>

                      {/* "My Stakes" Section matching reference */}
                      <div className="mx-3 mt-1.5 space-y-1">
                        <div className="flex justify-between items-center text-[8px] font-bold">
                          <span className="text-gray-900">My Stakes</span>
                          <span className="text-[#00A663] text-[7.5px]">View all (23) →</span>
                        </div>
                        
                        <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-1.5 flex items-center justify-between text-[7.5px]">
                          <span className="text-gray-600 font-medium">23 properties in 12 neighbourhoods</span>
                          <span className="rounded bg-black/85 text-white px-1.5 py-0.5 text-[7px] font-bold">All Stakes</span>
                        </div>
                      </div>

                    </div>

                    {/* Home Indicator Swipe Bar */}
                    <div className="h-1 w-20 bg-black/20 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* --- PHONE 3: BOTTOM-CENTER (Foreground Sharp Screen with Bottom Fade-Out Mask) --- */}
              <div 
                className="hidden lg:block absolute top-[310px] lg:top-[330px] left-[130px] lg:left-[155px] w-[245px] lg:w-[265px] h-[440px] -rotate-[16deg] rounded-[50px] bg-gradient-to-br from-[#4b5563] via-[#202630] to-[#333d4b] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.45),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.16)] border border-[#4f5c6e] z-30 opacity-100 select-none"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(0,0,0,0) 65%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 28%, rgba(0,0,0,0) 65%)',
                }}
              >
                {/* Outer Metallic Chamfer Highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/18" aria-hidden="true" />

                {/* Hardware Buttons */}
                <div className="absolute -left-[4.5px] top-[60px] h-[16px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[86px] h-[34px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -left-[4.5px] top-[128px] h-[34px] w-[3.5px] rounded-l-[2px] bg-gradient-to-r from-[#4b5563] to-[#202630] border-l border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />
                <div className="absolute -right-[4.5px] top-[92px] h-[50px] w-[3.5px] rounded-r-[2px] bg-gradient-to-l from-[#4b5563] to-[#202630] border-r border-y border-[#5a6677] shadow-2xs" aria-hidden="true" />

                {/* Inner Pitch-Black OLED Bezel */}
                <div className="relative h-full w-full rounded-[46px] bg-[#090c10] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                  <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white flex flex-col text-left">
                    {/* Dynamic Island with camera lens */}
                    <div className="mx-auto flex h-[17px] w-20 items-center justify-end rounded-full bg-black px-2 shadow-sm mt-1.5 shrink-0">
                      <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                        <div className="size-0.5 rounded-full bg-[#20293d]" />
                      </div>
                    </div>
                    
                    {/* iOS Status Bar with Cart Badge */}
                    <div className="flex justify-between items-center px-4 pt-1.5 text-[9px] font-semibold text-gray-900 select-none">
                      <span className="font-bold tracking-tight">9:41</span>
                      
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3 h-2 fill-current text-gray-800" viewBox="0 0 17 12">
                          <rect x="0" y="9" width="3" height="3" rx="0.6" />
                          <rect x="4.5" y="6" width="3" height="6" rx="0.6" />
                          <rect x="9" y="3" width="3" height="9" rx="0.6" />
                          <rect x="13.5" y="0" width="3" height="12" rx="0.6" />
                        </svg>
                        <span>🔖</span>
                        <span className="bg-[#00A663] text-white px-1.5 py-0.2 rounded-full text-[7.5px] font-black">
                          🛒 1
                        </span>
                      </div>
                    </div>

                    {/* Clean Funds Title matching screenshot */}
                    <div className="px-4 pt-1.5 text-xs font-black text-gray-950">Funds</div>

                    {/* Sub-tabs: Available / Funded */}
                    <div className="flex gap-4 px-4 pt-1.5 border-b border-gray-100">
                      <span className="text-[#00A663] border-b-2 border-[#00A663] pb-1 font-bold text-[9px]">
                        Available
                      </span>
                      <span className="text-gray-400 font-semibold text-[9px] pb-1">
                        Funded
                      </span>
                    </div>

                    {/* Fund Preview Thumbnail Card matching screenshot */}
                    <div className="mx-3 mt-2 rounded-xl border border-gray-100 p-2 bg-gray-50/90 shadow-2xs">
                      <div
                        className="h-20 rounded-lg bg-cover bg-center relative overflow-hidden"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=500&q=80")' }}
                      >
                        <div className="absolute bottom-1.5 flex justify-center w-full gap-1">
                          <span className="h-1 w-2.5 bg-white rounded-full" />
                          <span className="h-1 w-1 bg-white/70 rounded-full" />
                          <span className="h-1 w-1 bg-white/70 rounded-full" />
                        </div>
                      </div>
                      <div className="p-1.5">
                        <div className="flex justify-between items-center text-[8.5px] text-gray-500 font-medium">
                          <span>• Riyadh</span>
                          <span className="text-[#00A663] font-bold">Available</span>
                        </div>
                        <div className="text-[10px] font-extrabold text-gray-900 mt-0.5">Riyadh Income Generating Fund</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Edge Fade-Out Mask matching Stake reference */}
              <div className="hidden lg:block absolute -bottom-2 left-0 right-0 h-48 lg:h-60 bg-gradient-to-t from-[#F7F5EF] via-[#F7F5EF]/90 to-transparent pointer-events-none z-35" />

              {/* --- FLOATING OVERLAY: RENT NOTIFICATION BADGE --- */}
              {/* Positioned tilted across Phone 3 matching exact Stake reference */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xs rotate-0 lg:-rotate-[16deg] lg:top-[410px] lg:left-[100px] lg:bottom-auto lg:translate-x-0 lg:w-auto z-40 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-2xl border border-black/5 flex items-center gap-3 transition-transform hover:scale-105">
                {/* Stake App Icon simulation with pink accent */}
                <div className="size-8 rounded-xl bg-[#0D1117] flex items-center justify-center text-white relative shadow-xs shrink-0">
                  <span className="font-mono text-xs font-black text-emerald-400">k</span>
                  <span className="size-1.5 rounded-full bg-pink-500 absolute top-1 right-1" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Stake • Just now</div>
                  <div className="text-[10.5px] font-extrabold text-gray-900 leading-tight truncate sm:whitespace-normal">
                    You&apos;ve been paid <span className="text-[#00A663]">AED 18,550</span> in rent
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StakeHero;
