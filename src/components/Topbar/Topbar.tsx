import { FC } from 'react';

import { TopbarWrapper } from './styledComponents'
import { Logo, TopbarContent } from './components';
import { IconButton, NextLink } from '@__/components';

export const Topbar: FC = () => {
  const items = [
    <IconButton icon={'github'} link={'https://github.com/NikodemWrona'} />
  ]

  return (
    <TopbarWrapper>
      <NextLink to={'/'}>
        <Logo text={'ncrow:dev'} />
      </NextLink>
      <TopbarContent items={items} />
    </TopbarWrapper>
  );
}
