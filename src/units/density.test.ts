import {DensityUnit, densityUnits} from './density';

describe('density', () => {
  test.each(Object.keys(densityUnits) as DensityUnit[])(
    '%s has the correct dimension',
    (unit) => expect(densityUnits[unit].dimension).toEqual({mass: 1, length: -3})
  );
});