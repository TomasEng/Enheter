import {volt} from './basicUnits';
import {UnitList} from '../UnitList';

export const voltageUnits: UnitList = {volt};

export type VoltageUnit = keyof typeof voltageUnits;