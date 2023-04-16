import {current, CurrentUnit, currentUnits} from './current';

describe('current', () => {
  describe('currentUnits', () => {
    test.each(Object.keys(currentUnits) as CurrentUnit[])(
      '%s has correct dimension',
      (unit) => expect(currentUnits[unit].dimension).toEqual({current: 1})
    );
  });

  test('current', () => {
    const unit: CurrentUnit = 'ampere';
    const value = 12;
    const measure = current(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(currentUnits[unit]);
  });
});