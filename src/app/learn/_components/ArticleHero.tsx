import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import type { Article } from '../_lib/article'

/**
 * Dark title band at the top of an article. It tucks up under the floating navbar (the shell pads
 * inner pages by 6rem) and ends in rounded bottom corners over the paper sheet.
 */
export function ArticleHero({ article }: { article: Article }) {
  return (
    <header className="-mt-24 rounded-b-[30px] bg-sx-ink px-4 pb-16 pt-36 text-white sm:px-8 sm:pb-24 sm:pt-44 lg:min-h-[500px]">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-6">
        <Link
          href="/learn"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-white/75 transition-colors hover:text-sx-mint focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sx-mint"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          All articles
        </Link>
        <span className="rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{article.category}</span>
        <h1 className="max-w-4xl text-balance break-words font-heading text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
          {article.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{article.description}</p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
          <time dateTime={article.date}>{article.dateLabel}</time>
          <span aria-hidden="true">·</span>
          <span>{article.author}</span>
          {article.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                {article.readTime}
              </span>
            </>
          )}
        </p>
      </div>
    </header>
  )
}
