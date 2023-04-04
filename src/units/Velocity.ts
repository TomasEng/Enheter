import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";
import {lengthUnits} from "./Length";
import {timeUnits} from "./Time";

export const velocityDimension: Dimension = { length: 1, time: -1 };
export const velocityBase = Unit.fromSubUnits([{unit: lengthUnits.metre, exponent: 1}, {unit: timeUnits.second, exponent: -1}]);

export const velocityUnits = {
  metrePerSecond: velocityBase,
  metrePerHour: new Unit(
    "metre per hour",
    velocityDimension,
    velocityBase,
    BijectiveOperationChain.fromFactor(1 / 3600),
    null,
    [{unit: lengthUnits.metre, exponent: 1}, {unit: timeUnits.hour, exponent: -1}]
  ),
  footPerSecond: new Unit(
    "foot per second",
    velocityDimension,
    velocityBase,
    BijectiveOperationChain.fromFactor(0.3048),
    null,
    [{unit: lengthUnits.foot, exponent: 1}, {unit: timeUnits.second, exponent: -1}]
  ),
  knot: new Unit("knot", velocityDimension, velocityBase, BijectiveOperationChain.fromFactor(1852 / 3600)),
}