import {farad} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {CapacitanceDimension} from '../types/dimensions';

export const capacitanceUnits = {farad};

export type CapacitanceUnit = keyof typeof capacitanceUnits;

export const capacitanceUnitList: UnitList<CapacitanceDimension, CapacitanceUnit> = {
  dimension: {current: -2, length: -2, mass: 1, time: 4},
  units: capacitanceUnits,
};

/**
 * Initiates a measure of capacitance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const capacitance = (
  unit: CapacitanceUnit,
  value: number
): Measure => new Measure(capacitanceUnits[unit], value);