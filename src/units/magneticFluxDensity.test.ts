import {MagneticFluxDensityUnit, magneticFluxDensityUnits} from './magneticFluxDensity';

describe('magneticFluxDensity', () => {
  test.each(Object.keys(magneticFluxDensityUnits) as MagneticFluxDensityUnit[])(
    '%s has the correct dimension',
    (unit) => expect(magneticFluxDensityUnits[unit].dimension).toEqual({mass: 1, time: -2, current: -1})
  );
});