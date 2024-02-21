//react
import React from "react";

//Components
import BMICalculatorFormInputsSection from "./BMICalculatorFormInputsSection";

//Style
import styles from "./BMICalculatorForm.module.css";

interface IProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const BMICalculatorForm: React.FC<IProps> = ({
  onSubmit,
}): React.ReactElement => {
  return (
    <form className={styles.bmiCalculatorForm} onSubmit={onSubmit}>
      <BMICalculatorFormInputsSection />

      <input
        type="submit"
        value="Calculate"
        className={styles.bmiCalculatorForm__submitInput}
      />
    </form>
  );
};

export default BMICalculatorForm;
