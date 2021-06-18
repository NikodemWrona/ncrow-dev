import { Root, Topbar, FullHeightSection, Contact, Footer, Head } from '../components';

export default function ContactPage(): JSX.Element {
  return (
    <>
    <Head title={'ncrow:dev | contact'} />
    <Root>
      <FullHeightSection>
        <Topbar />
        <Contact />
        <Footer />
      </FullHeightSection>
    </Root>
    </>
  )
}
