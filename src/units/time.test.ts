import {time, timeUnit, TimeUnit, timeUnits} from './time';

describe('time', () => {
  describe('timeUnits', () => {
    test.each(Object.keys(timeUnits.units) as TimeUnit[])(
      '%s has correct dimension',
      (unit) => expect(timeUnits.units[unit].dimension).toEqual({time: 1})
    );
  });

  test('time', () => {
    const unit: TimeUnit = 'second';
    const value = 12;
    const measure = time(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(timeUnits.units[unit]);
  });

  test('timeUnit', () => {
    const unit: TimeUnit = 'minute';
    expect(timeUnit(unit)).toEqual(timeUnits.units[unit]);
  });
});