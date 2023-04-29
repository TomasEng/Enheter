import {Dimension, dimensionsEqual} from '../Dimension';
import {getAllUnitLists} from './getAllUnitLists';

export const findDimensionName = (dimension: Dimension): string | undefined =>
  getAllUnitLists()
    .find(unitList => dimensionsEqual(unitList.dimension, dimension))
    ?.dimensionName;