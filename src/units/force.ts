import {accelerationUnits} from './acceleration';
import {kilogram, newton, pound} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ForceDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const pond = kilogram.multipliedWith(accelerationUnits.standardGravity, 'pond') as Unit<ForceDimension>;

export const forceUnits = {
  newton,
  kilonewton: newton.withPrefix('kilo'),
  dyne: newton.withFactor(0.00001, 'dyn'),
  pond,
  kilopond: pond.withPrefix('kilo'),
  poundal: pound.multipliedWith(accelerationUnits.footPerSecondSquared, 'pdl') as Unit<ForceDimension>,
  pound: newton.withFactor(4.4482216152605, 'lbf'),
};

export type ForceUnit = keyof typeof forceUnits;

export const forceUnitList: UnitList<ForceDimension, ForceUnit> = {
  dimension: {mass: 1, length: 1, time: -2},
  units: forceUnits,
};

/**
 * Initiates a measure of force.
 * @param unit The unit of the force measure.
 * @param value The value of the force measure.
 * @returns The new Measure object.
 */
export const force = (unit: ForceUnit, value: number): Measure => new Measure(forceUnits[unit], value);