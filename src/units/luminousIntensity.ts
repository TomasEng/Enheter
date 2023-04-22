import {candela} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LuminousIntensityDimension} from '../types/dimensions';

export const luminousIntensityUnits = {
  candela,
  candlepower: candela.withFactor(0.981, 'cp'),
};

export type LuminousIntensityUnit = keyof typeof luminousIntensityUnits;

export const luminousIntensityUnitList: UnitList<LuminousIntensityDimension, LuminousIntensityUnit> = {
  dimension: {luminousIntensity: 1},
  units: luminousIntensityUnits,
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
): Measure => new Measure(luminousIntensityUnits[unit], value);