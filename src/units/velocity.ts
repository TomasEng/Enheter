import {lengthUnits} from './length';
import {timeUnits} from './time';
import {metre, metrePerSecond} from './basicUnits';
import {Measure} from '../Measure';

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second),
  kilometrePerHour: metre.withPrefix('kilo').dividedBy(timeUnits.hour, 'km/h'),
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'kt'),
  metrePerHour: metre.dividedBy(timeUnits.hour),
  metrePerSecond,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mph'),
};

export type VelocityUnit = keyof typeof velocityUnits;

/**
 * Initiates a measure of velocity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const velocity = (unit: VelocityUnit, value: number): Measure =>
  new Measure(velocityUnits[unit], value);