import {coulomb} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ChargeDimension} from '../types/dimensions';

export const chargeUnits = {
  coulomb,
  elementaryCharge: coulomb.withFactor(1.602176634e-19, 'e'),
  statcoulomb: coulomb.withFactor(3.335641e-10, 'statC'),
};

export type ChargeUnit = keyof typeof chargeUnits;

export const chargeUnitList: UnitList<ChargeDimension, ChargeUnit> = {
  dimension: {current: 1, time: 1},
  units: chargeUnits,
};

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