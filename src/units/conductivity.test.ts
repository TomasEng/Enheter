import {ConductivityUnit, conductivityUnits} from './conductivity';

describe('conductivity', () => {
  test.each(Object.keys(conductivityUnits) as ConductivityUnit[])(
    '%s has the correct dimension',
    (unit) => expect(conductivityUnits[unit].dimension).toEqual({mass: -1, length: -3, time: 3, current: 2})
  );
});