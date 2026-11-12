'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Gift,
} from 'lucide-react'
import { RewardsTiers } from '@/global/components/sections/RewardsTiers'

export function RewardsPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#0F172A] min-h-screen">
      {/* Top Hero Banner */}
      <section className="bg-white border-b border-black/[0.06] pt-16 pb-16 sm:pt-22 sm:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8FAF0] px-4 py-1.5 text-xs font-bold text-[#00A663] border border-[#00A663]/30">
            <Gift size={15} />
            <span>STAKE INVESTOR REWARDS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Earn more as you <span className="text-[#00A663]">grow</span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Every investment gets you closer to higher tiers. Unlock up to 2.5% cashback on all property investments, zero management fees, and VIP investor concierge.
          </p>

          {/* Quick Metrics */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#F8FAF9] p-4 border border-black/[0.04]">
              <p className="text-2xl font-extrabold text-[#00A663]">Up to 2.5%</p>
              <p className="text-xs text-[#64748B] mt-0.5">Investment Cashback</p>
            </div>
            <div className="rounded-2xl bg-[#F8FAF9] p-4 border border-black/[0.04]">
              <p className="text-2xl font-extrabold text-[#0F172A]">AED 2,500+</p>
              <p className="text-xs text-[#64748B] mt-0.5">Referral Bonuses</p>
            </div>
            <div className="rounded-2xl bg-[#F8FAF9] p-4 border border-black/[0.04]">
              <p className="text-2xl font-extrabold text-[#00A663]">4 Tiers</p>
              <p className="text-xs text-[#64748B] mt-0.5">Plus, Elite, Club, Private</p>
            </div>
            <div className="rounded-2xl bg-[#F8FAF9] p-4 border border-black/[0.04]">
              <p className="text-2xl font-extrabold text-[#0F172A]">Priority</p>
              <p className="text-xs text-[#64748B] mt-0.5">Pre-Market Allocations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Rewards Tiers Component */}
      <RewardsTiers />

      {/* Referral Program Spotlight */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="rounded-[36px] bg-[#0D1117] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="rounded-full bg-[#00A663] px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider">
              Referral Program
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Share Stake with friends. Earn cash together.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Give your friends AED 250 to start investing, and get AED 250 credited straight to your digital wallet the moment they make their first qualifying investment.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-[#00A663] px-6 py-3 text-sm font-bold text-white hover:bg-[#008f55] transition-colors shadow-xs"
              >
                <span>Get your invite link</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-[#00A663]/20 blur-[100px]"
            aria-hidden="true"
          />
        </div>
      </section>
    </div>
  )
}
