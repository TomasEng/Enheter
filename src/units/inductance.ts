import {henry} from './basicUnits';
import {Measure} from '../Measure';

export const inductanceUnits = {henry};

export type InductanceUnit = keyof typeof inductanceUnits;

/**
 * Initiates a measure of inductance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const inductance = (
  unit: InductanceUnit,
  value: number
): Measure => new Measure(inductanceUnits[unit], value);