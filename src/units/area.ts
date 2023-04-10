import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";
import {lengthUnits} from "./length";

export const areaDimension: Dimension = { length: 2 };
export const areaBase = lengthUnits.metre.raisedTo(2, "m^2");

export function areaUnit(name: string, factor: number): Unit {
  return new Unit(name, areaDimension, areaBase, BijectiveOperationChain.fromFactor(factor));
}

export const areaUnits = {
  acre: areaUnit("ac", 4046.8564224),
  are: areaUnit("a", 100),
  dekare: areaUnit("daa", 1000),
  hectare: areaUnit("ha", 10000),
  squareFoot: lengthUnits.foot.raisedTo(2, "ft^2"),
  squareInch: lengthUnits.inch.raisedTo(2, "in^2"),
  squareMetre: areaBase,
}

export type AreaUnit = keyof typeof areaUnits;