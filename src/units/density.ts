import {gram, kilogramPerCubicMetre, metre} from './basicUnits';

export const densityUnits = {
  kilogramPerCubicMetre,
  gramPerCubicCentimetre: gram.dividedBy(metre.withPrefix('centi').cubed()),
};

export type DensityUnit = keyof typeof densityUnits;