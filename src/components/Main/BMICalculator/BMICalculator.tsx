//react
import React from "react";

//Contexts
import { BMICalculatorFormInputsContext } from "../../../store/BMICalculatorFormInputsContext.ts";

//Components
import BMICalculatorResultDisplay from "./BMICalculatorResultDisplay";
import BMICalculatorForm from "./BMICalculatorForm";

//Interfaces
import { IUseBMICalculatorReturn } from "../../../@types/interfaces/IUseBMICalculatorReturn.ts";

//Hook
import { useBMICalculator } from "./useBMICalculator.ts";

//Style
import styles from "./BMICalculator.module.css";

const BMICalculator: React.FC = (): React.ReactElement => {
  const {
    bmiNumberAndLevel,
    bmiCalculatorFormInputsContextValue,
    handleSubmit,
  }: IUseBMICalculatorReturn = useBMICalculator();

  return (
    <article className={styles.bmiCalculator}>
      <BMICalculatorResultDisplay {...bmiNumberAndLevel} />

      <BMICalculatorFormInputsContext.Provider
        value={bmiCalculatorFormInputsContextValue}
      >
        <BMICalculatorForm onSubmit={handleSubmit} />
      </BMICalculatorFormInputsContext.Provider>
    </article>
  );
};

export default BMICalculator;
