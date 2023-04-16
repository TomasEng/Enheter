import {farad} from './basicUnits';
import {Measure} from '../Measure';

export const capacitanceUnits = {farad};

export type CapacitanceUnit = keyof typeof capacitanceUnits;

/**
 * Initiates a measure of capacitance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const capacitance = (
  unit: CapacitanceUnit,
  value: number
): Measure => new Measure(capacitanceUnits[unit], value);