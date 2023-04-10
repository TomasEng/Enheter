import {ohm} from './basicUnits';
import {UnitList} from '../UnitList';

export const resistanceUnits: UnitList = {ohm};

export type ResistanceUnit = keyof typeof resistanceUnits;