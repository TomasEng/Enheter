import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {Measure} from "../Measure";
import {Prefix} from "../Prefix";

export const timeDimension: Dimension = { time: 1 };

export const timeUnits = {
  second: new Unit("second", timeDimension),
  minute: new Unit("minute", timeDimension, (v: number) => v * 60, (v: number) => v / 60),
  hour: new Unit("hour", timeDimension, (v: number) => v * 3600, (v: number) => v / 3600),
  day: new Unit("day", timeDimension, (v: number) => v * 86400, (v: number) => v / 86400),
  week: new Unit("week", timeDimension, (v: number) => v * 604800, (v: number) => v / 604800),
}

export type TimeUnit = keyof typeof timeUnits;