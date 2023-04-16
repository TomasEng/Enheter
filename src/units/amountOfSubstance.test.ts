import {amountOfSubstance, AmountOfSubstanceUnit, amountOfSubstanceUnits} from './amountOfSubstance';

describe('amountOfSubstance', () => {
  describe('amountOfSubstanceUnits', () => {
    test.each(Object.keys(amountOfSubstanceUnits) as AmountOfSubstanceUnit[])(
      '%s has correct dimension',
      (unit) => expect(amountOfSubstanceUnits[unit].dimension).toEqual({amountOfSubstance: 1})
    );
  });

  test('amountOfSubstance', () => {
    const unit: AmountOfSubstanceUnit = 'mole';
    const value = 12;
    const measure = amountOfSubstance(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(amountOfSubstanceUnits[unit]);
  });
});