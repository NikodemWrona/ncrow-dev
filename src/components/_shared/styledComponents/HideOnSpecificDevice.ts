import styled from 'styled-components'
import { devices } from '@__/styles'

export const HideOnSpecificDevice = styled.div`
  @media (max-width: ${devices.SMALL}) {
    display: none;
  }
`
