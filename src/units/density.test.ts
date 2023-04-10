import {densityUnits} from './density';

describe('density', () => {
  test.each(Object.keys(densityUnits))(
    '%s has the correct dimension',
    (unit) => expect(densityUnits[unit].dimension).toEqual({mass: 1, length: -3})
  );
});