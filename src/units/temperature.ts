import {kelvin} from './basicUnits';
import {Measure} from '../Measure';

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

/**
 * Initiates a measure of temperature.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const temperature = (
  unit: TemperatureUnit,
  value: number
): Measure => new Measure(temperatureUnits[unit], value);