'use client'

import React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  Landmark,
  Scale,
  FileCheck,
  ArrowRight,
} from 'lucide-react'
import { SecurityRegulation } from '@/global/components/sections/SecurityRegulation'

export function SecurityPage() {
  return (
    <div className="bg-[#0B131F] text-white min-h-screen">
      {/* Top Hero Banner */}
      <section className="border-b border-white/10 pt-16 pb-16 sm:pt-22 sm:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#132F26] px-4 py-1.5 text-xs font-bold text-[#00A663] border border-[#00A663]/30">
            <ShieldCheck size={15} />
            <span>INSTITUTIONAL TRUST &amp; COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Safety &amp; <span className="text-[#00A663]">Regulation</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your investments and capital are safeguarded by dual regulatory oversight, independent Special Purpose Vehicles (SPVs), and tier-1 bank custody.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/10 backdrop-blur-xs">
              <p className="text-2xl font-extrabold text-[#00A663]">DFSA</p>
              <p className="text-xs text-slate-400 mt-0.5">Dubai DIFC Regulated</p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/10 backdrop-blur-xs">
              <p className="text-2xl font-extrabold text-blue-400">CMA</p>
              <p className="text-xs text-slate-400 mt-0.5">Saudi Arabia FinTech Lab</p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/10 backdrop-blur-xs">
              <p className="text-2xl font-extrabold text-emerald-300">100%</p>
              <p className="text-xs text-slate-400 mt-0.5">SPV Title Deeds (DLD)</p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/10 backdrop-blur-xs">
              <p className="text-2xl font-extrabold text-[#00A663]">Tier-1</p>
              <p className="text-xs text-slate-400 mt-0.5">Segregated Custody</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Dual Regulation & Backers Section */}
      <SecurityRegulation />

      {/* 4 Pillars of Investor Protection */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#00A663] mb-2">4 PILLARS OF PROTECTION</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How your assets are protected
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 space-y-3">
            <div className="size-12 rounded-2xl bg-emerald-500/15 text-[#34D399] flex items-center justify-center">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Dedicated Property SPVs</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every property is acquired through a separate Special Purpose Vehicle (SPV) registered in the Dubai International Financial Centre (DIFC). You own shares in the SPV, ensuring complete isolation from Stake&apos;s corporate entity.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 space-y-3">
            <div className="size-12 rounded-2xl bg-emerald-500/15 text-[#34D399] flex items-center justify-center">
              <Landmark size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Ring-Fenced Client Custody</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Uninvested wallet cash and rental dividends are deposited in ring-fenced client trust accounts with tier-1 international banks. Funds are never co-mingled with operating capital.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 space-y-3">
            <div className="size-12 rounded-2xl bg-emerald-500/15 text-[#34D399] flex items-center justify-center">
              <Scale size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Independent RICS Appraisals</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Asset values are audited each quarter by certified independent valuers accredited by the Royal Institution of Chartered Surveyors (RICS) to ensure impartial mark-to-market pricing.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 space-y-3">
            <div className="size-12 rounded-2xl bg-emerald-500/15 text-[#34D399] flex items-center justify-center">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Bank-Grade 256-Bit Encryption</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              All transactions, financial data, and personal identification documents are encrypted with AES-256 standards, multi-factor authentication (MFA), and round-the-clock threat monitoring.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 rounded-3xl bg-[#00A663] p-8 sm:p-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Invest with institutional peace of mind
            </h4>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-lg">
              Start building your income-generating property portfolio with as little as AED 500 (~$136).
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-black transition-colors shrink-0"
          >
            <span>Browse Properties</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
