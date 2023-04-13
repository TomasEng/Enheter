import {foot, inch, squareMetre, yard} from './basicUnits';

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