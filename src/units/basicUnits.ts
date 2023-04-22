import {Unit} from '../Unit';
import {
  AccelerationDimension,
  AmountOfSubstanceDimension,
  AreaDimension,
  CapacitanceDimension,
  ChargeDimension,
  ConductanceDimension,
  ConductivityDimension,
  CurrentDimension,
  DensityDimension,
  EnergyDimension,
  ForceDimension,
  FrequencyDimension,
  InductanceDimension,
  LengthDimension,
  LuminousIntensityDimension,
  MagneticFluxDensityDimension,
  MagneticFluxDimension,
  MassDimension,
  PowerDimension,
  PressureDimension,
  ResistanceDimension,
  ResistivityDimension,
  TemperatureDimension,
  TimeDimension,
  VelocityDimension,
  VoltageDimension,
  VolumeDimension
} from '../types/dimensions';

// These units are exported from this file in order to avoid circular dependency issues (i.e. between energy units and power units).
export const metre = new Unit<LengthDimension>('m', {length: 1});
export const kilogram = new Unit<MassDimension>('kg', {mass: 1}, undefined, undefined, 'kilo');
export const second = new Unit<TimeDimension>('s', {time: 1});
export const ampere = new Unit<CurrentDimension>('A', {current: 1});
export const kelvin = new Unit<TemperatureDimension>('K', {temperature: 1});
export const mole = new Unit<AmountOfSubstanceDimension>('mol', {amountOfSubstance: 1});
export const candela = new Unit<LuminousIntensityDimension>('cd', {luminousIntensity: 1});
export const inch = metre.withFactor(0.0254, 'in');
export const foot = inch.withFactor(12, 'ft');
export const yard = foot.withFactor(3, 'yd');
export const gram = kilogram.withPrefix(null);
export const pound = kilogram.withFactor(.45359237, 'lb');
export const metrePerSecond = metre.dividedBy(second, 'm/s') as Unit<VelocityDimension>;
export const metrePerSecondSquared = metrePerSecond.dividedBy(second, 'm/s²') as Unit<AccelerationDimension>;
export const squareMetre = metre.squared() as Unit<AreaDimension>;
export const cubicMetre = metre.cubed() as Unit<VolumeDimension>;
export const hertz = second.reciprocal('Hz') as Unit<FrequencyDimension>;
export const kilogramPerCubicMetre = kilogram.dividedBy(cubicMetre, 'kg/m³') as Unit<DensityDimension>;
export const newton = kilogram.multipliedWith(metrePerSecondSquared, 'N') as Unit<ForceDimension>;
export const pascal = newton.dividedBy(squareMetre, 'Pa') as Unit<PressureDimension>;
export const joule = newton.multipliedWith(metre, 'J') as Unit<EnergyDimension>;
export const watt = joule.dividedBy(second, 'W') as Unit<PowerDimension>;
export const coulomb = ampere.multipliedWith(second, 'C') as Unit<ChargeDimension>;
export const elementaryCharge = coulomb.withFactor(1.602176634e-19, 'e');
export const volt = watt.dividedBy(ampere, 'V') as Unit<VoltageDimension>;
export const farad = coulomb.dividedBy(volt, 'F') as Unit<CapacitanceDimension>;
export const ohm = volt.dividedBy(ampere, 'Ω') as Unit<ResistanceDimension>;
export const siemens = ohm.reciprocal('S') as Unit<ConductanceDimension>;
export const ohmMetre = ohm.multipliedWith(metre, 'Ω·m') as Unit<ResistivityDimension>;
export const siemensPerMetre = siemens.dividedBy(metre, 'S/m') as Unit<ConductivityDimension>;
export const weber = volt.multipliedWith(second, 'Wb') as Unit<MagneticFluxDimension>;
export const tesla = weber.dividedBy(squareMetre, 'T') as Unit<MagneticFluxDensityDimension>;
export const henry = weber.dividedBy(ampere, 'H') as Unit<InductanceDimension>;