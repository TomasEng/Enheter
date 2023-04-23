import {conductivity, ConductivityUnit, conductivityUnits} from './conductivity';

describe('conductivity', () => {
  describe('conductivityUnits', () => {
    test.each(Object.keys(conductivityUnits.units) as ConductivityUnit[])(
      '%s has the correct dimension',
      (unit) => expect(conductivityUnits.units[unit].dimension).toEqual({mass: -1, length: -3, time: 3, current: 2})
    );
  });

  test('conductivity', () => {
    const unit: ConductivityUnit = 'siemensPerMetre';
    const value = 12;
    const measure = conductivity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(conductivityUnits.units[unit]);
  });
});