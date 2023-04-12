import {siemensPerMetre} from './basicUnits';
import {UnitList} from '../UnitList';

export const conductivityUnits: UnitList = {siemensPerMetre};

export type ConductivityUnit = keyof typeof conductivityUnits;