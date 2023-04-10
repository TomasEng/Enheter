import {EnergyUnit, energyUnits} from './energy';

describe('energy', () => {
  test.each(Object.keys(energyUnits) as EnergyUnit[])(
    '%s has correct dimension',
    (unit) => expect(energyUnits[unit].dimension).toEqual({mass: 1, length: 2, time: -2})
  );
});