import {cubicMetre, foot, inch, yard} from './basicUnits';
import {Measure} from '../Measure';
import {UnitList} from '../types/UnitList';
import {VolumeDimension} from '../types/dimensions';
import {Unit} from '../Unit';

const cubicInch = inch.cubed() as Unit<VolumeDimension>;

export const volumeUnits = {
  cubicFoot: foot.cubed() as Unit<VolumeDimension>,
  cubicInch,
  cubicMetre,
  cubicYard: yard.cubed() as Unit<VolumeDimension>,
  imperialGallon: cubicMetre.withFactor(0.00454609, 'imp gal'),
  litre: cubicMetre.withPrefix('deci').copy('L'),
  usGallon: cubicInch.withFactor(231, 'US gal'),
};

export type VolumeUnit = keyof typeof volumeUnits;

export const volumeUnitList: UnitList<VolumeDimension, VolumeUnit> = {
  dimension: {length: 3},
  units: volumeUnits,
};

/**
 * Initiates a measure of volume.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const volume = (unit: VolumeUnit, value: number): Measure =>
  new Measure(volumeUnits[unit], value);