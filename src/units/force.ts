import {accelerationUnits} from './acceleration';
import {kilogram, newton, pound} from './basicUnits';

const pond = kilogram.multipliedWith(accelerationUnits.standardGravity, 'pond');

export const forceUnits = {
  newton,
  kilonewton: newton.withPrefix('kilo'),
  dyne: newton.withFactor(0.00001, 'dyn'),
  pond,
  kilopond: pond.withPrefix('kilo'),
  poundal: pound.multipliedWith(accelerationUnits.footPerSecondSquared, 'pdl'),
  pound: newton.withFactor(4.4482216152605, 'lbf'),
};

export type ForceUnit = keyof typeof forceUnits;