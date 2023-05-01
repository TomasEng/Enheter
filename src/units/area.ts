import {foot, squareInch, squareMetre, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {AreaDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const squareYard = yard.squared(undefined, 'squareYard') as Unit<AreaDimension>;

const units = {
  acre: squareYard.withFactor(4840, 'ac', 'acre'),
  are: squareMetre.withFactor(100, 'a', 'are'),
  dekare: squareMetre.withFactor(1000, 'daa', 'dekare'),
  hectare: squareMetre.withFactor(10000, 'ha', 'hectare'),
  squareFoot: foot.squared(undefined, 'squareFoot') as Unit<AreaDimension>,
  squareInch,
  squareYard,
  squareMetre,
};

export type AreaUnit = keyof typeof units;

export const areaUnits: UnitList<AreaDimension, AreaUnit> = {
  dimensionName: 'area',
  dimension: {length: 2},
  units,
};

/**
 * Initiates a measure of area.
 * @param unit The unit of the area measure.
 * @param value The value of the area measure.
 * @returns The new Measure object.
 */
export const area = (
  unit: AreaUnit,
  value: number
): Measure<'area'> => new Measure<'area'>(units[unit], value);

/**
 * Gets a given unit of area.
 * @param key The key of the unit.
 * @returns The area unit.
 */
export const areaUnit = (key: AreaUnit): Unit<AreaDimension> => units[key];