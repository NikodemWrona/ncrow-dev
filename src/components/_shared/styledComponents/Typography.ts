import styled from 'styled-components'

import { devices, Colors } from '@__/styles'

type TypographyProps = {
  customFontSize?: number
  customFontColor?: string
}

const DEFAULT_FONT_SIZE = 2;

const getFontSize = (fontSize?: number): number => {
  return fontSize ? fontSize : DEFAULT_FONT_SIZE;
}

export const Typography = styled.div<TypographyProps>`
  color: ${({ customFontColor }) => customFontColor ? customFontColor : Colors.FONT_MAIN};
  font-size: ${({ customFontSize }) => customFontSize ? customFontSize : 3}rem;

  @media (max-width: ${devices.SMALL}) {
    font-size: ${({ customFontSize }) => getFontSize(customFontSize) * 0.75}rem;
  }
`
