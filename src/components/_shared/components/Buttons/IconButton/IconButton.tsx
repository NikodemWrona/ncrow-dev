import { FC } from 'react'

import { GithubIcon } from '../../../../../assets';
import { IconButtonWrapper, IconLinkWrapper } from './styledComponents'

type Icons = 'github'

type IconButtonProps = {
  icon: 'github'
  onClick?: () => void
  link?: string
}

const renderIcon = (icon: Icons): JSX.Element => {
  switch (icon) {
    case 'github':
      return <GithubIcon />
    default:
      return <GithubIcon />
  }
}

export const IconButton: FC<IconButtonProps> = ({ onClick, icon, link }) => {

  if (!onClick && Boolean(link)) {
    return (
      <IconLinkWrapper href={link} target={'_blank'} rel={'noreferrer noopener'} >
        {renderIcon(icon)}
      </IconLinkWrapper>
    )
  }

  const handleClick = (): void => {
    if (!onClick) {
      console.error('Error : onClick not defined')
      return;
    }

    onClick()
  }

  return (
    <IconButtonWrapper onClick={handleClick}>
      {renderIcon(icon)}
    </IconButtonWrapper>
  )
}
