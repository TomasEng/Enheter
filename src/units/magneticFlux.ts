import {weber} from './basicUnits';
import {Measure} from '../Measure';

export const magneticFluxUnits = {
  maxwell: weber.withFactor(1e-8, 'Mx'),
  weber,
};

export type MagneticFluxUnit = keyof typeof magneticFluxUnits;

/**
 * Initiates a measure of magnetic flux.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const magneticFlux = (
  unit: MagneticFluxUnit,
  value: number
): Measure => new Measure(magneticFluxUnits[unit], value);