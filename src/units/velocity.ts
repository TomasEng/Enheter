import {Dimension} from "../Dimension";
import {lengthUnits} from "./length";
import {timeUnits} from "./time";

export const velocityDimension: Dimension = { length: 1, time: -1 };
export const velocityBase = lengthUnits.metre.dividedBy(timeUnits.second, 'metre per second');

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second),
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'knot'),
  metrePerHour: lengthUnits.metre.dividedBy(timeUnits.hour),
  metrePerSecond: velocityBase,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mile per hour'),
}