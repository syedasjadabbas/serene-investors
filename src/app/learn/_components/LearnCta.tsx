import { useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  Bed,
  Bath,
  Maximize2,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { learnCta } from '../_lib/learn'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'

export function LearnCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="learn-cta py-20 lg:py-24 px-6 bg-soft text-soft-ink overflow-hidden"
      aria-labelledby="learn-cta-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, description, actions & trust points */}
          <div className="lg:col-span-6 space-y-6">
            <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
              Next step
            </p>
            <h2
              data-reveal-heading
              id="learn-cta-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-ink"
            >
              {learnCta.heading}
            </h2>
            <p
              data-reveal-heading
              className="text-base sm:text-lg leading-relaxed text-muted max-w-lg"
            >
              {learnCta.body}
            </p>

            {/* Quick checklist */}
            <div data-reveal-heading className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-ink font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                <span>Min. investment from AED 500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                <span>Monthly rental payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                <span>No paperwork or management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                <span>Exit windows every 6 months</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div data-reveal-heading className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A663] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#008f55] transition-colors"
              >
                <span>Explore properties</span>
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link
                href="/#products-bento"
                className="inline-flex items-center justify-center rounded-xl border border-ink/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-ink shadow-2xs hover:bg-white transition-colors"
              >
                Explore funds
              </Link>
            </div>
          </div>

          {/* Right Column: Platform Property Catalogue Visual Preview */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end pt-4 sm:pt-6 lg:pt-0">
            
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 bg-[#00A663]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Interactive Listing Card */}
            <div className="relative z-10 w-full max-w-[420px] rounded-[30px] bg-white p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/[0.06] transition-transform duration-300 hover:-translate-y-1">
              
              {/* Property Image & Badges */}
              <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xs">
                <img
                  src={withBase("/images/properties/boulevard-point-hero.jpg")}
                  alt="Boulevard Point, Downtown Dubai"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#00A663] px-3 py-1 text-xs font-extrabold text-white shadow-xs">
                  +10.4% Target Return
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-[#0F172A] shadow-xs">
                  Available Now
                </span>
              </div>

              {/* Title & Location */}
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight">
                  Boulevard Point, Downtown Dubai
                </h3>
                <p className="text-xs text-[#64748B] mt-1 font-medium">
                  Prime Luxury Residential • Burj Crown Views
                </p>
              </div>

              {/* Specs */}
              <div className="mt-3 flex items-center gap-3 text-xs text-[#64748B] border-y border-gray-100 py-2.5">
                <div className="flex items-center gap-1">
                  <Bed size={14} className="text-[#64748B]" />
                  <span>2 Beds</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Bath size={14} className="text-[#64748B]" />
                  <span>3 Baths</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Maximize2 size={13} className="text-[#64748B]" />
                  <span>170 sqm</span>
                </div>
              </div>

              {/* Financial Progress & Yield */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-base sm:text-lg font-black text-[#00A663]">AED 1,305,990</span>
                    <span className="text-[11px] text-[#64748B] ml-1.5">property price</span>
                  </div>
                  <span className="text-xs font-bold text-[#0F172A]">88% Funded</span>
                </div>

                <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full w-[88%] rounded-full bg-[#00A663]" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-0.5">
                  <span className="flex items-center gap-1">
                    <Users size={12} className="text-[#64748B]" />
                    <span>368 Investors</span>
                  </span>
                  <span className="font-semibold text-[#00A663]">12 days left</span>
                </div>
              </div>

            </div>

            {/* Overlapping Floating Monthly Income Sticker Badge */}
            <div className="absolute -top-4 sm:-top-5 -left-2 sm:-left-5 z-20 rounded-2xl bg-white p-3 sm:p-3.5 shadow-xl border border-black/[0.06] flex items-center gap-3 transition-transform duration-300 hover:scale-105">
              <div className="size-9 sm:size-10 rounded-xl bg-[#E8FAF0] text-[#00A663] flex items-center justify-center shrink-0">
                <TrendingUp size={18} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Monthly Rental Payout
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                  AED 3,250 <span className="text-[10px] font-semibold text-[#00A663]">received</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
