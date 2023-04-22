import {foot, inch, metre, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {LengthDimension} from '../types/dimensions';

const fathom = yard.withFactor(2, 'fathom');
const chain = fathom.withFactor(11, 'chain');
const rod = chain.withFactor(1 / 4, 'rod');
const link = chain.withFactor(1 / 100, 'link');
const furlong = chain.withFactor(10, 'furlong');
const statuteMile = furlong.withFactor(8, 'mi');

export const lengthUnits = {
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

export type LengthUnit = keyof typeof lengthUnits;

export const lengthUnitList: UnitList<LengthDimension, LengthUnit> = {
  dimension: {length: 1},
  units: lengthUnits,
};

/**
 * Initiates a measure of length.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const length = (unit: LengthUnit, value: number): Measure => new Measure(lengthUnits[unit], value);