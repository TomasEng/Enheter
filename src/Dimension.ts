export type BaseDimension =
  | 'time'
  | 'length'
  | 'mass'
  | 'temperature'
  | 'current'
  | 'luminousIntensity'
  | 'amountOfSubstance';

export type Dimension = {
  [key in BaseDimension]?: number;
};