import {Measure} from './Measure';
import {lengthUnits} from './units';
import {ampere, newton, pascal, squareMetre, volt, watt} from './units/basicUnits';

describe('Measure', () => {

  const measure = new Measure(lengthUnits.units.metre, 1);

  describe('copy', () => {
    it('Returns a copy of the measure', () => {
      const copy = measure.copy();
      expect(copy).toEqual(measure);
      expect(copy).not.toBe(measure);
    });
  });

  describe('baseValue', () => {

    it('Returns the value in base units when the given value is in base units', () => {
      const testMeasure = new Measure(lengthUnits.units.metre, 12);
      expect(testMeasure.baseValue()).toBe(12);
    });

    it('Returns the value in base units when the given value is in prefixed base units', () => {
      const kilometre = lengthUnits.units.metre.withPrefix('kilo');
      const testMeasure = new Measure(kilometre, 12);
      expect(testMeasure.baseValue()).toBe(12000);
    });

    it('Returns the value in base units when the given value is in non-base units', () => {
      const testMeasure = new Measure(lengthUnits.units.foot, 12);
      expect(testMeasure.baseValue()).toBeCloseTo(3.6576, 8);
    });
  });

  describe('convertTo', () => {
    it('Converts the measure to another unit', () => {
      const testMeasure = new Measure(lengthUnits.units.statuteMile, 12);
      const testMeasureAsMetres = testMeasure.convertTo(lengthUnits.units.foot);
      expect(testMeasureAsMetres.value).toBe(63360);
      expect(testMeasureAsMetres.unit).toBe(lengthUnits.units.foot);
    });
  });

  describe('setBaseValue', () => {
    it('Changes the value according to the given base value', () => {
      const testMeasure = new Measure(lengthUnits.units.nauticalMile, 1);
      testMeasure.setBaseValue(2778);
      expect(testMeasure.unit).toBe(lengthUnits.units.nauticalMile);
      expect(testMeasure.value).toBe(1.5);
    });
  });

  describe('add', () => {
    it('Adds the given measure to the current measure', () => {
      const testMeasure = new Measure(lengthUnits.units.foot, 12);
      const testMeasure2 = new Measure(lengthUnits.units.statuteMile, 1);
      testMeasure.add(testMeasure2);
      expect(testMeasure.unit).toBe(lengthUnits.units.foot);
      expect(testMeasure.value).toBe(5292);
    });
  });

  describe('subtract', () => {
    it('Subtracts the given measure from the current measure', () => {
      const testMeasure = new Measure(lengthUnits.units.foot, 6000);
      const testMeasure2 = new Measure(lengthUnits.units.statuteMile, 1);
      testMeasure.subtract(testMeasure2);
      expect(testMeasure.unit).toBe(lengthUnits.units.foot);
      expect(testMeasure.value).toBeCloseTo(720);
    });
  });

  describe('multiplyWith', () => {
    it('Multiplies the given measure with the current measure', () => {
      const testMeasure = new Measure(ampere, 10);
      const testMeasure2 = new Measure(volt, 230);
      testMeasure.multiplyWith(testMeasure2);
      expect(testMeasure.unit).toBe(watt);
      expect(testMeasure.value).toBe(2300);
    });
  });

  describe('divideBy', () => {
    it('Divides the current measure by the given measure', () => {
      const testMeasure = new Measure(newton, 200);
      const testMeasure2 = new Measure(squareMetre, 2);
      testMeasure.divideBy(testMeasure2);
      expect(testMeasure.unit).toBe(pascal);
      expect(testMeasure.value).toBe(100);
    });
  });
});