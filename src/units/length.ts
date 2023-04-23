import {chain, fathom, foot, furlong, inch, link, metre, rod, statuteMile, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LengthDimension} from '../types/dimensions';

const units = {
  angstrom: metre.withFactor(1e-10, 'Å'),
  astronomicalUnit: metre.withFactor(149597870700, 'AU'),
  chain,
  fathom,
  fermi: metre.withFactor(1e-15, 'fm'),
  foot,
  furlong,
  inch,
  lightYear: metre.withFactor(9460730472580800, 'ly'),
  link,
  metre,
  micron: metre.withFactor(1e-6, 'μm'),
  nauticalMile: metre.withFactor(1852, 'NM'),
  parsec: metre.withFactor(30856775814913600, 'pc'),
  rod,
  scandinavianMile: metre.withFactor(10000, 'mil'),
  statuteMile,
  yard,
};

export type LengthUnit = keyof typeof units;

export const lengthUnits: UnitList<LengthDimension, LengthUnit> = {
  dimension: {length: 1},
  units,
};

/**
 * Initiates a measure of length.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const length = (unit: LengthUnit, value: number): Measure => new Measure(units[unit], value);