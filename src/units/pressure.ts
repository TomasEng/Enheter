import {areaUnits} from './area';
import {forceUnits} from './force';
import {lengthUnits} from './length';
import {pascal} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {PressureDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const bar = pascal.withFactor(100000, 'bar');
const standardAtmosphere = pascal.withFactor(101325, 'atm');

export const pressureUnits = {
  pascal,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix('milli'),
  kilopondPerSquareCentimetre: forceUnits.kilopond.dividedBy(lengthUnits.metre.withPrefix('centi').raisedTo(2), 'kgf/(cm^2)') as Unit<PressureDimension>,
  torr: standardAtmosphere.withFactor(1 / 760, 'Torr'),
  poundPerSquareInch: forceUnits.pound.dividedBy(areaUnits.squareInch, 'lb/(in^2)') as Unit<PressureDimension>,
  inchOfMercury: pascal.withFactor(3386.389, 'inHg'),
};

export type PressureUnit = keyof typeof pressureUnits;

export const pressureUnitList: UnitList<PressureDimension, PressureUnit> = {
  dimension: {mass: 1, length: -1, time: -2},
  units: pressureUnits,
};

/**
 * Initiates a measure of pressure.
 * @param unit The unit of the pressure measure.
 * @param value The value of the pressure measure.
 * @returns The new Measure object.
 */
export const pressure = (unit: PressureUnit, value: number): Measure => new Measure(pressureUnits[unit], value);