import {Unit} from '../Unit';

export const timeBase = new Unit('s', { time: 1 });

export const timeUnits = {
  day: timeBase.withFactor(86400, 'd'),
  hour: timeBase.withFactor(3600, 'h'),
  minute: timeBase.withFactor(60, 'min'),
  second: timeBase,
  week: timeBase.withFactor(604800, 'week'),
};

export type TimeUnit = keyof typeof timeUnits;