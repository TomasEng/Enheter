import {power, powerUnit, PowerUnit, powerUnits} from './power';

describe('power', () => {
  describe('powerUnits', () => {
    test.each(Object.keys(powerUnits.units) as PowerUnit[])(
      '%s has correct dimension',
      (unit) => expect(powerUnits.units[unit].dimension).toEqual({mass: 1, length: 2, time: -3})
    );
  });

  test('power', () => {
    const unit: PowerUnit = 'watt';
    const value = 12;
    const measure = power(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(powerUnits.units[unit]);
  });

  test('powerUnit', () => {
    const unit: PowerUnit = 'watt';
    expect(powerUnit(unit)).toEqual(powerUnits.units[unit]);
  });
});