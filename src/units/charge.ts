import {coulomb} from './basicUnits';
import {Measure} from '../Measure';

export const chargeUnits = {
  coulomb,
  elementaryCharge: coulomb.withFactor(1.602176634e-19, 'e'),
  statcoulomb: coulomb.withFactor(3.335641e-10, 'statC'),
};

export type ChargeUnit = keyof typeof chargeUnits;

/**
 * Initiates a measure of charge.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const charge = (
  unit: ChargeUnit,
  value: number
): Measure => new Measure(chargeUnits[unit], value);