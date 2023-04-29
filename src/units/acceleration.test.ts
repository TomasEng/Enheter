import {acceleration, accelerationUnit, AccelerationUnit, accelerationUnits} from './acceleration';

describe('acceleration', () => {
  describe('accelerationUnits', () => {
    test.each(Object.keys(accelerationUnits.units) as AccelerationUnit[])(
      '%s has correct dimension',
      (unit) => expect(accelerationUnits.units[unit].dimension).toEqual({length: 1, time: -2})
    );
  });

  test('acceleration', () => {
    const unit: AccelerationUnit = 'metrePerSecondSquared';
    const value = 12;
    const measure = acceleration(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(accelerationUnits.units[unit]);
  });

  test('accelerationUnit', () => {
    const unit: AccelerationUnit = 'metrePerSecondSquared';
    expect(accelerationUnit(unit)).toEqual(accelerationUnits.units[unit]);
  });
});