import {TemperatureUnit, temperatureUnits} from './temperature';

describe('temperature', () => {
  test.each(Object.keys(temperatureUnits) as TemperatureUnit[])(
    '%s has correct dimension',
    (unit) => expect(temperatureUnits[unit].dimension).toEqual({temperature: 1})
  );
});