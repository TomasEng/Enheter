import {luminousIntensity, LuminousIntensityUnit, luminousIntensityUnits} from './luminousIntensity';

describe('luminousIntensity', () => {
  describe('luminousIntensityUnits', () => {
    test.each(Object.keys(luminousIntensityUnits.units) as LuminousIntensityUnit[])(
      '%s has correct dimension',
      (unit) => expect(luminousIntensityUnits.units[unit].dimension).toEqual({luminousIntensity: 1})
    );
  });

  test('luminousIntensity', () => {
    const unit: LuminousIntensityUnit = 'candela';
    const value = 12;
    const measure = luminousIntensity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(luminousIntensityUnits.units[unit]);
  });
});