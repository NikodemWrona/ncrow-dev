import styled from 'styled-components'

import { MAIN_FONT_COLOR } from '@__/styles'

type TypographyProps = {
  customFontSize?: number
}

const DEFAULT_FONT_SIZE = 2;

const getFontSize = (fontSize?: number): number => {
  return fontSize ? fontSize : DEFAULT_FONT_SIZE;
}

export const Typography = styled.div<TypographyProps>`
  color: ${MAIN_FONT_COLOR};
  font-size: ${({ customFontSize }) => customFontSize ? customFontSize : 3}rem;

  @media (max-width: 1150px) {
    font-size: ${({ customFontSize }) => getFontSize(customFontSize) * 0.75}rem;
  }
`
