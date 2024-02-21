//types
import { NumberOrNull } from "../types/NumberOrNull.ts";
import { BMILevelsOrNull } from "../types/BMILevelsOrNull.ts";

export interface IBMINumberAndLevel {
  bmiNumber: NumberOrNull;
  bmiLevel: BMILevelsOrNull;
}
