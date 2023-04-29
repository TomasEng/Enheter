import {footPerSecondSquared, metre, metrePerSecondSquared, second, standardGravity} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {Unit} from '../Unit';
import {AccelerationDimension} from '../types/dimensions';

const units = {
  metrePerSecondSquared,
  footPerSecondSquared,
  gal: metre.withPrefix('centi').dividedBy(second.raisedTo(2), 'Gal', 'gal') as Unit<AccelerationDimension>,
  standardGravity,
};

export type AccelerationUnit = keyof typeof units;

export const accelerationUnits: UnitList<AccelerationDimension, AccelerationUnit> = {
  dimensionName: 'acceleration',
  dimension: {length: 1, time: -2},
  units,
};

/**
 * Initiates a measure of acceleration.
 * @param unit The unit of the acceleration measure.
 * @param value The value of the acceleration measure.
 * @returns The new Measure object.
 */
export const acceleration = (
  unit: AccelerationUnit,
  value: number
): Measure => new Measure(units[unit], value);

/**
 * Gets a given unit of acceleration.
 * @param key The key of the unit.
 * @returns The acceleration unit.
 */
export const accelerationUnit = (key: AccelerationUnit): Unit<AccelerationDimension> => units[key];