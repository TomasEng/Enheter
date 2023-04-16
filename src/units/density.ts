import {gram, kilogramPerCubicMetre, metre} from './basicUnits';
import {Measure} from '../Measure';

export const densityUnits = {
  kilogramPerCubicMetre,
  gramPerCubicCentimetre: gram.dividedBy(metre.withPrefix('centi').cubed()),
};

export type DensityUnit = keyof typeof densityUnits;

/**
 * Initiates a measure of density.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const density = (unit: DensityUnit, value: number): Measure =>
  new Measure(densityUnits[unit], value);