import {voltage, VoltageUnit, voltageUnits} from './voltage';

describe('voltage', () => {
  describe('voltageUnits', () => {
    test.each(Object.keys(voltageUnits) as VoltageUnit[])(
      '%s has the correct dimension',
      (unit) => expect(voltageUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3, current: -1})
    );
  });

  test('voltage', () => {
    const unit: VoltageUnit = 'volt';
    const value = 12;
    const measure = voltage(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(voltageUnits[unit]);
  });
});