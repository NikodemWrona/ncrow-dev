import styled from 'styled-components'
import { BaseButton } from '../../styledComponents'
import { Colors } from '@__/styles'

export const StyledButton = styled(BaseButton)`
  background-color: ${Colors.BRAND};
  width: 100%;
  padding: 2rem;
  
  &:hover {
    transform: scale(.95)
  }
`
