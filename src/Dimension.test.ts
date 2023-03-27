import {
  dimensionsEqual,
  divideDimensions,
  mergeDimensions, multiplyAllExponentsWith,
  multiplyDimensions,
  removeZerosFromDimension
} from "./Dimension";

describe('Dimension', () => {

  describe('removeZerosFromDimension', () => {
    it('Removes all zero values from a dimension', () => {
      const dimension = {time: 1, length: 0, mass: -2, temperature: 0};
      const result = removeZerosFromDimension(dimension);
      expect(result).toEqual({time: 1, mass: -2});
    });
  });

  describe('dimensionsEqual', () => {

    it('Returns true when the dimensions are equal', () => {
      expect(dimensionsEqual({time: 1}, {time: 1})).toBe(true);
      expect(dimensionsEqual({time: 1}, {time: 1, length: 0})).toBe(true);
      expect(dimensionsEqual({time: 1, length: 0}, {time: 1})).toBe(true);
      expect(dimensionsEqual({length: 0}, {time: 0})).toBe(true);
      expect(dimensionsEqual({}, {})).toBe(true);
    });

    it('Returns false when the dimensions are not equal', () => {
      expect(dimensionsEqual({time: 1}, {time: 2})).toBe(false);
      expect(dimensionsEqual({time: 1}, {time: 1, length: 1})).toBe(false);
      expect(dimensionsEqual({time: 1, length: 0}, {time: 1, length: 1})).toBe(false);
      expect(dimensionsEqual({length: 1}, {time: 0})).toBe(false);
    });
  });

  describe('multiplyDimensions', () => {
    it('Adds exponents in two dimensions together', () => {
      expect(multiplyDimensions({time: 1}, {time: 1})).toEqual({time: 2});
      expect(multiplyDimensions({time: 1}, {time: 1, length: 0})).toEqual({time: 2});
      expect(multiplyDimensions({time: 1, length: 0}, {time: 1})).toEqual({time: 2});
      expect(multiplyDimensions({length: 0}, {time: 0})).toEqual({});
      expect(multiplyDimensions({length: 1}, {length: -1})).toEqual({});
      expect(multiplyDimensions({}, {})).toEqual({});
    });
  });

  describe('divideDimensions', () => {
    it('Subtracts exponents in the divisor dimension from the exponents in the dividend dimension', () => {
      expect(divideDimensions({length: 1}, {time: 1})).toEqual({length: 1, time: -1});
      expect(divideDimensions({time: 1}, {time: 1})).toEqual({});
      expect(divideDimensions({time: 1}, {time: 1, length: 0})).toEqual({});
      expect(divideDimensions({time: 1, length: 0}, {time: 1})).toEqual({});
      expect(divideDimensions({length: 0}, {time: 0})).toEqual({});
      expect(divideDimensions({length: 1}, {length: -1})).toEqual({length: 2});
      expect(divideDimensions({}, {})).toEqual({});
    });
  });

  describe('mergeDimensions', () => {
    it('Adds all exponents in the given dimensions together', () => {
      expect(mergeDimensions([{time: 1}, {time: 1}])).toEqual({time: 2});
      expect(mergeDimensions([{time: 1}, {length: 2}])).toEqual({time: 1, length: 2});
      expect(mergeDimensions([{time: 1}, {length: 2}, {mass: 3}])).toEqual({time: 1, length: 2, mass: 3});
      expect(mergeDimensions([{time: 1}, {time: 1, length: 2}])).toEqual({time: 2, length: 2});
      expect(mergeDimensions([{time: 1}, {time: 1, length: 0}])).toEqual({time: 2});
      expect(mergeDimensions([{time: 1, length: 0}, {time: 1}])).toEqual({time: 2});
      expect(mergeDimensions([{length: 0}, {time: 0}])).toEqual({});
      expect(mergeDimensions([{length: 1}, {length: -1}])).toEqual({});
      expect(mergeDimensions([{}, {}])).toEqual({});
    });
  });

  describe('multiplyAllExponentsWith', () => {
    it('Multiplies all exponents in the given dimension with the given number', () => {
      expect(multiplyAllExponentsWith({time: 1}, 2)).toEqual({time: 2});
      expect(multiplyAllExponentsWith({time: 1}, 0)).toEqual({});
      expect(multiplyAllExponentsWith({time: 1}, -1)).toEqual({time: -1});
      expect(multiplyAllExponentsWith({time: 1, length: 2}, 2)).toEqual({time: 2, length: 4});
      expect(multiplyAllExponentsWith({time: 1, length: 2}, 0)).toEqual({});
      expect(multiplyAllExponentsWith({time: 1, length: 2}, -1)).toEqual({time: -1, length: -2});
    });
  });
});