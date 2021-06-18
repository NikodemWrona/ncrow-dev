import styled from 'styled-components'
import { devices } from '@__/styles'

export const TextArea = styled.textarea`
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  padding: 2rem;
  font-size: 2rem;
  width: 100%;
  height: 100%;
  max-height: 100%;

  @media (max-width: ${devices.SMALL}) {
    margin: 0;
    font-size: 1.5rem;
  }
`
