import {Unit} from '../Unit';

export const lengthBase = new Unit('m', { length: 1 });

export const lengthUnits = {
  angstrom: lengthBase.withFactor(1e-10, 'Å'),
  astronomicalUnit: lengthBase.withFactor(149597870700, 'AU'),
  fathom: lengthBase.withFactor(1.8288, 'fathom'),
  foot: lengthBase.withFactor(0.3048, 'ft'),
  furlong: lengthBase.withFactor(201.168, 'furlong'),
  inch: lengthBase.withFactor(0.0254, 'in'),
  lightYear: lengthBase.withFactor(9460730472580800, 'ly'),
  metre: lengthBase,
  micron: lengthBase.withFactor(1e-6, 'μm'),
  nauticalMile: lengthBase.withFactor(1852, 'NM'),
  parsec: lengthBase.withFactor(30856775814913600, 'pc'),
  scandinavianMile: lengthBase.withFactor(10000, 'mil'),
  statuteMile: lengthBase.withFactor(1609.344, 'mi'),
  yard: lengthBase.withFactor(0.9144, 'yd'),
};

export type LengthUnit = keyof typeof lengthUnits;