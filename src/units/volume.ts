import {lengthUnits} from './length';
import {cubicMetre} from './basicUnits';

export const volumeUnits = {
  cubicFoot: lengthUnits.foot.raisedTo(3, 'ft^3'),
  cubicInch: lengthUnits.inch.raisedTo(3, 'in^3'),
  cubicMetre,
  cubicYard: lengthUnits.yard.raisedTo(3, 'yd^3'),
  litre: cubicMetre.withFactor(0.001, 'L'),
};

export type VolumeUnit = keyof typeof volumeUnits;