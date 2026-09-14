import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LegalArticle } from '@/components/sections/legal/LegalArticle'
import { LegalClose } from '@/components/sections/legal/LegalClose'
import { LegalHero } from '@/components/sections/legal/LegalHero'
import { LegalNotFound } from '@/components/sections/legal/LegalNotFound'
import { LegalToc } from '@/components/sections/legal/LegalToc'
import { getLegalDoc } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ScrollTrigger } from '@/lib/gsap'

export function LegalPage() {
  const { slug } = useParams()
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
