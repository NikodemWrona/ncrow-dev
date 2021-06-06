import styled from 'styled-components'

type HorizontalMarginProps = {
  onlyMobile?: boolean
}

export const HorizontalMargin = styled.div<HorizontalMarginProps>`
  margin-top: ${({ onlyMobile }) => onlyMobile ? 0 : 3}rem;
  margin-bottom: ${({ onlyMobile }) => onlyMobile ? 0 : 3}rem;

  @media (max-width: 1150px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`
