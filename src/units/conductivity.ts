import {siemensPerMetre} from './basicUnits';
import {Measure} from '../Measure';

export const conductivityUnits = {siemensPerMetre};

export type ConductivityUnit = keyof typeof conductivityUnits;

/**
 * Initiates a measure of conductivity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const conductivity = (
  unit: ConductivityUnit,
  value: number
): Measure => new Measure(conductivityUnits[unit], value);