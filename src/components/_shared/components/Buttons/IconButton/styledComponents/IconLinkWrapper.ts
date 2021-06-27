import styled from 'styled-components';
import { Colors } from '@__/styles';

export const IconLinkWrapper = styled.a`
  background-color: transparent;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: all .3s ease-in-out;
  fill: #fff;
  outline: none;
  
  &:hover {
    fill: ${Colors.BRAND};
  }
`
