import {mole} from './basicUnits';
import {Measure} from '../Measure';

export const amountOfSubstanceUnits = {mole};

export type AmountOfSubstanceUnit = keyof typeof amountOfSubstanceUnits;

/**
 * Initiates a measure of amount of substance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const amountOfSubstance = (
  unit: AmountOfSubstanceUnit,
  value: number
): Measure => new Measure(amountOfSubstanceUnits[unit], value);