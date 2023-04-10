import {LengthUnit, lengthUnits} from './length';

describe('length', () => {
  test.each(Object.keys(lengthUnits) as LengthUnit[])(
    '%s has correct dimension',
    (unit) => expect(lengthUnits[unit].dimension).toEqual({length: 1})
  );
});