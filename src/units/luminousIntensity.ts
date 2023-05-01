import {candela} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LuminousIntensityDimension} from '../types/dimensions';
import {Unit} from '../Unit';

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
): Measure<'luminousIntensity'> => new Measure<'luminousIntensity'>(units[unit], value);

/**
 * Gets a given unit of luminousIntensity.
 * @param key The key of the unit.
 * @returns The luminousIntensity unit.
 */
export const luminousIntensityUnit = (key: LuminousIntensityUnit): Unit<LuminousIntensityDimension> => units[key];