import {timeUnits} from './time';
import {elementaryCharge, joule, volt, watt} from './basicUnits';
import {Measure} from '../Measure';

const calorie = joule.withFactor(4.184, 'cal');

export const energyUnits = {
  joule,
  electronVolt: volt.multipliedWith(elementaryCharge, 'eV'),
  erg: joule.withFactor(1e-7, 'erg'),
  calorie,
  kilocalorie: calorie.withPrefix('kilo'),
  wattHour: watt.multipliedWith(timeUnits.hour, 'Wh'),
  kilowattHour: watt.withPrefix('kilo').multipliedWith(timeUnits.hour, 'kWh'),
  wattSecond: watt.multipliedWith(timeUnits.second, 'Ws'),
};

export type EnergyUnit = keyof typeof energyUnits;

/**
 * Initiates a measure of energy.
 * @param unit The unit of the energy measure.
 * @param value The value of the energy measure.
 * @returns The new Measure object.
 */
export const energy = (unit: EnergyUnit, value: number): Measure =>
  new Measure(energyUnits[unit], value);