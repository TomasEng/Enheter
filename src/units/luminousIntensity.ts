import {UnitList} from '../UnitList';
import {candela} from './basicUnits';

export const luminousIntensityUnits: UnitList = {
  candela,
  candlepower: candela.withFactor(0.981, 'cp'),
};

export type LuminousIntensityUnit = keyof typeof luminousIntensityUnits;