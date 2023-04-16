import {kilogram, pound} from './basicUnits';
import {Measure} from '../Measure';

export const massUnits = {
  carat: kilogram.withFactor(.0002, 'ct'),
  gram: kilogram.withPrefix(null),
  kilogram,
  ounce: kilogram.withFactor(.028349523125, '℥'),
  pound,
  tonne: kilogram.withFactor(1000, 't'),
};

export type MassUnit = keyof typeof massUnits;

/**
 * Initiates a measure of mass.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const mass = (unit: MassUnit, value: number): Measure =>
  new Measure(massUnits[unit], value);