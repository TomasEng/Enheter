import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const lengthDimension: Dimension = { length: 1 };
export const lengthBase = new Unit("metre", lengthDimension);

export function lengthUnit(name: string, factor: number): Unit {
  return new Unit(name, lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(factor));
}

export const lengthUnits = {
  angstrom: lengthUnit("angstrom", 1e-10),
  astronomicalUnit: lengthUnit("astronomical unit", 149597870700),
  fathom: lengthUnit("fathom", 1.8288),
  foot: lengthUnit("foot", 0.3048),
  furlong: lengthUnit("furlong", 201.168),
  inch: lengthUnit("inch", 0.0254),
  lightYear: lengthUnit("light year", 9460730472580800),
  metre: lengthBase,
  micron: lengthUnit("micron", 1e-6),
  nauticalMile: lengthUnit("nautical mile", 1852),
  parsec: lengthUnit("parsec", 30856775814913600),
  scandinavianMile: lengthUnit("Scandinavian mile", 10000),
  statuteMile: lengthUnit("statute mile", 1609.344),
  yard: lengthUnit("yard", 0.9144),
}

export type LengthUnit = keyof typeof lengthUnits;