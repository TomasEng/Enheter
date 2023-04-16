import {cubicMetre, foot, inch, yard} from './basicUnits';
import {Measure} from '../Measure';

const cubicInch = inch.cubed();

export const volumeUnits = {
  cubicFoot: foot.cubed(),
  cubicInch,
  cubicMetre,
  cubicYard: yard.cubed(),
  imperialGallon: cubicMetre.withFactor(0.00454609, 'imp gal'),
  litre: cubicMetre.withPrefix('deci').copy('L'),
  usGallon: cubicInch.withFactor(231, 'US gal'),
};

export type VolumeUnit = keyof typeof volumeUnits;

/**
 * Initiates a measure of volume.
 * @param unit The unit of the measure.
 * @param value The value of the measure.
 * @returns The new Measure object.
 */
export const volume = (unit: VolumeUnit, value: number): Measure =>
  new Measure(volumeUnits[unit], value);