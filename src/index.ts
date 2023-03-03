import {Dimension} from "./Dimension";
import {Unit} from "./Unit";

export {Dimension, Unit};
export { Measure } from "./Measure";

const measures: {
  [key: string]: Dimension;
} = {
  time: { time: 1 },
  length: { length: 1 },
  mass: { mass: 1 },
  temperature: { temperature: 1 },
  current: { current: 1 },
  luminousIntensity: { luminousIntensity: 1 },
  amountOfSubstance: { amountOfSubstance: 1 },
  frequency: { time: -1 },
  velocity: { length: 1, time: -1 },
  acceleration: { length: 1, time: -2 },
  area: { length: 2 },
  volume: { length: 3 },
  density: { mass: 1, length: -3 },
  force: { mass: 1, length: 1, time: -2 },
  pressure: { mass: 1, length: -1, time: -2 },
  energy: { mass: 1, length: 2, time: -2 },
  power: { mass: 1, length: 2, time: -3 },
  charge: { current: 1, time: 1 },
  voltage: { mass: 1, length: 2, time: -3, current: -1 },
  capacitance: { mass: -1, length: -2, time: 4, current: 2 },
  resistance: { mass: 1, length: 2, time: -3, current: -2 },
}

const metre = new Unit('metre', measures.length);
const second = new Unit('second', measures.time);
const kilogram = new Unit('kilogram', measures.mass);
const kelvin = new Unit('kelvin', measures.temperature);
const ampere = new Unit('ampere', measures.current);
const candela = new Unit('candela', measures.luminousIntensity);
const mole = new Unit('mole', measures.amountOfSubstance);
const hertz = new Unit('hertz', measures.frequency);
const newton = new Unit('newton', measures.force);
const pascal = new Unit('pascal', measures.pressure);
const joule = new Unit('joule', measures.energy);
const watt = new Unit('watt', measures.power);
const coulomb = new Unit('coulomb', measures.charge);
const volt = new Unit('volt', measures.voltage);
const farad = new Unit('farad', measures.capacitance);
const ohm = new Unit('ohm', measures.resistance);
const celsius = new Unit('celsius', measures.temperature, (value: number) => value + 273.15, (value: number) => value - 273.15);
const fahrenheit = new Unit('fahrenheit', measures.temperature, (value: number) => (value + 459.67) * 5 / 9, (value: number) => value * 9 / 5 - 459.67);
const foot = new Unit('foot', measures.length, (value: number) => value * 0.3048, (value: number) => value / 0.3048);
const mile = new Unit('mile', measures.length, (value: number) => value * 1609.344, (value: number) => value / 1609.344);
const hour = new Unit('hour', measures.time, (value: number) => value * 3600, (value: number) => value / 3600);
const minute = new Unit('minute', measures.time, (value: number) => value * 60, (value: number) => value / 60);
const gram = new Unit('gram', measures.mass, (value: number) => value * 0.001, (value: number) => value / 0.001);
