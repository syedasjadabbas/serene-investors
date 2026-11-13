import type { LegalDoc } from '@/global/types/legal'
import { cn } from '@/global/lib/cn'
import { useActiveSection } from '../_hooks/useActiveSection'

export function LegalToc({ doc }: { doc: LegalDoc }) {
  const ids = doc.sections.map((section) => section.id)
  const activeId = useActiveSection(ids)

  return (
    <nav aria-labelledby="legal-toc-heading" className="rounded-[20px] bg-white p-5">
      <p id="legal-toc-heading" className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sx-ink/50">
        On this page
      </p>
      <ol className="flex flex-col gap-0.5">
        {doc.sections.map((section) => {
          const active = section.id === activeId
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? 'location' : undefined}
                className={cn(
                  'block rounded-[12px] px-3 py-2 text-sm leading-snug transition-colors',
                  active ? 'bg-sx-ink font-semibold text-white' : 'text-sx-ink/70 hover:bg-sx-paper hover:text-sx-ink',
                )}
              >
                {section.title}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
