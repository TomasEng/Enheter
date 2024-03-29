import {Dimension} from '../Dimension';
import {UnitListList} from './UnitListList';

export type UnitList<
  T extends Dimension = Dimension,
  N extends string = string
> = {
  dimensionName?: string;
  dimension: T;
  units: UnitListList<T, N>;
};