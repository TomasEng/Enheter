import {AreaUnit, areaUnits} from './area';

describe('area', () => {
  test.each(Object.keys(areaUnits) as AreaUnit[])(
    '%s has correct dimension',
    (unit) => expect(areaUnits[unit].dimension).toEqual({length: 2})
  );
});