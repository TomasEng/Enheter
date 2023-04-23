import * as units from '../units';
import {UnitList} from '../types/UnitList';

export const getAllUnitLists = (): UnitList[] => Object
  .values(units)
  .filter(val => typeof val === 'object' && 'dimension' in val)
  .map(val => val as UnitList);