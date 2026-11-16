import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { CtaBand } from '@/global/components/page/CtaBand'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { getLearnGuide } from '../_lib/learn'
import { LearnArticleBody } from './LearnArticleBody'
import { LearnArticleHero } from './LearnArticleHero'
import { LearnArticleRelated } from './LearnArticleRelated'
import { LearnNotFound } from './LearnNotFound'

export function LearnArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const guide = slug ? getLearnGuide(slug) : undefined

  usePageMeta(
    guide ? `Serene Investors | ${guide.title}` : 'Serene Investors | Guide not found',
    guide
      ? `${guide.description} Sample educational content for the Serene Investors demonstration.`
      : 'This sample guide does not exist in the current Learn collection.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!guide) {
    return <LearnNotFound />
  }

  return (
    <article key={guide.slug}>
      <LearnArticleHero guide={guide} />
      <LearnArticleBody guide={guide} />
      <LearnArticleRelated guide={guide} />
      <CtaBand
        tone="brand"
        title="Continue on the platform."
        highlight="platform"
        body="Open a sample catalogue, or walk through the four-step demonstration."
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'How it works', href: '/how-it-works' },
        ]}
      />
    </article>
  )
}
