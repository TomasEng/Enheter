import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const temperatureDimension: Dimension = { temperature: 1 };
export const temperatureBase = new Unit("kelvin", temperatureDimension);

export const temperatureUnits = {
  kelvin: temperatureBase,
  celsius: new Unit("celsius", temperatureDimension, temperatureBase, BijectiveOperationChain.fromOffset(273.15)),
}