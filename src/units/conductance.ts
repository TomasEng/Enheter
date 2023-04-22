import {siemens} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ConductanceDimension} from '../types/dimensions';

export const conductanceUnits = {siemens};

export type ConductanceUnit = keyof typeof conductanceUnits;

export const conductanceUnitList: UnitList<ConductanceDimension, ConductanceUnit> = {
  dimension: {mass: -1, length: -2, time: 3, current: 2},
  units: conductanceUnits,
};

/**
 * Initiates a measure of conductance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const conductance = (
  unit: ConductanceUnit,
  value: number
): Measure => new Measure(conductanceUnits[unit], value);