import {kelvin} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {TemperatureDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const rankine = kelvin.withFactor(5 / 9, '°R', 'rankine');
const celsius = kelvin.withOffset(273.15, '°C', 'celsius');

const units = {
  celsius,
  delisle: kelvin.withOffset(373.15).withFactor(-2 / 3, '°De', 'delisle'),
  fahrenheit: rankine.withOffset(459.67, '°F', 'fahrenheit'),
  kelvin,
  newton: celsius.withFactor(100 / 33, '°N', 'newton'),
  rankine,
  reaumur: celsius.withFactor(5 / 4, '°Ré', 'reaumur'),
  romer: celsius.withFactor(40 / 21).withOffset(-7.5, '°Rø', 'romer'),
};

export type TemperatureUnit = keyof typeof units;

export const temperatureUnits: UnitList<TemperatureDimension, TemperatureUnit> = {
  dimensionName: 'temperature',
  dimension: {temperature: 1},
  units,
};

/**
 * Initiates a measure of temperature.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const temperature = (
  unit: TemperatureUnit,
  value: number
): Measure => new Measure(units[unit], value);

/**
 * Gets a given unit of temperature.
 * @param key The key of the unit.
 * @returns The temperature unit.
 */
export const temperatureUnit = (key: TemperatureUnit): Unit<TemperatureDimension> => units[key];