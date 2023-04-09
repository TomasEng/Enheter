import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {BijectiveOperationChain} from "../BijectiveOperation";
import {massUnits} from "./mass";
import {accelerationUnits} from "./acceleration";

export const forceDimension: Dimension = { mass: 1, length: 1, time: -2 };
export const forceBase = massUnits.kilogram.multipliedWith(accelerationUnits.metrePerSecondSquared, "newton");

export function forceUnit(name: string, factor: number): Unit {
  return new Unit(name, forceDimension, forceBase, BijectiveOperationChain.fromFactor(factor));
}

const pond = forceUnit("pond", 0.00980665);

export const forceUnits = {
  newton: forceBase,
  kilonewton: forceBase.withPrefix("kilo"),
  dyne: forceUnit("dyne", 0.00001),
  pond,
  kilopond: pond.withPrefix("kilo"),
  poundal: massUnits.pound.multipliedWith(accelerationUnits.footPerSecondSquared, "poundal"),
  pound: forceBase.withFactor(4.4482216152605, "pound"),
}

export type ForceUnit = keyof typeof forceUnits;