//react
import React, { createContext } from "react";

//Types
import { BMICalculatorFormInputsContextType } from "../@types/types/BMICalculatorFormInputsContextType.ts";

export const BMICalculatorFormInputsContext: React.Context<BMICalculatorFormInputsContextType> =
  createContext<BMICalculatorFormInputsContextType>(null);
