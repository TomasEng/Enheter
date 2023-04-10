import {Unit} from "../Unit";

export const massBase = new Unit("kg", { mass: 1 }, undefined, undefined, "kilo");

export const massUnits = {
  carat: massBase.withFactor(.0002, "ct"),
  gram: massBase.withPrefix(null),
  kilogram: massBase,
  ounce: massBase.withFactor(.028349523125, "℥"),
  pound: massBase.withFactor(.45359237, "lb"),
  tonne: massBase.withFactor(1000, "t"),
};

export type MassUnit = keyof typeof massUnits;