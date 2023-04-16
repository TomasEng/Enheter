import {inductance, InductanceUnit, inductanceUnits} from './inductance';

describe('inductance', () => {
  describe('inductanceUnits', () => {
    test.each(Object.keys(inductanceUnits) as InductanceUnit[])(
      '%s has the correct dimension',
      (unit) => expect(inductanceUnits[unit].dimension).toEqual({mass: 1, length: 2, current: -2, time: -2})
    );
  });

  test('inductance', () => {
    const unit: InductanceUnit = 'henry';
    const value = 12;
    const measure = inductance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(inductanceUnits[unit]);
  });
});