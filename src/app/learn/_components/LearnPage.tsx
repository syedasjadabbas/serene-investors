'use client'

import { useMemo, useState } from 'react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { cn } from '@/global/lib/cn'
import { journal, journalCategories, journalIntro } from '../_lib/journal'
import { JournalCard } from './JournalCard'
import { LearnFeatured } from './LearnFeatured'

const ALL = 'All'

// Journal hub (Pattern C in docs/INNER-PAGE-PATTERNS.md): centred header → tall cards for the latest
// Investment articles → every article in a filterable grid → green band.
export function LearnPage() {
  usePageMeta('Serene Investors | Journal', journalIntro.body)

  const [category, setCategory] = useState(ALL)

  const counts = useMemo(() => {
    const result: Record<string, number> = { [ALL]: journal.length }
    for (const entry of journal) result[entry.category] = (result[entry.category] ?? 0) + 1
    return result
  }, [])

  const shown = category === ALL ? journal : journal.filter((entry) => entry.category === category)

  return (
    <>
      <PageHeader
        align="center"
        eyebrow={journalIntro.eyebrow}
        title={journalIntro.heading}
        highlight={journalIntro.highlight}
        body={journalIntro.body}
      />

      <LearnFeatured />

      <PageSection labelledBy="learn-all-heading" pad="top">
        <SectionHeading
          id="learn-all-heading"
          title="All articles"
          body={`${journal.length} articles from the Serene Heights team, newest first.`}
        />

        <div role="group" aria-label="Filter articles by category" className="mt-8 flex flex-wrap gap-2">
          {[ALL, ...journalCategories].map((item) => {
            const selected = category === item
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(item)}
                className={cn(
                  'inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand',
                  selected ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink/75 hover:bg-sx-sand hover:text-sx-ink',
                )}
              >
                {item === ALL ? 'All articles' : item}
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs tabular-nums',
                    selected ? 'bg-white/15 text-white' : 'bg-sx-paper text-sx-ink/60',
                  )}
                >
                  {counts[item] ?? 0}
                </span>
              </button>
            )
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {shown.length} {shown.length === 1 ? 'article' : 'articles'}
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((entry) => (
            <li key={entry.slug}>
              <JournalCard entry={entry} />
            </li>
          ))}
        </ul>
      </PageSection>

      <CtaBand
        tone="brand"
        title="Ready to look at the numbers?"
        highlight="numbers"
        body="See the published payment plans, or ask the team about a Smart Property Unit or a hotel apartment."
        actions={[
          { label: 'Payment plans', href: '/calculator' },
          { label: 'Contact us', href: '/contact' },
        ]}
      />
    </>
  )
}
