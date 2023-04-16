import {time, TimeUnit, timeUnits} from './time';

describe('time', () => {
  describe('timeUnits', () => {
    test.each(Object.keys(timeUnits) as TimeUnit[])(
      '%s has correct dimension',
      (unit) => expect(timeUnits[unit].dimension).toEqual({time: 1})
    );
  });

  test('time', () => {
    const unit: TimeUnit = 'second';
    const value = 12;
    const measure = time(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(timeUnits[unit]);
  });
});