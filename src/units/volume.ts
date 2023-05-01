import {cubicMetre, foot, inch, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {VolumeDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const cubicInch = inch.cubed(undefined, 'cubicInch') as Unit<VolumeDimension>;

const units = {
  cubicFoot: foot.cubed(undefined, 'cubicFoot') as Unit<VolumeDimension>,
  cubicInch,
  cubicMetre,
  cubicYard: yard.cubed(undefined, 'cubicYard') as Unit<VolumeDimension>,
  imperialGallon: cubicMetre.withFactor(0.00454609, 'imp gal', 'imperialGallon'),
  litre: cubicMetre.withPrefix('deci').copy('L', 'litre'),
  usGallon: cubicInch.withFactor(231, 'US gal', 'usGallon'),
};

export type VolumeUnit = keyof typeof units;

export const volumeUnits: UnitList<VolumeDimension, VolumeUnit> = {
  dimensionName: 'volume',
  dimension: {length: 3},
  units,
};

/**
 * Initiates a measure of volume.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const volume = (unit: VolumeUnit, value: number): Measure<'volume'> =>
  new Measure<'volume'>(units[unit], value);

/**
 * Gets a given unit of volume.
 * @param key The key of the unit.
 * @returns The volume unit.
 */
export const volumeUnit = (key: VolumeUnit): Unit<VolumeDimension> => units[key];