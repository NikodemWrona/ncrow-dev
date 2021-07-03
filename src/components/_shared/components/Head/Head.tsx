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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3CGX56NBKR"></script>
        <script dangerouslySetInnerHTML={{
          __html:`
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-3CGX56NBKR');`
        }}>
        </script>
      </NextHead>
  )
}

