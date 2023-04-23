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

// SI base units:
export const metre = new Unit<LengthDimension>('m', {length: 1});
export const kilogram = new Unit<MassDimension>('kg', {mass: 1}, undefined, undefined, 'kilo');
export const second = new Unit<TimeDimension>('s', {time: 1});
export const ampere = new Unit<CurrentDimension>('A', {current: 1});
export const kelvin = new Unit<TemperatureDimension>('K', {temperature: 1});
export const mole = new Unit<AmountOfSubstanceDimension>('mol', {amountOfSubstance: 1});
export const candela = new Unit<LuminousIntensityDimension>('cd', {luminousIntensity: 1});

// Length:
export const inch = metre.withFactor(0.0254, 'in');
export const foot = inch.withFactor(12, 'ft');
export const yard = foot.withFactor(3, 'yd');
export const fathom = yard.withFactor(2, 'fathom');
export const chain = fathom.withFactor(11, 'chain');
export const rod = chain.withFactor(1 / 4, 'rod');
export const link = chain.withFactor(1 / 100, 'link');
export const furlong = chain.withFactor(10, 'furlong');
export const statuteMile = furlong.withFactor(8, 'mi');
export const nauticalMile = metre.withFactor(1852, 'NM');

// Mass:
export const gram = kilogram.withPrefix(null);
export const poundMass = kilogram.withFactor(.45359237, 'lb');

// Time:
export const minute = second.withFactor(60, 'min');
export const hour = minute.withFactor(60, 'h');

// Velocity:
export const metrePerSecond = metre.dividedBy(second, 'm/s') as Unit<VelocityDimension>;
export const metrePerSecondSquared = metrePerSecond.dividedBy(second, 'm/s²') as Unit<AccelerationDimension>;
export const footPerSecond = foot.dividedBy(second, 'ft/s') as Unit<VelocityDimension>;

// Area:
export const squareMetre = metre.squared() as Unit<AreaDimension>;
export const squareInch = inch.squared() as Unit<AreaDimension>;

// Volume:
export const cubicMetre = metre.cubed() as Unit<VolumeDimension>;

// Acceleration:
export const standardGravity = metrePerSecondSquared.withFactor(9.80665, 'g₀');
export const footPerSecondSquared = footPerSecond.dividedBy(second, 'ft/s²') as Unit<AccelerationDimension>;

// Force:
export const newton = kilogram.multipliedWith(metrePerSecondSquared, 'N') as Unit<ForceDimension>;
export const pond = kilogram.multipliedWith(standardGravity, 'pond') as Unit<ForceDimension>;
export const kilopond = pond.withPrefix('kilo');
export const poundForce = poundMass.multipliedWith(standardGravity, 'lbf') as Unit<ForceDimension>;

// Other:
export const hertz = second.reciprocal('Hz') as Unit<FrequencyDimension>;
export const kilogramPerCubicMetre = kilogram.dividedBy(cubicMetre, 'kg/m³') as Unit<DensityDimension>;
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