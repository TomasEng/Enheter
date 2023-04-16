import {velocityUnits} from './velocity';
import {timeUnits} from './time';
import {lengthUnits} from './length';
import {metrePerSecondSquared} from './basicUnits';
import {Measure} from '../Measure';

export const accelerationUnits = {
  metrePerSecondSquared,
  footPerSecondSquared: velocityUnits.footPerSecond.dividedBy(timeUnits.second, 'ft/s^2'),
  gal: lengthUnits.metre.withPrefix('centi').dividedBy(timeUnits.second.raisedTo(2), 'Gal'),
  standardGravity: metrePerSecondSquared.withFactor(9.80665, 'g_0'),
};

export type AccelerationUnit = keyof typeof accelerationUnits;

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