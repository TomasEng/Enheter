import {UnitList} from '../UnitList';
import {ampere} from './basicUnits';

export const currentUnits: UnitList = {ampere};

export type CurrentUnit = keyof typeof currentUnits;