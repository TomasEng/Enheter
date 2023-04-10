import {massUnits, MassUnit} from './mass';

describe('mass', () => {
  test.each(Object.keys(massUnits) as MassUnit[])(
    '%s has correct dimension',
    (unit) => expect(massUnits[unit].dimension).toEqual({mass: 1})
  );
});