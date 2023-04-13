import {second} from './basicUnits';

export const timeUnits = {
  day: second.withFactor(86400, 'd'),
  hour: second.withFactor(3600, 'h'),
  minute: second.withFactor(60, 'min'),
  second,
  week: second.withFactor(604800, 'week'),
};

export type TimeUnit = keyof typeof timeUnits;