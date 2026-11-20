import { useMemo, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Clock, PenLine } from 'lucide-react'
import { PillLink } from '@/global/components/ui/PillLink'
import { withBase } from '@/global/lib/asset'
import { headingIds, type Article } from '../_lib/article'
import { ArticleBlocks } from './ArticleBlocks'

/** Two columns: a sticky summary card with the contents on the left, the reading column on the right. */
export function ArticleBody({ article, image }: { article: Article; image?: string }) {
  const router = useRouter()
  const ids = useMemo(() => headingIds(article.blocks), [article.blocks])
  const contents = Array.from(ids.values())

  // Links inside the client's HTML are plain <a>s; move between our own pages without a full reload.
  function onClick(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-internal]')
    const to = anchor?.dataset.internal
    if (!to) return
    event.preventDefault()
    router.push(to)
  }

  return (
    <div className="px-4 pt-12 sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[320px_minmax(0,720px)] lg:justify-between lg:gap-16">
        <aside aria-labelledby="article-summary-heading" className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
          <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-7">
            <h2 id="article-summary-heading" className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">
              About this article
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-sx-ink/75">
              <li className="flex items-start gap-2.5">
                <PenLine size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                {article.author} · {article.dateLabel}
              </li>
              {article.readTime && (
                <li className="flex items-start gap-2.5">
                  <Clock size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                  {article.readTime}
                </li>
              )}
            </ul>
            {contents.length > 0 && (
              <nav aria-labelledby="article-toc-heading" className="border-t border-sx-ink/10 pt-5">
                <p id="article-toc-heading" className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sx-ink/60">
                  In this article
                </p>
                <ol className="flex flex-col gap-0.5">
                  {contents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-[12px] px-3 py-2 text-sm leading-snug text-sx-ink/70 transition-colors hover:bg-sx-paper hover:text-sx-ink focus-visible:outline-2 focus-visible:outline-sx-brand"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <PillLink href="/contact" className="w-full sm:w-fit">
              Ask the Serene Heights team
            </PillLink>
          </div>
        </aside>

        {/* Clicks are delegated to the links inside; the container itself is not interactive. */}
        {/* oxlint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div onClick={onClick} className="flex min-w-0 flex-col gap-6 break-words text-lg leading-[1.75] text-sx-ink/75">
          {image && (
            <div className="overflow-hidden rounded-[20px] bg-sx-sand">
              <img
                src={withBase(image)}
                alt=""
                width={1400}
                height={788}
                decoding="async"
                className="block aspect-video w-full object-cover"
              />
            </div>
          )}
          <ArticleBlocks blocks={article.blocks} headingIds={ids} />
        </div>
      </div>
    </div>
  )
}
