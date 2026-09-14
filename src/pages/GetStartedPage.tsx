import { StartHero } from '@/components/sections/start/StartHero'
import { StartOnboarding } from '@/components/sections/start/StartOnboarding'
import { StartOptions } from '@/components/sections/start/StartOptions'
import { StartTrust } from '@/components/sections/start/StartTrust'
import { getStartedIntro } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

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
