import {Measure} from "./Measure";
import {lengthUnits} from "./units";

describe('Measure', () => {

  const measure = new Measure(lengthUnits.metre, 1);

  describe('copy', () => {
    it('Returns a copy of the measure', () => {
      const copy = measure.copy();
      expect(copy).toEqual(measure);
      expect(copy).not.toBe(measure);
    });
  });

  describe('baseValue', () => {

    it('Returns the value in base units when the given value is in base units', () => {
      const testMeasure = new Measure(lengthUnits.metre, 12);
      expect(testMeasure.baseValue()).toBe(12);
    });

    it('Returns the value in base units when the given value is in prefixed base units', () => {
      const kilometre = lengthUnits.metre.withPrefix("kilo");
      const testMeasure = new Measure(kilometre, 12);
      expect(testMeasure.baseValue()).toBe(12000);
    });

    it('Returns the value in base units when the given value is in non-base units', () => {
      const testMeasure = new Measure(lengthUnits.foot, 12);
      expect(testMeasure.baseValue()).toBeCloseTo(3.6576, 8);
    });
  });

  describe('convertTo', () => {
    it('Converts the measure to another unit', () => {
      const testMeasure = new Measure(lengthUnits.statuteMile, 12);
      const testMeasureAsMetres = testMeasure.convertTo(lengthUnits.foot);
      expect(testMeasureAsMetres.value).toBe(63360);
      expect(testMeasureAsMetres.unit).toBe(lengthUnits.foot);
    });
  });

  describe('setBaseValue', () => {
    it('Changes the value according to the given base value', () => {
      const testMeasure = new Measure(lengthUnits.nauticalMile, 1);
      testMeasure.setBaseValue(2778);
      expect(testMeasure.unit).toBe(lengthUnits.nauticalMile);
      expect(testMeasure.value).toBe(1.5);
    });
  });

  describe('add', () => {
    it('Adds the given measure to the current measure', () => {
      const testMeasure = new Measure(lengthUnits.foot, 12);
      const testMeasure2 = new Measure(lengthUnits.statuteMile, 1);
      testMeasure.add(testMeasure2);
      expect(testMeasure.unit).toBe(lengthUnits.foot);
      expect(testMeasure.value).toBe(5292);
    });
  });
});