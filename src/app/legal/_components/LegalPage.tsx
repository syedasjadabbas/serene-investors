import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { Eyebrow } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { getLegalDoc, legalFrame } from '../_lib/legal'
import { LegalArticle } from './LegalArticle'
import { LegalClose } from './LegalClose'
import { LegalNotFound } from './LegalNotFound'
import { LegalToc } from './LegalToc'

/** Two columns: title and contents sticky on the left, the document in a white card on the right. */
export function LegalPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const doc = slug ? getLegalDoc(slug) : undefined

  usePageMeta(
    doc ? `SERENE INVESTORS | ${doc.title}` : 'SERENE INVESTORS | Legal note not found',
    doc
      ? `${doc.intro} SERENE INVESTORS is a fictional demonstration product.`
      : 'This sample legal note does not exist in the current demonstration.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!doc) {
    return <LegalNotFound />
  }

  return (
    <article key={doc.slug} aria-labelledby="legal-heading" className="px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
        <header className="flex flex-col gap-6 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pb-4">
          <div className="flex flex-col items-start gap-5">
            <Eyebrow>{legalFrame.label}</Eyebrow>
            <h1
              id="legal-heading"
              className="text-balance font-heading text-[2.5rem] font-bold leading-[1.02] tracking-[-0.035em] text-sx-ink sm:text-6xl"
            >
              {doc.title}
            </h1>
            <p className="text-base leading-relaxed text-sx-ink/65">{doc.intro}</p>
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
