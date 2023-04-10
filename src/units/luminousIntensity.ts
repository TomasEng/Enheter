import {Unit} from "../Unit";

export const luminousIntensityBase = new Unit("cd", {luminousIntensity: 1});

export const luminousIntensityUnits = {
  candela: luminousIntensityBase,
  candlepower: luminousIntensityBase.withFactor(0.981, "cp"),
};

export type LuminousIntensityUnit = keyof typeof luminousIntensityUnits;