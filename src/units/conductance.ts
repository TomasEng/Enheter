import {siemens} from './basicUnits';
import {UnitList} from '../UnitList';

export const conductanceUnits: UnitList = {siemens};

export type ConductanceUnit = keyof typeof conductanceUnits;