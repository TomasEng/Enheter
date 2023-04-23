import {energy, EnergyUnit, energyUnits} from './energy';

describe('energy', () => {
  describe('energyUnits', () => {
    test.each(Object.keys(energyUnits.units) as EnergyUnit[])(
      '%s has correct dimension',
      (unit) => expect(energyUnits.units[unit].dimension).toEqual({mass: 1, length: 2, time: -2})
    );
  });

  test('energy', () => {
    const unit: EnergyUnit = 'joule';
    const value = 12;
    const measure = energy(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(energyUnits.units[unit]);
  });
});