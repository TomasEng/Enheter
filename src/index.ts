import {Dimension} from './Dimension';
import {Unit} from './Unit';

export {Dimension, Unit};
export { Measure } from './Measure';

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
};
