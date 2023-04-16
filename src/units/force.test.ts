import {force, ForceUnit, forceUnits} from './force';

describe('force', () => {
  describe('forceUnits', () => {
    test.each(Object.keys(forceUnits) as ForceUnit[])(
      '%s has correct dimension',
      (unit) => expect(forceUnits[unit].dimension).toEqual({mass: 1, length: 1, time: -2})
    );
  });

  test('force', () => {
    const unit: ForceUnit = 'newton';
    const value = 12;
    const measure = force(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(forceUnits[unit]);
  });
});