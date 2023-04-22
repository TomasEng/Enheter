import {watt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {PowerDimension} from '../types/dimensions';

export const powerUnits = {
  watt,
  horsepower: watt.withFactor(735.49875, 'hp'),
};

export type PowerUnit = keyof typeof powerUnits;

export const powerUnitList: UnitList<PowerDimension, PowerUnit> = {
  dimension: {mass: 1, length: 2, time: -3},
  units: powerUnits,
};

/**
 * Initiates a measure of power.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const power = (unit: PowerUnit, value: number): Measure =>
  new Measure(powerUnits[unit], value);