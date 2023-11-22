import getContrastRatio from "get-contrast-ratio/src/index";

export type SharableObj = {
  state: "GOOD" | "BAD" | "MIDDLE";
  ratio: number;
};

export const checkColorContrast = (cl1: string, cl2: string): SharableObj => {
  const returnedVal = getContrastRatio(cl1, cl2);

  if (returnedVal < 4.5) return { state: "BAD", ratio: returnedVal };
  if (returnedVal <= 7) return { state: "MIDDLE", ratio: returnedVal };
  if (returnedVal > 7) return { state: "GOOD", ratio: returnedVal };

  return { state: "BAD", ratio: returnedVal };
};
