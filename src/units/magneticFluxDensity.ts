import {tesla} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MagneticFluxDensityDimension} from '../types/dimensions';

export const magneticFluxDensityUnits = {
  gauss: tesla.withFactor(1e-4, 'G'),
  tesla,
};

export type MagneticFluxDensityUnit = keyof typeof magneticFluxDensityUnits;

export const magneticFluxDensityUnitList: UnitList<MagneticFluxDensityDimension, MagneticFluxDensityUnit> = {
  dimension: {mass: 1, time: -2, current: -1},
  units: magneticFluxDensityUnits,
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
): Measure => new Measure(magneticFluxDensityUnits[unit], value);