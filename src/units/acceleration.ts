import {velocityUnits} from './velocity';
import {timeUnits} from './time';
import {lengthUnits} from './length';
import {metrePerSecondSquared} from './basicUnits';

export const accelerationUnits = {
  metrePerSecondSquared,
  footPerSecondSquared: velocityUnits.footPerSecond.dividedBy(timeUnits.second, 'ft/s^2'),
  gal: lengthUnits.metre.withPrefix('centi').dividedBy(timeUnits.second.raisedTo(2), 'Gal'),
  standardGravity: metrePerSecondSquared.withFactor(9.80665, 'g_0'),
};

export type AccelerationUnit = keyof typeof accelerationUnits;