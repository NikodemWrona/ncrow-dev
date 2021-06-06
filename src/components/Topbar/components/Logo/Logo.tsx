import { FC } from 'react';

import { LogoText } from './styledComponents'
import { Typography } from '@__/components'

type LogoProps = {
  text: string
}

export const Logo: FC<LogoProps> = ({ text }) => {
  return (
      <Typography customFontSize={2}>
        <LogoText>
          {text}
        </LogoText>
      </Typography>
  )
}
