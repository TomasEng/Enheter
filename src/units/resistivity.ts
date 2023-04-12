import {ohmMetre} from './basicUnits';
import {UnitList} from '../UnitList';

export const resistivityUnits: UnitList = {ohmMetre};

export type ResistivityUnit = keyof typeof resistivityUnits;