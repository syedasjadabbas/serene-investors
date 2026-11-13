'use client'

import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Award, FileCheck, Landmark, Lock, Scale, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Card, Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { cn } from '@/global/lib/cn'

type Item = { icon: LucideIcon; tag: string; meta?: string; title: string; body: string }

type Topic = {
  id: 'dual' | 'ownership'
  label: string
  icon: LucideIcon
  summary: { icon: LucideIcon; eyebrow: string; title: string; body: string }
  items: Item[]
}

const TOPICS: Topic[] = [
  {
    id: 'dual',
    label: 'Dual regulated',
    icon: ShieldCheck,
    summary: {
      icon: Scale,
      eyebrow: 'Institutional oversight',
      title: 'Dual regulated',
      body: 'Invest with the assurance that we are dual regulated by leading regulators in the Middle East.',
    },
    items: [
      {
        icon: Landmark,
        tag: 'UAE · DIFC',
        meta: 'DFSA operator licence',
        title: 'Regulated by the DFSA in the UAE',
        body: 'An independent regulator of financial services conducted in or from the DIFC, a purpose-built financial free zone in Dubai. Serene Investors also holds an Islamic Finance Window endorsement.',
      },
      {
        icon: Award,
        tag: 'Saudi Arabia · CMA',
        meta: 'FinTech Lab permit 05-53-2023',
        title: 'Regulated by the CMA in Saudi Arabia',
        body: 'We are regulated by the Capital Markets Authority (CMA) in Saudi Arabia under its FinTech Lab and licensed to launch real estate investment fund opportunities in and from the Kingdom.',
      },
    ],
  },
  {
    id: 'ownership',
    label: 'Ownership protection',
    icon: FileCheck,
    summary: {
      icon: Lock,
      eyebrow: 'Legal titles',
      title: 'Ownership protection',
      body: 'Every investment comes with verifiable ownership documents, from share certificates and title deeds to fund unit certificates.',
    },
    items: [
      {
        icon: Landmark,
        tag: 'Dubai Land Department',
        title: 'Share certificates and title deeds in Dubai',
        body: 'Share certificates are backed by the Dubai International Financial Centre (DIFC), and title deeds are issued by the Dubai Land Department (DLD).',
      },
      {
        icon: Award,
        tag: 'Authorised administrators',
        title: 'Fund unit certificates in Saudi Arabia',
        body: 'Subscription certificates and fund unit registries are issued by professional licensed fund administrators in Saudi Arabia.',
      },
    ],
  },
]

/** /security: "Robustly regulated" with two tabs (regulators, ownership documents). */
export function SecurityRegulation() {
  const [active, setActive] = useState<Topic['id']>('dual')
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = TOPICS.length - 1
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1)
      : event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1)
      : event.key === 'Home' ? 0
      : event.key === 'End' ? last
      : null
    if (next === null) return
    event.preventDefault()
    setActive(TOPICS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <PageSection id="security" labelledBy="security-regulation" tone="white">
      <SectionHeading
        id="security-regulation"
        eyebrow="Safety never sleeps"
        title="Robustly regulated."
        highlight="regulated"
        align="center"
      />

      <div className="mt-8 flex justify-center">
        <div role="tablist" aria-label="Regulation topics" className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-sx-paper p-1">
          {TOPICS.map((topic, index) => {
            const selected = active === topic.id
            const Icon = topic.icon
            return (
              <button
                key={topic.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${topic.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${topic.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(topic.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 sm:text-base',
                  selected ? 'bg-sx-ink text-white' : 'text-sx-ink/60 hover:bg-white hover:text-sx-ink',
                )}
              >
                <Icon size={18} aria-hidden="true" className={selected ? 'text-sx-mint' : undefined} />
                {topic.label}
              </button>
            )
          })}
        </div>
      </div>

      {TOPICS.map((topic) => {
        const SummaryIcon = topic.summary.icon
        return (
          <div
            key={topic.id}
            role="tabpanel"
            id={`${baseId}-panel-${topic.id}`}
            aria-labelledby={`${baseId}-tab-${topic.id}`}
            hidden={active !== topic.id}
            tabIndex={0}
            className="mt-10 grid gap-3 rounded-[20px] sm:gap-4 lg:grid-cols-12"
          >
            <Card tone="forest" className="flex flex-col gap-5 lg:col-span-5">
              <span className="flex size-12 items-center justify-center rounded-[12px] bg-sx-mint text-sx-ink">
                <SummaryIcon size={24} aria-hidden="true" />
              </span>
              <Eyebrow tone="sand">{topic.summary.eyebrow}</Eyebrow>
              <h3 className="font-heading text-3xl font-bold tracking-[-0.025em]">{topic.summary.title}</h3>
              <p className="text-base leading-relaxed text-white/75">{topic.summary.body}</p>
            </Card>

            <ul className="flex flex-col gap-3 sm:gap-4 lg:col-span-7">
              {topic.items.map(({ icon: Icon, tag, meta, title, body }) => (
                <li key={title}>
                  <Card tone="paper" className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-2">
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                        <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-sx-ink">{tag}</span>
                        {meta && <span className="text-sx-ink/55">{meta}</span>}
                      </p>
                      <h4 className="font-heading text-xl font-semibold tracking-[-0.015em]">{title}</h4>
                      <p className="text-base leading-relaxed text-sx-ink/65">{body}</p>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </PageSection>
  )
}
