import {capacitance, CapacitanceUnit, capacitanceUnits} from './capacitance';

describe('capacitance', () => {
  describe('capacitanceUnits', () => {
    test.each(Object.keys(capacitanceUnits) as CapacitanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(capacitanceUnits[unit].dimension).toEqual({mass: -1, length: -2, time: 4, current: 2})
    );
  });

  test('capacitance', () => {
    const unit: CapacitanceUnit = 'farad';
    const value = 12;
    const measure = capacitance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(capacitanceUnits[unit]);
  });
});