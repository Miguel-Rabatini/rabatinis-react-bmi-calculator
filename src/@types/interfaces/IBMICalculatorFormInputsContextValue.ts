//react
import React from "react";

//Types
import { BMICalculatorFormInputValue } from "../types/BMICalculatorFormInputValue.ts";

//Local interfaces
interface IInputContextValue {
  value: BMICalculatorFormInputValue;
  onChange: React.Dispatch<React.SetStateAction<BMICalculatorFormInputValue>>;
}

export interface IBMICalculatorFormInputsContextValue {
  heightInputContextValue: IInputContextValue;
  weightInputContextValue: IInputContextValue;
}
