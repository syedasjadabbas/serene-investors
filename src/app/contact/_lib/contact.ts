// The enquiry form: values, validation and where a valid enquiry goes. There is no backend: the form
// opens WhatsApp (to the Serene Heights WhatsApp number) or the visitor's email app (addressed to the
// inbox of the project they are asking about), with the enquiry filled in.

import { contact, interests, whatsappWith, type InterestKey } from '@/global/data/serene'

export type ContactChannel = 'whatsapp' | 'email'

export type ContactValues = {
  name: string
  email: string
  phone: string
  interest: InterestKey | ''
  message: string
  channel: ContactChannel
  consent: boolean
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export const INITIAL_CONTACT: ContactValues = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
  channel: 'whatsapp',
  consent: false,
}

export const interestOptions = Object.entries(interests) as [InterestKey, string][]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter an email address like name@example.com.'
  const digits = values.phone.replace(/[\s()+-]/g, '')
  if (digits && !/^\d{7,15}$/.test(digits)) errors.phone = 'Enter 7 to 15 digits, e.g. 0300 1234567, or leave it blank.'
  if (!values.interest) errors.interest = 'Choose what you are interested in.'
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  if (!values.consent) errors.consent = 'Tick the box so the team can reply to you.'
  return errors
}

/** Lahore interests go to the Lahore inbox; Nathia Gali interests and site visits to the Nathia Gali inbox. */
export function projectEmail(interest: ContactValues['interest']): string {
  return interest.startsWith('lhr') ? contact.emails.lahore : contact.emails.nathiagali
}

function summary(values: ContactValues): string {
  const interest = values.interest ? interests[values.interest] : ''
  return [
    `Enquiry: ${interest}`,
    '',
    values.message.trim(),
    '',
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || 'not given'}`,
  ].join('\n')
}

/** The link a valid enquiry opens: a WhatsApp chat or a mailto: draft, both prefilled. */
export function enquiryLink(values: ContactValues): string {
  if (values.channel === 'whatsapp') return whatsappWith(summary(values))
  const subject = `Website enquiry: ${values.interest ? interests[values.interest] : 'Serene Heights'}`
  return `mailto:${projectEmail(values.interest)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary(values))}`
}
