import {kilopond, metre, pascal, poundForce, squareInch} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {PressureDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const bar = pascal.withFactor(100000, 'bar');
const standardAtmosphere = pascal.withFactor(101325, 'atm');

const units = {
  pascal,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix('milli'),
  kilopondPerSquareCentimetre: kilopond.dividedBy(metre.withPrefix('centi').raisedTo(2), 'kgf/(cm^2)') as Unit<PressureDimension>,
  torr: standardAtmosphere.withFactor(1 / 760, 'Torr'),
  poundPerSquareInch: poundForce.dividedBy(squareInch, 'lb/(in^2)') as Unit<PressureDimension>,
  inchOfMercury: pascal.withFactor(3386.389, 'inHg'),
};

export type PressureUnit = keyof typeof units;

export const pressureUnits: UnitList<PressureDimension, PressureUnit> = {
  dimension: {mass: 1, length: -1, time: -2},
  units,
};

/**
 * Initiates a measure of pressure.
 * @param unit The unit of the pressure measure.
 * @param value The value of the pressure measure.
 * @returns The new Measure object.
 */
export const pressure = (unit: PressureUnit, value: number): Measure => new Measure(units[unit], value);