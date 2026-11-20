'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import Link from 'next/link'
import { Download, FileText } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { pkr } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { documentItems, holdingsData, holdingTotals, projection } from '../_lib/portfolio'

const TABS = [
  { id: 'holdings', label: `Holdings (${holdingsData.length})` },
  { id: 'schedule', label: 'Payment schedule' },
  { id: 'projection', label: 'Projection' },
  { id: 'documents', label: 'Documents' },
] as const

type Tab = (typeof TABS)[number]['id']

/** Holdings / payment schedule / projection / documents in an ARIA tab set (arrow keys, Home and End move between tabs). */
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
          {tab.id === 'schedule' && <Schedule />}
          {tab.id === 'projection' && <Projection />}
          {tab.id === 'documents' && <Documents onDownload={onDownload} />}
        </div>
      ))}
    </div>
  )
}

function Holdings() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {holdingsData.map((holding) => {
        const totals = holdingTotals(holding)
        return (
          <li key={holding.id} className="flex flex-col gap-5 rounded-[20px] bg-white p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[14px] bg-sx-paper">
              <img src={withBase(holding.image)} alt={holding.imageAlt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">{holding.type}</span>
              <span className="absolute right-3 top-3 rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{holding.status}</span>
            </div>

            <div className="flex items-start justify-between gap-3 px-1">
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">{holding.name}</h3>
                <p className="text-sm text-sx-ink/60">{holding.location}</p>
              </div>
              <span className="shrink-0 rounded-full bg-sx-paper px-3 py-1 text-xs font-semibold text-sx-forest">
                {holding.units} {holding.units === 1 ? 'unit' : 'units'}
              </span>
            </div>

            <dl className="grid grid-cols-1 gap-x-4 gap-y-3 rounded-[14px] bg-sx-paper p-4 text-sm min-[420px]:grid-cols-2">
              <Metric label="Total price" value={pkr(totals.total)} />
              <Metric label="Area" value={`${holding.plan.area * holding.units} sq ft`} />
              <Metric label="Down payment (30%)" value={pkr(totals.down)} />
              <Metric label="Monthly × 36" value={pkr(totals.monthly)} accent />
            </dl>

            <Link
              href={holding.link}
              className="group mt-auto flex items-center justify-between rounded-full bg-sx-paper py-1.5 pl-5 pr-1.5 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand"
            >
              About {holding.linkLabel}
              <ArrowCircle size="sm" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className="text-sx-ink/60">{label}</dt>
      <dd className={cn('mt-0.5 font-heading text-base font-bold', accent ? 'text-sx-brand' : 'text-sx-ink')}>{value}</dd>
    </div>
  )
}

function Schedule() {
  const rows = holdingsData.map((holding) => ({ holding, totals: holdingTotals(holding) }))
  const sum = (key: 'total' | 'down' | 'monthly') => rows.reduce((acc, row) => acc + row.totals[key], 0)

  return (
    <div className="overflow-hidden rounded-[20px] bg-white">
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">Instalment plan</h3>
          <p className="text-sm text-sx-ink/60">30% down payment, then 36 monthly instalments, as published by Serene Heights.</p>
        </div>
        <span className="w-fit rounded-full bg-sx-mint px-3 py-1 text-sm font-semibold text-sx-ink">Monthly: {pkr(sum('monthly'))}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">Sample payment schedule</caption>
          <thead className="bg-sx-paper text-xs font-semibold text-sx-ink/60">
            <tr>
              <th scope="col" className="px-5 py-3 sm:px-7">Holding</th>
              <th scope="col" className="px-5 py-3">Units</th>
              <th scope="col" className="px-5 py-3">Down payment (30%)</th>
              <th scope="col" className="px-5 py-3">Monthly × 36</th>
              <th scope="col" className="px-5 py-3 text-right sm:px-7">Total price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sx-ink/[0.07] text-sx-ink">
            {rows.map(({ holding, totals }) => (
              <tr key={holding.id}>
                <th scope="row" className="px-5 py-4 font-semibold sm:px-7">{holding.name}</th>
                <td className="px-5 py-4 text-sx-ink/60">{holding.units}</td>
                <td className="px-5 py-4">{pkr(totals.down)}</td>
                <td className="px-5 py-4 font-semibold text-sx-forest">{pkr(totals.monthly)}</td>
                <td className="px-5 py-4 text-right sm:px-7">{pkr(totals.total)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-sx-paper font-semibold text-sx-ink">
            <tr>
              <th scope="row" className="px-5 py-4 sm:px-7">Total</th>
              <td className="px-5 py-4" />
              <td className="px-5 py-4">{pkr(sum('down'))}</td>
              <td className="px-5 py-4 text-sx-forest">{pkr(sum('monthly'))}</td>
              <td className="px-5 py-4 text-right sm:px-7">{pkr(sum('total'))}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

function Projection() {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5 sm:p-7">
      <div>
        <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">Smart Property Unit projection</h3>
        <p className="text-sm text-sx-ink/60">For one unit, as published by Serene Heights.</p>
      </div>
      <dl className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
        {projection.rows.map((row) => (
          <div key={row.label} className="rounded-[14px] bg-sx-paper p-4">
            <dt className="text-sm text-sx-ink/60">{row.label}</dt>
            <dd className="mt-1 font-heading text-xl font-bold text-sx-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-xs text-sx-ink/60">{projection.note}</p>
    </div>
  )
}

function Documents({ onDownload }: { onDownload: (title: string) => void }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {documentItems.map((doc) => (
        <li key={doc.id} className="flex flex-col gap-4 rounded-[20px] bg-white p-6">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint">
              <FileText size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.01em] text-sx-ink">{doc.title}</h3>
              <p className="mt-1 text-xs text-sx-ink/60">Sample document</p>
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
