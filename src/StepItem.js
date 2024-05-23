import React from 'react';

export const StepItem = ({ key, value, currentStep, setCurrentStep }) => {
  return (
    <div
      key={key}
      onClick={() => setCurrentStep(value - 1)}
      className={`stepItem ${currentStep >= value - 1 ? 'active' : ''}`}
    >
      {value}
    </div>
  );
};
