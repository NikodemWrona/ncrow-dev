import { FC } from 'react'
import { useForm } from 'react-hook-form';
import { Input, TextArea, FormWrapper, FormBottomSectionWrapper, FormMiddleSectionWrapper } from './styledComponents'
import { useContactFormController } from './hooks'

import { Button, HorizontalMargin } from '@__/components'

type FormValues = {
  email: string
  message: string
}

export const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { sendMessage } = useContactFormController()

  const onSubmit = (data: FormValues): void => {
    const { email, message } = data;

    sendMessage({ email, message })
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormMiddleSectionWrapper>
        <TextArea placeholder={'What\'s up ?'} {...register('message')} />
      </FormMiddleSectionWrapper>
      <FormBottomSectionWrapper>
        <Input placeholder={'Email'} type={'email'} {...register('email', { required: true })}  />
        <HorizontalMargin onlyMobile>
          <Button text={'Send'} iconRight={'✉️'} />
        </HorizontalMargin>
      </FormBottomSectionWrapper>
    </FormWrapper>
  )
}
