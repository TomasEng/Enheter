import {ohm} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ResistanceDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {ohm};

export type ResistanceUnit = keyof typeof units;

export const resistanceUnits: UnitList<ResistanceDimension, ResistanceUnit> = {
  dimensionName: 'resistance',
  dimension: {mass: 1, length: 2, time: -3, current: -2},
  units,
};

/**
 * Initiates a measure of resistance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const resistance = (
  unit: ResistanceUnit,
  value: number
): Measure => new Measure(units[unit], value);

/**
 * Gets a given unit of resistance.
 * @param key The key of the unit.
 * @returns The resistance unit.
 */
export const resistanceUnit = (key: ResistanceUnit): Unit<ResistanceDimension> => units[key];