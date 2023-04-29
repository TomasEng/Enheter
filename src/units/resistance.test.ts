import {resistance, resistanceUnit, ResistanceUnit, resistanceUnits} from './resistance';

describe('resistance', () => {
  describe('resistanceUnits', () => {
    test.each(Object.keys(resistanceUnits.units) as ResistanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(resistanceUnits.units[unit].dimension).toEqual({mass: 1, length: 2, time: -3, current: -2})
    );
  });

  test('resistance', () => {
    const unit: ResistanceUnit = 'ohm';
    const value = 12;
    const measure = resistance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(resistanceUnits.units[unit]);
  });

  test('resistanceUnit', () => {
    const unit: ResistanceUnit = 'ohm';
    expect(resistanceUnit(unit)).toEqual(resistanceUnits.units[unit]);
  });
});