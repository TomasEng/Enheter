import {density, densityUnit, DensityUnit, densityUnits} from './density';

describe('density', () => {
  describe('densityUnits', () => {
    test.each(Object.keys(densityUnits.units) as DensityUnit[])(
      '%s has the correct dimension',
      (unit) => expect(densityUnits.units[unit].dimension).toEqual({mass: 1, length: -3})
    );
  });

  test('density', () => {
    const unit: DensityUnit = 'kilogramPerCubicMetre';
    const value = 12;
    const measure = density(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(densityUnits.units[unit]);
  });

  test('densityUnit', () => {
    const unit: DensityUnit = 'gramPerCubicCentimetre';
    expect(densityUnit(unit)).toEqual(densityUnits.units[unit]);
  });
});