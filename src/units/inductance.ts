import {henry} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {InductanceDimension} from '../types/dimensions';

export const inductanceUnits = {henry};

export type InductanceUnit = keyof typeof inductanceUnits;

export const inductanceUnitList: UnitList<InductanceDimension, InductanceUnit> = {
  dimension: {mass: 1, length: 2, time: -2, current: -2},
  units: inductanceUnits,
};

/**
 * Initiates a measure of inductance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const inductance = (
  unit: InductanceUnit,
  value: number
): Measure => new Measure(inductanceUnits[unit], value);