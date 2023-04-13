import {ChargeUnit, chargeUnits} from './charge';

describe('charge', () => {
  test.each(Object.keys(chargeUnits) as ChargeUnit[])(
    '%s has the correct dimension',
    (unit) => expect(chargeUnits[unit].dimension).toEqual({current: 1, time: 1})
  );
});