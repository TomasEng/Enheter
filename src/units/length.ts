import {chain, fathom, foot, furlong, inch, link, metre, nauticalMile, rod, statuteMile, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LengthDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  angstrom: metre.withFactor(1e-10, 'Å', 'angstrom'),
  astronomicalUnit: metre.withFactor(149597870700, 'AU', 'astronomicalUnit'),
  chain,
  fathom,
  fermi: metre.withFactor(1e-15, 'fm', 'fermi'),
  foot,
  furlong,
  inch,
  lightYear: metre.withFactor(9460730472580800, 'ly', 'lightYear'),
  link,
  metre,
  micron: metre.withFactor(1e-6, 'μm', 'micron'),
  nauticalMile,
  parsec: metre.withFactor(30856775814913600, 'pc', 'parsec'),
  rod,
  scandinavianMile: metre.withFactor(10000, 'mil', 'scandinavianMile'),
  statuteMile,
  yard,
};

export type LengthUnit = keyof typeof units;

export const lengthUnits: UnitList<LengthDimension, LengthUnit> = {
  dimensionName: 'length',
  dimension: {length: 1},
  units,
};

/**
 * Initiates a measure of length.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const length = (unit: LengthUnit, value: number): Measure<'length'> => new Measure<'length'>(units[unit], value);

/**
 * Gets a given unit of length.
 * @param key The key of the unit.
 * @returns The length unit.
 */
export const lengthUnit = (key: LengthUnit): Unit<LengthDimension> => units[key];