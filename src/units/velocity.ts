import {lengthUnits} from './length';
import {timeUnits} from './time';
import {metre, metrePerSecond} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {Unit} from '../Unit';
import {VelocityDimension} from '../types/dimensions';

export const velocityUnits = {
  footPerSecond: lengthUnits.foot.dividedBy(timeUnits.second) as Unit<VelocityDimension>,
  kilometrePerHour: metre.withPrefix('kilo').dividedBy(timeUnits.hour, 'km/h') as Unit<VelocityDimension>,
  knot: lengthUnits.nauticalMile.dividedBy(timeUnits.hour, 'kt') as Unit<VelocityDimension>,
  metrePerHour: metre.dividedBy(timeUnits.hour) as Unit<VelocityDimension>,
  metrePerSecond,
  milePerHour: lengthUnits.statuteMile.dividedBy(timeUnits.hour, 'mph') as Unit<VelocityDimension>,
};

export type VelocityUnit = keyof typeof velocityUnits;

export const velocityUnitList: UnitList<VelocityDimension, VelocityUnit> = {
  dimension: {length: 1, time: -1},
  units: velocityUnits,
};

/**
 * Initiates a measure of velocity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const velocity = (unit: VelocityUnit, value: number): Measure =>
  new Measure(velocityUnits[unit], value);