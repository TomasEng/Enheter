import {length, LengthUnit, lengthUnits} from './length';

describe('length', () => {
  describe('lengthUnits', () => {
    test.each(Object.keys(lengthUnits) as LengthUnit[])(
      '%s has correct dimension',
      (unit) => expect(lengthUnits[unit].dimension).toEqual({length: 1})
    );

    test('Units have correct relation to the metre', () => {
      expect(lengthUnits.angstrom.toBase(1)).toBeCloseTo(1e-10);
      expect(lengthUnits.astronomicalUnit.toBase(1)).toBeCloseTo(149597870700);
      expect(lengthUnits.chain.toBase(1)).toBeCloseTo(20.1168);
      expect(lengthUnits.fathom.toBase(1)).toBeCloseTo(1.8288);
      expect(lengthUnits.fermi.toBase(1)).toBeCloseTo(1e-15);
      expect(lengthUnits.foot.toBase(1)).toBeCloseTo(0.3048);
      expect(lengthUnits.furlong.toBase(1)).toBeCloseTo(201.168);
      expect(lengthUnits.inch.toBase(1)).toBeCloseTo(0.0254);
      expect(lengthUnits.lightYear.toBase(1)).toBeCloseTo(9460730472580800);
      expect(lengthUnits.link.toBase(1)).toBeCloseTo(0.201168);
      expect(lengthUnits.metre.toBase(1)).toBeCloseTo(1);
      expect(lengthUnits.micron.toBase(1)).toBeCloseTo(1e-6);
      expect(lengthUnits.nauticalMile.toBase(1)).toBeCloseTo(1852);
      expect(lengthUnits.parsec.toBase(1)).toBeCloseTo(30856775814913600);
      expect(lengthUnits.rod.toBase(1)).toBeCloseTo(5.0292);
      expect(lengthUnits.scandinavianMile.toBase(1)).toBeCloseTo(10000);
      expect(lengthUnits.statuteMile.toBase(1)).toBeCloseTo(1609.344);
      expect(lengthUnits.yard.toBase(1)).toBeCloseTo(0.9144);
    });
  });

  test('length', () => {
    const unit: LengthUnit = 'angstrom';
    const value = 12;
    const measure = length(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(lengthUnits[unit]);
  });
});