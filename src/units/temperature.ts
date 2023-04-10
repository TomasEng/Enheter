import {Dimension} from '../Dimension';
import {Unit} from '../Unit';
import {BijectiveOperationChain} from '../BijectiveOperation';
import {UnitList} from '../UnitList';
import {kelvin} from './basicUnits';

const temperatureDimension: Dimension = {temperature: 1};

export const temperatureUnits: UnitList = {
  celsius: new Unit('°C', temperatureDimension, kelvin, BijectiveOperationChain.fromOffset(273.15)),
  delisle: new Unit('°De', temperatureDimension, kelvin, new BijectiveOperationChain([{
    operation: 'multiply',
    parameter: -2 / 3
  }, {operation: 'add', parameter: 373.15}])),
  fahrenheit: new Unit('°F', temperatureDimension, kelvin, new BijectiveOperationChain([{
    operation: 'add',
    parameter: 459.67
  }, {operation: 'multiply', parameter: 5 / 9}])),
  kelvin,
  newton: new Unit('°N', temperatureDimension, kelvin, new BijectiveOperationChain([{
    operation: 'multiply',
    parameter: 100 / 33
  }, {operation: 'add', parameter: 273.15}])),
  rankine: kelvin.withFactor(5 / 9, '°R'),
  reaumur: new Unit('°Ré', temperatureDimension, kelvin, new BijectiveOperationChain([{
    operation: 'multiply',
    parameter: 5 / 4
  }, {operation: 'add', parameter: 273.15}])),
  romer: new Unit('°Rø', temperatureDimension, kelvin, new BijectiveOperationChain([{
    operation: 'add',
    parameter: -7.5
  }, {operation: 'multiply', parameter: 40 / 21}, {operation: 'add', parameter: 273.15}])),
};

export type TemperatureUnit = keyof typeof temperatureUnits;