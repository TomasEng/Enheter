import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const massDimension: Dimension = { mass: 1 };
export const massBase = new Unit("kg", massDimension, undefined, undefined, "kilo");

export function massUnit(name: string, factor: number): Unit {
  return new Unit(name, massDimension, massBase, BijectiveOperationChain.fromFactor(factor));
}

export const massUnits = {
  carat: massUnit("ct", .0002),
  gram: massBase.withPrefix(null),
  kilogram: massBase,
  ounce: massUnit("℥", .028349523125),
  pound: massUnit("lb", .45359237),
  tonne: massUnit("t", 1000),
}

export type MassUnit = keyof typeof massUnits;