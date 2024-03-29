import {siemensPerMetre} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ConductivityDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {siemensPerMetre};

export type ConductivityUnit = keyof typeof units;

export const conductivityUnits: UnitList<ConductivityDimension, ConductivityUnit> = {
  dimensionName: 'conductivity',
  dimension: {mass: -1, length: -3, time: 3, current: 2},
  units,
};

/**
 * Initiates a measure of conductivity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const conductivity = (
  unit: ConductivityUnit,
  value: number
): Measure<'conductivity'> => new Measure<'conductivity'>(units[unit], value);

/**
 * Gets a given unit of conductivity.
 * @param key The key of the unit.
 * @returns The conductivity unit.
 */
export const conductivityUnit = (key: ConductivityUnit): Unit<ConductivityDimension> => units[key];