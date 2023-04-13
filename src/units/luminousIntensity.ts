import {candela} from './basicUnits';

export const luminousIntensityUnits = {
  candela,
  candlepower: candela.withFactor(0.981, 'cp'),
};

export type LuminousIntensityUnit = keyof typeof luminousIntensityUnits;