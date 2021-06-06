import styled from 'styled-components'
import { BaseButton } from '../../styledComponents'
import { BRAND_COLOR, DEFAULT_DROP_SHADOW_VALUE, HOVERED_DROP_SHADOW_VALUE } from '@__/styles'

export const StyledButton = styled(BaseButton)`
  background-color: ${BRAND_COLOR};
  width: 100%;
  padding: 2rem;
  filter: drop-shadow(${DEFAULT_DROP_SHADOW_VALUE});
  
  &:hover {
    transform: translateX(5px);
    filter: drop-shadow(${HOVERED_DROP_SHADOW_VALUE});
  }
`
