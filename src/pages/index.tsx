import { Root, Topbar, Welcome, Footer, FullHeightSection } from '../components';

export default function HomePage(): JSX.Element {
  return (
    <Root>
      <FullHeightSection>
        <Topbar />
        <Welcome />
        <Footer />
      </FullHeightSection>
    </Root>
  )
}
