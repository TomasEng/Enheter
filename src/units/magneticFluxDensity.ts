import {tesla} from './basicUnits';
import {Measure} from '../Measure';

export const magneticFluxDensityUnits = {
  gauss: tesla.withFactor(1e-4, 'G'),
  tesla,
};

export type MagneticFluxDensityUnit = keyof typeof magneticFluxDensityUnits;

/**
 * Initiates a measure of magnetic flux density.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const magneticFluxDensity = (
  unit: MagneticFluxDensityUnit,
  value: number
): Measure => new Measure(magneticFluxDensityUnits[unit], value);