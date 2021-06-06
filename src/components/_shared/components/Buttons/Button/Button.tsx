import { FC } from 'react'
import { StyledButton, ButtonWrapper } from './styledComponents'
import { Typography, NextLink } from '@__/components'

type ButtonProps = {
  text: string
  iconRight?: string
  iconLeft?: string
}

type LinkButtonProps = {
  to: string
  text: string
  iconRight?: string
  iconLeft?: string
}

const renderIcon = (icon: string | undefined): string => {
  if(!icon) {
    return ''
  }

  return icon
}

export const Button: FC<ButtonProps> = ({ text, iconRight, iconLeft }) => {
  return (
    <ButtonWrapper>
      <StyledButton>
        <Typography customFontSize={3}>
          {renderIcon(iconLeft)} {text} {renderIcon(iconRight)}
        </Typography>
      </StyledButton>
    </ButtonWrapper>
  )
}


export const LinkButton: FC<LinkButtonProps> = ({ text, to, iconRight, iconLeft }) => {
  return (
    <NextLink to={to}>
      <ButtonWrapper>
        <StyledButton>
          <Typography customFontSize={3}>
            {renderIcon(iconLeft)} {text} {renderIcon(iconRight)}
          </Typography>
        </StyledButton>
      </ButtonWrapper>
    </NextLink>
  )
}
