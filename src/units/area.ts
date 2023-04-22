import {foot, inch, squareMetre, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {AreaDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const squareYard = yard.squared() as Unit<AreaDimension>;

export const areaUnits = {
  acre: squareYard.withFactor(4840, 'ac'),
  are: squareMetre.withFactor(100, 'a'),
  dekare: squareMetre.withFactor(1000, 'daa'),
  hectare: squareMetre.withFactor(10000, 'ha'),
  squareFoot: foot.squared() as Unit<AreaDimension>,
  squareInch: inch.squared() as Unit<AreaDimension>,
  squareYard,
  squareMetre,
};

export type AreaUnit = keyof typeof areaUnits;

export const areaUnitList: UnitList<AreaDimension, AreaUnit> = {
  dimension: {length: 2},
  units: areaUnits,
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
): Measure => new Measure(areaUnits[unit], value);