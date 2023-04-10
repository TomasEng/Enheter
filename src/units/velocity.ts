import {Dimension} from "../Dimension";
import {lengthUnits} from "./length";
import {timeUnits} from "./time";

export const velocityDimension: Dimension = { length: 1, time: -1 };
export const velocityBase = lengthUnits.metre.dividedBy(timeUnits.second, 'm/s');

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second),
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'kt'),
  metrePerHour: lengthUnits.metre.dividedBy(timeUnits.hour),
  metrePerSecond: velocityBase,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mph'),
}