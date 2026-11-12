import { useRef } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  FileCheck,
  Landmark,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import { howPageFaq } from '@/global/data/how-it-works'
import { learnDisclaimer } from '../_lib/learn'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'

export function LearnDisclaimer() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="learn-disclaimer py-20 lg:py-24 px-6 bg-accent text-accent-ink overflow-hidden"
      aria-labelledby="learn-disclaimer-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: HEADING & FAQS ================= */}
          <div className="lg:col-span-7">
            <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f5ef]/60 m-0">
              Illustrative sample
            </p>
            <h2
              data-reveal-heading
              id="learn-disclaimer-heading"
              className="mt-4 max-w-[16ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-accent-ink"
            >
              {learnDisclaimer.heading}
            </h2>
            <p
              data-reveal-heading
              className="mt-5 max-w-[50ch] text-[1.05rem] leading-relaxed text-[#f7f5ef]/80 text-pretty"
            >
              {learnDisclaimer.body}
            </p>

            <div id="faq" className="mt-12 sm:mt-14">
              <h3 data-reveal-heading className="text-2xl font-semibold mb-6 text-accent-ink">
                Questions, in brief.
              </h3>
              <div className="border-b border-white/20">
                {howPageFaq.map((item) => (
                  <details key={item.id} data-reveal-item className="group border-t border-white/20">
                    <summary className="cursor-pointer list-none py-4 pr-7 text-lg font-semibold text-accent-ink flex items-center justify-between transition-colors hover:text-white">
                      <span>{item.question}</span>
                      <span className="text-xs transition-transform duration-200 group-open:rotate-180" aria-hidden="true">▼</span>
                    </summary>
                    <p className="pb-5 text-sm text-[#f7f5ef]/80 leading-relaxed max-w-[52ch] m-0">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p data-reveal-item className="mt-8 text-sm text-[#f7f5ef]/70 leading-relaxed">
                The same answers also sit on{' '}
                <Link href="/#how-it-works" className="font-medium underline underline-offset-4 text-accent-ink hover:text-white">
                  How it works
                </Link>
                {' '}and in the{' '}
                <Link href="/legal/risks" className="font-medium underline underline-offset-4 text-accent-ink hover:text-white">
                  sample key risks
                </Link>.
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: VISUAL DUE DILIGENCE CARD ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 pt-4 lg:pt-0">
            <div className="relative rounded-[32px] bg-white/[0.07] border border-white/15 p-6 sm:p-7 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Top Trust Badge Strip */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00A663]/25 border border-[#00A663]/40 px-3 py-1 text-xs font-semibold text-[#34D399]">
                  <ShieldCheck size={14} className="text-[#34D399]" />
                  <span>Due Diligence Safeguards</span>
                </span>
                <span className="text-[11px] font-medium text-[#f7f5ef]/60">
                  DFSA Regulated
                </span>
              </div>

              {/* Property Snapshot with Overlay Badges */}
              <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-black/20 border border-white/10 shadow-inner">
                <img
                  src={withBase("/images/journey/dubai-marina.jpg")}
                  alt="Dubai Marina verified prime asset"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white border border-white/10">
                  Sample Asset Breakdown
                </span>

                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-bold leading-tight">Marina Gate, Dubai</p>
                    <p className="text-[10px] text-white/70">SPV Fractional Allocation</p>
                  </div>
                  <span className="rounded-full bg-[#00A663] px-2.5 py-1 text-[11px] font-extrabold text-white shadow-xs">
                    7.4% Net Yield
                  </span>
                </div>
              </div>

              {/* 3 Core Trust Criteria Checklist */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
                  <div className="size-8 rounded-lg bg-emerald-500/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Land Registry Title Deeds</h4>
                    <p className="text-[11px] text-[#f7f5ef]/70 leading-relaxed mt-0.5">
                      Ownership recorded directly with the Dubai Land Department (DLD).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
                  <div className="size-8 rounded-lg bg-emerald-500/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <Landmark size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Segregated Client Accounts</h4>
                    <p className="text-[11px] text-[#f7f5ef]/70 leading-relaxed mt-0.5">
                      Investor funds held in tier-1 bank custody accounts, never co-mingled.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-3 border border-white/[0.08]">
                  <div className="size-8 rounded-lg bg-emerald-500/20 text-[#34D399] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Quarterly Valuation Audits</h4>
                    <p className="text-[11px] text-[#f7f5ef]/70 leading-relaxed mt-0.5">
                      Independent RICS accredited appraisals on every asset every quarter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link Action */}
              <Link
                href="/properties"
                className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white text-[#0B3528] py-3 text-xs sm:text-sm font-bold shadow-md hover:bg-emerald-50 transition-colors"
              >
                <span>View All Sample Listings</span>
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
