import styled from 'styled-components'
import { devices } from '@__/styles'

export const FormBottomSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  
  @media (max-width: ${devices.SMALL}) {
    flex-direction: column;
    align-items: center;
  }
`
