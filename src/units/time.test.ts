import {TimeUnit, timeUnits} from "./time";

describe('time', () => {
  test.each(Object.keys(timeUnits) as TimeUnit[])(
    '%s has correct dimension',
    (unit) => expect(timeUnits[unit].dimension).toEqual({time: 1})
  );
});