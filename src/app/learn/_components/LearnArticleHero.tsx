import { PageHero } from '@/global/components/page/PageHero'
import type { LearnGuide } from '@/global/types/learn'
import { withBase } from '@/global/lib/asset'

export function LearnArticleHero({ guide }: { guide: LearnGuide }) {
  return (
    <PageHero
      eyebrow={guide.category}
      title={guide.title}
      body={
        <>
          <p>{guide.description}</p>
          <p className="mt-3 text-sm font-medium text-sx-ink/50">Illustrative sample</p>
        </>
      }
      media={
        <img
          src={withBase(guide.image)}
          alt={guide.imageAlt}
          width={1600}
          height={1000}
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
        />
      }
    />
  )
}
