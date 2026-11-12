'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileCheck,
  FileText,
  Landmark,
  Layers,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { Button, ButtonLink } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { getInitials } from '@/components/layout/UserProfileDropdown'
import { cn } from '@/lib/cn'
import { withBase } from '@/lib/asset'

type Tab = 'holdings' | 'distributions' | 'documents'

const holdingsData = [
  {
    id: 'cedar-court',
    name: 'Cedar Court',
    location: 'Manchester, M20',
    type: 'Prime Residential',
    shares: 120,
    costBasis: 15000,
    currentValue: 16250,
    gainPct: 8.33,
    yieldPct: 7.2,
    monthlyIncome: 90,
    occupancy: '100%',
    status: 'Distributing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    link: '/properties/cedar-court',
  },
  {
    id: 'courtyard-residences',
    name: 'Courtyard Residences',
    location: 'London, SW1',
    type: 'Luxury Residential',
    shares: 160,
    costBasis: 20000,
    currentValue: 21800,
    gainPct: 9.0,
    yieldPct: 6.8,
    monthlyIncome: 113.33,
    occupancy: '100%',
    status: 'Distributing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    link: '/properties/courtyard-residences',
  },
  {
    id: 'mayfair-core-fund',
    name: 'Mayfair Core Fund',
    location: 'Central London',
    type: 'Diversified Fund',
    shares: 80,
    costBasis: 10000,
    currentValue: 10750,
    gainPct: 7.5,
    yieldPct: 7.8,
    monthlyIncome: 65,
    occupancy: '98%',
    status: 'Active Allocation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    link: '/funds',
  },
]

