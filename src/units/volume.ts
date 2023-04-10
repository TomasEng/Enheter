import {lengthUnits} from "./length";

export const volumeBase = lengthUnits.metre.raisedTo(3, "m^3");

export const volumeUnits = {
  cubicFoot: lengthUnits.foot.raisedTo(3, "ft^3"),
  cubicInch: lengthUnits.inch.raisedTo(3, "in^3"),
  cubicMetre: volumeBase,
  cubicYard: lengthUnits.yard.raisedTo(3, "yd^3"),
  litre: volumeBase.withFactor(0.001, "L"),
};

export type VolumeUnit = keyof typeof volumeUnits;