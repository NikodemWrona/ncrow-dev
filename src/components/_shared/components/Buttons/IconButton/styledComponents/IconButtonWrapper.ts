import styled from 'styled-components';
import { BaseButton } from '../../styledComponents'
import { Colors } from '@__/styles';

export const IconButtonWrapper = styled(BaseButton)`
  fill: #fff;
  
  &:hover {
    fill: ${Colors.BRAND};
  }
`
