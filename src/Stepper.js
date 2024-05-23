import React, { useState } from 'react';
import { StepItem } from './StepItem';
import './style.css';

export const Stepper = ({ stepData, updateStepData }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const progressLineWidth =
    stepData.length > 1 ? (100 / (stepData.length - 1)) * currentStep : 0;
  return (
    <>
      <section className="stepper">
        <div className="stepContainer">
          <div className="stepWrapper">
            {stepData.map((val, index) => {
              return (
                <StepItem
                  key={index}
                  value={val}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              );
            })}
          </div>
          <div
            className="progressLine"
            style={{ width: `${progressLineWidth}%` }}
          ></div>
        </div>
        <div className="stepperContent">
          <h1>{`Hello ${stepData[currentStep]}`}</h1>
          <div>
            <button
              onClick={() => {
                if (currentStep) setCurrentStep(currentStep - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (currentStep < stepData.length - 1)
                  setCurrentStep(currentStep + 1);
              }}
            >
              Next
            </button>
          </div>
          <h2>Add / Remove Steps (upto 10 Steps)</h2>
          <div>
            <button
              onClick={() => {
                if (stepData.length > 1) {
                  if (currentStep === stepData.length - 1)
                    setCurrentStep(currentStep - 1);
                  updateStepData(stepData.slice(0, stepData.length - 1));
                }
              }}
            >
              Remove Steps
            </button>
            <button
              onClick={() => {
                if (stepData.length < 10)
                  updateStepData([...stepData, stepData.length + 1]);
              }}
            >
              Add Steps
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
