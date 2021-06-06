import { FC } from 'react';

import { TopbarContentWrapper } from './styledComponents'

type TopbarContentProps = {
  items: Array<JSX.Element>
}

export const TopbarContent: FC<TopbarContentProps> = ({ items }) => {
  return (
    <TopbarContentWrapper>
      {items.map(item => item)}
    </TopbarContentWrapper>
  )
}
