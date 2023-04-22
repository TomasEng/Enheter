import {siemensPerMetre} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ConductivityDimension} from '../types/dimensions';

export const conductivityUnits = {siemensPerMetre};

export type ConductivityUnit = keyof typeof conductivityUnits;

export const conductivityUnitList: UnitList<ConductivityDimension, ConductivityUnit> = {
  dimension: {mass: -1, length: -3, time: 3, current: 2},
  units: conductivityUnits,
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
): Measure => new Measure(conductivityUnits[unit], value);