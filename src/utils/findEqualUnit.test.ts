import {findEqualUnit} from './findEqualUnit';
import {candela, henry, metre, metrePerSecond, newton, pascal, second, squareMetre} from '../units/basicUnits';

describe('findEqualUnit', () => {
  it('Returns a corresponding unit if it exists in the unit lists', () => {
    expect(findEqualUnit(metre)).toBe(metre);
    expect(findEqualUnit(metre.dividedBy(second))).toBe(metrePerSecond);
    expect(findEqualUnit(newton.dividedBy(squareMetre))).toBe(pascal);
  });

  it('Returns null if no corresponding unit is found', () => {
    expect(findEqualUnit(metre.dividedBy(newton))).toBeNull();
    expect(findEqualUnit(candela.multipliedWith(henry))).toBeNull();
  });
});