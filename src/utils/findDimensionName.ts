import {Dimension, dimensionsEqual} from '../Dimension';
import {getAllUnitLists} from './getAllUnitLists';
import {DimensionName} from '../types/DimensionName';

export const findDimensionName = (dimension: Dimension): DimensionName | undefined =>
  getAllUnitLists()
    .find(unitList => dimensionsEqual(unitList.dimension, dimension))
    ?.dimensionName as DimensionName;