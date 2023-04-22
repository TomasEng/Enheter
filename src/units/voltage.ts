import {volt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {VoltageDimension} from '../types/dimensions';

export const voltageUnits = {volt};

export type VoltageUnit = keyof typeof voltageUnits;

export const voltageUnitList: UnitList<VoltageDimension, VoltageUnit> = {
  dimension: {mass: 1, length: 2, time: -3, current: -1},
  units: voltageUnits,
};

/**
 * Initiates a measure of voltage.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const voltage = (unit: VoltageUnit, value: number): Measure =>
  new Measure(voltageUnits[unit], value);