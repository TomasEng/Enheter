import {PowerUnit, powerUnits} from './power';

describe('power', () => {
  test.each(Object.keys(powerUnits) as PowerUnit[])(
    '%s has correct dimension',
    (unit) => expect(powerUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3})
  );
});