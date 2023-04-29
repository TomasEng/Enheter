import {candela} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LuminousIntensityDimension} from '../types/dimensions';

const units = {
  candela,
  candlepower: candela.withFactor(0.981, 'cp', 'candlepower'),
};

export type LuminousIntensityUnit = keyof typeof units;

export const luminousIntensityUnits: UnitList<LuminousIntensityDimension, LuminousIntensityUnit> = {
  dimensionName: 'luminousIntensity',
  dimension: {luminousIntensity: 1},
  units,
};

/**
 * Initiates a measure of luminous intensity.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const luminousIntensity = (
  unit: LuminousIntensityUnit,
  value: number
): Measure => new Measure(units[unit], value);