import {units} from "./units";
import {Unit} from "./Unit";

describe('Unit', () => {
  describe('fromSubUnits', () => {
    it('Creates a unit from a list of sub-units', () => {
      const metrePerSecond = Unit.fromSubUnits([
        {unit: units.metre, exponent: 1},
        {unit: units.second, exponent: -1},
      ]);
      expect(metrePerSecond.name).toBe('metre per second');
      expect(metrePerSecond.dimension).toEqual({length: 1, time: -1});
      expect(metrePerSecond.isBase).toBe(true);
      expect(metrePerSecond.baseConverter.nameChain).toEqual([]);
      expect(metrePerSecond.baseUnit).toBe(metrePerSecond);

      const metrePerHour = Unit.fromSubUnits([
        {unit: units.metre, exponent: 1},
        {unit: units.hour, exponent: -1},
      ]);
      expect(metrePerHour.name).toBe('metre per hour');
      expect(metrePerHour.dimension).toEqual({length: 1, time: -1});
      expect(metrePerHour.isBase).toBe(false);
      expect(metrePerHour.baseConverter.nameChain).toEqual([{operation: 'multiply', parameter: 1 / 3600}]);
      expect(metrePerHour.baseUnit).toEqual(metrePerSecond);
    });
  });

  describe('withPrefix', () => {
    it('Creates a unit with the given prefix', () => {
      const celsius = units.celsius;
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
});