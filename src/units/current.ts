import {ampere} from './basicUnits';

export const currentUnits = {ampere};

export type CurrentUnit = keyof typeof currentUnits;