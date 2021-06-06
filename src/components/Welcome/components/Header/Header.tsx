import { FC } from 'react'
import { HeaderText, HeaderWrapper } from './styledComponents'
import { Typography } from '@__/components'

type HeaderProps = {
  text: string
}

export const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <HeaderWrapper>
      <Typography customFontSize={4}>
        <HeaderText>
          {text}
        </HeaderText>
      </Typography>
    </HeaderWrapper>
  )
}
