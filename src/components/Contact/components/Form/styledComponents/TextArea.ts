import styled from 'styled-components'
import { DEFAULT_DROP_SHADOW_VALUE } from '@__/styles'

export const TextArea = styled.textarea`
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  padding: 2rem;
  filter: drop-shadow(${DEFAULT_DROP_SHADOW_VALUE});
  font-size: 2rem;
  width: 100%;
  height: 100%;
  max-height: 100%;

  @media (max-width: 1150px) {
    margin: 0;
    font-size: 1.5rem;
  }
`
