import {lengthUnits} from './length';
import {timeUnits} from './time';
import {metre, metrePerSecond} from './basicUnits';

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second),
  kilometrePerHour: metre.withPrefix('kilo').dividedBy(timeUnits.hour, 'km/h'),
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'kt'),
  metrePerHour: metre.dividedBy(timeUnits.hour),
  metrePerSecond,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mph'),
};

export type VelocityUnit = keyof typeof velocityUnits;