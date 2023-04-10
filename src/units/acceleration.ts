import {Unit} from "../Unit";
import {velocityUnits} from "./velocity";
import {timeUnits} from "./time";
import {lengthUnits} from "./length";

export const accelerationBase = Unit.fromSubUnits([{unit: velocityUnits.metrePerSecond, exponent: 1}, {unit: timeUnits.second, exponent: -1}], "m/s^2");

export const accelerationUnits = {
  metrePerSecondSquared: accelerationBase,
  footPerSecondSquared: Unit.fromSubUnits([{unit: velocityUnits.footPerSecond, exponent: 1}, {unit: timeUnits.second, exponent: -1}], "ft/s^2"),
  gal: Unit.fromSubUnits([{unit: lengthUnits.metre.withPrefix("centi"), exponent: 1}, {unit: timeUnits.second, exponent: -2}], "Gal"),
  standardGravity: accelerationBase.withFactor(9.80665, "g_0"),
};

export type AccelerationUnit = keyof typeof accelerationUnits;