import styled from 'styled-components'
import { devices } from '@__/styles'

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-width: 45%;

  @media (max-width: ${devices.SMALL}) {
    margin-top: 1rem;
    width: 90%;
  }
`
