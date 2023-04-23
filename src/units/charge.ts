import {coulomb} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ChargeDimension} from '../types/dimensions';

const units = {
  coulomb,
  elementaryCharge: coulomb.withFactor(1.602176634e-19, 'e'),
  statcoulomb: coulomb.withFactor(3.335641e-10, 'statC'),
};

export type ChargeUnit = keyof typeof units;

export const chargeUnits: UnitList<ChargeDimension, ChargeUnit> = {
  dimension: {current: 1, time: 1},
  units,
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
): Measure => new Measure(units[unit], value);