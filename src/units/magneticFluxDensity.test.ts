import {
  magneticFluxDensity,
  magneticFluxDensityUnit,
  MagneticFluxDensityUnit,
  magneticFluxDensityUnits
} from './magneticFluxDensity';

describe('magneticFluxDensity', () => {
  describe('magneticFluxDensityUnits', () => {
    test.each(Object.keys(magneticFluxDensityUnits.units) as MagneticFluxDensityUnit[])(
      '%s has the correct dimension',
      (unit) => expect(magneticFluxDensityUnits.units[unit].dimension).toEqual({mass: 1, time: -2, current: -1})
    );
  });

  test('magneticFluxDensity', () => {
    const unit: MagneticFluxDensityUnit = 'tesla';
    const value = 12;
    const measure = magneticFluxDensity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(magneticFluxDensityUnits.units[unit]);
  });

  test('magneticFluxDensityUnit', () => {
    const unit: MagneticFluxDensityUnit = 'tesla';
    expect(magneticFluxDensityUnit(unit)).toEqual(magneticFluxDensityUnits.units[unit]);
  });
});