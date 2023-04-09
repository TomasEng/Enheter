import {Dimension} from "../Dimension";
import {Unit} from "../Unit";

export const timeDimension: Dimension = { time: 1 };
export const timeBase = new Unit("second", timeDimension);

export const timeUnits = {
  day: timeBase.withFactor(86400, "day"),
  hour: timeBase.withFactor(3600, "hour"),
  minute: timeBase.withFactor(60, "minute"),
  second: timeBase,
  week: timeBase.withFactor(604800, "week"),
}

export type TimeUnit = keyof typeof timeUnits;