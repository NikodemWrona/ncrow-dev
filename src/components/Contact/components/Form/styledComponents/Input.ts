import styled from 'styled-components'

import { DEFAULT_DROP_SHADOW_VALUE } from '@__/styles'

export const Input = styled.input`
  border: none;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  text-decoration: none;
  padding: 2rem;
  filter: drop-shadow(${DEFAULT_DROP_SHADOW_VALUE});
  width: 100%;
  font-size: 2rem;
  margin-right: 1rem;

  @media (max-width: 1150px) {
    margin: 0;
    font-size: 1.5rem;
  }
`
