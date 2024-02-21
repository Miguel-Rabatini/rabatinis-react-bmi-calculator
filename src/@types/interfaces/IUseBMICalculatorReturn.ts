//react
import React from "react";

//Interfaces
import { IBMINumberAndLevel } from "./IBMINumberAndLevel.ts";
import { IBMICalculatorFormInputsContextValue } from "./IBMICalculatorFormInputsContextValue.ts";

export interface IUseBMICalculatorReturn {
  bmiNumberAndLevel: IBMINumberAndLevel;
  bmiCalculatorFormInputsContextValue: IBMICalculatorFormInputsContextValue;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}
