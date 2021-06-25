import { useEffect } from 'react';
import { Root, Topbar, Welcome, Footer, FullHeightSection, Head } from '../components';
import { showWelcomeMessage } from '@__/utils';

export default function HomePage(): JSX.Element {
  useEffect(() => {
    showWelcomeMessage()
  })

  return (
    <>
    <Head title={'ncrow:dev'} />
    <Root>
      <FullHeightSection>
        <Topbar />
        <Welcome />
        <Footer />
      </FullHeightSection>
    </Root>
    </>
  )
}
