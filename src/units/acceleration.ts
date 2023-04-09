import {Unit} from "../Unit";
import {velocityUnits} from "./velocity";
import {timeUnits} from "./time";
import {lengthUnits} from "./length";

export const accelerationBase = Unit.fromSubUnits([{unit: velocityUnits.metrePerSecond, exponent: 1}, {unit: timeUnits.second, exponent: -1}], "metre per second squared");

export const accelerationUnits = {
  metrePerSecondSquared: accelerationBase,
  footPerSecondSquared: Unit.fromSubUnits([{unit: velocityUnits.footPerSecond, exponent: 1}, {unit: timeUnits.second, exponent: -1}], "foot per second squared"),
  gal: Unit.fromSubUnits([{unit: lengthUnits.metre.withPrefix("centi"), exponent: 1}, {unit: timeUnits.second, exponent: -2}], "gal"),
  standardGravity: accelerationBase.withFactor(9.80665, "standard gravity"),
}

export type AccelerationUnit = keyof typeof accelerationUnits;