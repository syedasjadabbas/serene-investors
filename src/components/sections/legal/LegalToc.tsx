import type { LegalDoc } from '@/types/legal'
import { useActiveSection } from '@/hooks/useActiveSection'

type Props = {
  doc: LegalDoc
}

export function LegalToc({ doc }: Props) {
  const ids = doc.sections.map((section) => section.id)
  const activeId = useActiveSection(ids)

  return (
    <nav className="legal-toc" aria-labelledby="legal-toc-heading">
      <p id="legal-toc-heading" className="legal-toc__heading">
        On this page
      </p>
      <ol>
        {doc.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={section.id === activeId ? 'is-active' : undefined}
              aria-current={section.id === activeId ? 'location' : undefined}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
