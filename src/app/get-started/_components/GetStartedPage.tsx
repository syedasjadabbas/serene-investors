import { useSearchParams } from 'next/navigation'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { getStartedIntro } from '../_lib/get-started'
import { StartHero } from './StartHero'
import { StartOnboarding } from './StartOnboarding'
import { StartOptions } from './StartOptions'
import { StartTrust } from './StartTrust'

export function GetStartedPage() {
  usePageMeta('Serene Investors | Get started', getStartedIntro.body)
  const params = useSearchParams()
  // A new ?intent=&id= (e.g. "Continue with this fund") restarts the sample onboarding.
  const onboardingKey = `${params?.get('intent') ?? ''}:${params?.get('id') ?? ''}`

  return (
    <>
      <StartHero />
      <StartOptions />
      <StartOnboarding key={onboardingKey} />
      <StartTrust />
    </>
  )
}
