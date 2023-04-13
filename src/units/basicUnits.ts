import {Unit} from '../Unit';

// These units are exported from this file in order to avoid circular dependency issues (i.e. between energy units and power units).

export const metre = new Unit('m', {length: 1});
export const kilogram = new Unit('kg', {mass: 1}, undefined, undefined, 'kilo');
export const second = new Unit('s', {time: 1});
export const ampere = new Unit('A', {current: 1});
export const kelvin = new Unit('K', {temperature: 1});
export const mole = new Unit('mol', {amountOfSubstance: 1});
export const candela = new Unit('cd', {luminousIntensity: 1});
export const inch = metre.withFactor(0.0254, 'in');
export const foot = inch.withFactor(12, 'ft');
export const yard = foot.withFactor(3, 'yd');
export const gram = kilogram.withPrefix(null);
export const pound = kilogram.withFactor(.45359237, 'lb');
export const metrePerSecond = metre.dividedBy(second, 'm/s');
export const metrePerSecondSquared = metrePerSecond.dividedBy(second, 'm/s²');
export const squareMetre = metre.squared();
export const cubicMetre = metre.cubed();
export const hertz = second.reciprocal('Hz');
export const kilogramPerCubicMetre = kilogram.dividedBy(cubicMetre, 'kg/m³');
export const newton = kilogram.multipliedWith(metrePerSecondSquared, 'N');
export const pascal = newton.dividedBy(squareMetre, 'Pa');
export const joule = newton.multipliedWith(metre, 'J');
export const watt = joule.dividedBy(second, 'W');
export const coulomb = ampere.multipliedWith(second, 'C');
export const elementaryCharge = coulomb.withFactor(1.602176634e-19, 'e');
export const volt = watt.dividedBy(ampere, 'V');
export const farad = coulomb.dividedBy(volt, 'F');
export const ohm = volt.dividedBy(ampere, 'Ω');
export const siemens = ohm.reciprocal('S');
export const ohmMetre = ohm.multipliedWith(metre, 'Ω·m');
export const siemensPerMetre = siemens.dividedBy(metre, 'S/m');
