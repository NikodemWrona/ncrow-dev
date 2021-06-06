import styled from 'styled-components'
import { BRAND_COLOR } from '../../../styles'

export const BaseLink = styled.a`
  outline: none;
  color: inherit;
  text-decoration: none;
  
  span {
    transition: color .3s ease-in-out;
  }
  
  &:hover {
    span {
      color: ${BRAND_COLOR};
    }
  }
`
