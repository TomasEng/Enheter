import {siemens} from './basicUnits';
import {Measure} from '../Measure';

export const conductanceUnits = {siemens};

export type ConductanceUnit = keyof typeof conductanceUnits;

/**
 * Initiates a measure of conductance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const conductance = (
  unit: ConductanceUnit,
  value: number
): Measure => new Measure(conductanceUnits[unit], value);