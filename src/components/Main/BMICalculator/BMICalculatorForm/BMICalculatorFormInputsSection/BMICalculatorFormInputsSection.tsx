//react
import React, { useContext } from "react";

//Contexts
import { BMICalculatorFormInputsContext } from "../../../../../store/BMICalculatorFormInputsContext.ts";

//Components
import BMICalculatorFormInput from "./BMICalculatorFormInput";

//Types
import { BMICalculatorFormInputsContextType } from "../../../../../@types/types/BMICalculatorFormInputsContextType.ts";

//Interfaces
import { IBMICalculatorFormInputsContextValue } from "../../../../../@types/interfaces/IBMICalculatorFormInputsContextValue.ts";

//Style
import styles from "./BMICalculatorFormInputsSection.module.css";

const BMICalculatorFormInputsSection: React.FC = (): React.ReactElement => {
  const {
    heightInputContextValue,
    weightInputContextValue,
  }: IBMICalculatorFormInputsContextValue =
    useContext<BMICalculatorFormInputsContextType>(
      BMICalculatorFormInputsContext,
    ) as IBMICalculatorFormInputsContextValue;

  return (
    <section className={styles.bmiCalculatorFormInputsSection}>
      <BMICalculatorFormInput
        label="Enter your height:"
        placeholder="Ex: 1,75 or 1.75"
        max={9.99}
        {...heightInputContextValue}
      />

      <BMICalculatorFormInput
        label="Enter your weight:"
        placeholder="Ex: 75,36 or 75.36"
        max={999.99}
        {...weightInputContextValue}
      />
    </section>
  );
};

export default BMICalculatorFormInputsSection;
