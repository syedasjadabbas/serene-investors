'use client'

import React from 'react'
import Link from 'next/link'
import {
  FileText,
  Download,
  Calendar,
  ArrowRight,
  CheckCircle2,
  BarChart3,
} from 'lucide-react'

const REPORTS = [
  {
    title: 'Dubai Real Estate Market Report Q1 2026',
    date: 'April 2026',
    pages: '28 Pages',
    desc: 'In-depth analysis of residential property yields, capital appreciation trends across Dubai Marina, Downtown, and Palm Jumeirah, and secondary market liquidity.',
    highlights: ['10.1% Average Platform Yield', '+14.2% YoY Capital Appreciation', '94% Prime Rental Occupancy'],
    featured: true,
  },
  {
    title: 'Riyadh Institutional Real Estate Outlook 2025/2026',
    date: 'January 2026',
    pages: '22 Pages',
    desc: 'Comprehensive overview of the Saudi Vision 2030 commercial real estate boom, high-demand logistics corridors, and institutional fund performance.',
    highlights: ['SAR 120M Total Value Tracked', '8.9% Target Fund IRR', 'Quarterly Dividend Benchmarks'],
    featured: false,
  },
  {
    title: 'UAE Golden Visa Inflow & Property Study',
    date: 'November 2025',
    pages: '18 Pages',
    desc: 'How the AED 2,000,000 Golden Visa threshold is driving sustained foreign direct investment into fractional and individual luxury real estate.',
    highlights: ['+38% Visa Applications', 'AED 2M Average Allocation', 'European & Asian Inflows'],
    featured: false,
  },
  {
    title: 'Short-Term Holiday vs. Long-Term Rental Index',
    date: 'August 2025',
    pages: '20 Pages',
    desc: 'Comparative study evaluating net yield margins between DTCM-licensed holiday homes and standard long-term 1-year tenancy agreements.',
    highlights: ['7.8% Net Long-term Yield', '9.4% Holiday Home Yield', 'Downtown Dubai Case Study'],
    featured: false,
  },
]

export function MarketReportsPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Header */}
      <section className="bg-[#F8FAF9] border-b border-black/[0.06] pt-14 pb-16 sm:pt-20 sm:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8FAF0] px-3.5 py-1 text-xs font-bold text-[#00A663] border border-[#00A663]/25">
            <BarChart3 size={14} />
            <span>RESEARCH &amp; ANALYTICS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Market <span className="text-[#00A663]">Reports</span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] max-w-xl mx-auto">
            Institutional-grade research on Dubai and Saudi Arabia real estate performance, rental dividend benchmarks, and macroeconomic market dynamics.
          </p>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white p-4 border border-black/[0.04] shadow-2xs">
              <p className="text-2xl font-extrabold text-[#00A663]">10.1%</p>
              <p className="text-xs text-[#64748B] mt-0.5">Avg. 2025 Return</p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-black/[0.04] shadow-2xs">
              <p className="text-2xl font-extrabold text-[#0F172A]">AED 1.5B+</p>
              <p className="text-xs text-[#64748B] mt-0.5">Transactions Tracked</p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-black/[0.04] shadow-2xs">
              <p className="text-2xl font-extrabold text-[#00A663]">202+</p>
              <p className="text-xs text-[#64748B] mt-0.5">Nationalities</p>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-black/[0.04] shadow-2xs">
              <p className="text-2xl font-extrabold text-[#0F172A]">Quarterly</p>
              <p className="text-xs text-[#64748B] mt-0.5">Published Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Collection */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-8">
          Available Quarterly Reports
        </h2>

        <div className="space-y-6">
          {REPORTS.map((report) => (
            <div
              key={report.title}
              className={`rounded-3xl border p-7 sm:p-8 transition-all ${
                report.featured
                  ? 'border-[#00A663]/40 bg-[#F8FAF9] shadow-md ring-1 ring-[#00A663]/20'
                  : 'border-black/[0.06] bg-white shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                      <Calendar size={13} className="text-[#00A663]" />
                      <span>{report.date}</span>
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1 text-xs text-[#64748B] font-medium">
                      <FileText size={13} className="text-[#64748B]" />
                      <span>{report.pages}</span>
                    </span>
                    {report.featured && (
                      <span className="rounded-full bg-[#00A663] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                        LATEST RELEASE
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    {report.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {report.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {report.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-semibold text-[#0F172A]"
                      >
                        <CheckCircle2 size={12} className="text-[#00A663]" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault()
                      alert(`Thank you! Downloading ${report.title}...`)
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#1E293B] transition-colors"
                  >
                    <Download size={15} />
                    <span>Download PDF</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl bg-[#00A663] p-8 sm:p-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Invest with data-backed confidence
            </h4>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-lg">
              Stake combines institutional research with zero-hassle fractional investing in Dubai’s top-performing properties.
            </p>
          </div>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-black transition-colors shrink-0"
          >
            <span>Explore Properties</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  )
}
