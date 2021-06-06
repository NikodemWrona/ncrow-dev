import styled from 'styled-components'

type WelcomeSectionWrapperProps = {
  horizontalOffset?: number
  verticalOffset?: number
}

export const WelcomeSectionWrapper = styled.div<WelcomeSectionWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  margin-top: ${({ horizontalOffset }) => horizontalOffset ? horizontalOffset : 0}rem;
  margin-right: ${({ verticalOffset }) => verticalOffset ? verticalOffset : 0}rem;

  @media (max-width: 1150px) {
    margin-top: 0;
    margin-right: 0;
    align-items: center;
    text-align: center;
  }
`
