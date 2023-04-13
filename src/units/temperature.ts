import {kelvin} from './basicUnits';

const rankine = kelvin.withFactor(5 / 9, '°R');
const celsius = kelvin.withOffset(273.15, '°C');

export const temperatureUnits = {
  celsius,
  delisle: kelvin.withOffset(373.15).withFactor(-2 / 3, '°De'),
  fahrenheit: rankine.withOffset(459.67, '°F'),
  kelvin,
  newton: celsius.withFactor(100 / 33, '°N'),
  rankine,
  reaumur: celsius.withFactor(5 / 4, '°Ré'),
  romer: celsius.withFactor(40 / 21).withOffset(-7.5, '°Rø'),
};

export type TemperatureUnit = keyof typeof temperatureUnits;