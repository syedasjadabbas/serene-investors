import { Star } from 'lucide-react'
import { testimonials } from '../_lib/home'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 sm:py-28">
      <div className="px-4 text-center sm:px-8">
        <h2 id="testimonials-heading" className="font-heading text-3xl font-bold tracking-[-0.02em] text-sx-ink sm:text-4xl">
          {testimonials.heading}
        </h2>
        <p className="mt-2 text-sm text-sx-ink/55">{testimonials.note}</p>
      </div>

      <ul className="sx-rail mt-10 px-4 sm:px-[max(2rem,calc((100vw-1240px)/2+2rem))]">
        {testimonials.items.map((item) => (
          <li key={item.name} className="w-[80vw] sm:w-[340px]">
            <figure className="flex h-full min-h-[260px] flex-col rounded-[20px] bg-white p-6">
              <div className="flex gap-1 text-sx-brand" aria-label="Five out of five">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-sx-ink">“{item.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6 text-sm font-medium text-sx-ink/80">
                <span className="flex size-9 items-center justify-center rounded-full bg-sx-paper text-sx-forest" aria-hidden="true">
                  {item.name.split(', ')[1]?.[0] ?? 'S'}
                </span>
                {item.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
