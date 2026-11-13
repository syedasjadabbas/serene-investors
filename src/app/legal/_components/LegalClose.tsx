import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import type { LegalDoc } from '@/global/types/legal'
import { legalFrame, legalIndex } from '../_lib/legal'

export function LegalClose({ doc }: { doc: LegalDoc }) {
  const others = legalIndex.filter((item) => item.slug !== doc.slug)

  return (
    <nav aria-labelledby="legal-related-heading" className="flex flex-col gap-4">
      <h2 id="legal-related-heading" className="pt-4 font-heading text-xl font-semibold tracking-[-0.015em] text-sx-ink">
        {legalFrame.relatedHeading}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {others.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-4 rounded-[20px] bg-white p-5 font-heading text-lg font-semibold text-sx-ink transition-colors hover:bg-sx-sand"
            >
              {item.title}
              <ArrowCircle tone="dark" size="sm" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="pt-2">
        <PillLink href={legalFrame.backHref} variant="outline">
          {legalFrame.backLabel}
        </PillLink>
      </div>
    </nav>
  )
}
