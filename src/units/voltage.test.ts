import {VoltageUnit, voltageUnits} from './voltage';

describe('voltage', () => {
  test.each(Object.keys(voltageUnits) as VoltageUnit[])(
    '%s has the correct dimension',
    (unit) => expect(voltageUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3, current: -1})
  );
});