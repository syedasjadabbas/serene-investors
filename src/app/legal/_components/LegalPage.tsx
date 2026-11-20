'use client'

import { useLayoutEffect } from 'react'
import { Eyebrow } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { getLegalDoc, legalFrame } from '../_lib/legal'
import { LegalArticle } from './LegalArticle'
import { LegalClose } from './LegalClose'
import { LegalToc } from './LegalToc'

/** Two columns: title and contents sticky on the left, the document in a white card on the right. */
export function LegalPage({ slug }: { slug: string }) {
  const doc = getLegalDoc(slug)

  usePageMeta(
    doc ? `Serene Investors | ${doc.title}` : 'Serene Investors | Legal',
    doc ? doc.intro : '',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!doc) {
    return null
  }

  return (
    <article key={doc.slug} aria-labelledby="legal-heading" className="px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[minmax(0,350px)_minmax(0,1fr)] lg:gap-16">
        <header className="flex flex-col gap-6 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pb-4">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>{legalFrame.label}</Eyebrow>
            <h1
              id="legal-heading"
              className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-sx-ink sm:text-[2.75rem]"
            >
              {doc.title}
            </h1>
            <p className="text-base leading-relaxed text-sx-ink/60 sm:text-lg">{doc.intro}</p>
            {doc.updated && (
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/55">
                Last updated {doc.updated}
              </p>
            )}
          </div>
          <LegalToc doc={doc} />
        </header>

        <div className="flex min-w-0 flex-col gap-6">
          <LegalArticle sections={doc.sections} />
          <LegalClose doc={doc} />
        </div>
      </div>
    </article>
  )
}
