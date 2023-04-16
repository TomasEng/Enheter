import {ampere} from './basicUnits';
import {Measure} from '../Measure';

export const currentUnits = {ampere};

export type CurrentUnit = keyof typeof currentUnits;

/**
 * Initiates a measure of current.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const current = (
  unit: CurrentUnit,
  value: number
): Measure => new Measure(currentUnits[unit], value);