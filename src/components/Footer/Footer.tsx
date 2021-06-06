import { FC } from 'react'
import { FooterWrapper } from './styledComponents'
import { Typography } from '@__/components'
import { HeartIcon } from '@__/assets'

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Typography customFontSize={1.5}>
        Made with
      </Typography>
      <span style={{ margin: '0 1rem' }}><HeartIcon /></span>
      <Typography customFontSize={1.5}>
        by me
      </Typography>
    </FooterWrapper>
  )
}
