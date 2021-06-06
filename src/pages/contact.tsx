import { Root, Topbar, FullHeightSection, Contact, Footer } from '../components';

export default function ContactPage(): JSX.Element {
  return (
    <Root>
      <FullHeightSection>
        <Topbar />
        <Contact />
        <Footer />
      </FullHeightSection>
    </Root>
  )
}
