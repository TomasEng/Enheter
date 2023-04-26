import {weber} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {MagneticFluxDimension} from '../types/dimensions';

const units = {
  maxwell: weber.withFactor(1e-8, 'Mx', 'maxwell'),
  weber,
};

export type MagneticFluxUnit = keyof typeof units;

export const magneticFluxUnits: UnitList<MagneticFluxDimension, MagneticFluxUnit> = {
  dimension: {mass: 1, length: 2, time: -2, current: -1},
  units,
};

/**
 * Initiates a measure of magnetic flux.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const magneticFlux = (
  unit: MagneticFluxUnit,
  value: number
): Measure => new Measure(units[unit], value);