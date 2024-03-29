import {velocity, velocityUnit, VelocityUnit, velocityUnits} from './velocity';

describe('velocity', () => {
  describe('velocityUnits', () => {
    test.each(Object.keys(velocityUnits.units) as VelocityUnit[])(
      '%s has correct dimension',
      (unit) => expect(velocityUnits.units[unit].dimension).toEqual({length: 1, time: -1})
    );
  });

  test('velocity', () => {
    const unit: VelocityUnit = 'metrePerSecond';
    const value = 12;
    const measure = velocity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(velocityUnits.units[unit]);
  });

  test('velocityUnit', () => {
    const unit: VelocityUnit = 'knot';
    expect(velocityUnit(unit)).toEqual(velocityUnits.units[unit]);
  });
});