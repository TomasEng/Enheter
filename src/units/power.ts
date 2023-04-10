import {UnitList} from '../UnitList';
import {watt} from './basicUnits';

export const powerUnits: UnitList = {
  watt,
  horsepower: watt.withFactor(735.49875, 'hp'),
};

export type PowerUnit = keyof typeof powerUnits;