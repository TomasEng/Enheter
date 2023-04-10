import {Unit} from "../Unit";

export const currentBase = new Unit("A", {current: 1});

export const currentUnits = {
  ampere: currentBase,
}

export type CurrentUnit = keyof typeof currentUnits;