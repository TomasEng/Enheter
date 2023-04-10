import {farad} from './basicUnits';
import {UnitList} from '../UnitList';

export const capacitanceUnits: UnitList = {farad};

export type CapacitanceUnit = keyof typeof capacitanceUnits;