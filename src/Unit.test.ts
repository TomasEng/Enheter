import {Unit} from "./Unit";
import {lengthUnits, temperatureUnits, timeUnits} from "./units";

describe('Unit', () => {

  describe('fromSubUnits', () => {

    const metrePerSecond = Unit.fromSubUnits([{unit: lengthUnits.metre, exponent: 1}, {unit: timeUnits.second, exponent: -1}]);
    const metrePerHour = Unit.fromSubUnits([{unit: lengthUnits.metre, exponent: 1}, {unit: timeUnits.hour, exponent: -1}]);
    const knot = Unit.fromSubUnits([{unit: lengthUnits.nauticalMile, exponent: 1}, {unit: timeUnits.hour, exponent: -1},], 'knot');

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

    it('Generates a name for the unit if no name is given', () => {
      expect(metrePerSecond.name).toBe('metre per second');
      expect(metrePerHour.name).toBe('metre per hour');
    });

    it('Uses the given name if one is given', () => {
      expect(knot.name).toBe('knot');
    });
  });

  describe('withPrefix', () => {
    it('Creates a unit with the given prefix', () => {
      const celsius = temperatureUnits.celsius;
      const kilocelsius = celsius.withPrefix('kilo');
      expect(kilocelsius.name).toBe('kilocelsius');
      expect(kilocelsius.dimension).toEqual({temperature: 1});
      expect(kilocelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(kilocelsius.baseConverter.nameChain).toEqual([
        {operation: 'multiply', parameter: 1000},
        {operation: 'add', parameter: 273.15},
      ]);
      const centicelsius = kilocelsius.withPrefix('centi');
      expect(centicelsius.name).toBe('centicelsius');
      expect(centicelsius.dimension).toEqual({temperature: 1});
      expect(centicelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(centicelsius.baseConverter.nameChain).toEqual([
        {operation: 'multiply', parameter: 0.01},
        {operation: 'add', parameter: 273.15},
      ]);
      const newCelsius = centicelsius.withPrefix(null);
      expect(newCelsius.name).toBe('celsius');
      expect(newCelsius.dimension).toEqual({temperature: 1});
      expect(newCelsius.isBase).toBe(false);
      expect(kilocelsius.baseUnit).toBe(celsius.baseUnit);
      expect(newCelsius.baseConverter.nameChain).toEqual([
          {operation: 'add', parameter: 273.15},
      ]);
    });
  });

    describe('withFactor', () => {
      it('Creates a unit with the given factor', () => {
        const metre = lengthUnits.metre;
        const nauticalMile = metre.withFactor(1852, 'nautical mile');
        expect(nauticalMile.name).toBe('nautical mile');
        expect(nauticalMile.dimension).toEqual(metre.dimension);
        expect(nauticalMile.isBase).toBe(false);
        expect(nauticalMile.baseUnit).toBe(metre.baseUnit);
        expect(nauticalMile.baseConverter.nameChain).toEqual([{operation: 'multiply', parameter: 1852}]);
      });
    });
});