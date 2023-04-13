import {siemensPerMetre} from './basicUnits';

export const conductivityUnits = {siemensPerMetre};

export type ConductivityUnit = keyof typeof conductivityUnits;