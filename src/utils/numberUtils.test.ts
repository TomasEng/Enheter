import {numbersEqual, precise} from './numberUtils';

describe('numberUtils', () => {
  describe('numbersEqual', () => {
    it('Returns true for numbers that are exactly the same', () => {
      expect(numbersEqual(1, 1)).toBe(true);
      expect(numbersEqual(1.5, 1.5)).toBe(true);
    });

    it('Returns true for numbers that are close enough', () => {
      expect(numbersEqual(0.0001, 0.00009999999999999999)).toBe(true);
      expect(numbersEqual(1, 0.9999999999999999)).toBe(true);
      expect(numbersEqual(10000, 9999.999999999999)).toBe(true);
    });

    it('Returns false if numbers are far enough apart', () => {
      expect(numbersEqual(0.0001, 0.00009999999999999)).toBe(false);
      expect(numbersEqual(1, 0.9999999999999)).toBe(false);
      expect(numbersEqual(10000, 9999.999999999)).toBe(false);
    });
  });

  test('precise', () => {
    expect(precise(999999999999999.8)).toBe(1000000000000000);
    expect(precise(0.9999999999999997)).toBe(1);
    expect(precise(0.00009999999999999996)).toBe(0.0001);
    expect(precise(1234567891234567)).toBe(1234567891234570);
  });
});