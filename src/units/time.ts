import {hour, minute, second} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {TimeDimension} from '../types/dimensions';

const units = {
  day: second.withFactor(86400, 'd', 'day'),
  hour,
  minute,
  second,
  week: second.withFactor(604800, 'week', 'week'),
};

export type TimeUnit = keyof typeof units;

export const timeUnits: UnitList<TimeDimension, TimeUnit> = {
  dimensionName: 'time',
  dimension: {time: 1},
  units,
};

/**
 * Initiates a measure of time.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const time = (unit: TimeUnit, value: number): Measure =>
  new Measure(units[unit], value);