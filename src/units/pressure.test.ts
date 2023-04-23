import {pressure, PressureUnit, pressureUnits} from './pressure';

describe('pressure', () => {
  describe('pressureUnits', () => {
    test.each(Object.keys(pressureUnits.units) as PressureUnit[])(
      '%s has correct dimension',
      (unit) => expect(pressureUnits.units[unit].dimension).toEqual({length: -1, mass: 1, time: -2})
    );
  });

  test('pressure', () => {
    const unit: PressureUnit = 'pascal';
    const value = 12;
    const measure = pressure(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(pressureUnits.units[unit]);
  });
});