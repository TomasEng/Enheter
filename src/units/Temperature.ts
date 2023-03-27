import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const temperatureDimension: Dimension = { temperature: 1 };

export const temperatureUnits = {
  kelvin: new Unit("kelvin", temperatureDimension),
  celsius: new Unit("celsius", temperatureDimension, BijectiveOperationChain.fromOffset(273.15)),
}