import styled from 'styled-components'
import { devices } from '@__/styles'

export const Input = styled.input`
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  padding: 2rem;
  width: 100%;
  font-size: 2rem;
  margin-right: 1rem;

  @media (max-width: ${devices.SMALL}) {
    margin: 0;
    font-size: 1.5rem;
  }
`
