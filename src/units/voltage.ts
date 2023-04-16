import {volt} from './basicUnits';
import {Measure} from '../Measure';

export const voltageUnits = {volt};

export type VoltageUnit = keyof typeof voltageUnits;

/**
 * Initiates a measure of voltage.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const voltage = (unit: VoltageUnit, value: number): Measure =>
  new Measure(voltageUnits[unit], value);