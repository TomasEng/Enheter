import {foot, inch, squareMetre, yard} from './basicUnits';
import {Measure} from '../Measure';

const squareYard = yard.squared();

export const areaUnits = {
  acre: squareYard.withFactor(4840, 'ac'),
  are: squareMetre.withFactor(100, 'a'),
  dekare: squareMetre.withFactor(1000, 'daa'),
  hectare: squareMetre.withFactor(10000, 'ha'),
  squareFoot: foot.squared(),
  squareInch: inch.squared(),
  squareYard,
  squareMetre,
};

export type AreaUnit = keyof typeof areaUnits;

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