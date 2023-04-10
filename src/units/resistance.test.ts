import {ResistanceUnit, resistanceUnits} from './resistance';

describe('resistance', () => {
  test.each(Object.keys(resistanceUnits) as ResistanceUnit[])(
    '%s has the correct dimension',
    (unit) => expect(resistanceUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3, current: -2})
  );
});