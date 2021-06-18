import { FC } from 'react'
import { WelcomeWrapper, WelcomeSectionWrapper, WelcomeButtonWrapper, WelcomeInnerWrapper } from './styledComponents'
import { Header } from './components'
import { LinkButton } from '@__/components'

export const Welcome: FC = () => {
  return (
    <WelcomeWrapper>
      <WelcomeInnerWrapper>
        <WelcomeSectionWrapper>
          <Header text={'Hi, I\'m Nikodem'}/>
          <WelcomeButtonWrapper>
            <LinkButton text={'Talk with me'} iconRight={'🖖'} to={'/contact'}/>
          </WelcomeButtonWrapper>
        </WelcomeSectionWrapper>
      </WelcomeInnerWrapper>
    </WelcomeWrapper>
  )
}
