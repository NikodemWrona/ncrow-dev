import { FC } from 'react'

// eslint-disable-next-line import/no-internal-modules
import Link from 'next/link'
import { BaseLink } from '@__/components'

type NextLinkProps = {
  to: string
}

export const NextLink: FC<NextLinkProps> = ({ children, to }) => {
  return (
    <Link href={to}>
      <BaseLink>
        {children}
      </BaseLink>
    </Link>
  )
}
