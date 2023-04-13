import {metre} from './basicUnits';

const inch = metre.withFactor(0.0254, 'in');
const foot = inch.withFactor(12, 'ft');
const yard = foot.withFactor(3, 'yd');
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