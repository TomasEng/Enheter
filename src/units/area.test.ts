import {area, areaUnit, AreaUnit, areaUnits} from './area';

describe('area', () => {
  describe('areaUnits', () => {
    test.each(Object.keys(areaUnits.units) as AreaUnit[])(
      '%s has correct dimension',
      (unit) => expect(areaUnits.units[unit].dimension).toEqual({length: 2})
    );
  });

  test('area', () => {
    const unit: AreaUnit = 'are';
    const value = 12;
    const measure = area(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(areaUnits.units[unit]);
  });

  test('areaUnit', () => {
    const unit: AreaUnit = 'are';
    expect(areaUnit(unit)).toEqual(areaUnits.units[unit]);
  });
});