import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react-native';
import { useSteps } from './use-steps';

describe('useSteps', () => {
  it('returns 1 as initial step', () => {
    const expectedCurrentStep = 1;
    const expectedIsFirstStep = true;
    const expectedIsLastStep = true;
    const { result } = renderHook(() => useSteps());

    expect(result.current.currentStep).toBe(expectedCurrentStep);
    expect(result.current.isFirstStep).toBe(expectedIsFirstStep);
    expect(result.current.isLastStep).toBe(expectedIsLastStep);
  });

  describe('when number of steps is negative', () => {
    it('returns 1 as maxValidStep', () => {
      const numberOfSteps = -1;
      const expectedNumberOfSteps = 1;
      const { result } = renderHook(() => useSteps(numberOfSteps));

      expect(result.current.numberOfSteps).toBe(expectedNumberOfSteps);
    });
  });

  describe('when number of steps is positive', () => {
    it('returns correct maxValidStep', () => {
      const numberOfSteps = 10;
      const expectedNumberOfSteps = 10;
      const { result } = renderHook(() => useSteps(numberOfSteps));

      expect(result.current.numberOfSteps).toBe(expectedNumberOfSteps);
    });
  });

  describe('when goToNextStep is called', () => {
    it('increment the current step', () => {
      const numberOfSteps = 10;
      const expectedCurrentStep = 2;
      const { result } = renderHook(() => useSteps(numberOfSteps));

      act(() => {
        result.current.goToNextStep();
      });
      
      expect(result.current.currentStep).toBe(expectedCurrentStep);
    });
    
    it('does not increment the current step when it is the last one', () => {
      const numberOfSteps = 1;
      const expectedCurrentStep = 1;
      const { result } = renderHook(() => useSteps(numberOfSteps));
      
      expect(result.current.isLastStep).toBe(true);

      act(() => {
        result.current.goToNextStep();
      });

      expect(result.current.currentStep).toBe(expectedCurrentStep);
    });
  });

  describe('when goToPreviousStep is called', () => {
    it('decrement the current step', () => {
      const numberOfSteps = 10;
      const expectedCurrentStep = 1;
      const { result } = renderHook(() => useSteps(numberOfSteps));

      act(() => {
        result.current.goToNextStep();
        result.current.goToPreviousStep();
      });
      
      expect(result.current.currentStep).toBe(expectedCurrentStep);
    });
    
    it('does not decrement the current step when it is the first one', () => {
      const numberOfSteps = 10;
      const expectedCurrentStep = 1;
      const { result } = renderHook(() => useSteps(numberOfSteps));

      expect(result.current.isFirstStep).toBe(true);

      act(() => {
        result.current.goToPreviousStep();
      });

      expect(result.current.currentStep).toBe(expectedCurrentStep);
    });
  });
});
