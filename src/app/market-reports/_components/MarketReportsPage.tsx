'use client'

import { useState } from 'react'
import { Calendar, Check, Download, FileText } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { marketReports, reportsIntro, type MarketReport } from '../_lib/reports'

function ReportMeta({ report, dark }: { report: MarketReport; dark?: boolean }) {
  return (
    <p className={cn('flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium', dark ? 'text-white/65' : 'text-sx-ink/55')}>
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={13} aria-hidden="true" className={dark ? 'text-sx-mint' : 'text-sx-brand'} />
        {report.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <FileText size={13} aria-hidden="true" />
        {report.pages}
      </span>
    </p>
  )
}

function Highlights({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul aria-label="Report highlights" className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
            dark ? 'bg-white/10 text-white' : 'bg-sx-paper text-sx-ink',
          )}
        >
          <Check size={12} aria-hidden="true" className={dark ? 'text-sx-mint' : 'text-sx-brand'} />
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Download button. Reports are samples, so it shows a short notice instead of fetching a file. */
function DownloadButton({ report, dark, requested, onRequest }: { report: MarketReport; dark?: boolean; requested: boolean; onRequest: () => void }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={onRequest}
        aria-label={`Download ${report.title} (PDF)`}
        className={cn(
          'group inline-flex items-center gap-5 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors',
          dark ? 'bg-white text-sx-ink hover:bg-sx-sand' : 'bg-sx-ink text-white hover:bg-sx-forest',
        )}
      >
        Download PDF
        <span
          aria-hidden="true"
          className={cn('flex size-7 items-center justify-center rounded-full', dark ? 'bg-sx-brand text-white' : 'bg-sx-mint text-sx-ink')}
        >
          <Download size={14} />
        </span>
      </button>
      <p role="status" className={cn('text-xs', dark ? 'text-white/65' : 'text-sx-ink/55')}>
        {requested ? 'Thank you. This sample report is not available to download yet.' : ''}
      </p>
    </div>
  )
}

export function MarketReportsPage() {
  usePageMeta(
    'Serene Investors | Market reports',
    'Research on Dubai and Saudi Arabia real estate performance, rental income benchmarks and market dynamics.',
  )

  const [requested, setRequested] = useState<Record<string, boolean>>({})
  const request = (id: string) => setRequested((prev) => ({ ...prev, [id]: true }))
  const [featured, ...others] = marketReports

  return (
    <>
      <PageHeader
        eyebrow={reportsIntro.eyebrow}
        title={reportsIntro.heading}
        highlight={reportsIntro.highlight}
        body={reportsIntro.body}
        aside={<p className="text-sm font-medium text-sx-ink/55">{marketReports.length} sample reports</p>}
      />

      <PageSection labelledBy="featured-report-heading" pad="none">
        <article className="grid gap-3 rounded-[30px] bg-white p-3 text-sx-ink md:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[260px] overflow-hidden rounded-[20px] sm:min-h-[360px] md:min-h-[480px]">
            <img
              src={withBase(featured.image.src)}
              alt={featured.image.alt}
              width={1400}
              height={1050}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-5 sm:p-10 lg:p-12">
            <p className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-sx-ink px-3 py-1 font-semibold text-white">Latest release</span>
              <span className="rounded-full bg-sx-sand px-3 py-1 font-semibold text-sx-ink">Sample report</span>
            </p>
            <ReportMeta report={featured} />
            <h2 id="featured-report-heading" className="text-balance font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.5rem]">
              {featured.title}
            </h2>
            <p className="text-base leading-relaxed text-sx-ink/65 sm:text-lg">{featured.desc}</p>
            <Highlights items={featured.highlights} />
            <DownloadButton report={featured} requested={Boolean(requested[featured.id])} onRequest={() => request(featured.id)} />
          </div>
        </article>
      </PageSection>

      <PageSection labelledBy="reports-heading" pad="top">
        <SectionHeading id="reports-heading" title="Earlier reports" body="Quarterly and thematic research notes, presented as samples." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((report) => (
            <li key={report.id}>
              <article aria-labelledby={`report-${report.id}`} className="flex h-full flex-col gap-5 rounded-[24px] bg-white p-3 pb-6 text-sx-ink">
                <div className="aspect-video overflow-hidden rounded-[16px] bg-sx-sand">
                  <img src={withBase(report.image.src)} alt={report.image.alt} width={960} height={540} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-3">
                  <p className="text-sm text-sx-ink/55">
                    <span className="font-semibold text-sx-brand">Sample report</span>
                    <span aria-hidden="true"> · </span>
                    {report.date} · {report.pages}
                  </p>
                  <h3 id={`report-${report.id}`} className="text-balance font-heading text-[1.375rem] font-semibold leading-snug tracking-[-0.015em]">
                    {report.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sx-ink/60">{report.desc}</p>
                  <Highlights items={report.highlights} />
                  <div className="mt-auto pt-3">
                    <DownloadButton report={report} requested={Boolean(requested[report.id])} onRequest={() => request(report.id)} />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-sx-ink/50">Report figures are illustrative samples, not a forecast or a promise of returns.</p>
      </PageSection>

      <CtaBand
        tone="brand"
        title="Invest with data-backed confidence."
        highlight="confidence"
        body="Put the research next to the sample listings, or read the guides first."
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Read the guides', href: '/learn' },
        ]}
      />
    </>
  )
}
