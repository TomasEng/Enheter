import {Dimension} from '../Dimension';
import {Unit} from '../Unit';

export type UnitListList<
  T extends Dimension = Dimension,
  N extends string = string
> = { [key in N]: Unit<T> };