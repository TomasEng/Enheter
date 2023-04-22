import {ohmMetre} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ResistivityDimension} from '../types/dimensions';

export const resistivityUnits = {ohmMetre};

export type ResistivityUnit = keyof typeof resistivityUnits;

export const resistivityUnitList: UnitList<ResistivityDimension, ResistivityUnit> = {
  dimension: {mass: 1, length: 3, time: -3, current: -2},
  units: resistivityUnits,
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
): Measure => new Measure(resistivityUnits[unit], value);