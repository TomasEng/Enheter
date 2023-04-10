import {AmountOfSubstanceUnit, amountOfSubstanceUnits} from "./amountOfSubstance";

describe('amountOfSubstance', () => {
  test.each(Object.keys(amountOfSubstanceUnits) as AmountOfSubstanceUnit[])(
    '%s has correct dimension',
    (unit) => expect(amountOfSubstanceUnits[unit].dimension).toEqual({amountOfSubstance: 1})
  );
});