import { Root, Topbar, Welcome, Footer, FullHeightSection, Head } from '../components';

export default function HomePage(): JSX.Element {
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
