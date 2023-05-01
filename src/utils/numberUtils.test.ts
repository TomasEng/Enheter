import {numbersEqual} from './numberUtils';

describe('numberUtils', () => {
  describe('numbersEqual', () => {
    it('Returns true for numbers that are exactly the same', () => {
      expect(numbersEqual(1, 1)).toBe(true);
      expect(numbersEqual(1.5, 1.5)).toBe(true);
    });

    it('Returns true for numbers that are closer together than Number.EPSILON', () => {
      expect(numbersEqual(1, 1 + Number.EPSILON / 2)).toBe(true);
      expect(numbersEqual(1.5, 1.5 + Number.EPSILON / 2)).toBe(true);
      expect(numbersEqual(1, 0.9999999999999999)).toBe(true);
    });
  });
});