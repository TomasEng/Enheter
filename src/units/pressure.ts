import {areaUnits} from './area';
import {forceUnits} from './force';
import {lengthUnits} from './length';
import {pascal} from './basicUnits';

const bar = pascal.withFactor(100000, 'bar');
const standardAtmosphere = pascal.withFactor(101325, 'atm');

export const pressureUnits = {
  pascal,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix('milli'),
  kilopondPerSquareCentimetre: forceUnits.kilopond.dividedBy(lengthUnits.metre.withPrefix('centi').raisedTo(2), 'kgf/(cm^2)'),
  torr: standardAtmosphere.withFactor(1 / 760, 'Torr'),
  poundPerSquareInch: forceUnits.pound.dividedBy(areaUnits.squareInch, 'lb/(in^2)'),
  inchOfMercury: pascal.withFactor(3386.389, 'inHg'),
};

export type PressureUnit = keyof typeof pressureUnits;