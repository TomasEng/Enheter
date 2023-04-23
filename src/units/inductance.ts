import {henry} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {InductanceDimension} from '../types/dimensions';

const units = {henry};

export type InductanceUnit = keyof typeof units;

export const inductanceUnits: UnitList<InductanceDimension, InductanceUnit> = {
  dimension: {mass: 1, length: 2, time: -2, current: -2},
  units,
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
): Measure => new Measure(units[unit], value);