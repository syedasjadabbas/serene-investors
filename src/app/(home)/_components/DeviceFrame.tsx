'use client'

import React, { type ReactNode } from 'react'

type DeviceFrameProps = {
  children: ReactNode
  className?: string
  time?: string
  screenBg?: string
  showHomeIndicator?: boolean
  aspectRatio?: string
}

export function DeviceFrame({
  children,
  className = '',
  time = '9:41',
  screenBg = 'bg-white',
  showHomeIndicator = true,
  aspectRatio = 'aspect-[9/19.5]',
}: DeviceFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] ${aspectRatio} rounded-[52px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.42),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.14)] border border-[#485362]/80 select-none ${className}`}
    >
      {/* Outer Metallic Chamfer Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[51px] ring-1 ring-inset ring-white/15" aria-hidden="true" />

      {/* --- CHASSIS HARDWARE BUTTONS & ANTENNA LINES --- */}
      {/* Left Top Antenna Seam */}
      <div className="absolute -left-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
      {/* Left Action Button */}
      <div className="absolute -left-[5.5px] top-[74px] h-[18px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Left Volume Up Button */}
      <div className="absolute -left-[5.5px] top-[104px] h-[42px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Left Volume Down Button */}
      <div className="absolute -left-[5.5px] top-[156px] h-[42px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Left Bottom Antenna Seam */}
      <div className="absolute -left-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

      {/* Right Top Antenna Seam */}
      <div className="absolute -right-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
      {/* Right Power / Lock Button */}
      <div className="absolute -right-[5.5px] top-[112px] h-[64px] w-[4px] rounded-r-[2px] bg-gradient-to-l from-[#3e4754] to-[#252a33] border-r border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Right Bottom Antenna Seam */}
      <div className="absolute -right-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

      {/* --- INNER UNIFORM PITCH-BLACK OLED BEZEL --- */}
      <div className="relative h-full w-full rounded-[48px] bg-[#0a0d12] p-[4px] overflow-hidden flex flex-col shadow-inner">
        
        {/* Screen Canvas */}
        <div
          className={`relative h-full w-full overflow-hidden rounded-[44px] ${screenBg} flex flex-col text-[#0D1117]`}
        >
          {/* Status Bar */}
          <div className="relative z-30 flex h-10 shrink-0 items-center justify-between px-6 pt-2 text-[#0D1117]">
            {/* Time */}
            <span className="w-12 text-left font-semibold text-[13px] tracking-tight">{time}</span>

            {/* Dynamic Island Cutout */}
            <div className="mx-auto flex h-[26px] w-[105px] items-center justify-end rounded-full bg-black px-2.5 shadow-sm">
              {/* TrueDepth Camera & Sensor Reflection */}
              <div className="size-2.5 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                <div className="size-1 rounded-full bg-[#20293d]" />
              </div>
            </div>

            {/* Icons: Signal, WiFi, Battery */}
            <div className="flex w-12 items-center justify-end gap-1.5 text-[#0D1117]">
              {/* Cellular Signal Bars */}
              <svg className="size-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <rect x="1" y="11" width="2" height="4" rx="0.5" />
                <rect x="5" y="8" width="2" height="7" rx="0.5" />
                <rect x="9" y="5" width="2" height="10" rx="0.5" />
                <rect x="13" y="2" width="2" height="13" rx="0.5" />
              </svg>

              {/* WiFi Icon */}
              <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
              </svg>

              {/* Battery Indicator */}
              <div className="flex items-center">
                <div className="flex h-3 w-5 items-center rounded-[3.5px] border-[1.2px] border-current p-[1.5px]">
                  <div className="h-full w-3.5 rounded-[1.5px] bg-[#00A663]" />
                </div>
                <div className="h-1.5 w-[1.5px] rounded-r-xs bg-current" />
              </div>
            </div>
          </div>

          {/* Dynamic Screen Content */}
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-none flex flex-col">
            {children}
          </div>

          {/* Home Indicator Swipe Bar */}
          {showHomeIndicator && (
            <div className="relative z-30 flex shrink-0 justify-center py-2" aria-hidden="true">
              <div className="h-1 w-32 rounded-full bg-black/25" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
