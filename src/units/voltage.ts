import {volt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {VoltageDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {volt};

export type VoltageUnit = keyof typeof units;

export const voltageUnits: UnitList<VoltageDimension, VoltageUnit> = {
  dimensionName: 'voltage',
  dimension: {mass: 1, length: 2, time: -3, current: -1},
  units,
};

/**
 * Initiates a measure of voltage.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const voltage = (unit: VoltageUnit, value: number): Measure<'voltage'> =>
  new Measure<'voltage'>(units[unit], value);

/**
 * Gets a given unit of voltage.
 * @param key The key of the unit.
 * @returns The voltage unit.
 */
export const voltageUnit = (key: VoltageUnit): Unit<VoltageDimension> => units[key];