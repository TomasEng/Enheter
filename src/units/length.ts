import {UnitList} from '../UnitList';
import {metre} from './basicUnits';

export const lengthUnits: UnitList = {
  angstrom: metre.withFactor(1e-10, 'Å'),
  astronomicalUnit: metre.withFactor(149597870700, 'AU'),
  fathom: metre.withFactor(1.8288, 'fathom'),
  foot: metre.withFactor(0.3048, 'ft'),
  furlong: metre.withFactor(201.168, 'furlong'),
  inch: metre.withFactor(0.0254, 'in'),
  lightYear: metre.withFactor(9460730472580800, 'ly'),
  metre,
  micron: metre.withFactor(1e-6, 'μm'),
  nauticalMile: metre.withFactor(1852, 'NM'),
  parsec: metre.withFactor(30856775814913600, 'pc'),
  scandinavianMile: metre.withFactor(10000, 'mil'),
  statuteMile: metre.withFactor(1609.344, 'mi'),
  yard: metre.withFactor(0.9144, 'yd'),
};

export type LengthUnit = keyof typeof lengthUnits;