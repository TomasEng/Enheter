import {cubicMetre, foot, inch, yard} from './basicUnits';

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