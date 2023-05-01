import {tesla} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MagneticFluxDensityDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  gauss: tesla.withFactor(1e-4, 'G', 'gauss'),
  tesla,
};

export type MagneticFluxDensityUnit = keyof typeof units;

export const magneticFluxDensityUnits: UnitList<MagneticFluxDensityDimension, MagneticFluxDensityUnit> = {
  dimensionName: 'magneticFluxDensity',
  dimension: {mass: 1, time: -2, current: -1},
  units,
};

/**
 * Initiates a measure of magnetic flux density.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const magneticFluxDensity = (
  unit: MagneticFluxDensityUnit,
  value: number
): Measure<'magneticFluxDensity'> => new Measure<'magneticFluxDensity'>(units[unit], value);

/**
 * Gets a given unit of magneticFluxDensity.
 * @param key The key of the unit.
 * @returns The magneticFluxDensity unit.
 */
export const magneticFluxDensityUnit = (key: MagneticFluxDensityUnit): Unit<MagneticFluxDensityDimension> => units[key];