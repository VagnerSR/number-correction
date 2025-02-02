import { formatResult } from "./formatResult";

export function yearCorrection(
  numArray: number[],
  target: number,
  focusIndex: number
) {
  const modifiedArray = numArray
    .slice(0, focusIndex + 1)
    .concat(numArray.slice(focusIndex + 3));
  modifiedArray.push(0, 0);

  for (let i = focusIndex + 4; i >= focusIndex + 1; i--) {
    const original = modifiedArray[i];

    for (let substitute = 0; substitute <= 9; substitute++) {
      modifiedArray[i] = substitute;
      const currentNumber = BigInt(modifiedArray.join(""));
      const modResult = currentNumber % 97n;
      const checkDigits = 98n - modResult;
      console.log(checkDigits, " - ", target);

      if (Number(checkDigits) == target) {
        const checkDigitsArray = checkDigits
          .toString()
          .padStart(2, "0")
          .split("")
          .map(Number);

        const finalArray = [
          ...modifiedArray.slice(0, focusIndex + 1),
          ...checkDigitsArray,
          ...modifiedArray.slice(focusIndex + 1),
        ];
        return formatResult(finalArray);
      }
    }

    modifiedArray[i] = original;
  }
  return modifiedArray.join("");
}
