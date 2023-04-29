import {ampere} from './basicUnits';
import {Measure} from '../Measure';
import {CurrentDimension} from '../types/dimensions';
import {UnitList} from '../types/UnitList';

const units = {ampere};

export type CurrentUnit = keyof typeof units;

export const currentUnits: UnitList<CurrentDimension, CurrentUnit> = {
  dimensionName: 'current',
  dimension: {current: 1},
  units,
};

/**
 * Initiates a measure of current.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const current = (
  unit: CurrentUnit,
  value: number
): Measure => new Measure(units[unit], value);