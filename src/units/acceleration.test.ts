import {AccelerationUnit, accelerationUnits} from "./acceleration";

describe('acceleration', () => {
  test.each(Object.keys(accelerationUnits) as AccelerationUnit[])(
    '%s has correct dimension',
    (unit) => expect(accelerationUnits[unit].dimension).toEqual({length: 1, time: -2})
  );
});