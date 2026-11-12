import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { LegalArticle } from './LegalArticle'
import { LegalClose } from './LegalClose'
import { LegalHero } from './LegalHero'
import { LegalNotFound } from './LegalNotFound'
import { LegalToc } from './LegalToc'
import { getLegalDoc } from '../_lib/legal'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'

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
    <article key={doc.slug} className="legal-page">
      <LegalHero doc={doc} />
      <div className="legal-body">
        <div className="legal-body__layout mx-auto max-w-[var(--container-wide)]">
          <LegalToc doc={doc} />
          <div className="legal-body__main">
            <LegalArticle sections={doc.sections} />
            <LegalClose doc={doc} />
          </div>
        </div>
      </div>
    </article>
  )
}
