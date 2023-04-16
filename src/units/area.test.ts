import {area, AreaUnit, areaUnits} from './area';

describe('area', () => {
  describe('areaUnits', () => {
    test.each(Object.keys(areaUnits) as AreaUnit[])(
      '%s has correct dimension',
      (unit) => expect(areaUnits[unit].dimension).toEqual({length: 2})
    );
  });

  test('area', () => {
    const unit: AreaUnit = 'are';
    const value = 12;
    const measure = area(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(areaUnits[unit]);
  })
});