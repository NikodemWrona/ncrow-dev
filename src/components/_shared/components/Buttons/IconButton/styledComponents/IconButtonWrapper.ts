import styled from 'styled-components';
import { BaseButton } from '../../styledComponents'
import { BRAND_COLOR, WHITE } from '@__/styles';

export const IconButtonWrapper = styled(BaseButton)`
  fill: ${WHITE};
  
  &:hover {
    fill: ${BRAND_COLOR};
  }
`
