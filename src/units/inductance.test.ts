import {InductanceUnit, inductanceUnits} from './inductance';

describe('inductance', () => {
  test.each(Object.keys(inductanceUnits) as InductanceUnit[])(
    '%s has the correct dimension',
    (unit) => expect(inductanceUnits[unit].dimension).toEqual({mass: 1, length: 2, current: -2, time: -2})
  );
});