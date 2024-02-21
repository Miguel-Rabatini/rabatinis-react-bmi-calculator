//react
import React from "react";

//Types
import { NumberOrNull } from "../../../../@types/types/NumberOrNull.ts";
import { BMILevelsOrNull } from "../../../../@types/types/BMILevelsOrNull.ts";
import { BMICalculatorResultDisplayBGColorsOrNull } from "../../../../@types/types/BMICalculatorResultDisplayBGColorsOrNull.ts";

//Hook
import { useBMICalculatorResultDisplay } from "./useBMICalculatorResultDisplay.ts";

//Style
import styles from "./BMICalculatorResultDisplay.module.css";

interface IProps {
  bmiNumber: NumberOrNull;
  bmiLevel: BMILevelsOrNull;
}

const BMICalculatorResultDisplay: React.FC<IProps> = ({
  bmiNumber,
  bmiLevel,
}): React.ReactElement => {
  const resultDisplayBGColor: BMICalculatorResultDisplayBGColorsOrNull =
    useBMICalculatorResultDisplay(bmiLevel);

  return (
    <output
      style={
        resultDisplayBGColor
          ? { backgroundColor: resultDisplayBGColor }
          : undefined
      }
      className={styles.bmiCalculatorResultDisplay}
    >
      {bmiNumber?.toFixed(2)} {bmiNumber && bmiLevel && "|"} {bmiLevel}
    </output>
  );
};

export default BMICalculatorResultDisplay;
