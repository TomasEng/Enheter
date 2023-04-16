import {mass, MassUnit, massUnits} from './mass';

describe('mass', () => {
  describe('massUnits', () => {
    test.each(Object.keys(massUnits) as MassUnit[])(
      '%s has correct dimension',
      (unit) => expect(massUnits[unit].dimension).toEqual({mass: 1})
    );
  });

  test('mass', () => {
    const unit: MassUnit = 'kilogram';
    const value = 12;
    const measure = mass(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(massUnits[unit]);
  });
});