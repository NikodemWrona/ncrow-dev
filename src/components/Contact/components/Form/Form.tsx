import { FC } from 'react'
import { FieldErrors, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-internal-modules
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, TextArea, FormWrapper, FormBottomSectionWrapper, FormMiddleSectionWrapper, ErrorMessageWrapper } from './styledComponents'
import { useContactFormController } from './hooks'

import { Button, HorizontalMargin, Typography } from '@__/components'
import { Colors } from '@__/styles';

type FormValues = {
  email: string
  message: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string().required()
});

const renderErrorMessages = (messages: string[]): JSX.Element => {
  return (
    <ErrorMessageWrapper>
      {messages.map((message, index) => (
          <Typography customFontColor={Colors.DANGER} customFontSize={1.5} key={index}>
            {message}
          </Typography>
      ))}
    </ErrorMessageWrapper>
  );
}

const prepareErrorMessages = (errors: FieldErrors<FormValues>): string[] => {
  return Object.values(errors).map(e => e.message?.toUpperCase() || '')
}

export const Form: FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const errorMessages = prepareErrorMessages(errors);
  const { sendMessage } = useContactFormController()

  const onSubmit = (data: FormValues): void => {
    const { email, message } = data;

    sendMessage({ email, message })
    reset()
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
        {renderErrorMessages(errorMessages)}
      </FormBottomSectionWrapper>
    </FormWrapper>
  )
}
