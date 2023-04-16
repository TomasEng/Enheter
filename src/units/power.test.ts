import {power, PowerUnit, powerUnits} from './power';

describe('power', () => {
  describe('powerUnits', () => {
    test.each(Object.keys(powerUnits) as PowerUnit[])(
      '%s has correct dimension',
      (unit) => expect(powerUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3})
    );
  });

  test('power', () => {
    const unit: PowerUnit = 'watt';
    const value = 12;
    const measure = power(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(powerUnits[unit]);
  });
});