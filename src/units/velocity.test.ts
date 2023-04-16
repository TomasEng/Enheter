import {velocity, VelocityUnit, velocityUnits} from './velocity';

describe('velocity', () => {
  describe('velocityUnits', () => {
    test.each(Object.keys(velocityUnits) as VelocityUnit[])(
      '%s has correct dimension',
      (unit) => expect(velocityUnits[unit].dimension).toEqual({length: 1, time: -1})
    );
  });

  test('velocity', () => {
    const unit: VelocityUnit = 'metrePerSecond';
    const value = 12;
    const measure = velocity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(velocityUnits[unit]);
  });
});