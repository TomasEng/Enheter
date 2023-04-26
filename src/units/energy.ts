import {elementaryCharge, hour, joule, second, volt, watt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {EnergyDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const calorie = joule.withFactor(4.184, 'cal', 'calorie');

const units = {
  joule,
  electronVolt: volt.multipliedWith(elementaryCharge, 'eV', 'electronVolt') as Unit<EnergyDimension>,
  erg: joule.withFactor(1e-7, 'erg', 'erg'),
  calorie,
  kilocalorie: calorie.withPrefix('kilo', 'kilocalorie'),
  wattHour: watt.multipliedWith(hour, 'Wh', 'wattHour') as Unit<EnergyDimension>,
  kilowattHour: watt.withPrefix('kilo').multipliedWith(hour, 'kWh', 'kilowattHour') as Unit<EnergyDimension>,
  wattSecond: watt.multipliedWith(second, 'Ws', 'wattSecond') as Unit<EnergyDimension>,
};

export type EnergyUnit = keyof typeof units;

export const energyUnits: UnitList<EnergyDimension, EnergyUnit> = {
  dimension: {mass: 1, length: 2, time: -2},
  units,
};

/**
 * Initiates a measure of energy.
 * @param unit The unit of the energy measure.
 * @param value The value of the energy measure.
 * @returns The new Measure object.
 */
export const energy = (unit: EnergyUnit, value: number): Measure =>
  new Measure(units[unit], value);