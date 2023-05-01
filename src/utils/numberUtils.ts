export const numbersEqual = (
  a: number,
  b: number,
  epsilon = 100 * Number.EPSILON
): boolean => Math.abs(1 - a / b) < epsilon;

export const precise = (num: number): number => Number(num.toPrecision(-Math.log10(Number.EPSILON)));