const distributionLedger = [
  {
    date: '15 Jul 2026',
    asset: 'Cedar Court',
    period: 'Q2 2026 Dividend',
    amount: '£270.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Jul 2026',
    asset: 'Courtyard Residences',
    period: 'Q2 2026 Dividend',
    amount: '£340.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Jul 2026',
    asset: 'Mayfair Core Fund',
    period: 'Q2 2026 Dividend',
    amount: '£195.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Apr 2026',
    asset: 'Cedar Court',
    period: 'Q1 2026 Dividend',
    amount: '£270.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Apr 2026',
    asset: 'Courtyard Residences',
    period: 'Q1 2026 Dividend',
    amount: '£340.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Apr 2026',
    asset: 'Mayfair Core Fund',
    period: 'Q1 2026 Dividend',
    amount: '£195.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Jan 2026',
    asset: 'Cedar Court',
    period: 'Q4 2025 Dividend',
    amount: '£270.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
  {
    date: '15 Jan 2026',
    asset: 'Courtyard Residences',
    period: 'Q4 2025 Dividend',
    amount: '£340.00',
    method: 'Direct Bank Transfer',
    status: 'Paid',
  },
]

const documentItems = [
  {
    id: 'tax-2025-26',
    title: 'Annual Tax Statement (2025/2026)',
    desc: 'Consolidated UK property income and tax breakdown for HMRC self-assessment reporting.',
    date: 'Generated 06 Apr 2026',
    size: '1.4 MB',
    type: 'PDF',
  },
  {
    id: 'title-deeds',
    title: 'Land Registry Title Deed Custody Certificates',
    desc: 'Official certificates evidencing fractional beneficial ownership in SPV property assets.',
    date: 'Updated 12 Jun 2026',
    size: '2.8 MB',
    type: 'PDF',
  },
  {
    id: 'q2-audit',
    title: 'Quarterly Independent Financial Audit (Q2 2026)',
    desc: 'Audited rental collection ledger, building reserve fund audit, and yield reconciliation.',
    date: 'Published 20 Jul 2026',
    size: '3.1 MB',
    type: 'PDF',
  },
  {
    id: 'fca-custody',
    title: 'FCA Regulated Custody & Client Money Assurance',
    desc: 'Tier-1 UK bank custodian segregation certificate protecting client funds.',
    date: 'Annual Renewal 2026',
    size: '920 KB',
    type: 'PDF',
  },
]

export function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<Tab>('holdings')
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null)

  const displayName = user?.name || 'Alexander Wright'
  const displayEmail = user?.email || 'alexander.wright@wealth.co.uk'
  const isInstitutional = user?.investorType === 'institutional'

  function handleDownload(title: string) {
    setDownloadNotice(`Downloading: ${title}`)
    setTimeout(() => setDownloadNotice(null), 3500)
  }

  return (
    <div className="min-h-screen bg-bg pb-24 pt-8 md:pt-12">
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8 lg:px-10">
        {/* Toast / Download Feedback */}
        {downloadNotice ? (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-primary/20 bg-surface px-4 py-3 shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300">
            <CheckCircle2 size={18} className="text-primary shrink-0" />
            <span className="text-xs font-semibold text-ink">{downloadNotice}</span>
          </div>
        ) : null}

        {/* Top Investor Header Banner */}
        <div className="flex flex-col gap-6 rounded-2xl border border-ink/[0.08] bg-surface p-6 shadow-xs sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-mono text-xl font-bold text-primary-ink shadow-sm">
              {getInitials(displayName)}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-ink sm:text-2xl">{displayName}</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-800">
                  <ShieldCheck size={11} />
                  {isInstitutional ? 'Institutional Partner' : 'Accredited Investor'}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted sm:text-sm">{displayEmail} • Client ID: #SER-94821</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/properties" className="min-h-10 text-xs px-4">
              <Building2 size={14} className="mr-1.5" />
              Explore New Holdings
            </ButtonLink>
            <Button
              variant="secondary"
              className="min-h-10 text-xs px-4"
              onClick={() => handleDownload('Consolidated Portfolio Summary')}
            >
              <Download size={14} className="mr-1.5" />
              Export Statement
            </Button>
          </div>
        </div>

        {/* 4 Core Financial Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Portfolio Value</span>
              <Wallet size={16} className="text-primary" />
            </div>
            <p className="mt-3 font-mono text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              £45,200.00
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
              <TrendingUp size={13} />
              <span>+£3,200 (+8.4% all-time growth)</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Yields Distributed</span>
              <Landmark size={16} className="text-primary" />
            </div>
            <p className="mt-3 font-mono text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              £3,180.00
            </p>
            <p className="mt-2 text-xs text-muted">Deposited into HSBC Account (•••• 4128)</p>
          </div>

          {/* Stat 3 */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs font-semibold uppercase tracking-wider">Active Assets</span>
              <Layers size={16} className="text-primary" />
            </div>
            <p className="mt-3 font-mono text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              3 Holdings
            </p>
            <p className="mt-2 text-xs font-medium text-emerald-700">100% Portfolio Occupancy</p>
          </div>

          {/* Stat 4 */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:shadow-md">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs font-semibold uppercase tracking-wider">Upcoming Dividend</span>
              <Calendar size={16} className="text-primary" />
            </div>
            <p className="mt-3 font-mono text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              £380.00
            </p>
            <div className="mt-2 flex items-center gap-1 text-xs text-muted">
              <Clock size={12} />
              <span>Scheduled 15 Oct 2026</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex border-b border-line">
          <button
            type="button"
            onClick={() => setActiveTab('holdings')}
            className={cn(
              'relative flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors cursor-pointer',
              activeTab === 'holdings'
                ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                : 'text-muted hover:text-ink',
            )}
          >
            <Building2 size={16} />
            <span>Active Holdings (3)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('distributions')}
            className={cn(
              'relative flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors cursor-pointer',
              activeTab === 'distributions'
                ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                : 'text-muted hover:text-ink',
            )}
          >
            <PieChart size={16} />
            <span>Distribution History</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={cn(
              'relative flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-colors cursor-pointer',
              activeTab === 'documents'
                ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                : 'text-muted hover:text-ink',
            )}
          >
            <FileText size={16} />
            <span>Tax & Legal Documents</span>
          </button>
        </div>

        {/* Tab Content 1: Holdings */}
        {activeTab === 'holdings' && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {holdingsData.map((holding) => (
              <div
                key={holding.id}
                className="group flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="relative overflow-hidden rounded-xl bg-bg-warm">
                    <img
                      src={withBase(holding.image)}
                      alt={holding.name}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-0.5 text-[0.68rem] font-bold text-ink shadow-xs backdrop-blur-md">
                      {holding.type}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.68rem] font-bold text-emerald-800 shadow-xs">
                      {holding.status}
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-lg font-bold text-ink">{holding.name}</h3>
                      <span className="font-mono text-xs font-semibold text-emerald-700">
                        {holding.yieldPct}% Net Yield
                      </span>
                    </div>
                    <p className="text-xs text-muted">{holding.location}</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-line bg-bg-warm/50 p-3 text-xs">
                    <div>
                      <span className="text-muted">Shares Owned</span>
                      <p className="mt-0.5 font-mono font-bold text-ink">{holding.shares} Shares</p>
                    </div>
                    <div>
                      <span className="text-muted">Current Value</span>
                      <p className="mt-0.5 font-mono font-bold text-ink">
                        £{holding.currentValue.toLocaleString('en-GB')}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted">Est. Monthly Dividend</span>
                      <p className="mt-0.5 font-mono font-bold text-primary">
                        £{holding.monthlyIncome.toFixed(2)}/mo
                      </p>
                    </div>
                    <div>
                      <span className="text-muted">Unrealized Gain</span>
                      <p className="mt-0.5 font-mono font-bold text-emerald-700">
                        +{holding.gainPct}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
                  <span className="inline-flex items-center gap-1 text-[0.7rem] text-muted">
                    <FileCheck size={13} className="text-primary" />
                    Deed Verified
                  </span>
                  <Link
                    href={holding.link}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-accent"
                  >
                    <span>View Asset</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Distribution History */}
        {activeTab === 'distributions' && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface shadow-xs">
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <div>
                <h3 className="text-base font-bold text-ink">Historical Quarterly Dividends</h3>
                <p className="text-xs text-muted">Complete ledger of rental distributions deposited to date.</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                Total Distributed: £3,180.00
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-bg-warm/60 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-6 py-3.5">Payment Date</th>
                    <th className="px-6 py-3.5">Asset / Holding</th>
                    <th className="px-6 py-3.5">Period</th>
                    <th className="px-6 py-3.5">Amount</th>
                    <th className="px-6 py-3.5">Method</th>
                    <th className="px-6 py-3.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-xs font-medium text-ink">
                  {distributionLedger.map((row, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-bg-warm/30">
                      <td className="px-6 py-4 font-mono text-muted">{row.date}</td>
                      <td className="px-6 py-4 font-semibold text-ink">{row.asset}</td>
                      <td className="px-6 py-4 text-muted">{row.period}</td>
                      <td className="px-6 py-4 font-mono font-bold text-primary">{row.amount}</td>
                      <td className="px-6 py-4 text-muted">{row.method}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.68rem] font-bold text-emerald-800">
                          <CheckCircle2 size={11} />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 3: Tax & Legal Documents */}
        {activeTab === 'documents' && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {documentItems.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-surface p-5 shadow-xs transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-ink">{doc.title}</h4>
                        <span className="font-mono text-[0.68rem] text-muted">{doc.date}</span>
                      </div>
                    </div>
                    <span className="rounded-md bg-bg-warm px-2 py-0.5 font-mono text-[0.68rem] font-bold text-muted">
                      {doc.type} • {doc.size}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted">{doc.desc}</p>
                </div>

                <div className="mt-5 flex items-center justify-end border-t border-line pt-3">
                  <button
                    type="button"
                    onClick={() => handleDownload(doc.title)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-bg-warm hover:text-primary cursor-pointer"
                  >
                    <Download size={13} />
                    <span>Download Official PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
