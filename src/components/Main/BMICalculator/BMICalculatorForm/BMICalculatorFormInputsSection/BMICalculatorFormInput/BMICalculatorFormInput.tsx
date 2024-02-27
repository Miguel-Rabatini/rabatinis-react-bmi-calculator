//react
import React from "react";

//Types
import { BMICalculatorFormInputValue } from "../../../../../../@types/types/BMICalculatorFormInputValue.ts";

//Style
import styles from "./BMICalculatorFormInput.module.css";

interface IProps {
  label: string;
  placeholder: string;
  max: number;
  value: BMICalculatorFormInputValue;
  onChange: React.Dispatch<React.SetStateAction<BMICalculatorFormInputValue>>;
}

const BMICalculatorFormInput: React.FC<IProps> = ({
  label,
  placeholder,
  max,
  value,
  onChange,
}): React.ReactElement => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ): void => {
    const inputValue: string = e.target.value;
    onChange(inputValue && parseFloat(inputValue));
  };

  return (
    <label className={styles.inputLabel}>
      <span className={styles.inputLabel__label}>{label}</span>

      <input
        type="number"
        placeholder={placeholder}
        step={0.01}
        max={max}
        inputMode="decimal"
        required
        value={value}
        className={styles.inputLabel__input}
        onChange={handleChange}
      />
    </label>
  );
};

export default BMICalculatorFormInput;
