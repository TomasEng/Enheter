import {lengthUnits} from './length';

export const areaBase = lengthUnits.metre.raisedTo(2, 'm^2');

export const areaUnits = {
  acre: areaBase.withFactor(4046.8564224, 'ac'),
  are: areaBase.withFactor(100, 'a'),
  dekare: areaBase.withFactor(1000, 'daa'),
  hectare: areaBase.withFactor(10000, 'ha'),
  squareFoot: lengthUnits.foot.raisedTo(2, 'ft^2'),
  squareInch: lengthUnits.inch.raisedTo(2, 'in^2'),
  squareMetre: areaBase,
};

export type AreaUnit = keyof typeof areaUnits;