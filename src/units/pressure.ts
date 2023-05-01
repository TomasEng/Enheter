import {kilopond, metre, pascal, poundForce, squareInch} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {PressureDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const bar = pascal.withFactor(100000, 'bar', 'bar');
const standardAtmosphere = pascal.withFactor(101325, 'atm', 'standardAtmosphere');

const units = {
  pascal,
  standardAtmosphere,
  bar,
  millibar: bar.withPrefix('milli', 'millibar'),
  kilopondPerSquareCentimetre: kilopond.dividedBy(metre.withPrefix('centi').raisedTo(2), 'kgf/cm²', 'kilopondPerSquareCentimetre') as Unit<PressureDimension>,
  torr: standardAtmosphere.withFactor(1 / 760, 'Torr', 'torr'),
  poundPerSquareInch: poundForce.dividedBy(squareInch, 'lb/in²', 'poundPerSquareInch') as Unit<PressureDimension>,
  inchOfMercury: pascal.withFactor(3386.389, 'inHg', 'inchOfMercury'),
};

export type PressureUnit = keyof typeof units;

export const pressureUnits: UnitList<PressureDimension, PressureUnit> = {
  dimensionName: 'pressure',
  dimension: {mass: 1, length: -1, time: -2},
  units,
};

/**
 * Initiates a measure of pressure.
 * @param unit The unit of the pressure measure.
 * @param value The value of the pressure measure.
 * @returns The new Measure object.
 */
export const pressure = (unit: PressureUnit, value: number): Measure<'pressure'> => new Measure<'pressure'>(units[unit], value);

/**
 * Gets a given unit of pressure.
 * @param key The key of the unit.
 * @returns The pressure unit.
 */
export const pressureUnit = (key: PressureUnit): Unit<PressureDimension> => units[key];