import {temperature, TemperatureUnit, temperatureUnits} from './temperature';

describe('temperature', () => {
  describe('temperatureUnits', () => {
    test.each(Object.keys(temperatureUnits) as TemperatureUnit[])(
      '%s has correct dimension',
      (unit) => expect(temperatureUnits[unit].dimension).toEqual({temperature: 1})
    );

    test('313.15K = 40°C = 104°F = 563.67°Ra = 28.5°Rø = 13.2°N = 90°De = 32°Ré', () => {
      expect(temperatureUnits.kelvin.toBase(313.15)).toBeCloseTo(313.15);
      expect(temperatureUnits.celsius.toBase(40)).toBeCloseTo(313.15);
      expect(temperatureUnits.fahrenheit.toBase(104)).toBeCloseTo(313.15);
      expect(temperatureUnits.rankine.toBase(563.67)).toBeCloseTo(313.15);
      expect(temperatureUnits.romer.toBase(28.5)).toBeCloseTo(313.15);
      expect(temperatureUnits.newton.toBase(13.2)).toBeCloseTo(313.15);
      expect(temperatureUnits.delisle.toBase(90)).toBeCloseTo(313.15);
      expect(temperatureUnits.reaumur.toBase(32)).toBeCloseTo(313.15);
    });

    test('0K = -273.15°C = −459.67°F = 0°Ra = -218.52°Rø = -90.14°N = 559.725°De = -218.52°Ré', () => {
      expect(temperatureUnits.kelvin.toBase(0)).toBeCloseTo(0);
      expect(temperatureUnits.celsius.toBase(-273.15)).toBeCloseTo(0);
      expect(temperatureUnits.fahrenheit.toBase(-459.67)).toBeCloseTo(0);
      expect(temperatureUnits.rankine.toBase(0)).toBeCloseTo(0);
      expect(temperatureUnits.romer.toBase(-135.90375)).toBeCloseTo(0);
      expect(temperatureUnits.newton.toBase(-90.14)).toBeCloseTo(0);
      expect(temperatureUnits.delisle.toBase(559.725)).toBeCloseTo(0);
      expect(temperatureUnits.reaumur.toBase(-218.52)).toBeCloseTo(0);
    });
  });

  test('temperature', () => {
    const unit: TemperatureUnit = 'celsius';
    const value = 12;
    const measure = temperature(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(temperatureUnits[unit]);
  });
});