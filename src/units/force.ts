import {massUnits} from './mass';
import {accelerationUnits} from './acceleration';

export const forceBase = massUnits.kilogram.multipliedWith(accelerationUnits.metrePerSecondSquared, 'N');

const pond = massUnits.kilogram.multipliedWith(accelerationUnits.standardGravity, 'pond');

export const forceUnits = {
  newton: forceBase,
  kilonewton: forceBase.withPrefix('kilo'),
  dyne: forceBase.withFactor(0.00001, 'dyn'),
  pond,
  kilopond: pond.withPrefix('kilo'),
  poundal: massUnits.pound.multipliedWith(accelerationUnits.footPerSecondSquared, 'pdl'),
  pound: forceBase.withFactor(4.4482216152605, 'lbf'),
};

export type ForceUnit = keyof typeof forceUnits;