import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {Measure} from "../Measure";
import {Prefix} from "../Prefix";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const lengthDimension: Dimension = { length: 1 };
export const lengthBase = new Unit("metre", lengthDimension);

export const lengthUnits = {
  metre: lengthBase,
  foot: new Unit("foot", lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(0.3048)),
  inch: new Unit("inch", lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(0.0254)),
  nauticalMile: new Unit("nautical mile", lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(1852)),
  statuteMile: new Unit("statute mile", lengthDimension, lengthBase, BijectiveOperationChain.fromFactor(1609.344)),
}

export type LengthUnit = keyof typeof lengthUnits;