import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'

export function FundNotFound() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        back={
          <Link href="/funds" className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-sx-ink/60 hover:text-sx-ink">
            <ArrowLeft size={16} aria-hidden="true" />
            All funds
          </Link>
        }
        title="This fund is not in the collection."
        highlight="not in the collection"
        body="The sample fund you opened does not exist in the current catalogue."
      />
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <PillLink href="/funds">Back to funds</PillLink>
      </div>
    </div>
  )
}
