import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/global/data/serene'
import { legalLinks, menuGroups } from '@/global/data/navigation'
import { footerIntro, site } from '@/global/data/site'
import { SereneLogo } from './Navbar'

const GROUP_URL = process.env.NEXT_PUBLIC_GROUP_URL ?? '/'

export function SereneFooter() {
  return (
    <footer className="relative overflow-hidden bg-sx-ink pb-[env(safe-area-inset-bottom)] pt-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SereneLogo tone="light" />
            <p className="mt-3 max-w-sm text-sm text-white/60">{footerIntro.description}</p>
          </div>
          {/* Real Serene Heights contact lines (src/global/data/serene.ts). */}
          <div className="flex flex-wrap gap-2">
            <a
              href={contact.uanHref}
              className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-sx-ink"
            >
              <Phone size={16} aria-hidden="true" /> UAN {contact.uan}
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition-colors hover:bg-white hover:text-sx-ink"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp {contact.whatsapp}
            </a>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-6 text-sm text-white/60" aria-label="Serene Heights on social media">
          {contact.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
          <li className="text-white/60">Head office: {contact.headOffice}</li>
        </ul>

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

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs leading-relaxed text-white/60">
          <p className="max-w-4xl">{site.disclaimer} {footerIntro.note}</p>
          <p>{footerIntro.copyright}. All rights reserved.</p>
        </div>
      </div>

      <p aria-hidden="true" className="sx-wordmark -mb-[0.12em] whitespace-nowrap text-center font-heading text-[clamp(4.5rem,21vw,22rem)]">
        serene
      </p>
    </footer>
  )
}
