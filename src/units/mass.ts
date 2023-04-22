import {kilogram, pound} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MassDimension} from '../types/dimensions';

export const massUnits = {
  carat: kilogram.withFactor(.0002, 'ct'),
  gram: kilogram.withPrefix(null),
  kilogram,
  ounce: kilogram.withFactor(.028349523125, '℥'),
  pound,
  tonne: kilogram.withFactor(1000, 't'),
};

export type MassUnit = keyof typeof massUnits;

export const massUnitList: UnitList<MassDimension, MassUnit> = {
  dimension: {mass: 1},
  units: massUnits,
};

/**
 * Initiates a measure of mass.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const mass = (unit: MassUnit, value: number): Measure =>
  new Measure(massUnits[unit], value);