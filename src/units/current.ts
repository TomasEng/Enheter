import {ampere} from './basicUnits';
import {Measure} from '../Measure';
import {CurrentDimension} from '../types/dimensions';
import {UnitList} from '../types/UnitList';

export const currentUnits = {ampere};

export type CurrentUnit = keyof typeof currentUnits;

export const currentUnitList: UnitList<CurrentDimension, CurrentUnit> = {
  dimension: {current: 1},
  units: currentUnits,
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
): Measure => new Measure(currentUnits[unit], value);