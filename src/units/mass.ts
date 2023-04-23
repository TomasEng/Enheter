import {kilogram, poundMass} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MassDimension} from '../types/dimensions';

const units = {
  carat: kilogram.withFactor(.0002, 'ct'),
  gram: kilogram.withPrefix(null),
  kilogram,
  ounce: kilogram.withFactor(.028349523125, '℥'),
  pound: poundMass,
  tonne: kilogram.withFactor(1000, 't'),
};

export type MassUnit = keyof typeof units;

export const massUnits: UnitList<MassDimension, MassUnit> = {
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