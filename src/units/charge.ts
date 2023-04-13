import {coulomb} from './basicUnits';

export const chargeUnits = {
  coulomb,
  elementaryCharge: coulomb.withFactor(1.602176634e-19, 'e'),
  statcoulomb: coulomb.withFactor(3.335641e-10, 'statC'),
};

export type ChargeUnit = keyof typeof chargeUnits;