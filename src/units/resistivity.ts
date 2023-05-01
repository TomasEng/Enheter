import {ohmMetre} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ResistivityDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {ohmMetre};

export type ResistivityUnit = keyof typeof units;

export const resistivityUnits: UnitList<ResistivityDimension, ResistivityUnit> = {
  dimensionName: 'resistivity',
  dimension: {mass: 1, length: 3, time: -3, current: -2},
  units,
};

/**
 * Initiates a measure of resistivity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const resistivity = (
  unit: ResistivityUnit,
  value: number
): Measure<'resistivity'> => new Measure<'resistivity'>(units[unit], value);

/**
 * Gets a given unit of resistivity.
 * @param key The key of the unit.
 * @returns The resistivity unit.
 */
export const resistivityUnit = (key: ResistivityUnit): Unit<ResistivityDimension> => units[key];