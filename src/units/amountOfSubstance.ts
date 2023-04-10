import {Unit} from '../Unit';

export const amountOfSubstanceBase = new Unit('mol', {amountOfSubstance: 1});

export const amountOfSubstanceUnits = {
  mole: amountOfSubstanceBase,
};

export type AmountOfSubstanceUnit = keyof typeof amountOfSubstanceUnits;