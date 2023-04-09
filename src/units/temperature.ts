import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const temperatureDimension: Dimension = { temperature: 1 };
export const temperatureBase = new Unit("Kelvin", temperatureDimension);

export const temperatureUnits = {
  celsius: new Unit("Celsius", temperatureDimension, temperatureBase, BijectiveOperationChain.fromOffset(273.15)),
  delisle: new Unit("Delisle", temperatureDimension, temperatureBase, new BijectiveOperationChain([{operation: 'multiply', parameter: -2/3}, {operation: 'add', parameter: 373.15}])),
  fahrenheit: new Unit("Fahrenheit", temperatureDimension, temperatureBase, new BijectiveOperationChain([{operation: 'add', parameter: 459.67}, {operation: 'multiply', parameter: 5/9}])),
  kelvin: temperatureBase,
  newton: new Unit("Newton", temperatureDimension, temperatureBase, new BijectiveOperationChain([{operation: 'multiply', parameter: 100/33}, {operation: 'add', parameter: 273.15}])),
  rankine: temperatureBase.withFactor(5/9, "Rankine"),
  reaumur: new Unit("Réaumur", temperatureDimension, temperatureBase, new BijectiveOperationChain([{operation: 'multiply', parameter: 5/4}, {operation: 'add', parameter: 273.15}])),
  romer: new Unit("Rømer", temperatureDimension, temperatureBase, new BijectiveOperationChain([{operation: 'add', parameter: -7.5}, {operation: 'multiply', parameter: 40/21}, {operation: 'add', parameter: 273.15}])),
}