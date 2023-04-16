import {ohm} from './basicUnits';
import {Measure} from '../Measure';

export const resistanceUnits = {ohm};

export type ResistanceUnit = keyof typeof resistanceUnits;

/**
 * Initiates a measure of resistance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const resistance = (
  unit: ResistanceUnit,
  value: number
): Measure => new Measure(resistanceUnits[unit], value);