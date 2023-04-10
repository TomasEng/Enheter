import {areaUnits} from './area';
import {forceUnits} from './force';
import {lengthUnits} from './length';

export const pressureBase = forceUnits.newton.dividedBy(areaUnits.squareMetre, 'Pa');

const bar = pressureBase.withFactor(100000, 'bar');
const standardAtmosphere = pressureBase.withFactor(101325, 'atm');

export const pressureUnits = {
  pascal: pressureBase,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix('milli'),
  kilopondPerSquareCentimetre: forceUnits.kilopond.dividedBy(lengthUnits.metre.withPrefix('centi').raisedTo(2), 'kgf/(cm^2)'),
  torr: standardAtmosphere.withFactor(1 / 760, 'Torr'),
  poundPerSquareInch: forceUnits.pound.dividedBy(areaUnits.squareInch, 'lb/(in^2)'),
  inchOfMercury: pressureBase.withFactor(3386.389, 'inHg'),
};

export type PressureUnit = keyof typeof pressureUnits;