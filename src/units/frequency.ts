import {hertz} from './basicUnits';
import {UnitList} from '../UnitList';

export const frequencyUnits: UnitList = {hertz};

export type FrequencyUnit = keyof typeof frequencyUnits;