import {gram, kilogramPerCubicMetre, metre} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {DensityDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  kilogramPerCubicMetre,
  gramPerCubicCentimetre: gram.dividedBy(metre.withPrefix('centi').cubed(), undefined, 'gramPerCubicCentimetre') as Unit<DensityDimension>,
};

export type DensityUnit = keyof typeof units;

export const densityUnits: UnitList<DensityDimension, DensityUnit> = {
  dimensionName: 'density',
  dimension: {mass: 1, length: -3},
  units,
};

/**
 * Initiates a measure of density.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const density = (unit: DensityUnit, value: number): Measure<'density'> =>
  new Measure<'density'>(units[unit], value);

/**
 * Gets a given unit of density.
 * @param key The key of the unit.
 * @returns The density unit.
 */
export const densityUnit = (key: DensityUnit): Unit<DensityDimension> => units[key];