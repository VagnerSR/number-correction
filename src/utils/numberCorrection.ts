import { formatResult } from "./formatResult";
import { validateNumber } from "./validateNumber";

export function numberCorrection(
  numArray: number[],
  focusIndex: number,
  focusStop: number
): string {
  if (focusIndex > focusStop) {
    return numArray.join("");
  }

  const original = numArray[focusIndex];

  for (let substitute = 0; substitute <= 9; substitute++) {
    numArray[focusIndex] = substitute;
    const currentNumber = numArray.join("");
    const result = validateNumber({ numberCNJ: currentNumber });

    if (result !== null) {
      return formatResult(numArray);
    }
  }

  numArray[focusIndex] = original;

  if (focusIndex < focusStop) {
    [numArray[focusIndex], numArray[focusIndex + 1]] = [
      numArray[focusIndex + 1],
      numArray[focusIndex],
    ];

    const swappedNumber = numArray.join("");
    const result = validateNumber({ numberCNJ: swappedNumber });

    if (result !== null) {
      return formatResult(numArray);
    }

    [numArray[focusIndex], numArray[focusIndex + 1]] = [
      numArray[focusIndex + 1],
      numArray[focusIndex],
    ];
  }

  return numberCorrection(numArray, focusIndex + 1, focusStop);
}
