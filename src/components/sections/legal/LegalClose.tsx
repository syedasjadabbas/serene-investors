import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '@/components/ui/Button'
import type { LegalDoc } from '@/types/legal'
import { legalFrame, legalIndex } from '@/data'

type Props = {
  doc: LegalDoc
}

export function LegalClose({ doc }: Props) {
  const others = legalIndex.filter((item) => item.slug !== doc.slug)

  return (
    <div className="legal-close">
      <ButtonLink to={legalFrame.backHref} variant="ghost" className="legal-close__back min-h-11 gap-1.5">
        <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
        {legalFrame.backLabel}
      </ButtonLink>

      <div className="legal-close__related">
        <p className="legal-close__related-heading">{legalFrame.relatedHeading}</p>
        <ul>
          {others.map((item) => (
            <li key={item.slug}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
