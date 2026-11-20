import type { ReactNode } from 'react'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { PillLink } from '@/global/components/ui/PillLink'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { plainText, resolveArticleHref, rewriteArticleHtml, sentenceCase, type ArticleBlock } from '../_lib/article'

// Renders the client's article blocks. Their HTML (only a, strong, em, br) is the client's own
// content; links are rewritten by rewriteArticleHtml before it is set.

const html = (value: string) => ({ __html: rewriteArticleHtml(value) })

/** Inline styles for links and bold text inside the client's HTML, on light backgrounds. */
const INLINE =
  '[&_a]:font-semibold [&_a]:text-sx-forest [&_a]:underline [&_a]:decoration-sx-brand/40 [&_a]:underline-offset-4 [&_a:hover]:text-sx-brand [&_strong]:font-semibold [&_strong]:text-sx-ink'
/** The same on the dark call-to-action card. */
const INLINE_DARK = '[&_a]:font-semibold [&_a]:text-sx-mint [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-white'

const H3 = `scroll-mt-28 font-heading text-xl font-semibold leading-snug tracking-[-0.015em] text-sx-ink sm:text-[1.375rem] ${INLINE}`

type Group = { kind: 'block'; block: ArticleBlock; index: number } | { kind: 'faq'; items: Extract<ArticleBlock, { t: 'faq' }>[]; index: number }

/** Consecutive FAQ blocks become one accordion. */
function group(blocks: ArticleBlock[]): Group[] {
  const groups: Group[] = []
  blocks.forEach((block, index) => {
    const last = groups[groups.length - 1]
    if (block.t === 'faq') {
      if (last?.kind === 'faq') last.items.push(block)
      else groups.push({ kind: 'faq', items: [block], index })
    } else {
      groups.push({ kind: 'block', block, index })
    }
  })
  return groups
}

function CtaLink({ href, label, first }: { href: string; label: string; first: boolean }) {
  const link = resolveArticleHref(href)
  if (!link.external) {
    return (
      <PillLink href={link.href} variant={first ? 'light' : 'outline'}>
        {label}
      </PillLink>
    )
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center justify-between gap-5 rounded-full border border-current py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors hover:bg-white/10 sm:text-base"
    >
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowCircle tone="light" size="sm" />
    </a>
  )
}

function Block({ block, headingId }: { block: ArticleBlock; headingId?: string }): ReactNode {
  switch (block.t) {
    case 'lead':
      return <p className={`text-xl leading-[1.65] text-sx-ink/85 ${INLINE}`} dangerouslySetInnerHTML={html(block.html)} />
    case 'p':
      return <p className={INLINE} dangerouslySetInnerHTML={html(block.html)} />
    case 'note':
      return (
        <div
          role="note"
          className={`rounded-[20px] border-l-4 border-sx-brand bg-white p-5 text-base leading-[1.75] text-sx-ink/75 sm:p-6 sm:text-[1.0625rem] ${INLINE}`}
          dangerouslySetInnerHTML={html(block.html)}
        />
      )
    case 'h2':
      return (
        <h2
          id={headingId}
          className={`mt-6 scroll-mt-28 font-heading text-[1.625rem] font-bold leading-tight tracking-[-0.02em] text-sx-ink sm:text-[2rem] ${INLINE}`}
          dangerouslySetInnerHTML={html(block.html)}
        />
      )
    case 'h3':
      return <h3 className={`mt-2 ${H3}`} dangerouslySetInnerHTML={html(block.html)} />
    case 'ul':
      return (
        <ul className={`flex list-disc flex-col gap-2 pl-6 marker:text-sx-brand ${INLINE}`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1" dangerouslySetInnerHTML={html(item)} />
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className={`flex list-decimal flex-col gap-2 pl-6 marker:font-semibold marker:text-sx-brand ${INLINE}`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1" dangerouslySetInnerHTML={html(item)} />
          ))}
        </ol>
      )
    case 'table':
      return (
        <div
          role="region"
          aria-label={block.head.length > 0 ? `Table: ${block.head.map(plainText).join(', ')}` : 'Table'}
          tabIndex={0}
          className="overflow-x-auto rounded-[20px] bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
        >
          <table className={`w-full min-w-[520px] border-collapse text-left text-[0.9375rem] leading-normal ${INLINE}`}>
            {block.head.length > 0 && (
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th key={i} scope="col" className="bg-sx-forest px-4 py-3 font-semibold text-white" dangerouslySetInnerHTML={html(cell)} />
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-sx-ink/10 first:border-t-0">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={c === 0 ? 'px-4 py-3 align-top font-semibold text-sx-ink' : 'px-4 py-3 align-top text-sx-ink/70'}
                      dangerouslySetInnerHTML={html(cell)}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'cta':
      return (
        <aside aria-label={block.title ? sentenceCase(plainText(block.title)) : 'Next steps'} className="flex flex-col gap-4 rounded-[24px] bg-sx-forest p-6 text-white sm:p-8">
          {block.title && <p className="font-heading text-2xl font-bold leading-tight tracking-[-0.02em]">{sentenceCase(plainText(block.title))}</p>}
          {block.text && <p className={`text-base leading-relaxed text-white/80 ${INLINE_DARK}`} dangerouslySetInnerHTML={html(block.text)} />}
          {block.links.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-3">
              {block.links.map((link, i) => (
                <CtaLink key={link.href + i} href={link.href} label={link.label} first={i === 0} />
              ))}
            </div>
          )}
        </aside>
      )
    case 'faq':
      return null
  }
}

/** The reading column's content, block by block. `headingIds` maps h2 block indexes to anchor ids. */
export function ArticleBlocks({ blocks, headingIds }: { blocks: ArticleBlock[]; headingIds: Map<number, { id: string }> }) {
  return (
    <>
      {group(blocks).map((item) =>
        item.kind === 'faq' ? (
          <FaqAccordion
            key={`faq-${item.index}`}
            defaultOpen={-1}
            items={item.items.map((faq) => ({
              q: plainText(faq.q),
              a: (
                <div className={`flex flex-col gap-3 ${INLINE}`}>
                  {faq.a.map((answer, i) => (
                    <p key={i} dangerouslySetInnerHTML={html(answer)} />
                  ))}
                </div>
              ),
            }))}
          />
        ) : (
          <Block key={item.index} block={item.block} headingId={headingIds.get(item.index)?.id} />
        ),
      )}
    </>
  )
}
