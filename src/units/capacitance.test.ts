import {CapacitanceUnit, capacitanceUnits} from './capacitance';

describe('capacitance', () => {
  test.each(Object.keys(capacitanceUnits) as CapacitanceUnit[])(
    '%s has the correct dimension',
    (unit) => expect(capacitanceUnits[unit].dimension).toEqual({mass: -1, length: -2, time: 4, current: 2})
  );
});