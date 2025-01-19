import { formatResult } from "./formatResult";

export function digitCorrection(numArray: number[], focusStop: number) {
  const currentNumber = BigInt(numArray.join(""));

  const modResult = currentNumber % 97n;

  const digit = 98n - modResult;

  return formatResult(numArray, Number(digit), focusStop);
}
