import {magneticFlux, magneticFluxUnit, MagneticFluxUnit, magneticFluxUnits} from './magneticFlux';

describe('magneticFlux', () => {
  describe('magneticFluxUnits', () => {
    test.each(Object.keys(magneticFluxUnits.units) as MagneticFluxUnit[])(
      '%s has the correct dimension',
      (unit) => expect(magneticFluxUnits.units[unit].dimension).toEqual({mass: 1, length: 2, time: -2, current: -1})
    );
  });

  test('magneticFlux', () => {
    const unit: MagneticFluxUnit = 'weber';
    const value = 12;
    const measure = magneticFlux(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(magneticFluxUnits.units[unit]);
  });

  test('magneticFluxUnit', () => {
    const unit: MagneticFluxUnit = 'maxwell';
    expect(magneticFluxUnit(unit)).toEqual(magneticFluxUnits.units[unit]);
  });
});