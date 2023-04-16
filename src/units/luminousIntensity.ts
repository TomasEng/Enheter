import {candela} from './basicUnits';
import {Measure} from '../Measure';

export const luminousIntensityUnits = {
  candela,
  candlepower: candela.withFactor(0.981, 'cp'),
};

export type LuminousIntensityUnit = keyof typeof luminousIntensityUnits;

/**
 * Initiates a measure of luminous intensity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const luminousIntensity = (
  unit: LuminousIntensityUnit,
  value: number
): Measure => new Measure(luminousIntensityUnits[unit], value);