import {
  amountOfSubstance,
  amountOfSubstanceUnit,
  AmountOfSubstanceUnit,
  amountOfSubstanceUnits
} from './amountOfSubstance';

describe('amountOfSubstance', () => {
  describe('amountOfSubstanceUnits', () => {
    test.each(Object.keys(amountOfSubstanceUnits.units) as AmountOfSubstanceUnit[])(
      '%s has correct dimension',
      (unit) => expect(amountOfSubstanceUnits.units[unit].dimension).toEqual({amountOfSubstance: 1})
    );
  });

  test('amountOfSubstance', () => {
    const unit: AmountOfSubstanceUnit = 'mole';
    const value = 12;
    const measure = amountOfSubstance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(amountOfSubstanceUnits.units[unit]);
  });

  test('amountOfSubstanceUnit', () => {
    const unit: AmountOfSubstanceUnit = 'mole';
    expect(amountOfSubstanceUnit(unit)).toEqual(amountOfSubstanceUnits.units[unit]);
  });
});