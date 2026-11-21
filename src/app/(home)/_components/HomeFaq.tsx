import { MessageCircle } from 'lucide-react'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { PillLink } from '@/global/components/ui/PillLink'
import { homeFaq } from '../_lib/home'

export function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="px-4 pt-20 sm:px-8 sm:pt-28">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 md:grid-cols-[1fr_2fr]">
        {/* Stays in view while the questions scroll past on wider screens. */}
        <div className="flex flex-col gap-6 md:sticky md:top-28">
          <div>
            <h2 id="home-faq-heading" className="font-heading text-4xl font-bold tracking-[-0.02em] text-sx-ink sm:text-5xl">
              {homeFaq.heading}
            </h2>
            <p className="mt-3 text-lg text-sx-ink/60">{homeFaq.body}</p>
          </div>

          <div className="hidden flex-col gap-4 rounded-[20px] bg-sx-forest p-6 text-white md:flex">
            <span className="flex size-10 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
              <MessageCircle size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-semibold">{homeFaq.moreNote}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{homeFaq.moreBody}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <PillLink href={homeFaq.more.href} variant="light">
                {homeFaq.more.label}
              </PillLink>
              <PillLink href={homeFaq.contact.href} variant="outline">
                {homeFaq.contact.label}
              </PillLink>
            </div>
          </div>
        </div>

        <div>
          <FaqAccordion items={homeFaq.items} />
          <div className="mt-6 md:hidden">
            <PillLink href={homeFaq.more.href}>{homeFaq.more.label}</PillLink>
          </div>
        </div>
      </div>
    </section>
  )
}
