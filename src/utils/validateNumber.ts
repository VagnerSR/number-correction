import { Process } from "./Types/types";

export const validateNumber = (process: Process): Process | null => {
  process.n = process.numberCNJ.substring(0, 7);
  process.d = process.numberCNJ.substring(7, 9);
  process.a = process.numberCNJ.substring(9, 13);
  process.j = process.numberCNJ.substring(13, 14);
  process.tr = process.numberCNJ.substring(14, 16);
  process.o = process.numberCNJ.substring(16, 20);

  const oprationDV = parseInt(process.n) % 97;
  const operation1 =
    parseInt(`${oprationDV}${process.a}${process.j}${process.tr}`) % 97;
  const operation2 = parseInt(`${operation1}${process.o}${process.d}`) % 97;

  if (operation2 !== 1) {
    return null;
  }

  return process;
};
