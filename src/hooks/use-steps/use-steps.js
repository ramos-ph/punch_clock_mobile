import { useCallback, useMemo, useState } from 'react';

const FIRST_STEP = 1;

export const useSteps = numberOfSteps => {
  const [currentStep, setCurrentStep] = useState(FIRST_STEP);

  const maxValidStep = useMemo(() => {
    return numberOfSteps >= FIRST_STEP ? numberOfSteps : FIRST_STEP;
  }, []);

  const goToNextStep = useCallback(() => {
    setCurrentStep(step => (step === maxValidStep ? step : step + 1));
  }, []);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep(step => (step === FIRST_STEP ? FIRST_STEP : step - 1));
  }, []);

  return {
    currentStep,
    numberOfSteps: maxValidStep,
    isFirstStep: currentStep === FIRST_STEP,
    isLastStep: currentStep === maxValidStep,
    goToNextStep,
    goToPreviousStep,
  };
};
