import React from 'react';

import Logo from '@assets/codeminer-logo.png';
import SigInForm from './signin-form/signin-form';
import OtpForm from './otp-form/otp-form';

import { useSteps } from 'src/hooks/use-steps/use-steps';

import {
  Container,
  Header,
  AppName,
  CodeminerLogo,
} from './signin-screen.styles';

const SigInScreen = () => {
  const { currentStep, goToNextStep, goToPreviousStep } = useSteps(2);

  // a estilização, infelizmente, tem que ficar nesse 'contentContainerStyle'
  // o alignItems vai acabar com a estrutura da tela se for usado no Container

  // keyboardVerticalOffset são quantas unidades a tela vai ser empurrada pra cima
  // -100 ficou certinho no meu emulador: Pixel 4
  return (
    <Container
      behavior='position'
      contentContainerStyle={{flex: 1, alignItems: 'center', width: '100%'}}
      keyboardVerticalOffset={-100}  
    >
      <Header />
      <CodeminerLogo source={Logo} />
      <AppName>PunchClock</AppName>

      {currentStep === 1 && <SigInForm onSubmit={goToNextStep} />}
      {currentStep === 2 && <OtpForm onCancel={goToPreviousStep} />}
    </Container>
  );
};

export default SigInScreen;
