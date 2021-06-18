// eslint-disable-next-line import/no-internal-modules
import NextHead from 'next/head'
import { FC } from 'react'

type HeadProps = {
  title: string
}

export const Head: FC<HeadProps> = ({ title }) => {
  return (
      <NextHead>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </NextHead>
  )
}

