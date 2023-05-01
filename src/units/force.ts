import {footPerSecondSquared, kilopond, newton, pond, poundForce, poundMass} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ForceDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  newton,
  kilonewton: newton.withPrefix('kilo', 'kilonewton'),
  dyne: newton.withFactor(0.00001, 'dyn', 'dyne'),
  pond,
  kilopond,
  poundal: poundMass.multipliedWith(footPerSecondSquared, 'pdl', 'poundal') as Unit<ForceDimension>,
  pound: poundForce,
};

export type ForceUnit = keyof typeof units;

export const forceUnits: UnitList<ForceDimension, ForceUnit> = {
  dimensionName: 'force',
  dimension: {mass: 1, length: 1, time: -2},
  units,
};

/**
 * Initiates a measure of force.
 * @param unit The unit of the force measure.
 * @param value The value of the force measure.
 * @returns The new Measure object.
 */
export const force = (unit: ForceUnit, value: number): Measure<'force'> => new Measure<'force'>(units[unit], value);

/**
 * Gets a given unit of force.
 * @param key The key of the unit.
 * @returns The force unit.
 */
export const forceUnit = (key: ForceUnit): Unit<ForceDimension> => units[key];