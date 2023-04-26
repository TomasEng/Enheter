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
export const metre = new Unit<LengthDimension>('m', {length: 1}, undefined, undefined, undefined, undefined, 'metre');
export const kilogram = new Unit<MassDimension>('kg', {mass: 1}, undefined, undefined, 'kilo', undefined, 'kilogram');
export const second = new Unit<TimeDimension>('s', {time: 1}, undefined, undefined, undefined, undefined, 'second');
export const ampere = new Unit<CurrentDimension>('A', {current: 1}, undefined, undefined, undefined, undefined, 'ampere');
export const kelvin = new Unit<TemperatureDimension>('K', {temperature: 1}, undefined, undefined, undefined, undefined, 'kelvin');
export const mole = new Unit<AmountOfSubstanceDimension>('mol', {amountOfSubstance: 1}, undefined, undefined, undefined, undefined, 'mole');
export const candela = new Unit<LuminousIntensityDimension>('cd', {luminousIntensity: 1}, undefined, undefined, undefined, undefined, 'candela');

// Length:
export const inch = metre.withFactor(0.0254, 'in', 'inch');
export const foot = inch.withFactor(12, 'ft', 'foot');
export const yard = foot.withFactor(3, 'yd', 'yard');
export const fathom = yard.withFactor(2, 'fathom', 'fathom');
export const chain = fathom.withFactor(11, 'chain', 'chain');
export const rod = chain.withFactor(1 / 4, 'rod', 'rod');
export const link = chain.withFactor(1 / 100, 'link', 'link');
export const furlong = chain.withFactor(10, 'furlong', 'furlong');
export const statuteMile = furlong.withFactor(8, 'mi', 'statuteMile');
export const nauticalMile = metre.withFactor(1852, 'NM', 'nauticalMile');

// Mass:
export const gram = kilogram.withPrefix(null, 'gram');
export const poundMass = kilogram.withFactor(.45359237, 'lb', 'pound');

// Time:
export const minute = second.withFactor(60, 'min', 'minute');
export const hour = minute.withFactor(60, 'h', 'hour');

// Velocity:
export const metrePerSecond = metre.dividedBy(second, 'm/s', 'metrePerSecond') as Unit<VelocityDimension>;
export const metrePerSecondSquared = metrePerSecond.dividedBy(second, 'm/s²', 'metrePerSecondSquared') as Unit<AccelerationDimension>;
export const footPerSecond = foot.dividedBy(second, 'ft/s', 'footPerSecond') as Unit<VelocityDimension>;

// Area:
export const squareMetre = metre.squared(undefined, 'squareMetre') as Unit<AreaDimension>;
export const squareInch = inch.squared(undefined, 'squareInch') as Unit<AreaDimension>;

// Volume:
export const cubicMetre = metre.cubed(undefined, 'cubicMetre') as Unit<VolumeDimension>;

// Acceleration:
export const standardGravity = metrePerSecondSquared.withFactor(9.80665, 'g₀', 'standardGravity');
export const footPerSecondSquared = footPerSecond.dividedBy(second, 'ft/s²', 'footPerSecondSquared') as Unit<AccelerationDimension>;

// Force:
export const newton = kilogram.multipliedWith(metrePerSecondSquared, 'N', 'newton') as Unit<ForceDimension>;
export const pond = kilogram.multipliedWith(standardGravity, 'pond', 'pond') as Unit<ForceDimension>;
export const kilopond = pond.withPrefix('kilo', 'kilopond');
export const poundForce = poundMass.multipliedWith(standardGravity, 'lbf', 'pound') as Unit<ForceDimension>;

// Other:
export const hertz = second.reciprocal('Hz', 'hertz') as Unit<FrequencyDimension>;
export const kilogramPerCubicMetre = kilogram.dividedBy(cubicMetre, 'kg/m³', 'kilogramPerCubicMetre') as Unit<DensityDimension>;
export const pascal = newton.dividedBy(squareMetre, 'Pa', 'pascal') as Unit<PressureDimension>;
export const joule = newton.multipliedWith(metre, 'J', 'joule') as Unit<EnergyDimension>;
export const watt = joule.dividedBy(second, 'W', 'watt') as Unit<PowerDimension>;
export const coulomb = ampere.multipliedWith(second, 'C', 'coulomb') as Unit<ChargeDimension>;
export const elementaryCharge = coulomb.withFactor(1.602176634e-19, 'e', 'elementaryCharge');
export const volt = watt.dividedBy(ampere, 'V', 'volt') as Unit<VoltageDimension>;
export const farad = coulomb.dividedBy(volt, 'F', 'farad') as Unit<CapacitanceDimension>;
export const ohm = volt.dividedBy(ampere, 'Ω', 'ohm') as Unit<ResistanceDimension>;
export const siemens = ohm.reciprocal('S', 'siemens') as Unit<ConductanceDimension>;
export const ohmMetre = ohm.multipliedWith(metre, 'Ω·m', 'ohmMetre') as Unit<ResistivityDimension>;
export const siemensPerMetre = siemens.dividedBy(metre, 'S/m', 'siemensPerMetre') as Unit<ConductivityDimension>;
export const weber = volt.multipliedWith(second, 'Wb', 'weber') as Unit<MagneticFluxDimension>;
export const tesla = weber.dividedBy(squareMetre, 'T', 'tesla') as Unit<MagneticFluxDensityDimension>;
export const henry = weber.dividedBy(ampere, 'H', 'henry') as Unit<InductanceDimension>;