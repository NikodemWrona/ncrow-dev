import { FC } from 'react';

import { TopbarWrapper } from './styledComponents'

type TopbarProps = {
  title: string;
}

export const Topbar: FC<TopbarProps> = ({ title }) => {
  return (
    <TopbarWrapper>
      {title}
    </TopbarWrapper>
  );
}