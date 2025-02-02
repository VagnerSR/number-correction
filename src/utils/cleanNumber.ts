export function cleanNumber(number: string) {
  const match = number.match(/-(\d{2})/);
  const target = match ? parseInt(match[1], 10) : null;

  if (target === null) {
    throw new Error(
      "Invalid number format: Missing '-' with two digits after it."
    );
  }

  const modified = number.replace(/[-.]/g, "");

  const resultArray = modified.split("").map(Number);

  const focusIndex = resultArray.findIndex((num) => num !== 0);

  const stopIndex = number.indexOf("-") - 1;

  return { resultArray, target, focusIndex, stopIndex };
}
