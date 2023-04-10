import {LuminousIntensityUnit, luminousIntensityUnits} from "./luminousIntensity";

describe('luminousIntensity', () => {
  test.each(Object.keys(luminousIntensityUnits) as LuminousIntensityUnit[])(
    '%s has correct dimension',
    (unit) => expect(luminousIntensityUnits[unit].dimension).toEqual({luminousIntensity: 1})
  );
});