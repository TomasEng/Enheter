import {Dimension, dimensionsEqual} from '../Dimension';
import {UnitListList} from '../types/UnitListList';
import * as units from '../units';
import {UnitList} from '../types/UnitList';

export const findUnitsByDimension = (dimension: Dimension): UnitListList =>
  Object
    .values(units)
    .filter(val => typeof val === 'object' && 'dimension' in val)
    .map(val => val as UnitList)
    .filter(unitList => dimensionsEqual(unitList.dimension, dimension))
    .map(unitList => unitList.units)
    .reduce((acc, val) => ({...acc, ...val}), {});