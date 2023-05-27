import {Dimension, dimensionsEqual} from '../Dimension';
import {getAllUnitLists} from './getAllUnitLists';
import {DimensionName} from '../types/DimensionName';

/**
 * Finds the key of the given dimension used in the allUnits object.
 * @param dimension The dimension to find the key of.
 * @returns The key of the given dimension.
 */
export const findDimensionName = (dimension: Dimension): DimensionName | undefined =>
  getAllUnitLists()
    .find(unitList => dimensionsEqual(unitList.dimension, dimension))
    ?.dimensionName as DimensionName;