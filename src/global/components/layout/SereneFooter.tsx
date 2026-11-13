import Link from 'next/link'
import { Mail } from 'lucide-react'
import { legalLinks, menuGroups } from '@/global/data/navigation'
import { footerIntro, site } from '@/global/data/site'
import { SereneLogo } from './Navbar'

const GROUP_URL = process.env.NEXT_PUBLIC_GROUP_URL ?? '/'

export function SereneFooter() {
  return (
    <footer className="relative overflow-hidden bg-sx-ink pt-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SereneLogo tone="light" />
            <p className="mt-3 max-w-sm text-sm text-white/60">{footerIntro.description}</p>
          </div>
          <a
            href="mailto:hello@sereneinvestors.com"
            className="flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white hover:text-sx-ink"
          >
            <Mail size={16} /> hello@sereneinvestors.com
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 py-12 md:grid-cols-5">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-white">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                {/* The group site lives outside this app's base path, so this is a plain link. */}
                <a href={GROUP_URL} className="text-sm text-white/60 transition-colors hover:text-white">
                  Serene Heights Group
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs leading-relaxed text-white/45">
          <p className="max-w-4xl">{site.disclaimer} {footerIntro.note}</p>
          <p>{footerIntro.copyright}. All rights reserved.</p>
        </div>
      </div>

      <p aria-hidden="true" className="sx-wordmark -mb-[0.12em] whitespace-nowrap text-center font-heading text-[23vw]">
        serene
      </p>
    </footer>
  )
}
