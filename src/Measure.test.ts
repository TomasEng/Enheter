import {Measure} from "./Measure";
import {lengthUnits} from "./units/Length";

describe('Measure', () => {

  const measure = new Measure(
    1,
    {length: 1},
    lengthUnits.metre,
    lengthUnits.metre,
  );

  describe('copy', () => {
    it('Returns a copy of the measure', () => {
      const copy = measure.copy();
      expect(copy).toEqual(measure);
      expect(copy).not.toBe(measure);
    });
  });

  describe('baseValue', () => {

    it('Returns the value in base units when the given value is in base units', () => {
      const testMeasure = measure.copy().setValue(12);
      expect(testMeasure.baseValue()).toBe(12);
    });

    it('Returns the value in base units when the given value is in prefixed base units', () => {
      const testMeasure = measure.copy().setValue(12).setPrefix("kilo");
      expect(testMeasure.baseValue()).toBe(12000);
    });

    it('Returns the value in base units when the given value is in non-base units', () => {
      const testMeasure = measure.copy().setValue(12).setUnit(lengthUnits.foot);
      expect(testMeasure.baseValue()).toBeCloseTo(3.6576, 8);
    });
  });

  describe('unPrefixedValue', () => {

    it('Returns the value as is when there is no prefix', () => {
      const testMeasure = measure.copy().setValue(12);
      expect(testMeasure.unPrefixedValue()).toBe(12);
    });

    it('Returns the corresponding unprefixed unit value', () => {
      const kiloMeasure = measure.copy().setValue(12).setPrefix('kilo');
      expect(kiloMeasure.unPrefixedValue()).toBe(12000);
      const milliMeasure = measure.copy().setValue(12).setPrefix('milli');
      expect(milliMeasure.unPrefixedValue()).toBe(0.012);
    });
  });

  describe('prefixedValue', () => {
    it('Returns the value converted to the given prefix', () => {
      expect(measure.copy().setValue(12).setPrefix('kilo').prefixedValue('milli')).toBe(12000000);
      expect(measure.copy().setValue(12).setPrefix('milli').prefixedValue('kilo')).toBe(0.000012);
    });
  });

  describe('switchPrefix', () => {
    it('Converts the measure to another prefix', () => {
      const testMeasure = measure.copy().setValue(12).setPrefix('kilo');
      const testMeasureAsMillimetres = testMeasure.switchPrefix('milli');
      expect(testMeasureAsMillimetres.getValue()).toBe(12000000);
      expect(testMeasureAsMillimetres.getPrefix()).toBe('milli');
    });
  });

  describe('convertTo', () => {
    it('Converts the measure to another unit', () => {
      const testMeasure = measure.copy().setValue(12).setUnit(lengthUnits.statuteMile);
      const testMeasureAsMetres = testMeasure.convertTo(lengthUnits.foot);
      expect(testMeasureAsMetres.getValue()).toBe(63360);
      expect(testMeasureAsMetres.getUnit()).toBe(lengthUnits.foot);
    });
  });
});