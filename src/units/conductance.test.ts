import {conductance, conductanceUnit, ConductanceUnit, conductanceUnits} from './conductance';

describe('conductance', () => {
  describe('conductanceUnits', () => {
    test.each(Object.keys(conductanceUnits.units) as ConductanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(conductanceUnits.units[unit].dimension).toEqual({mass: -1, length: -2, time: 3, current: 2})
    );
  });

  test('conductance', () => {
    const unit: ConductanceUnit = 'siemens';
    const value = 12;
    const measure = conductance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(conductanceUnits.units[unit]);
  });

  test('conductanceUnit', () => {
    const unit: ConductanceUnit = 'siemens';
    expect(conductanceUnit(unit)).toEqual(conductanceUnits.units[unit]);
  });
});