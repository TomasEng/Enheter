import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";
import {lengthUnits} from "./length";

export const areaDimension: Dimension = { length: 2 };
export const areaBase = lengthUnits.metre.raisedTo(2, "square metre");

export function areaUnit(name: string, factor: number): Unit {
  return new Unit(name, areaDimension, areaBase, BijectiveOperationChain.fromFactor(factor));
}

export const areaUnits = {
  acre: areaUnit("acre", 4046.8564224),
  are: areaUnit("are", 100),
  dekare: areaUnit("dekare", 1000),
  hectare: areaUnit("hectare", 10000),
  squareFoot: lengthUnits.foot.raisedTo(2, "square foot"),
  squareInch: lengthUnits.inch.raisedTo(2, "square inch"),
  squareMetre: areaBase,
}

export type AreaUnit = keyof typeof areaUnits;