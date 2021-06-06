import { FC } from 'react'
import { WelcomeWrapper, WelcomeSectionWrapper, WelcomeButtonWrapper, WelcomeInnerWrapper } from './styledComponents'
import { Header, SubHeader, CompanyLink } from './components'
import { LinkButton, HideOnSpecificDevice, LottieComponent } from '@__/components'

export const Welcome: FC = () => {

  return (
    <WelcomeWrapper>
      <WelcomeInnerWrapper>
        <WelcomeSectionWrapper horizontalOffset={10}>
          <Header text={'Hi, I\'m Nikodem'}/>
          <SubHeader text={'Full-stack JavaScript developer.'} highlightedWord={'JavaScript'} />
          <CompanyLink companyName={'Brainhub'} companyWebsiteURL={'https://brainhub.eu/'} />
          <WelcomeButtonWrapper>
            <LinkButton text={'Talk with me'} iconRight={'🖖'} to={'/contact'}/>
          </WelcomeButtonWrapper>
        </WelcomeSectionWrapper>
          <HideOnSpecificDevice>
            <WelcomeSectionWrapper horizontalOffset={10} verticalOffset={5}>
              <LottieComponent animation={'working'} />
            </WelcomeSectionWrapper>
          </HideOnSpecificDevice>
      </WelcomeInnerWrapper>
    </WelcomeWrapper>
  )
}
