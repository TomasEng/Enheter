import {VelocityUnit, velocityUnits} from "./velocity";

describe('velocity', () => {
  test.each(Object.keys(velocityUnits) as VelocityUnit[])(
    '%s has correct dimension',
    (unit) => expect(velocityUnits[unit].dimension).toEqual({length: 1, time: -1})
  );
});