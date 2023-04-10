import {lengthUnits} from './length';
import {UnitList} from '../UnitList';
import {squareMetre} from './basicUnits';

export const areaUnits: UnitList = {
  acre: squareMetre.withFactor(4046.8564224, 'ac'),
  are: squareMetre.withFactor(100, 'a'),
  dekare: squareMetre.withFactor(1000, 'daa'),
  hectare: squareMetre.withFactor(10000, 'ha'),
  squareFoot: lengthUnits.foot.raisedTo(2, 'ft^2'),
  squareInch: lengthUnits.inch.raisedTo(2, 'in^2'),
  squareMetre,
};

export type AreaUnit = keyof typeof areaUnits;