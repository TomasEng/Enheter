import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const lengthDimension: Dimension = { length: 1 };
export const lengthBase = new Unit("m", lengthDimension);

export function lengthUnit(name: string, factor: number): Unit {
  return new Unit(name, lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(factor));
}

export const lengthUnits = {
  angstrom: lengthUnit("Å", 1e-10),
  astronomicalUnit: lengthUnit("AU", 149597870700),
  fathom: lengthUnit("fathom", 1.8288),
  foot: lengthUnit("ft", 0.3048),
  furlong: lengthUnit("furlong", 201.168),
  inch: lengthUnit("in", 0.0254),
  lightYear: lengthUnit("ly", 9460730472580800),
  metre: lengthBase,
  micron: lengthUnit("μm", 1e-6),
  nauticalMile: lengthUnit("NM", 1852),
  parsec: lengthUnit("pc", 30856775814913600),
  scandinavianMile: lengthUnit("mil", 10000),
  statuteMile: lengthUnit("mi", 1609.344),
  yard: lengthUnit("yd", 0.9144),
}

export type LengthUnit = keyof typeof lengthUnits;