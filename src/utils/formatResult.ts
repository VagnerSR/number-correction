export function formatResult(
  numArray: number[],
  digit: number,
  focusStop: number
) {
  if (digit < 10) {
    numArray.splice(focusStop + 1, 0, 0, digit);
  } else {
    numArray.splice(focusStop + 1, 0, digit);
  }

  const trimmedNumber = numArray.join("").replace(/0+$/, "");

  const formattedNumber = `${trimmedNumber.slice(0, 7)}-${trimmedNumber.slice(
    7,
    9
  )}.${trimmedNumber.slice(9, 13)}.${trimmedNumber.slice(
    13,
    14
  )}.${trimmedNumber.slice(14, 16)}.${trimmedNumber.slice(16)}`;

  return `${formattedNumber}`;
}
