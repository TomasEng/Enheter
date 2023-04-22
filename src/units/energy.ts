import {timeUnits} from './time';
import {elementaryCharge, joule, volt, watt} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {EnergyDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const calorie = joule.withFactor(4.184, 'cal');

export const energyUnits = {
  joule,
  electronVolt: volt.multipliedWith(elementaryCharge, 'eV') as Unit<EnergyDimension>,
  erg: joule.withFactor(1e-7, 'erg'),
  calorie,
  kilocalorie: calorie.withPrefix('kilo'),
  wattHour: watt.multipliedWith(timeUnits.hour, 'Wh') as Unit<EnergyDimension>,
  kilowattHour: watt.withPrefix('kilo').multipliedWith(timeUnits.hour, 'kWh') as Unit<EnergyDimension>,
  wattSecond: watt.multipliedWith(timeUnits.second, 'Ws') as Unit<EnergyDimension>,
};

export type EnergyUnit = keyof typeof energyUnits;

export const energyUnitList: UnitList<EnergyDimension, EnergyUnit> = {
  dimension: {mass: 1, length: 2, time: -2},
  units: energyUnits,
};

/**
 * Initiates a measure of energy.
 * @param unit The unit of the energy measure.
 * @param value The value of the energy measure.
 * @returns The new Measure object.
 */
export const energy = (unit: EnergyUnit, value: number): Measure =>
  new Measure(energyUnits[unit], value);