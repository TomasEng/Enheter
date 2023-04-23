import {Dimension, dimensionsEqual} from '../Dimension';
import {UnitListList} from '../types/UnitListList';
import {getAllUnitLists} from './getAllUnitLists';

export const findUnitsByDimension = <T extends Dimension>(dimension: T): UnitListList<T> =>
  getAllUnitLists()
    .filter(unitList => dimensionsEqual(unitList.dimension, dimension))
    .map(unitList => unitList.units as UnitListList<T>)
    .reduce((acc, val) => ({...acc, ...val}), {});