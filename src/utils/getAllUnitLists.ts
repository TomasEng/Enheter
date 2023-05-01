import {UnitList} from '../types/UnitList';
import {allUnits} from '../units';

export const getAllUnitLists = (): UnitList[] => Object.values(allUnits);