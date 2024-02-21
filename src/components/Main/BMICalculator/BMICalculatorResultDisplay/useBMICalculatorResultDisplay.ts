//react
import { useEffect, useState } from "react";

//Types
import { BMILevelsOrNull } from "../../../../@types/types/BMILevelsOrNull.ts";
import { BMICalculatorResultDisplayBGColorsOrNull } from "../../../../@types/types/BMICalculatorResultDisplayBGColorsOrNull.ts";

//Enums
import { BMILevels } from "../../../../@types/enums/BMILevels.ts";
import { BMICalculatorResultDisplayBGColors } from "../../../../@types/enums/BMICalculatorResultDisplayBGColors.ts";

export const useBMICalculatorResultDisplay = (
  bmiLevel: BMILevelsOrNull,
): BMICalculatorResultDisplayBGColorsOrNull => {
  const [resultDisplayBGColor, setResultDisplayBGColor] =
    useState<BMICalculatorResultDisplayBGColorsOrNull>(null);

  useEffect(() => {
    const defineResultDisplayBGColor = (): void => {
      if (bmiLevel) {
        switch (bmiLevel) {
          case BMILevels.Underweight:
            setResultDisplayBGColor(BMICalculatorResultDisplayBGColors.Yellow);
            break;
          case BMILevels.NormalWeight:
            setResultDisplayBGColor(BMICalculatorResultDisplayBGColors.Green);
            break;
          case BMILevels.Overweight:
            setResultDisplayBGColor(BMICalculatorResultDisplayBGColors.Yellow);
            break;
          case BMILevels.Obese:
            setResultDisplayBGColor(BMICalculatorResultDisplayBGColors.Red);
            break;
          case BMILevels.SeverelyObese:
            setResultDisplayBGColor(BMICalculatorResultDisplayBGColors.Purple);
        }
      }
    };

    defineResultDisplayBGColor();
  }, [bmiLevel]);

  return resultDisplayBGColor;
};
