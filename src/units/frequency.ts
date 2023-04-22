import {hertz} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {FrequencyDimension} from '../types/dimensions';

export const frequencyUnits = {hertz};

export type FrequencyUnit = keyof typeof frequencyUnits;

export const frequencyUnitList: UnitList<FrequencyDimension, FrequencyUnit> = {
  dimension: {time: -1},
  units: frequencyUnits,
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
): Measure => new Measure(frequencyUnits[unit], value);