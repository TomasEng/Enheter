import {ohmMetre} from './basicUnits';
import {Measure} from '../Measure';

export const resistivityUnits = {ohmMetre};

export type ResistivityUnit = keyof typeof resistivityUnits;

/**
 * Initiates a measure of resistivity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const resistivity = (
  unit: ResistivityUnit,
  value: number
): Measure => new Measure(resistivityUnits[unit], value);