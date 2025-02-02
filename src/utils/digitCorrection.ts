import { formatResult } from "./formatResult";

export function digitCorrection(numArray: number[], stopIndex: number) {
  const modifiedArray = numArray
    .slice(0, stopIndex + 1)
    .concat(numArray.slice(stopIndex + 3));

  const currentNumber = BigInt(modifiedArray.join("") + "00");
  const modResult = currentNumber % 97n;
  const checkDigits = 98n - modResult;

  const checkDigitsArray = checkDigits
    .toString()
    .padStart(2, "0")
    .split("")
    .map(Number);

  const finalArray = [
    ...modifiedArray.slice(0, stopIndex + 1),
    ...checkDigitsArray,
    ...modifiedArray.slice(stopIndex + 1),
  ];

  return formatResult(finalArray);
}
