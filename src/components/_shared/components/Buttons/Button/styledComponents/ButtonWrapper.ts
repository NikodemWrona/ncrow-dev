import styled from 'styled-components'
import { devices } from '@__/styles'

export const ButtonWrapper = styled.div`
  width: 40rem;

  @media (max-width: ${devices.SMALL}) {
    width: 30rem;
  }

  @media (max-width: ${devices.EXTRA_SMALL}) {
    width: 25rem;
  }
`
