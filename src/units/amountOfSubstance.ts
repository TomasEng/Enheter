import {mole} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {AmountOfSubstanceDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {mole};

export type AmountOfSubstanceUnit = keyof typeof units;

export const amountOfSubstanceUnits: UnitList<AmountOfSubstanceDimension, AmountOfSubstanceUnit> = {
  dimensionName: 'amountOfSubstance',
  dimension: {amountOfSubstance: 1},
  units,
};

/**
 * Initiates a measure of amount of substance.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const amountOfSubstance = (
  unit: AmountOfSubstanceUnit,
  value: number
): Measure<'amountOfSubstance'> => new Measure<'amountOfSubstance'>(units[unit], value);

/**
 * Gets a given unit of amountOfSubstance.
 * @param key The key of the unit.
 * @returns The amountOfSubstance unit.
 */
export const amountOfSubstanceUnit = (key: AmountOfSubstanceUnit): Unit<AmountOfSubstanceDimension> => units[key];