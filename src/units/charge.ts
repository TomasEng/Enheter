import {coulomb, elementaryCharge} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {ChargeDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  coulomb,
  elementaryCharge,
  statcoulomb: coulomb.withFactor(3.335641e-10, 'statC', 'statcoulomb'),
};

export type ChargeUnit = keyof typeof units;

export const chargeUnits: UnitList<ChargeDimension, ChargeUnit> = {
  dimensionName: 'charge',
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

/**
 * Gets a given unit of charge.
 * @param key The key of the unit.
 * @returns The charge unit.
 */
export const chargeUnit = (key: ChargeUnit): Unit<ChargeDimension> => units[key];