import {ConductanceUnit, conductanceUnits} from './conductance';

describe('conductance', () => {
  test.each(Object.keys(conductanceUnits) as ConductanceUnit[])(
    '%s has the correct dimension',
    (unit) => expect(conductanceUnits[unit].dimension).toEqual({mass: -1, length: -2, time: 3, current: 2})
  );
});