import {footPerSecond, hour, metre, metrePerSecond, nauticalMile, statuteMile} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {Unit} from '../Unit';
import {VelocityDimension} from '../types/dimensions';

const units = {
  footPerSecond,
  kilometrePerHour: metre.withPrefix('kilo').dividedBy(hour, 'km/h', 'kilometrePerHour') as Unit<VelocityDimension>,
  knot: nauticalMile.dividedBy(hour, 'kt', 'knot') as Unit<VelocityDimension>,
  metrePerHour: metre.dividedBy(hour, undefined, 'metrePerHour') as Unit<VelocityDimension>,
  metrePerSecond,
  milePerHour: statuteMile.dividedBy(hour, 'mph', 'milePerHour') as Unit<VelocityDimension>,
};

export type VelocityUnit = keyof typeof units;

export const velocityUnits: UnitList<VelocityDimension, VelocityUnit> = {
  dimension: {length: 1, time: -1},
  units,
};

/**
 * Initiates a measure of velocity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const velocity = (unit: VelocityUnit, value: number): Measure =>
  new Measure(units[unit], value);