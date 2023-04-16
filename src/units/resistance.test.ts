import {resistance, ResistanceUnit, resistanceUnits} from './resistance';

describe('resistance', () => {
  describe('resistanceUnits', () => {
    test.each(Object.keys(resistanceUnits) as ResistanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(resistanceUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -3, current: -2})
    );
  });

  test('resistance', () => {
    const unit: ResistanceUnit = 'ohm';
    const value = 12;
    const measure = resistance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(resistanceUnits[unit]);
  });
});