import { formatResult } from "./formatResult";

export function numberCorrection(
  numArray: number[],
  target: number,
  focusIndex: number,
  focusStop: number
) {
  for (let i = focusIndex; i <= focusStop; i++) {
    const original = numArray[i];

    for (let substitute = 0; substitute <= 9; substitute++) {
      numArray[i] = substitute;
      const currentNumber = BigInt(numArray.join(""));
      const modResult = currentNumber % 97n;
      const digit = 98n - modResult;

      if (digit === BigInt(target)) {
        return formatResult(numArray, Number(digit), focusStop);
      }
    }

    numArray[i] = original;
  }
  return numArray.join("");
}
