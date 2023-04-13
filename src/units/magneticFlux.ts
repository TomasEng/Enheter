import {weber} from './basicUnits';

export const magneticFluxUnits = {
  maxwell: weber.withFactor(1e-8, 'Mx'),
  weber,
};

export type MagneticFluxUnit = keyof typeof magneticFluxUnits;