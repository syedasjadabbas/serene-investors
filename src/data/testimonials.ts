import type { Testimonial } from '@/types'

export const testimonialsIntro = {
  eyebrow: 'Investor stories',
  heading: 'A simpler experience for property investors.',
  body: 'Fictional stories from people using the Serene Investors demo platform to explore property investing.',
  sampleLabel: 'Fictional testimonials',
} as const

export const testimonials: Testimonial[] = [
  {
    id: 'sofia-rahman',
    name: 'Sofia Rahman',
    role: 'Product Designer',
    location: 'Dubai',
    quote:
      'I wanted a clearer way to explore property opportunities without turning the experience into a financial dashboard.',
    image: 'https://picsum.photos/seed/serene-sofia-rahman/900/1120',
    imageAlt: 'Editorial portrait used for Sofia Rahman, a fictional demo investor',
  },
  {
    id: 'daniel-mercer',
    name: 'Daniel Mercer',
    role: 'Architect',
    location: 'London',
    quote:
      'The property information is presented in a way that makes the first step feel straightforward and considered.',
    image: 'https://picsum.photos/seed/serene-daniel-mercer/900/1120',
    imageAlt: 'Editorial portrait used for Daniel Mercer, a fictional demo investor',
  },
  {
    id: 'amina-khan',
    name: 'Amina Khan',
    role: 'Founder',
    location: 'Lahore',
    quote:
      'I like being able to compare different property options while keeping the important information easy to scan.',
    image: 'https://picsum.photos/seed/serene-amina-khan/900/1120',
    imageAlt: 'Editorial portrait used for Amina Khan, a fictional demo investor',
  },
]
