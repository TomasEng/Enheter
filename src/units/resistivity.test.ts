import {ResistivityUnit, resistivityUnits} from './resistivity';

describe('resistivity', () => {
  test.each(Object.keys(resistivityUnits) as ResistivityUnit[])(
    '%s has the correct dimension',
    (unit) => expect(resistivityUnits[unit].dimension).toEqual({mass: 1, length: 3, time: -3, current: -2})
  );
});