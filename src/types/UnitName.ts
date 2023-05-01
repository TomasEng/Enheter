import {AllDimensions, DimensionName} from './DimensionName';

export type UnitName<D extends DimensionName> = AllDimensions[D];