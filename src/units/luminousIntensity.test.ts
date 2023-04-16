import {luminousIntensity, LuminousIntensityUnit, luminousIntensityUnits} from './luminousIntensity';

describe('luminousIntensity', () => {
  describe('luminousIntensityUnits', () => {
    test.each(Object.keys(luminousIntensityUnits) as LuminousIntensityUnit[])(
      '%s has correct dimension',
      (unit) => expect(luminousIntensityUnits[unit].dimension).toEqual({luminousIntensity: 1})
    );
  });

  test('luminousIntensity', () => {
    const unit: LuminousIntensityUnit = 'candela';
    const value = 12;
    const measure = luminousIntensity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(luminousIntensityUnits[unit]);
  });
});