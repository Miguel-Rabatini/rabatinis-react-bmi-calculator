//react
import React, { useEffect, useState } from "react";

//Types
import { BMICalculatorFormInputValue } from "../../../@types/types/BMICalculatorFormInputValue.ts";
import { NumberOrNull } from "../../../@types/types/NumberOrNull.ts";
import { BMILevelsOrNull } from "../../../@types/types/BMILevelsOrNull.ts";

//Interfaces
import { IUseBMICalculatorReturn } from "../../../@types/interfaces/IUseBMICalculatorReturn.ts";

//Enums
import { BMILevels } from "../../../@types/enums/BMILevels.ts";

//Local types
type BooleanOrNull = boolean | null;

//Local enums
enum BMILevelLimits {
  UnderweightLimit = 18.4,
  NormalWeightLimit = 24.9,
  OverweightLimit = 29.9,
  ObeseLimit = 39.9,
}

export const useBMICalculator = (): IUseBMICalculatorReturn => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    calculateBMINumber();
    resetHeightAndWeightStates();
  };

  const [height, setHeight] = useState<BMICalculatorFormInputValue>("");
  const [weight, setWeight] = useState<BMICalculatorFormInputValue>("");
  const [bmiNumber, setBMINumber] = useState<NumberOrNull>(null);

  const calculateBMINumber = (): void => {
    if (heightOrWeightIsNumber(height) && heightOrWeightIsNumber(weight)) {
      const squaredHeight: number = Math.pow(height, 2);
      const bmiNumber: number = weight / squaredHeight;
      setBMINumber(bmiNumber);
    }
  };

  const heightOrWeightIsNumber = (
    heightOrWeight: BMICalculatorFormInputValue,
  ): heightOrWeight is number => {
    return typeof heightOrWeight === "number";
  };

  const resetHeightAndWeightStates = (): void => {
    setHeight("");
    setWeight("");
  };

  const [bmiLevel, setBMILevel] = useState<BMILevelsOrNull>(null);

  useEffect(() => {
    const defineBMILevel = (): void => {
      if (bmiNumber) {
        if (bmiLevelIsUnderweight()) setBMILevel(BMILevels.Underweight);
        else if (bmiLevelIsNormalWeight()) setBMILevel(BMILevels.NormalWeight);
        else if (bmiLevelIsOverweight()) setBMILevel(BMILevels.Overweight);
        else if (bmiLevelIsObese()) setBMILevel(BMILevels.Obese);
        else if (bmiLevelIsSeverelyObese())
          setBMILevel(BMILevels.SeverelyObese);
      }
    };

    const bmiLevelIsUnderweight = (): BooleanOrNull => {
      if (bmiNumber) return bmiNumber <= BMILevelLimits.UnderweightLimit;
      else return null;
    };

    const bmiLevelIsNormalWeight = (): BooleanOrNull => {
      if (bmiNumber)
        return (
          bmiNumber > BMILevelLimits.UnderweightLimit &&
          bmiNumber <= BMILevelLimits.NormalWeightLimit
        );
      else return null;
    };

    const bmiLevelIsOverweight = (): BooleanOrNull => {
      if (bmiNumber)
        return (
          bmiNumber > BMILevelLimits.NormalWeightLimit &&
          bmiNumber <= BMILevelLimits.OverweightLimit
        );
      else return null;
    };

    const bmiLevelIsObese = (): BooleanOrNull => {
      if (bmiNumber)
        return (
          bmiNumber > BMILevelLimits.OverweightLimit &&
          bmiNumber <= BMILevelLimits.ObeseLimit
        );
      else return null;
    };

    const bmiLevelIsSeverelyObese = (): BooleanOrNull => {
      if (bmiNumber) return bmiNumber > BMILevelLimits.ObeseLimit;
      else return null;
    };

    defineBMILevel();
  }, [bmiNumber]);

  return {
    bmiNumberAndLevel: { bmiNumber, bmiLevel },
    bmiCalculatorFormInputsContextValue: {
      heightInputContextValue: { value: height, onChange: setHeight },
      weightInputContextValue: { value: weight, onChange: setWeight },
    },
    handleSubmit,
  };
};
