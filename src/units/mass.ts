import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const massDimension: Dimension = { mass: 1 };
export const massBase = new Unit("kilogram", massDimension, undefined, undefined, "kilo");

export function massUnit(name: string, factor: number): Unit {
  return new Unit(name, massDimension, massBase, BijectiveOperationChain.fromFactor(factor));
}

export const massUnits = {
  carat: massUnit("carat", .0002),
  gram: massBase.withPrefix(null),
  kilogram: massBase,
  ounce: massUnit("ounce", .028349523125),
  pound: massUnit("pound", .45359237),
  tonne: massUnit("tonne", 1000),
}

export type MassUnit = keyof typeof massUnits;