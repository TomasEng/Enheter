import {watt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {PowerDimension} from '../types/dimensions';

const units = {
  watt,
  horsepower: watt.withFactor(735.49875, 'hp', 'horsepower'),
};

export type PowerUnit = keyof typeof units;

export const powerUnits: UnitList<PowerDimension, PowerUnit> = {
  dimensionName: 'power',
  dimension: {mass: 1, length: 2, time: -3},
  units,
};

/**
 * Initiates a measure of power.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const power = (unit: PowerUnit, value: number): Measure =>
  new Measure(units[unit], value);