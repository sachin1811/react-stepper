import React, { useState } from 'react';
import { Stepper } from './Stepper';
import './style.css';

export default function App() {
  const [stepData, setStepData] = useState([1, 2, 3]);
  return <Stepper stepData={stepData} updateStepData={setStepData} />;
}
