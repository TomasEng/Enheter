import {MagneticFluxUnit, magneticFluxUnits} from './magneticFlux';

describe('magneticFlux', () => {
  test.each(Object.keys(magneticFluxUnits) as MagneticFluxUnit[])(
    '%s has the correct dimension',
    (unit) => expect(magneticFluxUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -2, current: -1})
  );
});