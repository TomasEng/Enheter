import {watt} from './basicUnits';

export const powerUnits = {
  watt,
  horsepower: watt.withFactor(735.49875, 'hp'),
};

export type PowerUnit = keyof typeof powerUnits;