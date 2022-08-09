import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
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
    otpCode: yup.string().required('Código OTP inválido'),
  })
  .required();

const defaultValues = {
  otpCode: '',
};

const OtpForm = ({ onCancel }) => {
  const { control, handleSubmit: rhfHandleSubmit } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const navigation = useNavigation();

  const handleSubmit = data => {
    console.log(data);
    navigation.navigate('PunchListScreen');
  };

  return (
    <AuthCard>
      <ScreenTitle>Verifique sua identidade</ScreenTitle>

      <FormContainer>
        <InputWrapper>
          <RHFInput
            height={40}
            control={control}
            name="otpCode"
            placeholder="Código de autenticação"
          />
        </InputWrapper>

        <Button
          onPress={rhfHandleSubmit(handleSubmit)}
          title="Verificar"
          variant="primary"
        />
        <Button
          onPress={onCancel}
          title="Retornar ao Sign In"
          variant="ghost"
        />
      </FormContainer>
    </AuthCard>
  );
};

export default OtpForm;
