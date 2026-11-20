// Shape of a Journal article (./articles/<slug>.json) and the helpers that turn the client's HTML
// into links that work on this site.

import { contact } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { journalSlugs } from './journal'

export type ArticleBlock =
  | { t: 'lead' | 'p' | 'note' | 'h2' | 'h3'; html: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'faq'; q: string; a: string[] }
  | { t: 'cta'; title: string; text: string; links: { href: string; label: string }[] }

export type Article = {
  slug: string
  title: string
  metaTitle: string
  description: string
  category: string
  date: string
  dateLabel: string
  author: string
  readTime: string
  blocks: ArticleBlock[]
}

/** The Nathia Gali site the articles were written for, without the trailing slash. */
const NATHIA_GALI_SITE = contact.sites.nathiagali.replace(/\/$/, '')

/**
 * Paths on the Nathia Gali site that have a page here. Anything else goes to the Nathia Gali site.
 * `/#ownership` is its payment-plan section, `/#amenities` the resort amenities, `/#location` the map.
 */
const PATH_MAP: Record<string, string> = {
  '/': '/properties/nathia-gali',
  '/floor-plans': '/properties/nathia-gali',
  '/smart-property-unit': '/smart-property',
  '/#ownership': '/calculator',
  '/#amenities': '/resort',
  '/#location': '/contact',
  '/progress': '/progress',
  '/contact': '/contact',
  '/about': '/about',
}

export type ResolvedLink = { href: string; external: boolean }

/** Where a link from an article should go on this site. Internal hrefs are returned without the base path. */
export function resolveArticleHref(href: string): ResolvedLink {
  if (!href.startsWith('/') || href.startsWith('//')) return { href, external: /^https?:/i.test(href) }
  const mapped = PATH_MAP[href]
  if (mapped) return { href: mapped, external: false }
  const blog = href.match(/^\/blog\/([\w-]+)\/?$/)
  if (blog && journalSlugs.includes(blog[1])) return { href: `/learn/${blog[1]}`, external: false }
  return { href: `${NATHIA_GALI_SITE}${href}`, external: true }
}

const ESCAPE: Record<string, string> = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }
const escapeAttr = (value: string) => value.replace(/[&"<>]/g, (c) => ESCAPE[c])

/**
 * Rewrites every <a> in the client's HTML (which uses only a, strong, em and br): internal links get
 * the base path and a data-internal flag (the article body routes those client-side); links that
 * leave the site open in a new tab.
 */
export function rewriteArticleHtml(html: string): string {
  return html.replace(/<a\s[^>]*?href="([^"]*)"[^>]*>/gi, (_tag, rawHref: string) => {
    const href = rawHref.replace(/&amp;/g, '&')
    const link = resolveArticleHref(href)
    if (link.external) return `<a href="${escapeAttr(link.href)}" target="_blank" rel="noreferrer">`
    return `<a href="${escapeAttr(withBase(link.href))}" data-internal="${escapeAttr(link.href)}">`
  })
}

/** Text without tags or entities, for headings in the contents list and ids. */
export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

/** "WHAT TO PACK" → "What to pack"; mixed-case titles are left alone. */
export const sentenceCase = (text: string) => (text === text.toUpperCase() ? text.charAt(0) + text.slice(1).toLowerCase() : text)

/** Ids for the article's h2s, in order, unique within the article. */
export function headingIds(blocks: ArticleBlock[]): Map<number, { id: string; title: string }> {
  const ids = new Map<number, { id: string; title: string }>()
  const used = new Set<string>()
  blocks.forEach((block, index) => {
    if (block.t !== 'h2') return
    const title = plainText(block.html)
    const base =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 60) || 'section'
    let id = base
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`
    used.add(id)
    ids.set(index, { id, title })
  })
  return ids
}

/** "Best Time to Visit … | Serene Heights Nathia Gali" → "Best Time to Visit … | Serene Investors". */
export function articlePageTitle(article: Article): string {
  const base = article.metaTitle.replace(/\s*\|\s*Serene Heights Nathia Gali\s*$/i, '').trim() || article.title
  return `${base} | Serene Investors`
}
