import {Dimension} from "../Dimension";
import {areaUnits} from "./area";
import {forceUnits} from "./force";
import {lengthUnits} from "./length";

export const pressureDimension: Dimension = { mass: 1, length: -1, time: -2 };
export const pressureBase = forceUnits.newton.dividedBy(areaUnits.squareMetre, "pascal");

const bar = pressureBase.withFactor(100000, "bar");
const standardAtmosphere = pressureBase.withFactor(101325, "standard atmosphere");

export const pressureUnits = {
  pascal: pressureBase,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix("milli"),
  kilopondPerSquareCentimetre: forceUnits.kilopond.dividedBy(lengthUnits.metre.withPrefix("centi").raisedTo(2), "kilopond per square centimetre"),
  torr: standardAtmosphere.withFactor(1 / 760, "torr"),
  poundPerSquareInch: forceUnits.pound.dividedBy(areaUnits.squareInch, "pound per square inch"),
  inchOfMercury: pressureBase.withFactor(3386.389, "inch of mercury"),
}