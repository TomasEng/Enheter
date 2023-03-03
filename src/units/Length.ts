import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {Measure} from "../Measure";
import {Prefix} from "../Prefix";

export const lengthDimension: Dimension = { length: 1 };

export const lengthUnits = {
  metre: new Unit("metre", lengthDimension),
  foot: new Unit("foot", lengthDimension, (v: number) => v * 0.3048, (v: number) => v / 0.3048),
  inch: new Unit("inch", lengthDimension, (v: number) => v * 0.0254, (v: number) => v / 0.0254),
  nauticalMile: new Unit("nautical mile", lengthDimension, (v: number) => v * 1852, (v: number) => v / 1852),
  statuteMile: new Unit("statute mile", lengthDimension, (v: number) => v * 1609.344, (v: number) => v / 1609.344),
}

export type LengthUnit = keyof typeof lengthUnits;

export class Length extends Measure {
  constructor(value: number, unit: LengthUnit = "metre", prefix: Prefix = null) {
    super(
      value,
      {length: 1},
      lengthUnits[unit],
      lengthUnits.metre,
      prefix
    );
  }
}