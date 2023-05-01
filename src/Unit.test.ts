import {Unit} from './Unit';
import {gram, hour, kelvin, kilogram, metre, metrePerSecondSquared, nauticalMile, second} from './units/basicUnits';
import {BijectiveOperationChain} from './BijectiveOperation';
import {allUnits} from './units';

describe('Unit', () => {

  describe('fromSubUnits', () => {

    const metrePerSecond = Unit.fromSubUnits([{unit: metre, exponent: 1}, {
      unit: second,
      exponent: -1
    }]);
    const metrePerHour = Unit.fromSubUnits([{unit: metre, exponent: 1}, {
      unit: hour,
      exponent: -1
    }]);
    const knot = Unit.fromSubUnits([{unit: nauticalMile, exponent: 1}, {
      unit: hour,
      exponent: -1
    },], 'kt');

    it('Creates a unit from a list of sub-units', () => {

      expect(metrePerSecond.dimension).toEqual({length: 1, time: -1});
      expect(metrePerSecond.isBase).toBe(true);
      expect(metrePerSecond.baseConverter.nameChain).toEqual([]);
      expect(metrePerSecond.baseUnit).toBe(metrePerSecond);

      expect(metrePerHour.dimension).toEqual({length: 1, time: -1});
      expect(metrePerHour.isBase).toBe(false);
      expect(metrePerHour.baseConverter.nameChain).toEqual([{operation: 'multiply', parameter: 1 / 3600}]);
      expect(metrePerHour.baseUnit).toEqual(metrePerSecond);

      expect(knot.dimension).toEqual({length: 1, time: -1});
      expect(knot.isBase).toBe(false);
      expect(knot.baseConverter.nameChain).toEqual([{operation: 'multiply', parameter: 1852 / 3600}]);
      expect(knot.baseUnit).toEqual(metrePerSecond);
    });

    it('Generates a symbol for the unit if no symbol is given', () => {
      expect(metrePerSecond.symbol).toBe('m/s');
      expect(metrePerHour.symbol).toBe('m/h');
    });

    it('Uses the given symbol if one is given', () => {
      expect(knot.symbol).toBe('kt');
    });
  });

  describe('withPrefix', () => {
    it('Creates a unit with the given prefix', () => {
      const celsius = allUnits.temperature.units.celsius;
      const kilocelsius = celsius.withPrefix('kilo');
      expect(kilocelsius.symbol).toBe('k°C');
      expect(kilocelsius.dimension).toEqual({temperature: 1});
      expect(kilocelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(kilocelsius.baseConverter.nameChain).toEqual([
        {operation: 'multiply', parameter: 1000},
        {operation: 'add', parameter: 273.15},
      ]);
      const centicelsius = kilocelsius.withPrefix('centi');
      expect(centicelsius.symbol).toBe('c°C');
      expect(centicelsius.dimension).toEqual({temperature: 1});
      expect(centicelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(centicelsius.baseConverter.nameChain).toEqual([
        {operation: 'multiply', parameter: 0.01},
        {operation: 'add', parameter: 273.15},
      ]);
      const newCelsius = centicelsius.withPrefix(null);
      expect(newCelsius.symbol).toBe('°C');
      expect(newCelsius.dimension).toEqual({temperature: 1});
      expect(newCelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(newCelsius.baseConverter.nameChain).toEqual([
        {operation: 'add', parameter: 273.15},
      ]);
    });
  });

  describe('copy', () => {
    it('Creates a copy of the unit with the given symbol', () => {
      const copySymbol = 'ÆØÅ';
      const kilometre = metre.withPrefix('kilo');
      const kilometreCopy = kilometre.copy(copySymbol);
      expect(kilometreCopy.symbol).toBe(copySymbol);
      expect(kilometreCopy.dimension).toEqual(metre.dimension);
      expect(kilometreCopy.baseUnit).toBe(metre.baseUnit);
      expect(kilometreCopy.baseConverter.nameChain).toEqual(kilometre.baseConverter.nameChain);
      expect(kilometreCopy.prefix).toBe(null);
    });
  });

  describe('withFactor', () => {
    it('Creates a unit with the given factor', () => {
      const nauticalMile = metre.withFactor(1852, 'nautical mile');
      expect(nauticalMile.symbol).toBe('nautical mile');
      expect(nauticalMile.dimension).toEqual(metre.dimension);
      expect(nauticalMile.isBase).toBe(false);
      expect(nauticalMile.baseUnit).toBe(metre.baseUnit);
      expect(nauticalMile.baseConverter.nameChain).toEqual([{operation: 'multiply', parameter: 1852}]);
    });
  });

  describe('withOffset', () => {
    it('Creates a unit with the given offset', () => {
      const celsius = kelvin.withOffset(273.15, 'C');
      expect(celsius.symbol).toBe('C');
      expect(celsius.dimension).toEqual(kelvin.dimension);
      expect(celsius.isBase).toBe(false);
      expect(celsius.baseUnit).toBe(kelvin.baseUnit);
      expect(celsius.baseConverter.nameChain).toEqual([{operation: 'add', parameter: 273.15}]);
    });
  });

  describe('equals', () => {
    it('Returns true if dimensions and base converters are equal', () => {
      const nauticalMileCopy = new Unit(
        'custom',
        {length: 1},
        metre,
        new BijectiveOperationChain([{operation: 'multiply', parameter: 1852}]),
      );
      expect(nauticalMile.equals(nauticalMileCopy)).toBe(true);

      const metrePerSecondSquaredCopy = metre.dividedBy(second.squared());
      expect(metrePerSecondSquared.equals(metrePerSecondSquaredCopy)).toBe(true);
    });

    it('Returns false if dimensions are not equal', () => {
      expect(metre.equals(second)).toBe(false);
    });

    it('Returns false if base converters are not equal', () => {
      expect(nauticalMile.equals(metre)).toBe(false);
      expect(gram.equals(kilogram)).toBe(false);
    });
  });
});