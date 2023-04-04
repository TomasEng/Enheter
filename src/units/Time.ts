import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {Measure} from "../Measure";
import {Prefix} from "../Prefix";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const timeDimension: Dimension = { time: 1 };
export const timeBase = new Unit("second", timeDimension);

export const timeUnits = {
  second: timeBase,
  minute: new Unit("minute", timeDimension, timeBase, BijectiveOperationChain.fromFactor(60)),
  hour: new Unit("hour", timeDimension, timeBase, BijectiveOperationChain.fromFactor(3600)),
  day: new Unit("day", timeDimension, timeBase, BijectiveOperationChain.fromFactor(86400)),
  week: new Unit("week", timeDimension, timeBase, BijectiveOperationChain.fromFactor(604800)),
}

export type TimeUnit = keyof typeof timeUnits;