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

export const removeZerosFromDimension = (dimension: Dimension): Dimension => {
  Object.keys(dimension).forEach(key => {
    if (dimension[key as BaseDimension] === 0) {
      delete dimension[key as BaseDimension];
    }
  });
  return dimension;
};

export const dimensionsEqual = (a: Dimension, b: Dimension): boolean => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const key of [...aKeys, ...bKeys]) {
    const aValue = a[key as BaseDimension] || 0;
    const bValue = b[key as BaseDimension] || 0;
    if (aValue !== bValue) return false;
  }
  return true;
};

export const multiplyDimensions = (a: Dimension, b: Dimension): Dimension => {
  const result: Dimension = {};
  const keys = [...Object.keys(a), ...Object.keys(b)];
  for (const key of keys) {
    const aValue = a[key as BaseDimension] || 0;
    const bValue = b[key as BaseDimension] || 0;
    result[key as BaseDimension] = aValue + bValue;
  }
  return removeZerosFromDimension(result);
};

export const divideDimensions = (dividend: Dimension, divisor: Dimension): Dimension => {
  const result: Dimension = {};
  const keys = [...Object.keys(dividend), ...Object.keys(divisor)];
  for (const key of keys) {
    const dividendValue = dividend[key as BaseDimension] || 0;
    const divisorValue = divisor[key as BaseDimension] || 0;
    result[key as BaseDimension] = dividendValue - divisorValue;
  }
  return removeZerosFromDimension(result);
};

export const mergeDimensions = (dimensions: Dimension[]): Dimension => {
    return dimensions.reduce((result, dimension) => {
        return multiplyDimensions(result, dimension);
    }, {});
};

export const multiplyAllExponentsWith = (dimension: Dimension, factor: number): Dimension => {
  const result: Dimension = {};
  for (const key of Object.keys(dimension)) {
    result[key as BaseDimension] = dimension[key as BaseDimension]! * factor;
  }
  return removeZerosFromDimension(result);
};