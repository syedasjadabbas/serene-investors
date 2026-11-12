'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Award,
  CheckCircle2,
  Users,
  FileCheck,
  Building2,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Globe2,
} from 'lucide-react'

const BENEFITS = [
  {
    title: '10-Year Renewable Residency',
    desc: 'Live, work, and study in Dubai without needing a national sponsor or employer.',
    icon: Award,
  },
  {
    title: '100% Family Sponsorship',
    desc: 'Sponsor your spouse, children of any age, and domestic staff with full ease.',
    icon: Users,
  },
  {
    title: '0% Tax Environment',
    desc: 'Enjoy tax-free rental distributions and zero capital gains tax in the UAE.',
    icon: Sparkles,
  },
  {
    title: 'No In-Country Stay Rule',
    desc: 'Stay outside the UAE for any duration without your visa becoming void.',
    icon: Globe2,
  },
  {
    title: 'Diversified Real Estate',
    desc: 'Reach AED 2M across multiple prime properties rather than betting on one single unit.',
    icon: Building2,
  },
  {
    title: 'End-to-End Concierge',
    desc: 'Stake handles all Dubai Land Department (DLD) documentation and approvals.',
    icon: FileCheck,
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Build your AED 2M portfolio',
    desc: 'Invest in individual vetted properties or funds on Stake to reach the statutory AED 2,000,000 threshold.',
  },
  {
    number: '02',
    title: 'Stake prepares your documentation',
    desc: 'Our legal and regulatory team compiles your Land Registry ownership deeds and submits to the DLD.',
  },
  {
    number: '03',
    title: 'Receive your 10-Year Golden Visa',
    desc: 'Complete medical fitness and biometrics, and receive your Emirates ID and 10-year residency permit.',
  },
]

const FAQS = [
  {
    q: 'Can I qualify for the Golden Visa with multiple properties on Stake?',
    a: 'Yes. The UAE Golden Visa real estate route requires a total portfolio equity of AED 2,000,000 (~USD 545,000). On Stake, you can distribute this amount across multiple vetted Dubai assets.',
  },
  {
    q: 'Does Stake manage the government paperwork?',
    a: 'Yes. Stake provides full white-glove concierge service, coordinating with the Dubai Land Department (DLD) and GDRFA from start to finish.',
  },
  {
    q: 'Do I still earn rental income while qualifying for the visa?',
    a: 'Absolutely. You retain 100% of your monthly passive rental yields and property capital appreciation during your visa tenure.',
  },
  {
    q: 'How long does the entire process take?',
    a: 'Once your portfolio reaches the threshold and documents are submitted, government processing typically takes between 2 to 4 weeks.',
  },
]

export function GoldenVisaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-white text-[#0F172A]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-[#F8FAF9] border-b border-black/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E8FAF0] px-3.5 py-1 text-xs font-bold text-[#00A663] border border-[#00A663]/25">
                <Award size={14} className="text-[#00A663]" />
                <span>UAE GOLDEN VISA WITH STAKE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-[#0F172A]">
                Get a 10-year UAE Golden Visa through{' '}
                <span className="text-[#00A663]">real estate</span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
                Invest AED 2,000,000 across premium Dubai properties on Stake and secure long-term UAE residency for you and your family—fully digital, hassle-free.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1E293B] transition-colors"
                >
                  <span>Explore Qualifying Properties</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-2xs hover:bg-gray-50 transition-colors"
                >
                  How it works
                </a>
              </div>

              {/* Fast trust stats */}
              <div className="pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#00A663]">10 Years</p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">Renewable residency</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">AED 2M</p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">Qualifying investment</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#00A663]">100%</p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">Digital concierge</p>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] bg-white p-7 sm:p-9 shadow-2xl border border-black/[0.06] space-y-6">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-[#00A663] to-[#008650] flex items-center justify-center text-white shadow-md">
                    <Award size={26} />
                  </div>
                  <span className="rounded-full bg-[#E8FAF0] px-3 py-1 text-xs font-bold text-[#00A663]">
                    Official DLD Route
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    Golden Visa Portfolio Pass
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Direct title-deed verified fractional ownership
                  </p>
                </div>

                {/* Progress bar to AED 2M */}
                <div className="rounded-2xl bg-[#F8FAF9] p-4 border border-black/[0.04] space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-[#64748B]">Target Investment</span>
                    <span className="font-extrabold text-[#00A663]">AED 2,000,000</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-[#00A663]" />
                  </div>
                  <p className="text-[11px] text-[#64748B] text-right">AED 1,700,000 accumulated</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#0F172A]">
                    <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                    <span>Includes spouse &amp; children residency</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0F172A]">
                    <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                    <span>Monthly rental payouts deposited continuously</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0F172A]">
                    <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                    <span>Full DLD certification and legal issuance</span>
                  </div>
                </div>

                <Link
                  href="/properties"
                  className="w-full flex items-center justify-center rounded-xl bg-[#00A663] py-3 text-sm font-bold text-white shadow-xs hover:bg-[#008f55] transition-colors"
                >
                  Start Investing Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS GRID */}
      <section className="py-20 sm:py-24 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#00A663]">
            Unmatched Advantages
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Why get your Golden Visa through Stake?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-2xl border border-black/[0.06] bg-white p-7 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-3"
              >
                <div className="size-11 rounded-xl bg-[#E8FAF0] flex items-center justify-center text-[#00A663]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{b.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. STEP BY STEP PROCESS */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-[#F8FAF9] border-y border-black/[0.06] px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-[#00A663]">
              Simple 3-Step Journey
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              How the Golden Visa process works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.number} className="rounded-3xl bg-white border border-black/[0.06] p-8 shadow-xs relative">
                <span className="text-4xl font-black text-[#00A663]/25">{s.number}</span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-4">{s.title}</h3>
                <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQS */}
      <section className="py-20 sm:py-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Everything you need to know about qualifying through Stake
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0F172A] hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#64748B] transition-transform duration-200 ${
                    openFaq === i ? 'rotate-180 text-[#00A663]' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-[#64748B] leading-relaxed border-t border-black/[0.04] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
