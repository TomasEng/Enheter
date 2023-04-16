import {watt} from './basicUnits';
import {Measure} from '../Measure';

export const powerUnits = {
  watt,
  horsepower: watt.withFactor(735.49875, 'hp'),
};

export type PowerUnit = keyof typeof powerUnits;

/**
 * Initiates a measure of power.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const power = (unit: PowerUnit, value: number): Measure =>
  new Measure(powerUnits[unit], value);