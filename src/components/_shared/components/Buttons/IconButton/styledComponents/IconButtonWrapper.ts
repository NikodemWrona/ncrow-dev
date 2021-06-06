import styled from 'styled-components';
import { BaseButton } from '../../styledComponents'
import { BRAND_COLOR } from '@__/styles';

export const IconButtonWrapper = styled(BaseButton)`
  fill: #fff;
  
  &:hover {
    fill: ${BRAND_COLOR};
  }
`
