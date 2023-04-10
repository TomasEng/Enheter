import {gram, kilogramPerCubicMetre, metre} from './basicUnits';
import {UnitList} from '../UnitList';

export const densityUnits: UnitList = {
  kilogramPerCubicMetre,
  gramPerCubicCentimetre: gram.dividedBy(metre.withPrefix('centi').cubed()),
};

export type DensityUnit = keyof typeof densityUnits;