import {ohm} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ResistanceDimension} from '../types/dimensions';

const units = {ohm};

export type ResistanceUnit = keyof typeof units;

export const resistanceUnits: UnitList<ResistanceDimension, ResistanceUnit> = {
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