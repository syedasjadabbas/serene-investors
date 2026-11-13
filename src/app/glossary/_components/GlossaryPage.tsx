'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Building2, Check, Copy, Info, Search, X } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { cn } from '@/global/lib/cn'
import { glossaryCategories, glossaryTerms, type GlossaryItem } from '../_lib/glossary'

const RETURN_STACK = [
  { label: 'Net yield', value: '~6% – 9%', note: 'Rental income' },
  { label: 'Appreciation', value: '~3% – 6%', note: 'Gain on sale' },
  { label: 'Target IRR', value: '10% – 14%', note: 'Total return' },
]

function TermCard({ item, copied, onCopy, onTag }: { item: GlossaryItem; copied: boolean; onCopy: () => void; onTag: (tag: string) => void }) {
  const headingId = `term-${item.id}`
  return (
    <article aria-labelledby={headingId} className="flex h-full flex-col gap-4 rounded-[20px] bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col items-start gap-2">
          <span className="rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{item.category}</span>
          <h3 id={headingId} className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink">
            {item.term}
          </h3>
        </div>
        <button
          type="button"
          onClick={onCopy}
          aria-label={copied ? `Copied definition of ${item.term}` : `Copy definition of ${item.term}`}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sx-paper text-sx-ink/60 transition-colors hover:bg-sx-sand hover:text-sx-ink"
        >
          {copied ? <Check size={15} aria-hidden="true" className="text-sx-brand" /> : <Copy size={15} aria-hidden="true" />}
        </button>
      </div>

      <p className="font-semibold leading-snug text-sx-ink">{item.shortDef}</p>
      <p className="text-sm leading-relaxed text-sx-ink/65 sm:text-base">{item.fullDef}</p>

      {item.formulaOrRule && (
        <div className="flex items-start gap-2.5 rounded-[14px] bg-sx-paper p-4">
          <Info size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/50">Formula · standard</p>
            <p className="mt-1 font-mono text-sm font-semibold leading-snug text-sx-ink">{item.formulaOrRule}</p>
          </div>
        </div>
      )}

      <div className="rounded-[14px] bg-sx-forest p-4 text-white">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-sx-mint">
          <Building2 size={13} aria-hidden="true" />
          In practice
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/80">{item.example}</p>
      </div>

      <ul aria-label={`Tags for ${item.term}`} className="mt-auto flex flex-wrap gap-1.5 border-t border-sx-ink/10 pt-4">
        {item.tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onTag(tag)}
              aria-label={`Search for ${tag}`}
              className="rounded-full bg-sx-paper px-2.5 py-1 text-xs font-medium text-sx-ink/65 transition-colors hover:bg-sx-sand hover:text-sx-ink"
            >
              #{tag}
            </button>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function GlossaryPage() {
  usePageMeta(
    'Serene Investors | Investor glossary',
    'Plain definitions of the returns, legal structures, regulators and metrics behind fractional property investing.',
  )

  const searchId = useId()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeLetter, setActiveLetter] = useState('ALL')
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const alphabet = useMemo(() => {
    const letters = new Set(glossaryTerms.map((term) => term.term[0].toUpperCase()))
    return ['ALL', ...Array.from(letters).sort()]
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return glossaryTerms.filter((item) => {
      const matchesSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.shortDef.toLowerCase().includes(q) ||
        item.fullDef.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesLetter = activeLetter === 'ALL' || item.term[0].toUpperCase() === activeLetter
      return matchesSearch && matchesCategory && matchesLetter
    })
  }, [search, selectedCategory, activeLetter])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: glossaryTerms.length }
    for (const item of glossaryTerms) counts[item.category] = (counts[item.category] ?? 0) + 1
    return counts
  }, [])

  function copyDefinition(item: GlossaryItem) {
    const text = `${item.term} (${item.category}):\n${item.fullDef}\n\nExample: ${item.example}`
    void navigator.clipboard?.writeText(text)
    setCopiedId(item.id)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopiedId(null), 2000)
  }

  function resetFilters() {
    setSearch('')
    setSelectedCategory('All')
    setActiveLetter('ALL')
  }

  return (
    <>
      <PageHero
        eyebrow="Investor glossary"
        title="Demystify real estate investing."
        highlight="real estate investing"
        body="The formulas, legal ownership structures and regulatory terms behind fractional property investing, in plain language."
      >
        <div className="mt-4 w-full max-w-2xl" role="search">
          <label htmlFor={searchId} className="sr-only">
            Search the glossary
          </label>
          <div className="relative">
            <Search size={20} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sx-ink/40" />
            <input
              id={searchId}
              type="search"
              placeholder="Search terms, e.g. IRR, SPV, yield"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-full bg-white py-4 pl-13 pr-14 text-base text-sx-ink outline-none ring-sx-brand/40 placeholder:text-sx-ink/40 focus-visible:ring-2 [&::-webkit-search-cancel-button]:hidden"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-sx-paper text-sx-ink transition-colors hover:bg-sx-sand"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-2">
          {glossaryCategories.map((category) => {
            const selected = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setSelectedCategory(category)
                  setActiveLetter('ALL')
                }}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  selected ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink/75 hover:bg-sx-sand hover:text-sx-ink',
                )}
              >
                {category}
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs tabular-nums',
                    selected ? 'bg-white/15 text-white' : 'bg-sx-paper text-sx-ink/60',
                  )}
                >
                  {categoryCounts[category] ?? 0}
                </span>
              </button>
            )
          })}
        </div>
      </PageHero>

      <PageSection label="Key concept" pad="none">
        <div className="grid gap-6 rounded-[24px] bg-sx-forest p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex flex-col items-start gap-3">
            <span className="rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">Key concept</span>
            <h2 className="font-heading text-2xl font-bold tracking-[-0.02em] sm:text-3xl">Net yield vs. capital appreciation vs. IRR</h2>
            <p className="text-base leading-relaxed text-white/75">
              Property returns come from two streams: rental income while you hold, and capital appreciation when the property sells.
              Together they make up the total annualised return, or IRR.
            </p>
          </div>
          <div>
            <ol className="grid gap-2 sm:grid-cols-3">
              {RETURN_STACK.map((item, index) => (
                <li
                  key={item.label}
                  className={cn('flex flex-col gap-1 rounded-[16px] p-4', index === 2 ? 'bg-sx-mint text-sx-ink' : 'bg-white/10')}
                >
                  <span className={cn('text-xs font-semibold', index === 2 ? 'text-sx-forest' : 'text-sx-mint')}>{item.label}</span>
                  <span className="font-heading text-2xl font-bold tracking-[-0.02em]">{item.value}</span>
                  <span className={cn('text-xs', index === 2 ? 'text-sx-ink/70' : 'text-white/60')}>{item.note}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-white/50">Illustrative ranges, not a forecast or a promise of returns.</p>
          </div>
        </div>
      </PageSection>

      <PageSection labelledBy="glossary-terms-heading">
        <h2 id="glossary-terms-heading" className="sr-only">
          Terms
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sx-ink/10 pb-4">
          <div role="group" aria-label="Filter by first letter" className="flex flex-wrap gap-1.5">
            {alphabet.map((letter) => {
              const active = activeLetter === letter
              return (
                <button
                  key={letter}
                  type="button"
                  aria-pressed={active}
                  aria-label={letter === 'ALL' ? 'All letters' : `Terms starting with ${letter}`}
                  onClick={() => setActiveLetter(letter)}
                  className={cn(
                    'flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-sm font-semibold transition-colors',
                    active ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink/65 hover:bg-sx-sand hover:text-sx-ink',
                  )}
                >
                  {letter === 'ALL' ? 'All' : letter}
                </button>
              )
            })}
          </div>
          <p aria-live="polite" className="text-sm text-sx-ink/55">
            Showing <span className="font-semibold text-sx-ink">{filtered.length}</span> of {glossaryTerms.length} terms
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-[20px] bg-white p-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-sx-paper text-sx-ink/50">
              <Search size={20} aria-hidden="true" />
            </span>
            <h3 className="font-heading text-xl font-semibold text-sx-ink">
              {search ? `No definitions match “${search}”` : 'No definitions match these filters'}
            </h3>
            <p className="max-w-md text-sm text-sx-ink/60">Try common terms like IRR, yield, SPV, DFSA or Golden Visa.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 rounded-full bg-sx-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {filtered.map((item) => (
              <li key={item.id}>
                <TermCard
                  item={item}
                  copied={copiedId === item.id}
                  onCopy={() => copyDefinition(item)}
                  onTag={(tag) => {
                    setSearch(tag)
                    setSelectedCategory('All')
                    setActiveLetter('ALL')
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </PageSection>

      <CtaBand
        title="Put what you’ve learned to work."
        highlight="to work"
        body="Review appraisals, title deeds and projected net yields on the properties listed now."
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Read the FAQs', href: '/faq' },
        ]}
        image={{ src: '/images/properties/marina-tower.jpg', alt: 'A residential tower at Dubai Marina' }}
      />
    </>
  )
}
