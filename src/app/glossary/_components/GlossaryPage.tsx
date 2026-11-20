'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Building2, Check, Copy, Search, X } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { cn } from '@/global/lib/cn'
import { glossaryCategories, glossaryTerms, type GlossaryItem } from '../_lib/glossary'

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

      <p className="text-base leading-relaxed text-sx-ink/80">{item.definition}</p>

      {item.atSerene && (
        <div className="rounded-[14px] bg-sx-forest p-4 text-white">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-sx-mint">
            <Building2 size={13} aria-hidden="true" />
            At Serene Heights
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/85">{item.atSerene}</p>
        </div>
      )}

      <ul aria-label={`Tags for ${item.term}`} className="mt-auto flex flex-wrap gap-1.5 border-t border-sx-ink/10 pt-4">
        {item.tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onTag(tag)}
              aria-label={`Search for ${tag}`}
              className="inline-flex min-h-8 items-center rounded-full bg-sx-paper px-3 py-1.5 text-xs font-medium text-sx-ink/65 transition-colors hover:bg-sx-sand hover:text-sx-ink"
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
    'Serene Investors | Glossary',
    'Plain definitions of the terms used at Serene Heights: Smart Property Units, payment plans, owner benefits and the two projects.',
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
        item.definition.toLowerCase().includes(q) ||
        (item.atSerene ?? '').toLowerCase().includes(q) ||
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
    const text = item.atSerene ? `${item.term}: ${item.definition}\n\nAt Serene Heights: ${item.atSerene}` : `${item.term}: ${item.definition}`
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
      <PageHeader
        align="center"
        eyebrow="Glossary"
        title="The words behind Serene Heights."
        highlight="Serene Heights"
        body="Smart Property Units, payment plans, owner benefits and the two projects, in plain language."
        aside={
          <div className="flex w-[min(42rem,calc(100vw-2rem))] flex-col gap-5">
          <div role="search">
            <label htmlFor={searchId} className="sr-only">
              Search the glossary
            </label>
            <div className="relative">
              <Search size={20} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sx-ink/60" />
              <input
                id={searchId}
                type="search"
                placeholder="Search terms, e.g. instalment, BHK, kanal"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-full bg-white py-4 pl-13 pr-14 text-base text-sx-ink outline-none ring-sx-brand/40 placeholder:text-sx-ink/50 focus-visible:ring-2 [&::-webkit-search-cancel-button]:hidden"
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
          </div>
        }
      />

      <PageSection labelledBy="glossary-terms-heading" pad="none">
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
          <p aria-live="polite" className="text-sm text-sx-ink/60">
            Showing <span className="font-semibold text-sx-ink">{filtered.length}</span> of {glossaryTerms.length} terms
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-[20px] bg-white p-10 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-sx-paper text-sx-ink/60">
              <Search size={20} aria-hidden="true" />
            </span>
            <h3 className="font-heading text-xl font-semibold text-sx-ink">
              {search ? `No definitions match “${search}”` : 'No definitions match these filters'}
            </h3>
            <p className="max-w-md text-sm text-sx-ink/60">Try terms like Smart Property Unit, payment plan or owner stays.</p>
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
        tone="brand"
        title="See the terms in practice."
        highlight="in practice"
        body="Look at the published payment plans, or read the answers to common questions."
        actions={[
          { label: 'Payment plans', href: '/calculator' },
          { label: 'Read the FAQs', href: '/faq' },
        ]}
      />
    </>
  )
}
