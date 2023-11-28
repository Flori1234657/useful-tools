export const calculateRatio = (
  v1: number,
  v2: number,
  calc: "W" | "H" | "A"
): number => {
  if (calc === "A") return v1 / v2;
  return v1 * v2;
};
