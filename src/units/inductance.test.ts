import {inductance, inductanceUnit, InductanceUnit, inductanceUnits} from './inductance';

describe('inductance', () => {
  describe('inductanceUnits', () => {
    test.each(Object.keys(inductanceUnits.units) as InductanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(inductanceUnits.units[unit].dimension).toEqual({mass: 1, length: 2, current: -2, time: -2})
    );
  });

  test('inductance', () => {
    const unit: InductanceUnit = 'henry';
    const value = 12;
    const measure = inductance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(inductanceUnits.units[unit]);
  });

  test('inductanceUnit', () => {
    const unit: InductanceUnit = 'henry';
    expect(inductanceUnit(unit)).toEqual(inductanceUnits.units[unit]);
  });
});