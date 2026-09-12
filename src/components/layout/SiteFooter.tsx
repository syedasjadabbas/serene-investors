import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { FooterColumn } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { footerColumns, footerIntro, site } from '@/data'

function FooterNavGroup({ column }: { column: FooterColumn }) {
  const headingId = `footer-${column.id}`

  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="brand-label text-[#dce7de]">
        {column.title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {column.links.map((link) => (
          <li key={link.id}>
            {link.href ? (
              <Link to={link.href} className="text-[0.9375rem]">
                {link.label}
              </Link>
            ) : (
              <span className="site-footer__static text-[0.9375rem]">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SiteFooter() {
  const legalLinks = footerColumns.find((column) => column.id === 'legal')?.links ?? []

  return (
    <footer className="site-footer px-5 py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-x-20">
          <div>
            <p className="text-[0.78rem] font-semibold tracking-[0.16em]">{site.name}</p>
            <p className="mt-4 max-w-[24ch] text-[1.02rem] leading-[1.7] text-[#dce7de]">
              {footerIntro.description}
            </p>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#aebbaf]">
              {footerIntro.sampleLabel}
            </p>
            <div className="mt-7">
              <ButtonLink
                to={footerIntro.cta.href}
                variant="ghost"
                className="gap-1.5 bg-[#f7f5ef] text-[#1f3d2e] hover:bg-[#dce7de] hover:text-[#1f3d2e]"
              >
                {footerIntro.cta.label}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:mt-1 lg:grid-cols-4 lg:gap-x-10">
            {footerColumns.map((column) => (
              <FooterNavGroup key={column.id} column={column} />
            ))}
          </div>
        </div>

        <hr className="site-footer__rule mt-14 lg:mt-16" />

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-[#dce7de]">{footerIntro.copyright}</p>
            <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-[#aebbaf]">{footerIntro.note}</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) =>
              link.href ? (
                <li key={link.id}>
                  <Link to={link.href} className="text-sm">
                    {link.label}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>
    </footer>
  )
}
