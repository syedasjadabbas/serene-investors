import { StartHero } from './StartHero'
import { StartOnboarding } from './StartOnboarding'
import { StartOptions } from './StartOptions'
import { StartTrust } from './StartTrust'
import { getStartedIntro } from '../_lib/get-started'
import { usePageMeta } from '@/global/hooks/usePageMeta'

export function GetStartedPage() {
  usePageMeta(
    'SERENE INVESTORS | Get started',
    getStartedIntro.body,
  )

  return (
    <>
      <StartHero />
      <StartOptions />
      <StartOnboarding />
      <StartTrust />
    </>
  )
}
