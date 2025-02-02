export function formatResult(numArray: number[]) {
  const n = numArray.slice(0, 7).join("");
  const d = numArray.slice(7, 9).join("");
  const a = numArray.slice(9, 13).join("");
  const j = numArray.slice(13, 14).join("");
  const tr = numArray.slice(14, 16).join("");
  const o = numArray.slice(16, 20).join("");

  return `${n}-${d}.${a}.${j}.${tr}.${o}`;
}
