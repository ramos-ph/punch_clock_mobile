import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import RHFInput from '@components/input/rhf-input';
import Button from '@components/button/button';

import {
  AuthCard,
  ScreenTitle,
  FormContainer,
  InputWrapper,
} from '../signin-screen.styles';

const schema = yup
  .object({
    email: yup.string().required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória'),
  })
  .required();

const defaultValues = {
  email: '',
  password: '',
};

const SigInForm = ({ onSubmit }) => {
  const { control, handleSubmit: rhfHandleSubmit } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleSubmit = data => {
    console.log(data);
    onSubmit();
  };

  return (
    <AuthCard>
      <ScreenTitle>Sign In</ScreenTitle>

      <FormContainer>
        <InputWrapper>
          <RHFInput
            height={40}
            control={control}
            name="email"
            placeholder="E-mail"
          />
        </InputWrapper>
        <InputWrapper>
          <RHFInput
            height={40}
            control={control}
            name="password"
            placeholder="Senha"
          />
        </InputWrapper>

        <Button
          onPress={rhfHandleSubmit(handleSubmit)}
          title="Entrar"
          variant="primary"
        />
        <Button
          onPress={() => {
            console.log('Esqueci a senha');
          }}
          title="Esqueci a Senha"
          variant="ghost"
        />
      </FormContainer>
    </AuthCard>
  );
};

export default SigInForm;
