import {gram, kilogram, poundMass} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MassDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const units = {
  carat: kilogram.withFactor(.0002, 'ct', 'carat'),
  gram,
  kilogram,
  ounce: kilogram.withFactor(.028349523125, '℥', 'ounce'),
  pound: poundMass,
  tonne: kilogram.withFactor(1000, 't', 'tonne'),
};

export type MassUnit = keyof typeof units;

export const massUnits: UnitList<MassDimension, MassUnit> = {
  dimensionName: 'mass',
  dimension: {mass: 1},
  units,
};

/**
 * Initiates a measure of mass.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const mass = (unit: MassUnit, value: number): Measure =>
  new Measure(units[unit], value);

/**
 * Gets a given unit of mass.
 * @param key The key of the unit.
 * @returns The mass unit.
 */
export const massUnit = (key: MassUnit): Unit<MassDimension> => units[key];