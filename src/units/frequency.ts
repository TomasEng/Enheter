import {hertz} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {FrequencyDimension} from '../types/dimensions';

const units = {hertz};

export type FrequencyUnit = keyof typeof units;

export const frequencyUnits: UnitList<FrequencyDimension, FrequencyUnit> = {
  dimension: {time: -1},
  units,
};

/**
 * Initiates a measure of frequency.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const frequency = (
  unit: FrequencyUnit,
  value: number
): Measure => new Measure(units[unit], value);