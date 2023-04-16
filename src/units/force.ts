import {accelerationUnits} from './acceleration';
import {kilogram, newton, pound} from './basicUnits';
import {Measure} from '../Measure';

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

/**
 * Initiates a measure of force.
 * @param unit The unit of the force measure.
 * @param value The value of the force measure.
 * @returns The new Measure object.
 */
export const force = (unit: ForceUnit, value: number): Measure => new Measure(forceUnits[unit], value);