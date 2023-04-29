import {siemens} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ConductanceDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {siemens};

export type ConductanceUnit = keyof typeof units;

export const conductanceUnits: UnitList<ConductanceDimension, ConductanceUnit> = {
  dimensionName: 'conductance',
  dimension: {mass: -1, length: -2, time: 3, current: 2},
  units,
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
): Measure => new Measure(units[unit], value);

/**
 * Gets a given unit of conductance.
 * @param key The key of the unit.
 * @returns The conductance unit.
 */
export const conductanceUnit = (key: ConductanceUnit): Unit<ConductanceDimension> => units[key];