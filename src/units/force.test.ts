import {ForceUnit, forceUnits} from "./force";

describe('force', () => {
  test.each(Object.keys(forceUnits) as ForceUnit[])(
    '%s has correct dimension',
    (unit) => expect(forceUnits[unit].dimension).toEqual({mass: 1, length: 1, time: -2})
  );
});