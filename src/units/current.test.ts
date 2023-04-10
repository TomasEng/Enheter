import {CurrentUnit, currentUnits} from './current';

describe('current', () => {
  test.each(Object.keys(currentUnits) as CurrentUnit[])(
    '%s has correct dimension',
    (unit) => expect(currentUnits[unit].dimension).toEqual({current: 1})
  );
});