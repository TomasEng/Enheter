import {UnitList} from '../UnitList';
import {kilogram, pound} from './basicUnits';

export const massUnits: UnitList = {
  carat: kilogram.withFactor(.0002, 'ct'),
  gram: kilogram.withPrefix(null),
  kilogram,
  ounce: kilogram.withFactor(.028349523125, '℥'),
  pound,
  tonne: kilogram.withFactor(1000, 't'),
};

export type MassUnit = keyof typeof massUnits;