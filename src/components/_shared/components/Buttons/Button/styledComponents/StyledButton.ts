import styled from 'styled-components'
import { BaseButton } from '../../styledComponents'
import { BRAND_COLOR } from '@__/styles'

export const StyledButton = styled(BaseButton)`
  background-color: ${BRAND_COLOR};
  width: 100%;
  padding: 2rem;
  
  &:hover {
    transform: scale(.95)
  }
`
