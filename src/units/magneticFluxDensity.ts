import {tesla} from './basicUnits';

export const magneticFluxDensityUnits = {
  gauss: tesla.withFactor(1e-4, 'G'),
  tesla,
};

export type MagneticFluxDensityUnit = keyof typeof magneticFluxDensityUnits;