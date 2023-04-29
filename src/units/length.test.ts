import {length, lengthUnit, LengthUnit, lengthUnits} from './length';

describe('length', () => {
  describe('lengthUnits', () => {
    test.each(Object.keys(lengthUnits.units) as LengthUnit[])(
      '%s has correct dimension',
      (unit) => expect(lengthUnits.units[unit].dimension).toEqual({length: 1})
    );

    test('Units have correct relation to the metre', () => {
      expect(lengthUnits.units.angstrom.toBase(1)).toBeCloseTo(1e-10);
      expect(lengthUnits.units.astronomicalUnit.toBase(1)).toBeCloseTo(149597870700);
      expect(lengthUnits.units.chain.toBase(1)).toBeCloseTo(20.1168);
      expect(lengthUnits.units.fathom.toBase(1)).toBeCloseTo(1.8288);
      expect(lengthUnits.units.fermi.toBase(1)).toBeCloseTo(1e-15);
      expect(lengthUnits.units.foot.toBase(1)).toBeCloseTo(0.3048);
      expect(lengthUnits.units.furlong.toBase(1)).toBeCloseTo(201.168);
      expect(lengthUnits.units.inch.toBase(1)).toBeCloseTo(0.0254);
      expect(lengthUnits.units.lightYear.toBase(1)).toBeCloseTo(9460730472580800);
      expect(lengthUnits.units.link.toBase(1)).toBeCloseTo(0.201168);
      expect(lengthUnits.units.metre.toBase(1)).toBeCloseTo(1);
      expect(lengthUnits.units.micron.toBase(1)).toBeCloseTo(1e-6);
      expect(lengthUnits.units.nauticalMile.toBase(1)).toBeCloseTo(1852);
      expect(lengthUnits.units.parsec.toBase(1)).toBeCloseTo(30856775814913600);
      expect(lengthUnits.units.rod.toBase(1)).toBeCloseTo(5.0292);
      expect(lengthUnits.units.scandinavianMile.toBase(1)).toBeCloseTo(10000);
      expect(lengthUnits.units.statuteMile.toBase(1)).toBeCloseTo(1609.344);
      expect(lengthUnits.units.yard.toBase(1)).toBeCloseTo(0.9144);
    });
  });

  test('length', () => {
    const unit: LengthUnit = 'angstrom';
    const value = 12;
    const measure = length(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(lengthUnits.units[unit]);
  });

  test('lengthUnit', () => {
    const unit: LengthUnit = 'micron';
    expect(lengthUnit(unit)).toEqual(lengthUnits.units[unit]);
  });
});