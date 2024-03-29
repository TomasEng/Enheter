import {resistivity, resistivityUnit, ResistivityUnit, resistivityUnits} from './resistivity';

describe('resistivity', () => {
  describe('resistivityUnits', () => {
    test.each(Object.keys(resistivityUnits.units) as ResistivityUnit[])(
      '%s has the correct dimension',
      (unit) => expect(resistivityUnits.units[unit].dimension).toEqual({mass: 1, length: 3, time: -3, current: -2})
    );
  });

  test('resistivity', () => {
    const unit: ResistivityUnit = 'ohmMetre';
    const value = 12;
    const measure = resistivity(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(resistivityUnits.units[unit]);
  });

  test('resistivityUnit', () => {
    const unit: ResistivityUnit = 'ohmMetre';
    expect(resistivityUnit(unit)).toEqual(resistivityUnits.units[unit]);
  });
});