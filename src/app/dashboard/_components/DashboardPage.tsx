'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Download, ShieldCheck } from 'lucide-react'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { getInitials } from '@/global/components/layout/UserProfileDropdown'
import { PillLink } from '@/global/components/ui/PillLink'
import { useAuth } from '@/global/stores/auth'
import { portfolioStats } from '../_lib/portfolio'
import { DashboardTabs } from './DashboardTabs'

export function DashboardPage() {
  const { user } = useAuth()
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null)
  const noticeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const displayName = user?.name || 'Alexander Wright'
  const firstName = displayName.trim().split(/\s+/)[0]
  const displayEmail = user?.email || 'alexander.wright@wealth.co.uk'
  const isInstitutional = user?.investorType === 'institutional'

  useEffect(() => () => clearTimeout(noticeTimer.current), [])

  function handleDownload(title: string) {
    setDownloadNotice(`Downloading: ${title}`)
    clearTimeout(noticeTimer.current)
    noticeTimer.current = setTimeout(() => setDownloadNotice(null), 3500)
  }

  return (
    <>
      {/* Welcome header: the page's only h1. */}
      <section className="px-4 pt-6 sm:px-8 sm:pt-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 rounded-[24px] bg-white p-6 text-sx-ink sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex min-w-0 flex-col items-start gap-5">
            <Eyebrow tone="sand">Sample portfolio</Eyebrow>
            <div className="flex min-w-0 items-center gap-4">
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-full bg-sx-forest font-heading text-lg font-bold text-sx-mint sm:size-16"
              >
                {getInitials(displayName)}
              </span>
              <h1 className="min-w-0 break-words font-heading text-3xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Welcome back, <span className="text-sx-brand">{firstName}</span>
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-sx-ink/60">
              <span className="break-all">{displayEmail}</span>
              <span>Client ID #SER-94821</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">
                <ShieldCheck size={13} aria-hidden="true" />
                {isInstitutional ? 'Institutional Partner' : 'Accredited Investor'}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <PillLink href="/properties">Explore new holdings</PillLink>
            <button
              type="button"
              onClick={() => handleDownload('Consolidated Portfolio Summary')}
              className="inline-flex items-center gap-2 rounded-full bg-sx-paper px-5 py-2.5 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand sm:text-base"
            >
              <Download size={16} aria-hidden="true" />
              Export statement
            </button>
          </div>
        </div>
      </section>

      <PageSection label="Portfolio summary" pad="none" className="pt-4">
        <StatCards items={portfolioStats} caption="Sample figures for demonstration. Not real holdings or payments." />
      </PageSection>

      <PageSection labelledBy="portfolio-details" pad="bottom" className="pt-14 sm:pt-20">
        <SectionHeading id="portfolio-details" title="Your portfolio" highlight="portfolio" className="mb-8" />
        <DashboardTabs onDownload={handleDownload} />
      </PageSection>

      {/* Download feedback: the live region stays mounted so each message is announced. */}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-4 bottom-6 z-50 flex justify-end sm:inset-x-auto sm:right-6">
        {downloadNotice && (
          <p className="flex items-center gap-2.5 rounded-full bg-sx-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
            <CheckCircle2 size={18} aria-hidden="true" className="shrink-0 text-sx-mint" />
            {downloadNotice}
          </p>
        )}
      </div>
    </>
  )
}
