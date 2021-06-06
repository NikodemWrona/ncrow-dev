import { FC } from 'react'
import { CompanyLinkWrapper } from './styledComponents'
import { Typography, BaseLink } from '@__/components'

type CompanyLinkProps = {
  companyName:string
  companyWebsiteURL: string
}

export const CompanyLink: FC<CompanyLinkProps> = ({ companyName, companyWebsiteURL }) => {
  return (
    <CompanyLinkWrapper>
      <Typography customFontSize={3}>
        @{' '}
        <BaseLink href={companyWebsiteURL} target={'_blank'} rel={'noreferrer noopener'}>
          {companyName}
        </BaseLink>
      </Typography>
    </CompanyLinkWrapper>
  )
}
