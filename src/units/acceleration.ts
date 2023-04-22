import {velocityUnits} from './velocity';
import {timeUnits} from './time';
import {lengthUnits} from './length';
import {metrePerSecondSquared} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {Unit} from '../Unit';
import {AccelerationDimension} from '../types/dimensions';

export const accelerationUnits = {
  metrePerSecondSquared,
  footPerSecondSquared: velocityUnits.footPerSecond.dividedBy(timeUnits.second, 'ft/s^2') as Unit<AccelerationDimension>,
  gal: lengthUnits.metre.withPrefix('centi').dividedBy(timeUnits.second.raisedTo(2), 'Gal') as Unit<AccelerationDimension>,
  standardGravity: metrePerSecondSquared.withFactor(9.80665, 'g_0'),
};

export type AccelerationUnit = keyof typeof accelerationUnits;

export const accelerationUnitList: UnitList<AccelerationDimension, AccelerationUnit> = {
  dimension: {length: 1, time: -2},
  units: accelerationUnits,
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
): Measure => new Measure(accelerationUnits[unit], value);