import {charge, ChargeUnit, chargeUnits} from './charge';

describe('charge', () => {
  describe('chargeUnits', () => {
    test.each(Object.keys(chargeUnits) as ChargeUnit[])(
      '%s has the correct dimension',
      (unit) => expect(chargeUnits[unit].dimension).toEqual({current: 1, time: 1})
    );
  });

  test('charge', () => {
    const unit: ChargeUnit = 'coulomb';
    const value = 12;
    const measure = charge(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(chargeUnits[unit]);
  });
});