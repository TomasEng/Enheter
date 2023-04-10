import {pressureUnits, PressureUnit} from "./pressure";

describe('pressure', () => {
  test.each(Object.keys(pressureUnits) as PressureUnit[])(
    '%s has correct dimension',
    (unit) => expect(pressureUnits[unit].dimension).toEqual({length: -1, mass: 1, time: -2})
  );
});