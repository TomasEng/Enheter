import {lengthUnits} from "./length";
import {timeUnits} from "./time";

export const velocityBase = lengthUnits.metre.dividedBy(timeUnits.second, 'm/s');

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second),
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'kt'),
  metrePerHour: lengthUnits.metre.dividedBy(timeUnits.hour),
  metrePerSecond: velocityBase,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mph'),
};

export type VelocityUnit = keyof typeof velocityUnits;