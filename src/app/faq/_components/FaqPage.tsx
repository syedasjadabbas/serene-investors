'use client'

import { useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Search, ThumbsDown, ThumbsUp, X } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion, type FaqItem } from '@/global/components/page/FaqAccordion'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { cn } from '@/global/lib/cn'
import { faqCategories, faqEntries, faqIntro, popularSearches, type FaqEntry } from '../_lib/faq'

type Feedback = 'yes' | 'no'

function FaqAnswer({ faq, feedback, onFeedback }: { faq: FaqEntry; feedback?: Feedback; onFeedback: (value: Feedback) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-sx-mint px-3 py-1 font-semibold text-sx-ink">{faq.category}</span>
        {faq.badge && <span className="rounded-full bg-sx-paper px-3 py-1 font-semibold text-sx-ink/70">{faq.badge}</span>}
      </p>
      <p className="font-semibold text-sx-ink">{faq.summary}</p>
      <ul className="flex flex-col gap-2.5 rounded-[14px] bg-sx-paper p-4 text-sm sm:text-base">
        {faq.bulletPoints.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-sx-brand" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 border-t border-sx-ink/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        {faq.actionLink ? (
          <Link
            href={faq.actionLink.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sx-forest underline-offset-4 hover:text-sx-brand hover:underline"
          >
            {faq.actionLink.label}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
        <div role="group" aria-label="Was this answer helpful?" className="flex items-center gap-2 text-xs text-sx-ink/55">
          <span aria-hidden="true">Was this helpful?</span>
          {(['yes', 'no'] as const).map((value) => {
            const Icon = value === 'yes' ? ThumbsUp : ThumbsDown
            const selected = feedback === value
            return (
              <button
                key={value}
                type="button"
                onClick={() => onFeedback(value)}
                aria-pressed={selected}
                aria-label={value === 'yes' ? 'Helpful' : 'Not helpful'}
                className={cn(
                  'flex size-8 items-center justify-center rounded-full transition-colors',
                  selected ? 'bg-sx-ink text-white' : 'bg-sx-paper text-sx-ink/60 hover:text-sx-ink',
                )}
              >
                <Icon size={13} aria-hidden="true" />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function FaqPage() {
  usePageMeta(
    'Serene Investors | Frequently asked questions',
    'Answers about fractional Dubai real estate, rental income, regulation and the UAE Golden Visa with Serene Investors.',
  )

  const searchId = useId()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({})

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    return faqEntries.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.bulletPoints.some((point) => point.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: faqEntries.length }
    for (const item of faqEntries) counts[item.category] = (counts[item.category] ?? 0) + 1
    return counts
  }, [])

  const accordionItems: FaqItem[] = filteredFaqs.map((faq) => ({
    q: faq.question,
    a: (
      <FaqAnswer
        faq={faq}
        feedback={feedback[faq.id]}
        onFeedback={(value) => setFeedback((prev) => ({ ...prev, [faq.id]: value }))}
      />
    ),
  }))

  const activeLabel = faqCategories.find((tab) => tab.id === selectedCategory)?.label ?? 'All questions'

  function reset() {
    setSearchQuery('')
    setSelectedCategory('All')
  }

  return (
    <>
      <PageHero eyebrow={faqIntro.eyebrow} title={faqIntro.heading} highlight={faqIntro.highlight} body={faqIntro.body}>
        <div className="mt-4 w-full max-w-2xl" role="search">
          <label htmlFor={searchId} className="sr-only">
            Search questions
          </label>
          <div className="relative">
            <Search size={20} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-sx-ink/40" />
            <input
              id={searchId}
              type="search"
              placeholder="Search questions, e.g. minimum investment"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-full bg-white py-4 pl-13 pr-14 text-base text-sx-ink outline-none ring-sx-brand/40 placeholder:text-sx-ink/40 focus-visible:ring-2 [&::-webkit-search-cancel-button]:hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-sx-paper text-sx-ink transition-colors hover:bg-sx-sand"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-sx-ink/55">Popular:</span>
            {popularSearches.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => {
                  setSearchQuery(chip.query)
                  setSelectedCategory('All')
                }}
                className="rounded-full bg-white px-3.5 py-1.5 font-medium text-sx-ink/75 transition-colors hover:bg-sx-sand hover:text-sx-ink"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      <PageSection width="narrow" pad="bottom" labelledBy="faq-results-heading">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-2">
          {faqCategories.map((tab) => {
            const Icon = tab.icon
            const selected = selectedCategory === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                aria-pressed={selected}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  selected ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink/75 hover:bg-sx-sand hover:text-sx-ink',
                )}
              >
                <Icon size={15} aria-hidden="true" className={selected ? 'text-sx-mint' : 'text-sx-brand'} />
                {tab.label}
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs tabular-nums',
                    selected ? 'bg-white/15 text-white' : 'bg-sx-paper text-sx-ink/60',
                  )}
                >
                  {categoryCounts[tab.id] ?? 0}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-10 flex items-baseline justify-between gap-4 border-b border-sx-ink/10 pb-4">
          <h2 id="faq-results-heading" className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink">
            {activeLabel}
          </h2>
          <p aria-live="polite" className="shrink-0 text-sm text-sx-ink/55">
            {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        <div className="mt-6">
          {filteredFaqs.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-[20px] bg-white p-10 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-sx-paper text-sx-ink/50">
                <Search size={20} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-sx-ink">No answers match “{searchQuery}”</h3>
              <p className="max-w-sm text-sm text-sx-ink/60">Try broader keywords like “rent”, “passport” or “SPV”.</p>
              <button
                type="button"
                onClick={reset}
                className="mt-2 rounded-full bg-sx-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <FaqAccordion key={`${selectedCategory}|${searchQuery}`} items={accordionItems} />
          )}
        </div>
      </PageSection>

      <CtaBand
        title="Still have questions about investing?"
        highlight="investing"
        body="Browse the properties, read the guides, or send us a message."
        actions={[
          { label: 'Browse properties', href: '/properties' },
          { label: 'Contact us', href: '/about#contact' },
        ]}
        image={{ src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower in the afternoon sun' }}
      />
    </>
  )
}
