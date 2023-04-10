import {UnitList} from '../UnitList';
import {timeUnits} from './time';
import {elementaryCharge, joule, volt, watt} from './basicUnits';

const calorie = joule.withFactor(4.184, 'cal');

export const energyUnits: UnitList = {
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