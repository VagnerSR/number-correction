import { courts } from "./courts";
import { Process } from "./Types/types";

export const searchCourt = (process: Process): Process | { erro: string } => {
  if (!process.j || !process.tr) {
    return { erro: "Erro! Dados do tribunal inválidos." };
  }

  const courtJ = courts[Number(process.j)];
  if (!courtJ) {
    return { erro: `Erro! Tribunal ${process.j} não encontrado.` };
  }

  const court = courtJ[Number(process.tr)];
  if (!court.name) {
    return {
      erro: `Erro! O Tribunal ${court?.name || "desconhecido"} não possui API.`,
    };
  }

  process.courtName = court.name;

  return process;
};
