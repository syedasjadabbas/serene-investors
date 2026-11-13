'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, Download, FileText } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { distributionLedger, distributionTotal, documentItems, holdingsData } from '../_lib/portfolio'

const TABS = [
  { id: 'holdings', label: `Holdings (${holdingsData.length})` },
  { id: 'distributions', label: 'Distributions' },
  { id: 'documents', label: 'Documents' },
] as const

type Tab = (typeof TABS)[number]['id']

/** Holdings / distributions / documents in an ARIA tab set (arrow keys, Home and End move between tabs). */
export function DashboardTabs({ onDownload }: { onDownload: (title: string) => void }) {
  const [active, setActive] = useState<Tab>('holdings')
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = TABS.length - 1
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null
    if (next === null) return
    event.preventDefault()
    setActive(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label="Portfolio details" className="inline-flex gap-1 rounded-full bg-white p-1">
          {TABS.map((tab, index) => {
            const selected = active === tab.id
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5',
                  selected ? 'bg-sx-ink text-white' : 'text-sx-ink/60 hover:bg-sx-paper hover:text-sx-ink',
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={active !== tab.id}
          tabIndex={0}
          className="mt-6 rounded-[20px]"
        >
          {tab.id === 'holdings' && <Holdings />}
          {tab.id === 'distributions' && <Distributions />}
          {tab.id === 'documents' && <Documents onDownload={onDownload} />}
        </div>
      ))}
    </div>
  )
}

function Holdings() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {holdingsData.map((holding) => (
        <li key={holding.id} className="flex flex-col gap-5 rounded-[20px] bg-white p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-[14px] bg-sx-paper">
            <img src={withBase(holding.image)} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">{holding.type}</span>
            <span className="absolute right-3 top-3 rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{holding.status}</span>
          </div>

          <div className="flex items-start justify-between gap-3 px-1">
            <div>
              <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">{holding.name}</h3>
              <p className="text-sm text-sx-ink/55">{holding.location}</p>
            </div>
            <span className="shrink-0 rounded-full bg-sx-paper px-3 py-1 text-xs font-semibold text-sx-forest">
              {holding.yieldPct}% net yield
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-[14px] bg-sx-paper p-4 text-sm">
            <Metric label="Shares owned" value={`${holding.shares}`} />
            <Metric label="Current value" value={`£${holding.currentValue.toLocaleString('en-GB')}`} />
            <Metric label="Est. monthly income" value={`£${holding.monthlyIncome.toFixed(2)}`} />
            <Metric label="Unrealised gain" value={`+${holding.gainPct}%`} accent />
          </dl>

          <Link
            href={holding.link}
            className="group mt-auto flex items-center justify-between rounded-full bg-sx-paper py-1.5 pl-5 pr-1.5 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand"
          >
            View {holding.name}
            <ArrowCircle size="sm" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className="text-sx-ink/55">{label}</dt>
      <dd className={cn('mt-0.5 font-heading text-base font-bold', accent ? 'text-sx-brand' : 'text-sx-ink')}>{value}</dd>
    </div>
  )
}

function Distributions() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-white">
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">Quarterly rental payouts</h3>
          <p className="text-sm text-sx-ink/55">Every rental distribution paid to date.</p>
        </div>
        <span className="w-fit rounded-full bg-sx-mint px-3 py-1 text-sm font-semibold text-sx-ink">Total paid: {distributionTotal}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <caption className="sr-only">Sample distribution history</caption>
          <thead className="bg-sx-paper text-xs font-semibold text-sx-ink/55">
            <tr>
              <th scope="col" className="px-5 py-3 sm:px-7">Payment date</th>
              <th scope="col" className="px-5 py-3">Holding</th>
              <th scope="col" className="px-5 py-3">Period</th>
              <th scope="col" className="px-5 py-3">Amount</th>
              <th scope="col" className="px-5 py-3">Method</th>
              <th scope="col" className="px-5 py-3 text-right sm:px-7">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sx-ink/[0.07] text-sx-ink">
            {distributionLedger.map((row) => (
              <tr key={`${row.date}-${row.asset}`}>
                <td className="px-5 py-4 text-sx-ink/60 sm:px-7">{row.date}</td>
                <td className="px-5 py-4 font-semibold">{row.asset}</td>
                <td className="px-5 py-4 text-sx-ink/60">{row.period}</td>
                <td className="px-5 py-4 font-semibold text-sx-forest">{row.amount}</td>
                <td className="px-5 py-4 text-sx-ink/60">{row.method}</td>
                <td className="px-5 py-4 text-right sm:px-7">
                  <span className="inline-flex items-center gap-1 rounded-full bg-sx-mint/50 px-2.5 py-0.5 text-xs font-semibold text-sx-forest">
                    <CheckCircle2 size={12} aria-hidden="true" />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Documents({ onDownload }: { onDownload: (title: string) => void }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {documentItems.map((doc) => (
        <li key={doc.id} className="flex flex-col gap-4 rounded-[20px] bg-white p-6">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint">
              <FileText size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.01em] text-sx-ink">{doc.title}</h3>
              <p className="mt-1 text-xs text-sx-ink/50">
                {doc.date} · {doc.type} · {doc.size}
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-sx-ink/65">{doc.desc}</p>
          <button
            type="button"
            onClick={() => onDownload(doc.title)}
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-sx-paper px-4 py-2 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand"
          >
            <Download size={15} aria-hidden="true" />
            Download PDF<span className="sr-only">: {doc.title}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
